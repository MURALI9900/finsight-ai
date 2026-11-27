# FinSight AI — Angular Frontend

A responsive Angular 19 standalone application for the FinSight AI synthetic banking portfolio demo.

## Screens

- Overview dashboard with sample metrics, portfolio chart and demo insights
- Customer directory with client-side search and an accessible no-results state
- Accounts summary with fictional masked account references
- Loan portfolio indicators and illustrative category distribution
- Transaction register with client-side search and an accessible no-results state
- AI assistant preview with local canned responses

## Technology

- Angular 19 and TypeScript 5.8
- Standalone components and Angular Router with hash-based GitHub Pages navigation
- Responsive CSS; no third-party UI component library
- Reusable accessible state panel for loading, empty and error presentations
- Node.js built-in test runner for synthetic data and search helper tests

## Demo data and integration status

All names, references, balances, counts and observations are fictional. The frontend uses local in-memory sample data and works without an external service. It is not connected to a running Spring Boot API, PostgreSQL database or FastAPI AI service. The AI assistant is a local prototype with canned responses, not a live generative AI integration.

The current demo data is bundled and loaded synchronously, so it does not show artificial network loading or connection-error states. The reusable state panel includes accessible loading and error variants for future API-backed screens; current customer and transaction searches display the empty variant when no records match.

The app is configured for the GitHub Pages project path /finsight-ai/. GitHub Actions runs the data tests, builds the Angular production bundle, verifies the Pages entry point and then uploads the configured artifact. The deploy job depends on the successful build job.

## Checks

Run from this directory:

- npm test
- npm run build

No credentials or API keys are required.
