package com.muralidhar.finsight.dashboard;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.stereotype.Service;

/**
 * Supplies fictional metrics for the FinSight AI portfolio demonstration.
 * Replace this implementation with repository-backed queries in a later milestone.
 */
@Service
public class DashboardService {

    public DashboardSummary getSummary() {
        return new DashboardSummary(
                true,
                "INR",
                1_250,
                1_875,
                432,
                18_450,
                new BigDecimal("128450000.00"),
                new BigDecimal("76250000.00"),
                LocalDate.now()
        );
    }
}
