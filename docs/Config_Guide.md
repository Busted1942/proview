# ProView Configuration Guide

This guide documents every configurable switch in `proview.json` and the allowed values.

## Banner
- Path: `/banner/enabled` — **boolean**
  - `true` = show first-use banner; `false` = never show.
- Path: `/banner/show_once_per_chat` — **boolean**
  - `true` = one banner per chat; `false` = show whenever ProView activates.
- Path: `/banner/text_templates/default` — **string (template)**
  - Accepted tokens: `{{scope}}` → “All Chats”, “This chat only”, “Not persistent”.

## Remote status / Kill switch
- Path: `/remote/enabled` — **boolean**
- Path: `/remote/status_url` — **URL**
- Path: `/remote/on_error` — **enum**: `proceed` | `warn` | `abort`

### `status.json` behavior
- `active` (bool): `false` disables ProView.
- `kill` (bool): `true` hard-stops regardless of version.
- `min_version` (semver): require at least this version.
- `force_update` (bool): prompt and require upgrade (or Lite fallback).
- `message`, `deprecation_notice`: strings displayed to user.

## Internationalization (i18n)
- Path: `/i18n/default_locale` — **string**, e.g. `en-US`
- Path: `/i18n/locales_index_url` — **URL** to `locales/locales.json`
- Path: `/i18n/strings_url_template` — **URL template** with `{{locale}}`

## Auto-update (config only)
- Path: `/auto_update/enabled` — **boolean**
- Path: `/auto_update/config_url` — **URL** (usually points to `proview.json`)
- Path: `/auto_update/check_interval_days` — **integer**

## Telemetry (opt-in)
- Path: `/telemetry/enabled` — **boolean**
- Path: `/telemetry/mode` — **enum**: `local` | `remote`
- Path: `/telemetry/remote_url` — **URL** (required if mode=`remote`)
- Path: `/telemetry/fields` — **array of strings**
- Path: `/telemetry/anonymize` — **boolean**

## Themes
- Path: `/themes/active` — **string**, e.g. `default`
- Path: `/themes/index_url` — **URL** to `themes/themes.json`
- Path: `/themes/theme_url_template` — **URL template** with `{{theme}}`

## Profiles
- Path: `/profiles/active` — **string**, e.g. `default`
- Path: `/profiles/profiles_url` — **URL** to `profiles/profiles.json`

## Security (hash verification)
- Path: `/security/verify_core_files` — **boolean**
- Path: `/security/hashes_url` — **URL** to `hashes.json`
  - `hashes.json` keys: `files` (map of filename→SHA256), `on_mismatch` (`warn`|`abort`)

## Offline
- Path: `/offline/cache_enabled` — **boolean**
- Path: `/offline/cache_files` — **array of filenames** to cache

## Context-aware switching
- Path: `/context/auto_mode_switch` — **boolean**
- Path: `/context/fact_bias_threshold` — **0..1 float**
- Path: `/context/insight_bias_threshold` — **0..1 float**

## Changelog prompts
- Path: `/changelog/url` — **URL** to `changelog.json`
- Path: `/changelog/show_on_update` — **boolean**
