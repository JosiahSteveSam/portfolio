---
order: 1
number: "01"
title: Credentra Agents
kind: AI agent builder platform, B2B SaaS
client: Credentech Solutions
stack: [Next.js, React, FastAPI, PostgreSQL, Qdrant, LiteLLM, NeMo Guardrails, Langfuse, Crawl4AI, Docker]
figure: "0.95"
figureLabel: Retrieval hit@1, up from 0.77, with a cross-encoder reranker.
summary: AI agents any business builds and publishes on three channels.
description: How Josiah Steve Sam built Credentra Agents, an AI agent builder whose retrieval reaches hit@1 of 0.95.
architecture:
  - label: Channels
    text: Website widget, chat page and WhatsApp adapters over one conversation runtime.
  - label: Retrieval
    text: Four Qdrant branches (dense, FAQ, sparse, exact-code), RRF fusion, PostgreSQL authorization, cross-encoder rerank.
  - label: Gateway
    text: 8 steps on every model call, rate limits and NeMo guardrails to fallbacks and tracing. A citation fence fails closed.
  - label: Tenancy
    text: Row-level security over 22 tables, workspace-filtered vector search, 3 roles and 13 permissions.
implementation:
  - label: Portals
    text: Next.js and React portals for tenants and admins; a Shadow-DOM chat widget.
  - label: API
    text: 63 FastAPI endpoints, streaming over SSE through a JWT API proxy.
  - label: Ingestion
    text: Self-serve text, FAQs, files and websites; a knowledge check gates every revision.
  - label: Evaluation
    text: An offline harness gates every retrieval-profile change.
impact:
  - figure: 0.77 to 0.95
    label: Retrieval hit@1
  - figure: ~90%
    label: Grounded answers, at ~2s
  - figure: ~30%
    label: Fewer unsafe or off-policy responses
  - figure: ~1 hour
    label: New-tenant setup, down from days
  - figure: ~40%
    label: Faster critical-issue response, with human takeover
  - figure: ~50%
    label: Less time to find content gaps
---

Any business should be able to publish its own AI agent on a website widget, a chat page and WhatsApp. Each agent answers from that business’s own content, stays inside policy, and keeps its tenant’s data apart from every other tenant’s.
