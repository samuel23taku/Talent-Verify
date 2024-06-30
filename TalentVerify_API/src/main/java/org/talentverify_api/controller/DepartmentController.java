package org.talentverify_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.talentverify_api.model.dapartment_model.DepartmentEntity;
import org.talentverify_api.model.dapartment_model.DepartmentRepository;

import java.util.List;

@RestController
@RequestMapping("/department")
public class DepartmentController {
    private final DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @PostMapping("/createNewDepartment")
    public DepartmentEntity createNewDepartment(@RequestBody DepartmentEntity department) {
        System.out.println("Deparment name is" + department.getDepartmentName());
        return departmentRepository.save(department);
    }


    @DeleteMapping("/deleteDepartment/{departmentId}")
    public ResponseEntity deleteDepartment(@PathVariable Long departmentId) {
        departmentRepository.deleteById(departmentId);
        return ResponseEntity.ok().build();
    }


    @PatchMapping("/updateDepartment")
    public ResponseEntity updateDepartment() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/searchDepartment")
    public ResponseEntity searchDepartment() {
        return ResponseEntity.ok().build();
    }


    @GetMapping("/getDepartments/{registrationNumber}")
    public List<DepartmentEntity> getDepartments(@PathVariable String registrationNumber) {
        System.out.println("Company Id is " + registrationNumber);
        return departmentRepository.findByCompanyRegistrationNumber(registrationNumber);
    }
}