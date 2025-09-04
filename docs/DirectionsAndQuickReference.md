# ProView — Directions & Quick Reference

ProView is a lightweight ruleset that makes AI output **more reliable, transparent, and executive-ready** than Standard mode.

---

## Why Use ProView?

| Feature             | Standard Mode                           | ProView Mode                                |
|---------------------|------------------------------------------|---------------------------------------------|
| **Evidence**        | May generate without citing sources      | Enforces evidence policy (cite or say “couldn’t retrieve”) |
| **Inferences**      | Mixed in with facts, not identified      | Clearly labeled 🟨 INFERENCE: so readers know what’s extrapolated |
| **Challenge**       | Minimal pushback                        | Includes risks, caveats, and counterpoints   |
| **Validation**      | No self-check                           | Self-critique and validation loop before delivery |
| **Presentation**    | Raw AI output                           | Polished, consistent, executive-ready        |
| **User Confidence** | Hard to tell what’s verified             | Transparent separation of fact vs inference  |

---

## Table of Contents

- [Quickstart](#quickstart)  
- [How It Works](#how-it-works)  
- [How to Install ProView](#how-to-install-proview)  
- [How to Run a Bake-Off](#how-to-run-a-bake-off)  
- [Quick Reference Table](#quick-reference-table)  
- [Gist Files](#gist-files)

---

## Quickstart

Choose the installer that matches your goal:

- **Temporary test (chat only):** [TryItNow.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-tryitnow-yaml)  
- **Persistent install (if supported):** [__ProViewInstallerChatGPTFormat.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file--proviewinstallerchatgptformat-yaml)  
- **Human-readable version:** [_ProViewPromptFormat.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-_proviewpromptformat-md) for Gemini or other models that don’t accept YAML  

*If unsure, start with **TryItNow.yaml** to try it quickly.*

For background on when and why to use ProView, see [___WhyandWhenProview.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file---whyandwhenproview-md).

---

## How It Works

- **Scope**: Auto-active for professional/technical; off for casual  
- **Modes**: Fact (evidence-only), Insight (adds value; labels inferences)  
- **Labeling**: Only inferences get 🟨 INFERENCE:; fact & language edits unlabeled  
- **Evidence**: Cite if accessed; say “couldn’t retrieve” if blocked; never imply review without a citation  
- **Challenge**: Each recommendation lists risks/counterpoints  
- **Validation**: Self-critique, missing-inputs callout, quick re-check  

---

## How to Install ProView

### For ChatGPT
1. Copy [__ProViewInstallerChatGPTFormat.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file--proviewinstallerchatgptformat-yaml).  
2. Paste it into a new ChatGPT conversation.  

### For Gemini or Other Models
1. Use [_ProViewPromptFormat.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-_proviewpromptformat-md).  
   - Note: this file is too large for ChatGPT.  

---

## How to Run a Bake-Off

1. Start a new chat and paste in [ProViewBake-OffPromptSetUp.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewbake-offpromptsetup-yaml).  
2. Run your prompt or use one of the prefabricated ones:  
   - [ProViewStressTestPromptHallucinations.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewstresstestprompthallucinations-md)  
   - [ProViewStressTestPrompt.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewstresstestprompt-md)  
3. Paste in [ProViewStressTestEvaluation.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewstresstestevaluation-md) to evaluate results.  

---

## Quick Reference Table

| Module                          | Purpose                                | Key Rule/Feature                  |
|---------------------------------|----------------------------------------|-----------------------------------|
| **Scope**                       | Defines when ProView applies           | Auto for professional/technical   |
| **MetaPrompt Template**         | Structures inputs, goals, guardrails   | Consistent success criteria       |
| **Modes**                       | Balances factual precision & insight   | Fact vs. Insight                  |
| **Labeling**                    | Distinguishes facts vs. inferences     | Only inferences labeled 🟨        |
| **Evidence & Access Module**    | Governs evidence handling              | Evidence filter & claims policy   |
| **Critical Challenge**          | Ensures pushback & counterpoints       | Risks, caveats, redirection       |
| **Validation & Feedback Loop**  | Adds self-critique & re-check          | Critique + validation rerun       |
| **Polish Layer**                | Guarantees professional-ready output   | Enforces tone & formatting        |
| **Image Editing Module**        | Preserves fidelity in edits            | Baseline check, aspect ratio, text|
| **Extensibility**               | Supports future expansion              | Modular design                    |

---

## Gist Files

Here are all the files in this Gist, with direct links:

- [TryItNow.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-tryitnow-yaml)  
- [__ProViewInstallerChatGPTFormat.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file--proviewinstallerchatgptformat-yaml)  
- [_ProViewPromptFormat.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-_proviewpromptformat-md)  
- [___WhyandWhenProview.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file---whyandwhenproview-md)  
- [ProViewBake-OffPromptSetUp.yaml](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewbake-offpromptsetup-yaml)  
- [ProViewStressTestPrompt.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewstresstestprompt-md)  
- [ProViewStressTestPromptHallucinations.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewstresstestprompthallucinations-md)  
- [ProViewStressTestEvaluation.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewstresstestevaluation-md)  
- [ProViewChangeLog.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file-proviewchangelog-md)  
- [__WhyandWhenProview.md](https://gist.github.com/Busted1942/740fb4b9207bcc7b94ade3613f2494d9#file---whyandwhenproview-md)  