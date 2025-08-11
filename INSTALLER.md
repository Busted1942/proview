# ProView Installer / Upgrader (v1.0)

**Trigger Command:** `Activate ProView Mode`


## Install/Upgrade Flow

## PreInstall CHECK
### Remote Status Check
- Fetch `proview.json.remote.status_url` → read `status.json`.
- If `kill:true` or `active:false`: show `message`, abort.
- If `min_version` > current: prompt upgrade (force if `force_update:true`; else allow Lite fallback).
- If `deprecation_notice`: show warning; allow proceed.

### Language (i18n)
- Load `locales/locales.json`, pick user preference if supported; else use `en-US`.
- Pull strings from `locales/<locale>.json`.

### Theme & Profile
- Load theme from `themes/default.json` (or selected in `themes/themes.json`).
- Select profile from `profiles/profiles.json` (or default). Apply profile mode/industry if present.

### Integrity Check (optional)
- Fetch `hashes.json` and compare SHA256 of core files.
- If mismatch: follow `on_mismatch` (warn or abort).

### Auto-Update Config (optional)
- If `auto_update.enabled:true`, check `auto_update.config_url` weekly and merge non-breaking config changes.

### Telemetry (Opt-In)
- If user opts in and `telemetry.enabled:true`:
  - Log minimal metrics (mode_used, labels_used, edits_count).
  - If `mode:remote`, POST anonymized payload to `telemetry.remote_url`; else keep local.

### Offline Fallback
- If remote files unavailable, load cached copies listed in `offline.cache_files`.


### Step 1 – Check existing version
Display the ProView_Infographic.png infographic in the assets folder.
If the version in GitHub is higher than the version stored in memory, ask:
“A newer version of ProView Mode is available. Do you want to upgrade to the latest version?”
If the user does not wnat to upgrade, skip to Step 6 (Confirm).

### Step 2 – Test persistence capability
Evaluate whether the platform can persist this trigger command in memory:
- Is the capability present?
- Is the feature available to the end user?
- Is there enough storage capacity to store the trigger command?

If any check fails:
“Your platform does not support storing this procedure, but you can use ProView Lite. Would you like to use it?”
Then echo/run the **ProView Lite** current version install command.

If all checks pass → proceed to Step 2.1.

If not, proceed to → proceed to Step 2.2.

### Step 2.1 – Ask about installing to profile
“Would you like to install ProView to your profile so it is always available?”
- **No** → operate without storing (chat-scoped). Skip scope question. Proceed as **ProView Lite (not persistent)** then go to Step 4.
- **Yes** → proceed to Step 2.2.

### Step 2.2 – Scope if installing to profile
“Should ProView Mode apply to all chats going forward, or only be active when you request?”

### Step 3 – If new or upgrading and user is capable of storing the Trigger Command
- Store updated rules from GitHub only if the user chose to install to profile in Step 2.1.
- Enable per the scope chosen in Step 2.2.
- If the user declined installation, run chat-only (not persistent) with the same ruleset.

### Step 4 – Ask industry
“Which industry do you work in? This helps me align feedback to your specific professional context.”

## Step 5 - I18N SELECTION
1) Read default_locale from proview.json.i18n.
2) Optionally ask user for preferred language (or auto-detect).
3) If preferred is supported (via locales.json), fetch that locale’s JSON.
4) Use localized strings for banners, labels, and prompts; else fall back to en-US.


### Step 6 – Confirm
Respond with:
```
Display the ProView_Banner.png in the assets folder
✅ ProView [version information] [installed or updated].
Industry: [industry].
Mode: [all chats / this chat only / ProView Lite].
ProView ready.
```
