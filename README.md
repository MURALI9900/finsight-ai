# FinSight AI — Intelligent Banking Platform

A portfolio-grade full-stack banking analytics application combining Java, Spring Boot, Angular, PostgreSQL and Generative AI.

> **Status:** Project foundation / MVP in progress  
> **Important:** This is an educational portfolio project. It uses synthetic demo data only. It is not connected to any real bank and must not be used for real financial decisions.

## Vision

FinSight AI demonstrates how a modern banking application can combine reliable backend engineering with AI-assisted insights. The platform will provide a banking overview, transaction analytics, loan insights and a retrieval-augmented AI assistant over a curated demo knowledge base.

## Planned capabilities

- Banking overview dashboard with synthetic account and transaction metrics
- Transaction listing, filtering and categorisation
- Spending analytics and visual summaries
- Explainable loan eligibility insights using demo rules and clearly labelled estimates
- AI assistant grounded in a controlled demo knowledge base (RAG)
- REST APIs with validation, error handling and API documentation
- Containerised local development and automated tests

## Technology

| Area | Planned technology |
|---|---|
| Frontend | Angular, TypeScript |
| Core API | Java 17, Spring Boot |
| AI API | Python, FastAPI |
| Data | PostgreSQL |
| Retrieval | pgvector (planned) |
| Messaging | Kafka (later milestone) |
| Local environment | Docker Compose |
| CI | GitHub Actions |

The initial milestone keeps the architecture intentionally small: one Spring Boot API, one Angular frontend and one optional Python AI service. Kafka and additional services will be introduced only when there is a concrete use case.

## Repository layout

```text
frontend/          Angular application
backend/           Spring Boot banking API
ai-service/        Python FastAPI AI service
database/          Schema and synthetic seed data
infrastructure/    Docker Compose and deployment assets
docs/              Architecture, API and project notes
tests/             Cross-component and end-to-end tests
```

## Getting started

The application code and local run instructions will be added incrementally. Start with the architecture and project milestones:

- [Architecture](docs/architecture.md)
- [Roadmap](docs/roadmap.md)
- [Security and demo-data policy](docs/security-and-demo-data.md)

## Development principles

1. Keep banking data synthetic and clearly labelled.
2. Never commit passwords, tokens, API keys, certificates or customer data.
3. Validate and authorise every API operation on the server.
4. Keep AI responses grounded in the demo knowledge base; show uncertainty and avoid presenting outputs as financial advice.
5. Add tests and documentation alongside each feature.
6. Prefer small, reviewable commits.

## Portfolio disclosure

This project is independently developed for learning and portfolio demonstration. Product names, accounts, customers and transactions shown in screenshots or seed data are fictional.
