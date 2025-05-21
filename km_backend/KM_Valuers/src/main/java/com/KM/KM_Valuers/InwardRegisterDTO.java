package com.KM.KM_Valuers;

public class InwardRegisterDTO {
    private Long sNo;
    private String fileNumber;
    private String bank;
    private String inwardDate;
    private String villageOrTown;
    private String status;
    private String remarks;

    // getters and setters
    public Long getSNo() { return sNo; }
    public void setSNo(Long sNo) { this.sNo = sNo; }
    public String getFileNumber() { return fileNumber; }
    public void setFileNumber(String fileNumber) { this.fileNumber = fileNumber; }
    public String getBank() { return bank; }
    public void setBank(String bank) { this.bank = bank; }
    public String getInwardDate() { return inwardDate; }
    public void setInwardDate(String inwardDate) { this.inwardDate = inwardDate; }
    public String getVillageOrTown() { return villageOrTown; }
    public void setVillageOrTown(String villageOrTown) { this.villageOrTown = villageOrTown; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
}