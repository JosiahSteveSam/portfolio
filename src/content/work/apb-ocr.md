---
order: 2
number: "02"
title: OCR and KYC pipeline
kind: Identity documents for APB Bank, Laos
client: APB Bank, through Credentech Solutions
stack: [FastAPI, NVIDIA L4 GPU, Nginx, PostgreSQL, OAuth2/JWT]
figure: "~95%"
figureLabel: Field-extraction accuracy on 500+ KYC documents a day.
summary: Passports, IDs and family cards, read on GPU with CPU failover.
description: How Josiah Steve Sam built a KYC document pipeline for APB Bank in Laos with ~95% field-extraction accuracy.
architecture:
  - label: Services
    text: FastAPI microservices behind Nginx, with OAuth2 and JWT on the API and PostgreSQL behind it.
  - label: Inference
    text: Fault-tolerant inference across multiple nodes on NVIDIA L4 GPUs, with automatic failover from GPU to CPU.
implementation:
  - label: Correction
    text: Automated image correction on every document before extraction.
  - label: Extraction
    text: GPU-accelerated field extraction for passports, national IDs and family cards.
impact:
  - figure: ~95%
    label: Field-extraction accuracy
  - figure: 500+
    label: KYC documents a day
  - figure: ~99%
    label: Uptime in production
---

The pipeline reads 500+ KYC documents a day for APB Bank in Laos: passports, national IDs and family cards. Every field has to come out right, and the service has to stay up in production.
