Bakeoff_Evaluation_Phase3:
  Purpose: |
    Evaluate a completed bake-off (Standard vs ProView Fact vs ProView Insight)
    and output results as Markdown tables with Mode Guidance up front.
    Differentiation Index (DI) now incorporates Audience Value Index (AVI).
    DI is placed last to emphasize it as the overall efficiency index.

  Metric_Definitions:
    ΔQ: "Quality delta vs Standard (1–5). Positive = better correctness/completeness/clarity."
    ΔPCS: "Coverage delta vs Standard (1–5). Positive = more coverage than Standard."
    ΔCL: "Cognitive Load delta vs Standard (1–5). Positive = more load, negative = lighter load."
    AVI: "Audience Value Index (0–2). Communication/teaching clarity beyond correctness."
    DI: >
      Differentiation Index (overall). Formula:
      DI = (ΔQ + ΔPCS + AVI) - (ΔCL).
      Positive = ProView added value; Zero = neutral; Negative = Standard more efficient.

  Scoring_Instructions: |
    1) Assign Quality, PCS, Cognitive_Load, and AVI for Standard, Fact, and Insight.
    2) For Fact/Insight, compute ΔQ, ΔPCS, ΔCL vs Standard.
    3) Compute DI with AVI included.
    4) Keep judgments consistent across questions.
    5) Notes = one sentence justification per mode.

  Output_Format:
    Order:
      - Mode Guidance
      - Legend
      - Question Table
      - Totals
    Type: "Markdown table"
    Main_Table:
      Columns: ["Q#", "Title", "Scenario Type", "Mode", "🟢 ΔQ", "🟢 ΔPCS", "🔴 ΔCL", "🟢 AVI", "🟢 DI", "Note"]
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
      Columns: ["Mode", "Quality Sum", "PCS Sum", "Avg CL", "AVI Sum", "DI Sum"]
      DI_Sum_Color:
        positive_prefix: "✅ "
        zero_prefix: "⚪ "
        negative_prefix: "🔴 "

  Mode_Guidance:
    Place: "Top"
    Content: |
      - **Standard:** ✅ Most efficient for Baseline items. Lowest cognitive load.  
      - **Fact:** ✅ Best for Differentiated items when structure and governance matter.  
      - **Insight:** ✅ Strongest for audience/teaching clarity. AVI boosts DI in tasks needing communication depth.  

  Presentation_Rules: |
    - Output ONLY the Markdown tables and short guidance text.
    - Round DI to one decimal place.
    - Represent deltas with explicit signs (+/-). Use 0 for neutral.
    - Include Mode Guidance at the top.
