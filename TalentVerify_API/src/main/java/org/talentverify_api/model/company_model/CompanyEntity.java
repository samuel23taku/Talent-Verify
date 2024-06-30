package org.talentverify_api.model.company_model;


import jakarta.persistence.*;
import org.talentverify_api.model.dapartment_model.DepartmentEntity;

import java.util.List;

@Entity
public class CompanyEntity {
    @jakarta.persistence.Id
    private String registrationNumber;
    private String companyName;
    private String dateRegistered;
    private String numberOfEmployees; // Todo(Not editable, should be based on the number of employees available in company
    private String address;
    private String contactPerson;
    private String contactPersonPhone;
    private String emailAddress;

    @OneToMany(mappedBy = "company", cascade = CascadeType.REMOVE)
    private List<DepartmentEntity> departments;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getDateRegistered() {
        return dateRegistered;
    }

    public void setDateRegistered(String dateRegistered) {
        this.dateRegistered = dateRegistered;
    }

    public String getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public void setNumberOfEmployees(String numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getContactPersonPhone() {
        return contactPersonPhone;
    }

    public void setContactPersonPhone(String contactPersonPhone) {
        this.contactPersonPhone = contactPersonPhone;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}
