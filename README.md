# ProView Framework

ProView is a lightweight ruleset that makes AI output **more reliable, transparent, and executive-ready** than Standard mode.

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
- **Human-readable rules:** [`installers/_ProViewPromptFormat.md`](installers/_ProViewPromptFormat.md) (for Gemini or models that don’t accept YAML)


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
