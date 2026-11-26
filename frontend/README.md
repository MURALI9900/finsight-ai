# FinSight AI — Angular Frontend

A responsive Angular 19 standalone application for the FinSight AI synthetic banking portfolio demo.

## Screens

- Overview dashboard with sample metrics, portfolio chart and demo insights
- Customer directory with client-side search
- Accounts summary and fictional masked account references
- Loan portfolio indicators and category distribution
- Transaction register with client-side search
- AI assistant preview with local canned responses

## Technology

- Angular 19 and TypeScript 5.8
- Standalone components and Angular Router
- Responsive CSS; no third-party UI component library

## Demo data and integration status

All names, references, balances, counts and observations are fictional. The frontend uses local in-memory sample data and works without an external service. It is not connected to a running Spring Boot API, PostgreSQL database or FastAPI AI service. The repository retains the backend and AI-service source code, Docker configuration and automated checks; these are not continuously hosted. The AI assistant is a local prototype with canned responses, not a live generative AI integration.

The app is configured for the GitHub Pages project path `/finsight-ai/`. GitHub Actions builds the production bundle before publishing it.

## Build

The automated GitHub Actions workflow installs dependencies and runs `npm run build` from this directory. No credentials or API keys are required.
