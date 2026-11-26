package com.muralidhar.finsight.dashboard;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class DashboardControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void summaryEndpointReturnsClearlyLabelledDemoMetrics() throws Exception {
        mockMvc.perform(get("/api/v1/dashboard/summary"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.demoData").value(true))
                .andExpect(jsonPath("$.currency").value("INR"))
                .andExpect(jsonPath("$.totalCustomers").value(1250))
                .andExpect(jsonPath("$.totalAccounts").value(1875))
                .andExpect(jsonPath("$.activeLoans").value(432))
                .andExpect(jsonPath("$.monthlyTransactions").value(18450))
                .andExpect(jsonPath("$.totalDeposits").value(128450000.00))
                .andExpect(jsonPath("$.totalOutstandingLoans").value(76250000.00))
                .andExpect(jsonPath("$.asOfDate").exists());
    }
}
