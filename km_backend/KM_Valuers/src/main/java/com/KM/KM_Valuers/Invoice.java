package com.KM.KM_Valuers;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "invoice")
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoice_id")
    private Long invoiceId;

    @Column(name = "invoice_date")
    private String invoiceDate;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "service_description")
    private String serviceDescription;

    @Column(name = "price")
    private int price;

    @Column(name = "fileNumber")
    private String fileNumber;

    @Column(name = "invoice_to")
    private String invoiceTo;

    @Column(name = "valuation_purpose")
    private String valuationPurpose;

    @Column(name = "TOTAL_PRICE")
    private float totalPrice;

    @Column(name = "customer_pan")
    private String customerPan;

    @Column(name = "customer_gstn")
    private String customerGstn;

    // Getters and setters
    public Long getInvoiceId() { return invoiceId; }
    public String getFileNumber() { return fileNumber; }
    public String getInvoiceDate() { return invoiceDate; }
    public String getValuationPurpose() { return valuationPurpose; }
    public float getTotalPrice() { return totalPrice; }
    public String getBankName() { return bankName; }
}
