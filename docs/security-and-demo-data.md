# Security and Synthetic Data Policy

FinSight AI is a portfolio demonstration, not a production banking system.

## Data policy

- Use fictional names, account identifiers, balances and transactions only.
- Never copy data, screenshots, logs, source code or configuration from an employer, client or bank.
- Do not upload customer records or confidential documents to an LLM.
- Label sample data and AI-generated estimates clearly in the UI and documentation.

## Secrets

- Do not commit API keys, database passwords, JWT secrets, private keys or certificates.
- Keep local values in an ignored `.env` file and provide safe placeholders in `.env.example`.
- Use hosting-provider secret management for deployments.
- Rotate any credential that is accidentally exposed.

## Application security

- Validate all incoming data on the server.
- Use parameterised database access.
- Apply authentication and authorisation before exposing user-specific records.
- Avoid logging credentials, tokens or sensitive request bodies.
- Configure CORS narrowly for known frontend origins.
- Return generic client-facing errors; keep diagnostic detail in protected server logs.

## AI safety

- Treat retrieved documents and user prompts as untrusted input.
- Ground answers in the approved demo knowledge base.
- Do not claim to access real bank accounts or perform real transactions.
- Do not present loan estimates as credit decisions or financial advice.
- If supporting context is missing, say so rather than inventing an answer.
