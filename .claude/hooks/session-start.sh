#!/bin/bash
# Prepares the Remotion project in video/ for Claude Code cloud sessions.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR/video"
npm install --no-audit --no-fund --loglevel=error

# Remotion's own browser download (remotion.media) is blocked in cloud
# sessions, so render with the preinstalled Chromium headless shell.
shell=$(ls -d /opt/pw-browsers/chromium_headless_shell-*/chrome-linux/headless_shell 2>/dev/null | head -n 1 || true)
if [ -n "$shell" ] && [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export REMOTION_BROWSER_EXECUTABLE=\"$shell\"" >> "$CLAUDE_ENV_FILE"
fi
