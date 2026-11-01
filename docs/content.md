# Content

Source: `public/resume/Josiah_AI_Engineer.pdf` and `public/resume/Josiah_FullStack_AI.pdf`. Use these facts; invent nothing.

## Identity

- **Name:** Josiah Steve Sam
- **Roles:** Software Engineer (AI) · Full-Stack Systems & Applied AI · AI Engineer, Agentic & Generative AI Systems
- **Location:** Chennai, India. Open to relocation.
- **Email:** josiahsteve29@gmail.com
- **Phone:** +91 7373077757
- **LinkedIn:** https://www.linkedin.com/in/josiah-ds/
- **GitHub:** https://github.com/JosiahSteveSam
- **Experience:** 2+ years building production web platforms, backend services and AI applications across SaaS, banking, travel and EdTech.

## Selected work (homepage entries + case study pages)

### 01 · Credentra Agents — AI agent builder platform (B2B SaaS), Credentech Solutions
Stack: Next.js, React, FastAPI, PostgreSQL, Qdrant, LiteLLM, NeMo Guardrails, Langfuse, Crawl4AI, Docker
- **Headline figure:** retrieval hit@1 raised from 0.77 to 0.95 with a cross-encoder reranker.
- Any business builds and publishes its own AI agents on 3 channels (website widget, chat page, WhatsApp) by decoupling channel adapters from one conversation runtime.
- ~90% grounded-answer accuracy at ~2s latency: 4-branch Qdrant search (dense, FAQ, sparse, exact-code) fused via RRF, PostgreSQL authorization, reranking.
- Offline evaluation harness gates every versioned retrieval-profile change.
- Unsafe/off-policy responses cut ~30%: every model call goes through an 8-step gateway (rate limits, NeMo guardrails, fallbacks, tracing) and a citation fence that fails closed.
- New-tenant setup cut from days to ~1 hour: self-serve ingestion of text, FAQs, files (PDF, DOCX, XLSX) and websites; versioned revisions go live only after an automated knowledge check.
- Critical-issue response time cut ~40%, time to identify content gaps cut ~50%: human takeover with a live inbox, and a report grouping unanswered questions by meaning.
- Tenant data isolated across 22 PostgreSQL tables (17 Alembic migrations) with row-level security, composite workspace keys, workspace-filtered vector search, RBAC (3 roles, 13 permissions).
- Tenant and admin portals in Next.js/React, an embeddable Shadow-DOM chat widget, a FastAPI backend of 63 REST endpoints streaming replies over SSE through a JWT API proxy.

**Engineering-section diagram (the real pipeline):** query → 4 parallel branches (dense, FAQ, sparse, exact-code) in Qdrant → RRF fusion → PostgreSQL authorization → cross-encoder rerank → answer with citation fence. ~90% grounded at ~2s.

### 02 · OCR & KYC pipeline — APB Bank, Laos, Credentech Solutions
Stack: FastAPI, NVIDIA L4 GPU, Nginx, PostgreSQL, OAuth2/JWT
- **Headline figure:** ~95% field-extraction accuracy on 500+ KYC documents a day.
- Documents: passports, national IDs, family cards. Automated image correction + GPU-accelerated field extraction.
- ~99% uptime in production: fault-tolerant multi-node inference with automatic GPU-to-CPU failover behind FastAPI microservices and Nginx.

### 03 · AI-powered CBSE learning platform — co-founding engineer, freelance, 2026
Stack: FastAPI, React, Next.js, Supabase, RAG, OCR + LLMs, Render
- **Headline figure:** ~50% less manual grading, with an OCR + LLM grading workflow for answer sheets.
- RAG-based AI subject tutors, personalised per student class and subject, grounded in CBSE curriculum retrieval.
- Hybrid scoring engine tracking 25 CBSE-aligned learning parameters (Bloom's Taxonomy, metacognition): rule-based scoring + LLM personalisation layer.
- CBSE question bank structured from thousands of past-year questions.
- 2-month MVP shipped end to end on Render (backend, AI services, frontend, deployment), iterated on live demo-user feedback.

### 04 · TourExc — travel & tourism booking platform, Credentech Solutions
Stack: React, Vite, Next.js, Node.js, Express.js, PostgreSQL
- **Headline figure:** none on the resume. Lead with the three workflows (customer, agent, admin) instead; ask Josiah for a real number.
- Customer, agent and admin workflows for tour packages, bookings, leads and cross-country pricing.
- B2B agent portal for partners to manage client bookings; admin tooling for multimedia listings and taxi bookings.

### Alternate · OCR invoice automation — Taco Bell Thailand, Credentech Solutions
Stack: Typhoon OCR, LLMs, FastAPI, React, Vite, PostgreSQL
- ~95% per-document accuracy on mixed Thai/English invoices across 5 templates (open-source OCR + rule-based field mapping).
- Full stack deployed on-premises to keep financial data private; review/monitoring dashboard with Excel export for the finance team.

## Engineering rows (proof for each)

- **RAG:** Credentra hybrid retrieval, hit@1 0.77 → 0.95; CBSE curriculum-grounded tutors.
- **Agentic AI:** LangGraph / LangChain workflows with tool calling, multi-step reasoning, structured outputs.
- **OCR & document intelligence:** APB Bank KYC (~95%, 500+/day), Taco Bell invoices (~95%, Thai/English), CBSE answer-sheet grading.
- **Backend & cloud:** FastAPI microservices, 63-endpoint API, SSE streaming, OAuth2/JWT, PostgreSQL RLS, Docker, Nginx, AWS (EC2, S3), GPU inference with failover.

Skills on the resume (for reference, not a logo wall): Python, JavaScript, SQL · LangGraph, LangChain, LiteLLM, OpenAI API, Hugging Face, PyTorch, BGE embeddings, Langfuse · FastAPI, Django, Node.js, Express.js · React, Next.js, Vite · PostgreSQL, MongoDB, Redis, Qdrant, Supabase · AWS, Docker, Nginx, Linux, CI/CD.

## Experience

| Role | Company | Dates | One line |
|---|---|---|---|
| Software Engineer (AI) | Credentech Solutions, Chennai | Apr 2026 – present | Owns architecture across retrieval, inference and multi-tenant trade-offs; patterns now used across 2+ production services; leads client scoping; mentors an incoming engineer. |
| Junior Software Engineer | Credentech Solutions, Chennai | Feb 2025 – Apr 2026 | Delivered 4 client projects (banking, SaaS, food & beverage, travel) end to end; PostgreSQL audit trail cut manual audit effort ~40%. |
| Data Science Intern | Quelit, Chennai | Jul 2024 – Dec 2024 | Persona-consistent chatbot for 20+ users; NLP over 2,000+ messages; student-performance regression pipeline. |

**Education:** Vellore Institute of Technology, Integrated M.Sc. Computational Statistics and Data Analytics, Sept 2020 – May 2025.

## Open items (ask Josiah)

1. **Photo** of himself, ideally black and white, for the hero and About.
2. **About text:** his journey, how he approaches engineering, interests outside work.
3. **Screenshots** of Credentra, CBSE or TourExc, if shareable. Until then, projects are set in type.
4. **A real figure for TourExc**, or swap it for the Taco Bell project.
5. **Writing:** at least 2 real posts before the section is added.
6. **Hosting:** GitHub Pages (default) or Vercel/Netlify.
