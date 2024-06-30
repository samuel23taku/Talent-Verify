package org.talentverify_api.model.employee_model;

import jakarta.persistence.*;
import org.talentverify_api.model.company_model.CompanyEntity;
import org.talentverify_api.model.dapartment_model.DepartmentEntity;
import org.talentverify_api.model.role_model.RoleHistoryEntity;

import java.util.List;

@Entity
public class EmployeeEntity {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
    private String employeeId;
    private String name;
    private String role;

    @ManyToOne
    @JoinColumn(name = "departmentId")
    private DepartmentEntity department;

//    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<RoleHistoryEntity> roleHistories;


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