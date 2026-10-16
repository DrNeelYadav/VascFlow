"""
Named-user identity for the SMS Jaipur IR board.

The board is used by 6 people at SMS Jaipur: 2 DM residents and 4 faculty.
That is small and closed, so there is no need for accounts, passwords or
registration -- a hardcoded allowlist of chat IDs is the whole auth model.

What it does add is attribution. With six named clinicians pulling patient
imaging, a forwardable screenshot should still be traceable to whoever pulled
it, so every send is appended to a JSONL audit log with the name, role and
IR number.

Files
  users.json        the allowlist (this is config, not a secret)
  _send_audit.jsonl append-only record of every delivery

Environment
  TELEGRAM_CHAT_IDS in .env still works and is treated as "known, unnamed",
  so an existing setup keeps running; users.json simply adds names.
"""

from __future__ import annotations

import json
import os
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
USERS_JSON = HERE / "users.json"
AUDIT = HERE / "_send_audit.jsonl"

UNKNOWN = {"id": None, "name": "unlisted user", "role": "?"}


def load_users() -> dict[int, dict]:
    """Allowlist keyed by chat ID.

    users.json format:
        {"589115008": {"name": "Dr Neel Yadav", "role": "faculty"},
         "123456789":  {"name": "Dr A. Resident", "role": "resident"}}
    """
    users: dict[int, dict] = {}
    if USERS_JSON.exists():
        try:
            for k, v in json.loads(USERS_JSON.read_text(encoding="utf8")).items():
                users[int(k)] = {
                    "id": int(k),
                    "name": v.get("name", "unnamed"),
                    "role": v.get("role", "?"),
                }
        except Exception as exc:
            print(f"users.json unreadable ({type(exc).__name__}); "
                  f"falling back to .env chat IDs")
    return users


def allowed_ids(env: dict | None = None) -> list[str]:
    """Every chat permitted to query -- private chats and groups alike.

    Group chat IDs are negative (-100xxxxxxxxxx) and are allowed exactly the
    same way as a person's chat ID, so no special-casing is needed here.
    """
    env = env or {}
    ids = {str(u["id"]) for u in load_users().values()}
    ids |= {x.strip() for x in env.get("TELEGRAM_CHAT_IDS", "").split(",")
            if x.strip()}
    return sorted(ids)


def add_group(group_id: str | int, title: str = "") -> str:
    """Allowlist a group. Telegram group IDs look like -1001234567890.

    Call this once the group has been created and the bot added, because that
    is the only way to discover its numeric ID.
    """
    gid = str(group_id).strip()
    if not gid.lstrip("-").isdigit():
        return f"'{group_id}' is not a numeric chat ID"
    users = {}
    if USERS_JSON.exists():
        try:
            users = json.loads(USERS_JSON.read_text(encoding="utf8"))
        except Exception:
            users = {}
    users[gid] = {"name": title or f"Group {gid}", "role": "group"}
    USERS_JSON.write_text(json.dumps(users, indent=2), encoding="utf8")
    return f"added {gid} ({users[gid]['name']}) -- {len(users)} chats allowed"


def identify(chat_id, users: dict[int, dict] | None = None) -> dict:
    users = users if users is not None else load_users()
    return users.get(int(chat_id), dict(UNKNOWN, id=chat_id))


def roster() -> str:
    users = load_users()
    if not users:
        return "No users.json yet -- add the 6 SMS Jaipur clinicians."
    lines = []
    for u in sorted(users.values(), key=lambda x: (x["role"] != "faculty", x["name"])):
        lines.append(f"  {u['name']:<28} {u['role']:<10} {u['id']}")
    return "\n".join(lines)


def log_send(chat_id, ir: int | None, videos: int, stills: int,
             note: str = "") -> None:
    """Append one delivery to the audit log.

    Deliberately append-only and never rewritten: if a screenshot of this
    board is forwarded, the log still says who pulled the case.
    """
    u = identify(chat_id)
    rec = {
        "ts": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "chat_id": chat_id,
        "who": u["name"],
        "role": u["role"],
        "ir_number": ir,
        "videos": videos,
        "stills": stills,
        "note": note,
    }
    with AUDIT.open("a", encoding="utf8") as fh:
        fh.write(json.dumps(rec) + "\n")


def recent(n: int = 15) -> str:
    if not AUDIT.exists():
        return "No deliveries logged yet."
    lines = AUDIT.read_text(encoding="utf8").splitlines()[-n:]
    out = []
    for line in lines:
        try:
            r = json.loads(line)
        except Exception:
            continue
        out.append(f"  {r['ts']}  {r['who']:<24} {r['role']:<9} "
                   f"IR {r['ir_number']}  {r['videos']}v/{r['stills']}s")
    return "\n".join(out) or "No deliveries logged yet."


if __name__ == "__main__":
    import sys
    print("Roster:\n" + roster())
    print(f"\nAllowed chat IDs: {allowed_ids()}")
    if "--audit" in sys.argv:
        print("\nRecent deliveries:\n" + recent())