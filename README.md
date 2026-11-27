# FinSight AI — Intelligent Banking Platform

A portfolio-grade banking analytics application built to demonstrate full-stack engineering with Java, Spring Boot, Angular, TypeScript and AI-service foundations.

> **Project status:** The Angular frontend is published on GitHub Pages. Spring Boot and FastAPI services are maintained as source-code foundations with automated validation; they are not continuously hosted. The live demo runs entirely in the browser using synthetic sample data.
>
> **Demo safety:** Educational portfolio project using fictional customers, accounts, loans and transactions only. It is not connected to a real bank and must not be used for financial decisions.

## Live demo

- **GitHub Pages:** https://murali9900.github.io/finsight-ai/
- **Source code:** https://github.com/MURALI9900/finsight-ai

The Angular application is published through the GitHub Pages workflow. The latest frontend build, artifact check and Pages deployment completed successfully in [workflow run #12](https://github.com/MURALI9900/finsight-ai/actions/runs/45941380545).

## Angular frontend

The Angular 19 + TypeScript application includes:

- Overview dashboard with synthetic banking metrics, portfolio movement and sample insights
- Customers directory with search across customer ID, name, segment and location
- Accounts view with fictional masked account references
- Loan portfolio summary and illustrative category distribution
- Transactions register with search across reference, customer, type, date, amount and status
- AI Assistant preview with local sample responses (not connected to a live LLM)
- Responsive layout, hash-based navigation, keyboard skip link and accessible status announcements
- Reusable loading, empty and error presentation; searchable screens show an actionable empty state when no records match

The current demo data is bundled and loaded synchronously. It does not simulate network loading or API failures. Loading and error variants are available for future API-backed screens.

## Technology

| Area | Technology / status |
|---|---|
| Frontend | Angular 19, TypeScript 5.8 |
| Core API | Java 17, Spring Boot — source code, Docker build and CI validation; no live runtime |
| AI API | Python, FastAPI — source code and CI validation; no live runtime or external LLM |
| Data | PostgreSQL |
| Vector retrieval | pgvector — planned |
| CI | GitHub Actions frontend data tests, Angular production build, Spring Boot tests and FastAPI tests |
| Hosting | GitHub Pages for static frontend; GitHub Actions for build and validation |

## Automated checks

The frontend uses Node.js's built-in test runner to validate synthetic fixture integrity and search behaviour. GitHub Actions runs the frontend tests and production build. Before publishing, the Pages workflow verifies that the Angular browser index file exists at frontend/dist/finsight-frontend/browser/index.html; the deploy job runs only after the build job succeeds.

Run the frontend checks from the frontend directory:

- npm test
- npm run build

## Repository layout

- frontend/ — Angular application and frontend tests
- backend/ — Spring Boot API foundation
- ai-service/ — Python FastAPI service foundation
- infrastructure/ — Docker Compose and infrastructure notes
- docs/ — Architecture, API, roadmap and demo-data policy
- .github/workflows/ — GitHub Actions build, test and Pages deployment

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
