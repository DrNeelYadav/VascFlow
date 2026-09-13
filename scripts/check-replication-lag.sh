#!/usr/bin/env bash
# ==============================================================================
# Vascule OS - PostgreSQL Streaming Replication Health & Lag Probe Script
# Verifies synchronous and asynchronous replica lag against SLA thresholds.
# SLA: Byte Lag <= 10MB (10485760 bytes), Replay Duration Lag <= 5.0 seconds.
# ==============================================================================

set -euo pipefail

# Configuration Defaults (Override via environment variables)
PGHOST="${PGHOST:-vascule-pg-rw.default.svc.cluster.local}"
PGPORT="${PGPORT:-5432}"
PGUSER="${PGUSER:-vascule_admin}"
PGDATABASE="${PGDATABASE:-vascule_os}"
MAX_ALLOWED_LAG_BYTES="${MAX_ALLOWED_LAG_BYTES:-10485760}" # 10 MB
MAX_ALLOWED_LAG_SECONDS="${MAX_ALLOWED_LAG_SECONDS:-5.0}"
PROMETHEUS_MODE="${1:-}"

# Verify psql binary availability
if ! command -v psql >/dev/null 2>&1; then
    echo "ERROR: psql command not found in PATH." >&2
    exit 2
fi

# SQL query against pg_stat_replication
SQL_QUERY="
SELECT
    COALESCE(application_name, 'unknown') AS client_app,
    COALESCE(client_addr::text, '127.0.0.1') AS client_ip,
    state,
    sync_state,
    COALESCE(pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn), 0) AS byte_lag,
    COALESCE(EXTRACT(EPOCH FROM replay_lag), 0.0) AS replay_lag_seconds
FROM pg_stat_replication;
"

# Execute query with raw unaligned output
QUERY_OUTPUT=$(psql -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" -t -A -F"|" -c "$SQL_QUERY" 2>&1) || {
    echo "CRITICAL: Unable to connect to primary PostgreSQL at $PGHOST:$PGPORT. Error: $QUERY_OUTPUT" >&2
    exit 2
}

if [ -z "$QUERY_OUTPUT" ]; then
    echo "CRITICAL: No active streaming replication standbys found in pg_stat_replication!" >&2
    exit 1
fi

TOTAL_REPLICAS=0
SYNC_REPLICAS=0
LAG_EXCEEDED=0

if [ "$PROMETHEUS_MODE" = "--prometheus" ]; then
    echo "# HELP vascule_pg_replication_lag_bytes Replication lag in bytes from primary"
    echo "# TYPE vascule_pg_replication_lag_bytes gauge"
    echo "# HELP vascule_pg_replication_lag_seconds Replication replay lag in seconds"
    echo "# TYPE vascule_pg_replication_lag_seconds gauge"
fi

echo "--- PostgreSQL Streaming Replication Status ($PGHOST:$PGPORT) ---"
printf "%-20s %-15s %-10s %-10s %-15s %-15s\n" "APPLICATION" "IP ADDRESS" "STATE" "SYNC" "BYTE LAG" "TIME LAG"

while IFS="|" read -r client_app client_ip state sync_state byte_lag replay_lag_sec; do
    [ -z "$client_app" ] && continue
    TOTAL_REPLICAS=$((TOTAL_REPLICAS + 1))
    
    if [ "$sync_state" = "sync" ] || [ "$sync_state" = "quorum" ]; then
        SYNC_REPLICAS=$((SYNC_REPLICAS + 1))
    fi

    printf "%-20s %-15s %-10s %-10s %-15s %-15s\n" \
        "$client_app" "$client_ip" "$state" "$sync_state" "${byte_lag} B" "${replay_lag_sec}s"

    if [ "$PROMETHEUS_MODE" = "--prometheus" ]; then
        echo "vascule_pg_replication_lag_bytes{app=\"$client_app\",client=\"$client_ip\"} $byte_lag"
        echo "vascule_pg_replication_lag_seconds{app=\"$client_app\",client=\"$client_ip\"} $replay_lag_sec"
    fi

    # Check lag thresholds
    if [ "$byte_lag" -gt "$MAX_ALLOWED_LAG_BYTES" ]; then
        echo "WARNING: Replica $client_app ($client_ip) exceeded max allowed byte lag: $byte_lag > $MAX_ALLOWED_LAG_BYTES" >&2
        LAG_EXCEEDED=1
    fi

    LAG_FLOAT_CHECK=$(echo "$replay_lag_sec > $MAX_ALLOWED_LAG_SECONDS" | awk '{if ($1 > $3) print 1; else print 0}')
    if [ "$LAG_FLOAT_CHECK" -eq 1 ]; then
        echo "WARNING: Replica $client_app ($client_ip) exceeded max allowed time lag: ${replay_lag_sec}s > ${MAX_ALLOWED_LAG_SECONDS}s" >&2
        LAG_EXCEEDED=1
    fi
done <<< "$QUERY_OUTPUT"

echo "-----------------------------------------------------------------"
echo "Summary: $TOTAL_REPLICAS standbys connected ($SYNC_REPLICAS synchronous)."

# Verification criteria:
# 1. At least 1 synchronous standby must be active
# 2. No standby may exceed configured lag limits
if [ "$SYNC_REPLICAS" -lt 1 ]; then
    echo "CRITICAL: Zero synchronous standbys connected! High-availability SLA breached." >&2
    exit 1
fi

if [ "$LAG_EXCEEDED" -eq 1 ]; then
    echo "CRITICAL: Replication lag threshold breached on one or more standbys!" >&2
    exit 1
fi

echo "HEALTHY: All replication replicas are within SLA tolerances (RPO < 5 mins)."
exit 0
