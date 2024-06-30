package org.talentverify_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.talentverify_api.model.employee_model.EmployeeEntity;
import org.talentverify_api.model.employee_model.EmployeeRepository;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/addNewEmployee")
    public EmployeeEntity addNewEmployee(@RequestBody EmployeeEntity newEmployee){
        return employeeRepository.save(newEmployee);
    }


    @DeleteMapping("/deleteEmployee")
    public ResponseEntity deleteEmployee(@RequestBody EmployeeEntity employee){
        employeeRepository.delete(employee);
        return ResponseEntity.ok().build();
    }


    @PatchMapping("/updateEmployee")
    public ResponseEntity updateEmployee(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/searchEmployee")
    public ResponseEntity searchCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/getCompanyEmployees/{departmentId}")
    public List<EmployeeEntity> getAllCompanies(@PathVariable Long departmentId){
        System.out.println("Id is "+departmentId.toString());
        return employeeRepository.findByDepartmentDepartmentId(departmentId);
    }
}