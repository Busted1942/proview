# ProView Suite Runner (v0.2)

This runner lets you execute a **Comprehensive Test Suite** against your ProView Installer/Runtime.
It supports most fields from your suite and degrades gracefully for the rest.

## Supports
- `prestate` (industry, role, trusted_domains) → sent as context
- `mockweb` (allow_vendor_fallback + responses) → provided as *simulated results*
- Assertions:
  - `contains`, `not_contains`, `regex`
  - `footer.must_include`, `footer.must_not_include` (mapped to contains/not_contains)
  - Basic `escalation.required` (checks for 'Next step' or 'escalation')
  - Basic `struggle_detection_triggered` (checks for 'options', 'clarify', 'best-effort')
- Modes: `Standard`, `Fact`, `Insight` (hinted to the model)

## Usage
```bash
npm i
cp .env.example .env
# Add your OPENAI_API_KEY, optionally set INSTALLER_PATH
node runner.js
```

Put your suite in `tests/comprehensive.yaml` (already generated from the content you pasted).
You can edit or add more suites in `tests/`.

## Notes
- This is LLM-in-the-loop testing. Keep expectations robust (use regex/phrases you control).
- For exact citation counts or strict retrieval order, assertions are approximate.
- You can split large suites to save tokens or run subsets.
