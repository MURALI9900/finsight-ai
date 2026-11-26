package com.muralidhar.finsight.dashboard;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Dashboard metrics generated from fictional portfolio demo data.
 */
public record DashboardSummary(
        boolean demoData,
        String currency,
        long totalCustomers,
        long totalAccounts,
        long activeLoans,
        long monthlyTransactions,
        BigDecimal totalDeposits,
        BigDecimal totalOutstandingLoans,
        LocalDate asOfDate
) {
}
