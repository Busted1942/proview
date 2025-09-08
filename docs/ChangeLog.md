# ProView Change Log  

---

## [1.9] — 2025-09-08
### Added
- **Trusted vendor sites as 🟢** when the user explicitly adds them (allowlist).
- **Org Support Escalation** prioritizes the user’s org domain (`/support`, `/help`, `/contact`, `/technology`, etc.).
- **Vendor Fallback** (🟡) for recognized documentation subdomains; disabled outside Lite unless explicitly enabled.
- **Prompt-Format Installer** for Gemini/GPT models that can’t ingest YAML (prompt-only block).
- **State Transparency** lines for long operations (“🔍 Validating…” → “✅ Re-checking…”).
- **Audit Footer** consistently includes Mode, Evidence, and Sources; suppresses empty/irrelevant fields.

### Changed
- **Retrieval order** clarified and enforced: Trusted (🟢) → Org Support (🟢) → Vendor Fallback (🟡) → Other (🔴, with disclosure).
- **Insight labeling**: 🟨 prefix for inferences; otherwise identical evidence policy to Fact.

### Fixed
- Removed reliance on a pre-resolved “support URL” field; discovery now derives from the user’s org base domain on-demand.
- Clarified fallback behavior in Lite/trial scenarios (vendor fallback enabled, otherwise disabled by default).


---

## [2025-09-02] ProView v1.7.0 (Current)
**Major Release Summary — rolls up changes from v1.6.2 → v1.6.6**

- Moved to a yaml installer
- Added **Evidence & Access Module**:
  - Evidence Filter to classify recommendations as Strong, Partial, or Absent.
  - Evidence-Weighted Phrasing to align verbs with strength of evidence.
  - Access & Claims Rule to govern access attempts and claim language.
- Added **Critical Challenge & Redirection Module**:
  - Requires counterpoints, risk surfacing, and balanced redirection in every output.
  - Enforces evidence-grounded critique or explicit flagging if speculative.
  - Integrated with Validation & Feedback Loop.
- Added **Image Editing Module**:
  - Requires baseline file for true edits.
  - Distinguishes edits (must preserve aspect ratio/resolution) vs. regenerations (flexible framing).
  - Locks aspect ratio/resolution for edits unless explicitly changed.
  - Transparency rule: always disclose whether an edit or regeneration.
- Added **Intent section** to define ProView’s purpose.
- Introduced **summary sentences** for key modules: Modes, Labeling, Validation & Feedback, Polish Layer, MetaPrompt Template.
- Added **Extensibility module** to emphasize modular growth.
- Added **Quick Reference Table** for leadership-friendly one-page overview.
- Standardized formatting across modules (imperative style, separators, version headers).
- Updated **Intent language** to describe outputs as *professional-ready*.

---

## [2025-09-03] ProView v1.6.6
- Added **Image Editing Module**:
  - Requires baseline file for true edits.
  - Distinguishes between edits (must preserve aspect ratio/resolution) and regenerations (framing flexible).
  - Locks aspect ratio/resolution for edits unless explicitly changed by user (e.g., 768 × 768 for square infographic).
  - Enforces transparency: always disclose whether an image is a true edit or a regenerated approximation.
- Updated **Quick Reference Table** to include Image Editing module.
- Updated **Intent** language to describe outputs as *professional-ready*.
- Incremented version to 1.6.6.

---

## [2025-09-03] ProView v1.6.4
- Added **Critical Challenge & Redirection Module**:
  - Requires counterpoints, risk surfacing, and balanced redirection in every output.
  - Enforces evidence-grounded critique or explicit flagging if speculative.
  - Integrated with Validation & Feedback Loop to ensure recommendations are challenged before delivery.
- Updated **Intent** to highlight constructive challenge as part of ProView’s mission.
- Updated **Validation module** to cross-reference Challenge module.
- Updated **Quick Reference Table** to include the new module.
- Incremented version to 1.6.4.

---

## [2025-09-02] ProView v1.6.3
- Added **Intent section** at the top to define ProView’s purpose.
- Introduced **summary sentences** for:
  - Modes  
  - Labeling  
  - Validation & Feedback  
  - Polish Layer  
  - MetaPrompt Template
- Added **Extensibility section** to emphasize modular growth.
- Added **Quick Reference Table** for leadership-friendly one-page overview.
- Standardized formatting across modules:
  - Imperative style  
  - Horizontal separators  
  - Version header at the top
- Incremented version to 1.6.3.

---

## [2025-08-22] ProView v1.6.2
- Added **Evidence & Access Module**:
  - Evidence Filter to classify recommendations as Strong, Partial, or Absent.
  - Evidence-Weighted Phrasing to align verbs with strength of evidence.
  - Access & Claims Rule to consolidate access attempts and claim language.
- Standardized module formatting with summary sentences for clarity.
- Incremented version to 1.6.2.

---

## [2025-08-20] ProView v1.6
- Introduced **duplication prevention** for repeated content.  
- Clarified **strategic inference rules** in Insight Mode (only tool-specific if narrowed by user).  
- Banner now required on **mode change** as well as invocation.  
- **Persistence Capability Test:** Now explicitly checks if persistence is *enabled* for the user, not just present.  
- **Duplication Check:** ProView must avoid repeating information unnecessarily; instead, reference prior content.  
- **Struggle Detection / Step-by-Step Rescue:** If the user shows signs of being stuck, switch to incremental guidance with validation.  

---

## [2025-08-18] ProView v1.5.6
- Added **Validation & Feedback Loop** requiring critique of outputs, discrepancy check, and re-run option.  
- Introduced **graphical output validation** (detect clipping/artifacts).  
- MetaPrompt updated: always ask up to 3 clarifying questions, infer the rest, and display template if inferences were made.  

---

## [2025-08-15] ProView v1.5.4
- **Optional Enhancements** became mandatory to list whenever relevant.  
- Added rule to **prompt for key missing details** before drafting (no placeholders without confirmation).  
- Version persistence handling improved.  

---

## [2025-08-13 → 2025-08-15] ProView v1.3 → v1.5
- **Labeling change:** Only inferences labeled 🟨 **INFERENCE:**, fact edits untagged.  
- First-use banner clarified scope (all chats / chat only / lite).  
- Default mode set to **Insight Mode** unless value negligible.  
