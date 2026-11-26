# GitHub Backend Deployment Readiness

## Current hosting model

- Angular frontend: deployed as a static site with GitHub Pages.
- Spring Boot backend: source code and Docker image build are maintained in this repository.
- GitHub Actions: runs tests and validates that the backend Docker image can be built.
- Live backend runtime: not deployed yet.

## Important GitHub limitation

GitHub Pages serves static files. It does not run a continuously available Spring Boot process or provide a managed PostgreSQL server. GitHub Actions runners are temporary build environments, not application servers.

Therefore, the frontend dashboard API request will continue to use clearly labelled synthetic demo data until a public backend API URL is configured.

## GitHub-only preparation

The `Backend container validation` workflow builds the backend Docker image on GitHub-hosted runners. It does not publish the image or expose an API endpoint.

A later hosting step can publish the validated image to GitHub Container Registry (GHCR) and run it on a compatible application host, or connect this repository to a compatible container hosting provider.

## Backend container contract

- Build context: `backend/`
- Dockerfile: `backend/Dockerfile`
- Java runtime: Java 17
- Container port: `8080`
- Configurable server port: `SERVER_PORT`
- Health endpoint: `/actuator/health`

## Safety

Use fictional demo data only. Do not commit API keys, database credentials, tokens, private certificates, or real customer/bank information. Configure future runtime secrets in the host's secret manager.
