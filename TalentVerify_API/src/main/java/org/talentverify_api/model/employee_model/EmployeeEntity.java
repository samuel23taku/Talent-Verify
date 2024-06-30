package org.talentverify_api.model.employee_model;

import jakarta.persistence.*;
import org.talentverify_api.model.dapartment_model.DepartmentEntity;

@Entity
public class EmployeeEntity {
    @Id
    private String employeeId;
    private String name;
    private String role;
    private String dateStartedRole;
    private String dateLeftRole; // Can be null
    private String dutiesInRole;

    public String getDateStartedRole() {
        return dateStartedRole;
    }

    public void setDateStartedRole(String dateStartedRole) {
        this.dateStartedRole = dateStartedRole;
    }

    public String getDateLeftRole() {
        return dateLeftRole;
    }

    public void setDateLeftRole(String dateLeftRole) {
        this.dateLeftRole = dateLeftRole;
    }

    public String getDutiesInRole() {
        return dutiesInRole;
    }

    public void setDutiesInRole(String dutiesInRole) {
        this.dutiesInRole = dutiesInRole;
    }

    @ManyToOne
    @JoinColumn(name = "departmentId")
    private DepartmentEntity department;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public DepartmentEntity getDepartment() {
        return department;
    }

    public void setDepartment(DepartmentEntity department) {
        this.department = department;
    }

//    public List<RoleHistoryEntity> getRoleHistories() {
//        return roleHistories;
//    }
//
//    public void setRoleHistories(List<RoleHistoryEntity> roleHistories) {
//        this.roleHistories = roleHistories;
//    }
}