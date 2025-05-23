package com.KM.KM_Valuers;

public class InvoiceDTO {
    private Long id;
    private String fileNumber;
    private String invoiceDate;
    private String purpose;
    private float totalPrice;
    private String bank;

    public InvoiceDTO(Long id, String fileNumber, String invoiceDate, String purpose, float totalPrice, String bank) {
        this.id = id;
        this.fileNumber = fileNumber;
        this.invoiceDate = invoiceDate;
        this.purpose = purpose;
        this.totalPrice = totalPrice;
        this.bank = bank;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileNumber() {
        return fileNumber;
    }

    public void setFileNumber(String fileNumber) {
        this.fileNumber = fileNumber;
    }

    public String getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }
}
