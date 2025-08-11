# ProView — A Professional Response Framework

**ProView** is a structured framework for improving professional content with clarity, accuracy, and insight.
It defines two modes (Fact Mode, Insight Mode), labeled edits (FACT EDIT, LANGUAGE EDIT, INFERENCE), and a clean feedback structure (Core Recommendations, Optional Enhancements).
Works across industries with an industry prompt on activation. Supports persistent install (all chats), chat-only usage, and **ProView Lite** when the platform can’t store triggers.

## Modes
- **Fact Mode** — Fact-only edits supported by provided content or industry standards. No speculative additions or meaning changes.
- **Insight Mode** — Thoughtful, high-value suggestions and logical inferences to improve clarity, impact, or alignment with goals (clearly labeled as **INFERENCE**).

> **Note:** In ProView, *Fact Mode* is an editorial concept, not the OS/AI fact mode.”

## Install / Upgrade
See **INSTALLER.md** for the full flow (version checks, persistence capability, profile install, first-use banner).

## Files
- `proview.json` — Canonical machine-readable rules (v1.0).
- `rules_markdown.md` — Human-readable rules (same content as in `proview.json`).
- `INSTALLER.md` — Copy/paste installer/upgrade instructions.
- `CHANGELOG.md` — Version history.
- `assets/` — Infographic + first-use banner.

## Remote Status, i18n, Themes, Profiles (v1.0-ready, optional)

- **Remote status / kill switch**: `status.json` lets you disable, require a minimum version, or post a deprecation notice—no client update needed.
- **Internationalization**: Localized strings live under `/locales`. Default is `en-US`; add translations and list them in `locales/locales.json`.
- **Themes**: Override banner colors/typography via `/themes/default.json` (selected from `themes/themes.json`).
- **Profiles**: Preconfigure context under `/profiles/profiles.json` (e.g., enterprise policy vs. general).
- **Hash verification**: `hashes.json` can warn/abort if core files are tampered with.
- **Offline fallback**: Key files can be cached if GitHub is unavailable.
- **Context-aware switching**: When enabled, ProView favors Fact Mode for highly factual content and suggests Insight Mode for conceptual/strategy drafts.
- **Changelog prompts**: If `changelog.json` advertises a newer version, the installer can show highlights before upgrading.


## License / Attribution
ProView — A Professional Response Framework © Matthew J. Watson. You may reference or implement with attribution.
