package com.KM.KM_Valuers;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "creditor")
public class Creditor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "creditor_id")
    private Long id;

    @Column(name = "creditor_name")
    private String bankName;

    private String branch;
    private String area;
    private String state;

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }

    public String getBranch() { return branch; }
    public void setBranch(String branch) { this.branch = branch; }

    public String getArea() { return area; }
    public void setArea(String area) { this.area = area; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
}
