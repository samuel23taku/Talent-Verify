package org.talentverify_api.model.employee_model;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<EmployeeEntity,Long> {
    List<EmployeeEntity> findByDepartmentDepartmentId(Long departmentId);
}
/*
    @GetMapping("/getCompanyEmployees/{departmentId}")
    public List<EmployeeEntity> getAllCompanies(@PathVariable Long departmentId){
        System.out.println("Id is "+departmentId.toString());
        return employeeRepository.findByDepartmentDepartmentId(departmentId);
    }
 */