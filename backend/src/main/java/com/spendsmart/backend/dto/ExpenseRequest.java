package com.spendsmart.backend.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ExpenseRequest {
    private BigDecimal amount;
    private String description;
    private LocalDate date;
    private Long categoryId;
    private Long userId;
}