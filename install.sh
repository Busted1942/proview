#!/usr/bin/env bash
set -euo pipefail

echo "🚀 ProView v1.0 installer"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

# Basic fetch check
if [[ ! -f "proview.json" ]]; then
  echo "❌ proview.json not found. Are you in the repo root?"
  exit 1
fi

# Show version
VERSION=$(grep -oE '"version"\s*:\s*"[^"]+' proview.json | sed 's/.*"//')
echo "ℹ️  Found ProView version: $VERSION"

# Show next steps (the logic is executed by the AI per your flow)
echo "📄 See INSTALLER.md for the interactive steps:"
echo "   - Remote status check"
echo "   - Ask industry"
echo "   - Persistence capability test (install to profile / all chats / on demand / Lite)"
echo "   - i18n/theme/profile"
echo "   - First-use banner"
echo "   - Confirmation"

echo "✅ ProView repo is ready. If you're in an AI/agent environment, run the installer flow now."
