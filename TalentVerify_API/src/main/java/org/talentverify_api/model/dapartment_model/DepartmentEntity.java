package org.talentverify_api.model.dapartment_model;
import jakarta.persistence.*;
import org.talentverify_api.model.company_model.CompanyEntity;
import org.talentverify_api.model.employee_model.EmployeeEntity;

import java.util.List;

@Entity
public class DepartmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;

    private String departmentName;

    @ManyToOne
    @JoinColumn(name = "companyId")
    private CompanyEntity company;

    @OneToMany(mappedBy = "department", cascade = CascadeType.REMOVE)
    private List<EmployeeEntity> employeeEntities;


    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public CompanyEntity getCompany() {
        return company;
    }

    public void setCompany(CompanyEntity company) {
        this.company = company;
    }

}