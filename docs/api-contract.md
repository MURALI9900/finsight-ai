# Initial API Contract

All endpoints in this document are part of the FinSight AI portfolio demonstration and use fictional data only.

## Health

- **Method:** GET
- **Path:** `/api/v1/health`
- **Purpose:** Confirms that the Spring Boot API is running.

## Dashboard summary

- **Method:** GET
- **Path:** `/api/v1/dashboard/summary`
- **Purpose:** Returns summary metrics for the demo banking dashboard.

Example response:

```json
{
  "demoData": true,
  "currency": "INR",
  "totalCustomers": 1250,
  "totalAccounts": 1875,
  "activeLoans": 432,
  "monthlyTransactions": 18450,
  "totalDeposits": 128450000.00,
  "totalOutstandingLoans": 76250000.00,
  "asOfDate": "2026-11-26"
}
```

The values above are fictional demonstration figures. The service currently returns in-memory sample values; database integration is planned for a later milestone. Do not use these figures for financial or credit decisions.
