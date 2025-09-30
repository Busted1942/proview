# ProView Prompt & Execution Guide

## Enforce the Prompt Header + DOD (for every complex request)
This alone will cut regen churn and raise accuracy.

```md
GOAL: <decision or deliverable in one sentence>
AUDIENCE: <execs / teachers / parents / IT ops / mixed>
CONTEXT: <systems, scope, dates, constraints>
INPUTS: <files, facts, numbers, links>
EVIDENCE: <must use domains; fallbacks allowed?>
MODE: <Fact only | Insight allowed>
DOD (Definition of Done):
  - [ ] <checklist the answer must pass>
OUTPUT: <format; slides count; file name>
VALIDATE: <assumptions list + risk flags + citations required>
```

Also consider:
- Assumptions
- Risks
- Evidence plan
- Review `web.run` logic works as intended; i.e., cite 3–5 load-bearing sources

---

## Stage Long Artifacts
Ask for slices (e.g., slides 1–5), then approve before proceeding.

---

## Struggle Detection
Ensure struggle detection escapes as planned.

---

## Separate Setup From Deliverables
First finalize configuration (rules, sources, modes), then request the output. Do not mix.
Consider surfacing the metaprompt for validation and clarification before execution if it is not too burdensome.

### Example

**User prompt:** “Draft a one-page strategy brief for adopting Zoom Phone.”

**Process (separated):**

**Step 1 — Setup phase (configuration):**
- Confirm intended audience: Execs or technical staff?
- Identify scope: Adoption strategy only, or include cost/risk analysis?
- Trusted sources: Do you want me to use internal FCPS docs or vendor pages?
- Mode: Fact-only or allow inferences?

**Assistant response in setup mode:**
- Assumptions: Audience = execs; Scope = adoption strategy only; Trusted = fcps.edu, zoom.us; Mode = Insight
- Risks: If exec audience, may need cost metrics I don’t have → risk of using inferred data.
- Evidence plan: Prefer FCPS docs (green), supplement with vendor (yellow).

**Step 2 — Deliverable phase:**
- Now generate the one-page strategy brief, governed by those assumptions and rules.

---

## Cost & Depth Controls
- Lower the sensitivity of any “ask for deeper reasoning” prompts when Extended is on, so you don’t double‑pay for depth.

---

## ChatGPT Mode Rules
- Keep Insight Mode as default, but have ProView auto‑switch to Fact Mode for compliance, legal, or external‑publication audiences regardless of thinking depth.
- Add a quick check: “If thinking mode = Standard and task risk = high, suggest switching to Extended before running Deep Crawl.”
