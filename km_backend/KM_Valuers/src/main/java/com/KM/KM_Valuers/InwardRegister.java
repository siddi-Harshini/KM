package com.KM.KM_Valuers;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "inward_register")
public class InwardRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "filenumber")
    private String fileNumber;

    @Column(name = "bank")
    private Long bank; // This is the creditor_id (foreign key)

    @Column(name = "inward_date")
    private String inwardDate;

    @Column(name = "village")
    private String villageOrTown;

    @Column(name = "file_status")
    private String status;

    @Column(name = "remarks")
    private String remarks;

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFileNumber() { return fileNumber; }
    public void setFileNumber(String fileNumber) { this.fileNumber = fileNumber; }

    public Long getBank() { return bank; }
    public void setBank(Long bank) { this.bank = bank; }

    public String getInwardDate() { return inwardDate; }
    public void setInwardDate(String inwardDate) { this.inwardDate = inwardDate; }

    public String getVillageOrTown() { return villageOrTown; }
    public void setVillageOrTown(String villageOrTown) { this.villageOrTown = villageOrTown; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
}
