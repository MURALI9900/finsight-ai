# GitHub Backend Deployment Readiness

## Current hosting model

- Angular frontend: deployed as a static site with GitHub Pages.
- Spring Boot backend: source code and Docker image build are maintained in this repository.
- GitHub Actions: runs tests and validates that the backend Docker image can be built.
- Live backend runtime: intentionally not deployed; the portfolio uses a browser-based demo.

## Important GitHub limitation

GitHub Pages serves static files. It does not run a continuously available Spring Boot process or provide a managed PostgreSQL server. GitHub Actions runners are temporary build environments, not application servers.

Therefore, the live frontend uses clearly labelled synthetic local data. It does not send failing API requests or imply that a backend is running.

## GitHub-only preparation

GitHub Actions validates the backend source and Docker build. The repository also retains the backend container image in GitHub Container Registry (GHCR). GHCR stores the image but does not run it as a server. No external hosting provider is part of the selected plan.

## Backend container contract

- Build context: `backend/`
- Dockerfile: `backend/Dockerfile`
- Java runtime: Java 17
- Container port: `8080`
- Configurable server port: `SERVER_PORT`
- Health endpoint: `/actuator/health`

## Safety

Use fictional demo data only. Do not commit API keys, database credentials, tokens, private certificates, or real customer/bank information. If a runtime is ever added in the future, configure secrets through that runtime's secret manager; never commit them to Git.
