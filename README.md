# ProView Framework

ProView is a lightweight ruleset that makes AI output **more reliable, transparent, and professional-ready** than Standard mode.

---

## Why ProView?

| Feature             | Standard Mode                           | ProView Mode                                |
|---------------------|------------------------------------------|---------------------------------------------|
| **Evidence**        | May generate without citing sources      | Enforces evidence policy (cite or say “couldn’t retrieve”) |
| **Inferences**      | Mixed in with facts, not identified      | Clearly labeled 🟨 INFERENCE: so readers know what’s extrapolated |
| **Challenge**       | Minimal pushback                        | Includes risks, caveats, and counterpoints   |
| **Validation**      | No self-check                           | Self-critique and validation loop before delivery |
| **Presentation**    | Raw AI output                           | Polished, consistent, executive-ready        |
| **User Confidence** | Hard to tell what’s verified             | Transparent separation of fact vs inference  |

---

## Quickstart

Choose the installer that matches your goal:

- **Temporary test (chat only):** [`installers/TryItNow.yaml`](installers/TryItNow.yaml)  
- **Persistent install (if supported):** [`installers/ProViewInstallerChatGPTFormat.yaml`](installers/ProViewInstallerChatGPTFormat.yaml)  
- **Human-readable rules and prompt based install:** [`installers/_ProViewPromptFormat.md`](installers/_ProViewPromptFormat.md) (for Gemini or models that don’t accept YAML)


👉 If unsure, start with **TryItNow.yaml** to try it quickly.

---

## How It Works

- **Scope**: Auto-active for professional/technical; off for casual  
- **Modes**: Fact (evidence-only) or Insight (adds value; labels inferences)  
- **Labeling**: Only inferences get 🟨 INFERENCE:  
- **Evidence**: Cite if accessed; say “couldn’t retrieve” if blocked  
- **Challenge**: Every recommendation lists risks/counterpoints  
- **Validation**: Self-critique, missing-inputs callout, quick re-check  

---

## Modes

- **Standard** – Baseline output, no evidence, minimal structure.
- **Fact** – Evidence-only, runs on trusted/org/vendor domains, citations required.
- **Insight** – Same as Fact, but adds audience clarity (“why it matters”). Inferences are explicitly labeled 🟨.

---

## Trusted Sites and Escalation

- User-entered trusted domains are treated as **🟢 High confidence**.
- ProView prioritizes: **Trusted → Org Support → Vendor Fallback**.
- Org support escalation searches `/support`, `/help`, `/contact` paths on your organization’s homepage.

---

## Safety and Sensitivity Features

- **Safety Overrides:** Blocklisted sites are rejected, even if reachable. Allowlisted sites (user-entered) are treated as 🟢.
- **Data Sensitivity Nudge:** Automatic banners when SSNs, DOBs, Student IDs, or API keys are detected.
- **State Transparency:** Emits micro-notes (`🔍 Validating… → ✅ Re-checking…`) during long operations.
- **Audit Footer:** Every professional response ends with mode, evidence level, and sources summary.

---

## Example Prompt

**User role:** Teacher  
**Prompt:** "How do I reset a student password?"



---

## Bake-Off Demo

1. Start a new chat and paste in [`tests/ProViewBakeOffPromptSetUp.yaml`](tests/ProViewBakeOffPromptSetUp.yaml).  
2. Run your own prompt, or use one of the prefabricated ones:  
   - [`tests/ProViewStressTestPrompt.md`](tests/ProViewStressTestPrompt.md)  
   - [`tests/ProViewStressTestPromptHallucinations.md`](tests/ProViewStressTestPromptHallucinations.md)  
3. Paste in [`tests/ProViewStressTestEvaluation.md`](tests/ProViewStressTestEvaluation.md) to evaluate results.  

---

## Documentation

- [Directions & Quick Reference](docs/DirectionsAndQuickReference.md)  
- [Why & When to Use ProView](docs/WhyAndWhenProView.md)  
- [Change Log](docs/ChangeLog.md)

---

## License

[MIT](LICENSE)
