# Implementation Roadmap

Work in small milestones suitable for 1–2 hours per day. Mark an item complete only after it runs and has been checked.

## Milestone 0 — Repository foundation
- [x] Create public GitHub repository
- [x] Add project overview and architecture notes
- [x] Add ignore rules and demo-data policy
- [ ] Add initial application skeletons

## Milestone 1 — Local development foundation
- [ ] Add Docker Compose PostgreSQL
- [ ] Add database schema and synthetic seed data
- [ ] Create Spring Boot service with health endpoint
- [ ] Create Angular application shell
- [ ] Verify all components locally

## Milestone 2 — Banking API
- [ ] Account summary endpoint
- [ ] Transaction list, pagination and filters
- [ ] Spending aggregation endpoint
- [ ] Validation and global exception handling
- [ ] Unit and integration tests

## Milestone 3 — Dashboard experience
- [ ] Responsive overview dashboard
- [ ] Transaction table and filters
- [ ] Spending charts
- [ ] Loading, empty and error states
- [ ] Connect UI to real API responses

## Milestone 4 — AI assistant
- [ ] FastAPI service skeleton
- [ ] Curated fictional banking FAQ/document set
- [ ] Retrieval pipeline and citations to retrieved demo documents
- [ ] Chat UI and safe fallback behaviour
- [ ] AI integration tests

## Milestone 5 — Loan insights and hardening
- [ ] Explainable demo loan estimate rules
- [ ] Clearly show assumptions and limitations
- [ ] Authentication and role-based access for demo users
- [ ] Security review and dependency checks

## Milestone 6 — Delivery
- [ ] Dockerfiles and production configuration
- [ ] GitHub Actions build and test workflow
- [ ] Deployment and smoke tests
- [ ] Screenshots and short walkthrough video
- [ ] LinkedIn launch post

## Working agreement

- One small feature per work session.
- Commit only code that builds or explain clearly why it is a WIP.
- Never use real customer, employer or bank information.
- Keep README setup instructions aligned with the actual implementation.
