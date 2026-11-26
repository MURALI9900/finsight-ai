# Implementation Roadmap

Mark work complete only after the implementation and its relevant checks have been verified.

## Milestone 0 — Repository foundation
- [x] Create public GitHub repository
- [x] Add architecture, API and demo-data documentation
- [x] Add ignore rules and security guidance

## Milestone 1 — Application foundations
- [x] Add Spring Boot service foundation and health endpoint
- [x] Add FastAPI service foundation and health endpoint
- [x] Add Angular 19 application shell
- [x] Configure responsive styling and GitHub Pages hash routing
- [x] Add GitHub Actions build and test workflow
- [x] Verify Angular production build, Spring Boot tests and FastAPI tests in GitHub Actions

## Milestone 2 — Angular banking demo experience
- [x] Overview dashboard with synthetic metrics
- [x] Customers directory and search
- [x] Accounts view with fictional masked references
- [x] Loan portfolio summary
- [x] Transactions view and search
- [x] AI Assistant preview with local sample responses
- [ ] Add fuller loading, empty and error states across all screens
- [ ] Add focused Angular component and routing tests
- [ ] Verify the Angular GitHub Pages deployment and live URL

## Milestone 3 — Banking API
- [ ] Account summary endpoint
- [ ] Transaction list, pagination and filters
- [ ] Spending aggregation endpoint
- [ ] Validation and global exception handling
- [ ] Unit and integration tests
- [ ] Connect Angular screens to verified API responses

## Milestone 4 — AI assistant
- [ ] Curated fictional banking FAQ/document set
- [ ] Retrieval pipeline and citations to retrieved demo documents
- [ ] Connect chat UI to FastAPI
- [ ] AI integration tests and safe fallback behaviour

## Milestone 5 — Loan insights and hardening
- [ ] Explainable demo loan estimate rules and assumptions
- [ ] Authentication and role-based access for demo users
- [ ] Security and dependency review

## Milestone 6 — Portfolio delivery
- [ ] Verify deployment and capture screenshots
- [ ] Prepare a short project walkthrough
- [ ] Publish a LinkedIn project post

## Working agreement
- Work in small, reviewable steps.
- Keep README and roadmap aligned with verified implementation.
- Never use real customer, employer or bank information.
- Keep backend and AI integration marked as pending until implemented and tested.
