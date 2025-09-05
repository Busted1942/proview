Bakeoff_Evaluation_Phase4:
  Purpose: |
    Evaluate a completed bake-off (Standard vs ProView Fact vs ProView Insight)
    and output results as Markdown tables with clear metrics and definitions.
    Differentiation Index (DI) incorporates Audience Value Index (AVI) and
    Citation Confidence (CC) to highlight ProView’s added value.

  Metric_Definitions:
    ΔQ: "Quality delta vs Standard (1–5). Positive = better correctness/completeness/clarity."
    ΔPCS: "Coverage delta vs Standard (1–5). Positive = more coverage than Standard."
    ΔCL: "Cognitive Load delta vs Standard (–5 to +5). Negative = lighter load, positive = heavier."
    AVI: "Audience Value Index (0–2). Communication/teaching clarity beyond correctness."
    CC: "Citation Confidence. Count of 🟢 High, 🟡 Medium, 🔴 Low sources cited."
    DI: >
      Differentiation Index (overall).
      Formula: DI = (ΔQ + ΔPCS + AVI + CC_Weight) - (ΔCL).
      CC_Weight = +1 if 🟢 dominates, 0 if 🟡 dominates, –1 if 🔴 dominates.

  Scoring_Instructions: |
    1) Assign Quality, PCS, Cognitive_Load, AVI, and Citation Confidence (🟢/🟡/🔴 counts).
    2) For Fact/Insight, compute ΔQ, ΔPCS, ΔCL vs Standard.
    3) Compute DI with AVI + CC_Weight included.
    4) Keep judgments consistent across questions.
    5) Notes = one sentence justification per mode.

  Legend: |
    - **ΔQ:** Change in correctness, completeness, or clarity vs Standard (higher is better).
    - **ΔPCS:** Change in coverage/scope vs Standard (higher is better).
    - **ΔCL:** Change in cognitive load vs Standard (lower is better; negatives = lighter).
    - **AVI:** Audience Value Index, measuring how well the answer communicates/teaches.
    - **CC:** Citation Confidence, counts of 🟢 High / 🟡 Medium / 🔴 Low trust sources.
    - **DI:** Differentiation Index, overall efficiency/value measure.
      DI = (ΔQ + ΔPCS + AVI + CC_Weight) – (ΔCL).
      Positive = ProView adds value, Zero = neutral, Negative = Standard more efficient.

  Output_Format:
    Order:
      - Legend
      - Question Table
      - Totals
    Type: "Markdown table"
    Main_Table:
      Columns: ["Q#", "Title", "Scenario Type", "Mode", "🟢 ΔQ", "🟢 ΔPCS", "🔴 ΔCL", "🟢 AVI", "CC (🟢/🟡/🔴)", "🟢 DI", "Note"]
      Color_Rules:
        DI:
          positive_prefix: "✅ "
          zero_prefix: "⚪ "
          negative_prefix: "🔴 "
        Deltas:
          positive_sign: "+"
          zero_sign: "0"
          negative_sign: ""
    Totals_Table:
      Columns: ["Mode", "Quality Sum", "PCS Sum", "Avg CL", "AVI Sum", "CC Totals", "DI Sum"]
      DI_Sum_Color:
        positive_prefix: "✅ "
        zero_prefix: "⚪ "
        negative_prefix: "🔴 "

  Presentation_Rules: |
    - Output ONLY the Markdown tables.
    - Round DI to one decimal place.
    - Represent deltas with explicit signs (+/-). Use 0 for neutral.
    - Always display Citation Confidence as 🟢/🟡/🔴 counts.
    - Include the Legend section at the top of outputs.
