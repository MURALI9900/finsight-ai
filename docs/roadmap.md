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
- [x] Add reusable accessible loading, empty and error state presentation
- [x] Show actionable empty states when customer or transaction searches return no matches
- [x] Add frontend data and search helper tests using Node.js built-in test runner
- [x] Verify Angular production build, Pages artifact entry point and deployment workflow in GitHub Actions
- [ ] Add focused Angular component and routing tests
- [ ] Manually review every route and responsive layout in a browser

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
- [x] Publish the Angular static frontend to GitHub Pages (deployment run #13 succeeded)
- [ ] Capture screenshots
- [ ] Prepare a short project walkthrough
- [ ] Publish a LinkedIn project post

## Working agreement
- Work in small, reviewable steps.
- Keep README and roadmap aligned with verified implementation.
- Never use real customer, employer or bank information.
- Keep backend and AI integration marked as pending until implemented and tested.
