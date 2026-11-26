# FinSight AI — Intelligent Banking Platform

A portfolio-grade banking analytics application built to demonstrate full-stack engineering with Java, Spring Boot, Angular, TypeScript and AI-service foundations.

> **Project status:** Angular frontend implemented; GitHub Pages deployment is being validated. Backend and AI services are foundations only and are not yet connected to the frontend.
>
> **Demo safety:** Educational portfolio project using fictional customers, accounts, loans and transactions only. It is not connected to a real bank and must not be used for financial decisions.

## Live demo

- **GitHub Pages:** https://murali9900.github.io/finsight-ai/
- **Source code:** https://github.com/MURALI9900/finsight-ai

The published page will be switched from the original static preview to the Angular application only after the Angular Pages workflow succeeds.

## Angular frontend

The Angular 19 + TypeScript application includes:

- Overview dashboard with synthetic banking metrics
- Customers directory with search
- Accounts view with fictional masked account references
- Loan portfolio summary
- Transactions list with search
- AI Assistant preview with local sample responses (not connected to a live LLM)

The app uses responsive styling and hash-based routing for GitHub Pages. All displayed records and metrics are synthetic.

## Technology

| Area | Technology / status |
|---|---|
| Frontend | Angular 19, TypeScript |
| Core API | Java 17, Spring Boot — foundation; UI integration pending |
| AI API | Python, FastAPI — foundation; UI integration pending |
| Data | PostgreSQL |
| Vector retrieval | pgvector — planned |
| CI | GitHub Actions build and test workflow |
| Hosting | GitHub Pages workflow for Angular frontend |

## Repository layout

```text
frontend/          Angular application
backend/           Spring Boot API foundation
ai-service/        Python FastAPI service foundation
infrastructure/    Docker Compose and infrastructure notes
docs/              Architecture, API, roadmap and demo-data policy
.github/workflows/ GitHub Actions build, test and Pages deployment
```

## Project documentation

- [Architecture](docs/architecture.md)
- [Roadmap](docs/roadmap.md)
- [API contract](docs/api-contract.md)
- [Security and demo-data policy](docs/security-and-demo-data.md)
- [Frontend details](frontend/README.md)

## Development principles

1. Use synthetic data only; never commit real customer, employer or bank information.
2. Never commit passwords, tokens, API keys or certificates.
3. Validate and authorise every API operation on the server.
4. Keep AI responses grounded in a controlled demo knowledge base and clearly disclose limitations.
5. Add tests and documentation alongside each feature.
6. Keep changes small and reviewable.

## Portfolio disclosure

This project is independently developed for learning and portfolio demonstration. Product names, accounts, customers, loans and transactions shown in the application are fictional.
