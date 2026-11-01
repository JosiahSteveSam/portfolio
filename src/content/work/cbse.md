---
order: 3
number: "03"
title: CBSE learning platform
kind: AI tutors and grading, as co-founding engineer
client: Freelance, 2026
stack: [FastAPI, React, Next.js, Supabase, RAG, OCR + LLMs, Render]
figure: "~50%"
figureLabel: Less manual grading, with an OCR and LLM workflow for answer sheets.
summary: AI tutors, a scoring engine and answer-sheet grading, in two months.
description: How Josiah Steve Sam co-built an AI-powered CBSE learning platform that cut manual grading by ~50%.
architecture:
  - label: Tutors
    text: RAG-based subject tutors, personalised per class and subject, grounded in retrieval over the CBSE curriculum.
  - label: Scoring
    text: 25 CBSE-aligned learning parameters (Bloom’s Taxonomy, metacognition), scored by rules with an LLM personalisation layer.
  - label: Grading
    text: An OCR and LLM workflow that grades answer sheets.
implementation:
  - label: Question bank
    text: Structured from thousands of past-year CBSE questions.
  - label: Delivery
    text: Backend, AI services, frontend and deployment shipped end to end on Render as a 2-month MVP, iterated on live demo-user feedback.
impact:
  - figure: ~50%
    label: Less manual grading
  - figure: "25"
    label: Learning parameters tracked
  - figure: 2 months
    label: To a working MVP
---

One platform with two jobs: tutor each CBSE student in their own class and subject, from the curriculum, and take the manual work out of grading answer sheets.
