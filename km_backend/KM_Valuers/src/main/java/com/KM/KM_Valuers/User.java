package com.KM.KM_Valuers;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name = "login_id")
    private Long loginId;

    @Column(name = "login_mail_id")
    private String loginMailId;

    @Column(name = "password")
    private String password;

    @Column(name = "role_id")
    private Integer roleId;

    // getters and setters
    public Long getLoginId() { return loginId; }
    public void setLoginId(Long loginId) { this.loginId = loginId; }

    public String getLoginMailId() { return loginMailId; }
    public void setLoginMailId(String loginMailId) { this.loginMailId = loginMailId; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public Integer getRoleId() { return roleId; }
    public void setRoleId(Integer roleId) { this.roleId = roleId; }
}