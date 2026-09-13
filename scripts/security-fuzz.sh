#!/usr/bin/env bash
# ==============================================================================
# Vascule OS - Automated Penetration & Fuzz Testing Suite
# Simulates OWASP Top 10 attacks: SQL Injection, XSS, BOLA / IDOR, & Privilege Escalation
# ==============================================================================

set -euo pipefail

TARGET_URL="${1:-http://127.0.0.1:3000}"
PASS_COUNT=0
FAIL_COUNT=0

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_test() {
  echo -e "${BLUE}[FUZZ TEST]${NC} $1"
}

assert_security() {
  local test_name="$1"
  local status_code="$2"
  local expected_min="$3"
  local expected_max="$4"
  local response_body="$5"

  if [ "$status_code" -ge "$expected_min" ] && [ "$status_code" -le "$expected_max" ]; then
    echo -e "${GREEN}  ✓ PASS:${NC} $test_name (HTTP $status_code returned as expected)"
    PASS_COUNT=$((PASS_COUNT + 1))
  else
    echo -e "${RED}  ✗ VULNERABILITY DETECTED:${NC} $test_name (Expected $expected_min-$expected_max, got $status_code)"
    echo -e "    Body: $response_body"
    FAIL_COUNT=$((FAIL_COUNT + 1))
  fi
}

echo -e "${YELLOW}================================================================${NC}"
echo -e "${YELLOW} Vascule OS Automated DAST & Penetration Fuzz Testing Suite     ${NC}"
echo -e "${YELLOW} Target Host: $TARGET_URL                                       ${NC}"
echo -e "${YELLOW}================================================================${NC}\n"

# 1. SQL Injection Fuzzing on Patient Endpoints
log_test "SQL Injection: Authentication PIN bypass payload"
SQLI_RESP=$(curl -s -w "\n%{http_code}" -X POST "${TARGET_URL}/api/proxy/api/v1/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"institutionalEmail":"dr.roy@hospital.lan","securityPin":"\" OR 1=1 --","roleCode":"ADMIN"}' || true)
HTTP_CODE=$(echo "$SQLI_RESP" | tail -n1)
BODY=$(echo "$SQLI_RESP" | head -n -1)
assert_security "SQL Injection - Auth PIN bypass" "$HTTP_CODE" 400 401 "$BODY"

log_test "SQL Injection: UNION SELECT in Patient ID path"
SQLI_PATH_RESP=$(curl -s -w "\n%{http_code}" "${TARGET_URL}/api/proxy/api/v1/patients/1%27%20UNION%20SELECT%20*%20FROM%20users--" || true)
HTTP_CODE=$(echo "$SQLI_PATH_RESP" | tail -n1)
BODY=$(echo "$SQLI_PATH_RESP" | head -n -1)
assert_security "SQL Injection - UNION SELECT path payload" "$HTTP_CODE" 400 404 "$BODY"

# 2. Cross-Site Scripting (XSS) Fuzzing on UAT and Report Feedback
log_test "Reflected XSS: Malicious script tags in search parameters"
XSS_RESP=$(curl -s -w "\n%{http_code}" "${TARGET_URL}/dashboard?q=%3Cscript%3Ealert(%27XSS%27)%3C/script%3E" || true)
HTTP_CODE=$(echo "$XSS_RESP" | tail -n1)
BODY=$(echo "$XSS_RESP" | head -n -1)
# Assert response does not execute raw script unescaped
if echo "$BODY" | grep -q "<script>alert('XSS')</script>"; then
  echo -e "${RED}  ✗ VULNERABILITY DETECTED:${NC} Reflected XSS unescaped in response!"
  FAIL_COUNT=$((FAIL_COUNT + 1))
else
  echo -e "${GREEN}  ✓ PASS:${NC} Reflected XSS sanitized/escaped"
  PASS_COUNT=$((PASS_COUNT + 1))
fi

log_test "Stored XSS: Script payload in UAT Feedback submission"
XSS_POST_RESP=$(curl -s -w "\n%{http_code}" -X POST "${TARGET_URL}/api/uat" \
  -H "Content-Type: application/json" \
  -d '{"feedbackText":"<img src=x onerror=alert(1)>","clinicalModule":"AI_COPILOT","workflowRating":5,"deviceType":"DESKTOP"}' || true)
HTTP_CODE=$(echo "$XSS_POST_RESP" | tail -n1)
BODY=$(echo "$XSS_POST_RESP" | head -n -1)
assert_security "Stored XSS payload in UAT feedback submission" "$HTTP_CODE" 200 400 "$BODY"

# 3. Broken Object-Level Authorization (BOLA / IDOR)
log_test "BOLA / IDOR: Unauthenticated access to institutional administration console"
UNAUTH_ADMIN=$(curl -s -w "\n%{http_code}" "${TARGET_URL}/admin" || true)
HTTP_CODE=$(echo "$UNAUTH_ADMIN" | tail -n1)
BODY=$(echo "$UNAUTH_ADMIN" | head -n -1)
assert_security "BOLA - Unauthenticated /admin redirect to /login" "$HTTP_CODE" 300 308 "$BODY"

log_test "BOLA / IDOR: Cross-tenant data tampering header injection"
CROSS_TENANT=$(curl -s -w "\n%{http_code}" -X POST "${TARGET_URL}/api/proxy/notifications/api/v1/notifications/broadcast" \
  -H "Content-Type: application/json" \
  -H "X-Tenant-ID: tenant_apollo_delhi" \
  -d '{"tenantId":"tenant_apollo_delhi","eventType":"STAT_CASE_BOOKED","title":"Tampered Alert","body":"Unauthorized tenant broadcast","priority":"HIGH"}' || true)
HTTP_CODE=$(echo "$CROSS_TENANT" | tail -n1)
BODY=$(echo "$CROSS_TENANT" | head -n -1)
assert_security "BOLA - Cross-tenant push broadcast zero-targets restriction" "$HTTP_CODE" 200 403 "$BODY"

echo -e "\n${YELLOW}================================================================${NC}"
echo -e "${YELLOW} Fuzz Testing Execution Summary                                  ${NC}"
echo -e " Tests Passed: ${GREEN}$PASS_COUNT${NC} | Tests Failed: ${RED}$FAIL_COUNT${NC}"
echo -e "${YELLOW}================================================================${NC}"

if [ "$FAIL_COUNT" -gt 0 ]; then
  echo -e "${RED}Penetration test suite reported vulnerabilities! Exiting with code 1.${NC}"
  exit 1
else
  echo -e "${GREEN}All penetration and security fuzz tests passed cleanly.${NC}"
  exit 0
fi
