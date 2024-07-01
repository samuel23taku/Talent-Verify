package org.talentverify_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.talentverify_api.model.dapartment_model.DepartmentEntity;
import org.talentverify_api.model.dapartment_model.DepartmentRepository;
import org.talentverify_api.model.employee_model.EmployeeDTO;
import org.talentverify_api.model.employee_model.EmployeeEntity;
import org.talentverify_api.model.employee_model.EmployeeRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;

    public EmployeeController(EmployeeRepository employeeRepository,DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    @PostMapping("/addNewEmployee")
    public List<EmployeeDTO> addNewEmployee(@RequestBody List<EmployeeDTO> employeeDTOs){
        List<EmployeeEntity> employees = employeeDTOs.stream()
                .map(dto -> {
                    DepartmentEntity department = departmentRepository.findById(dto.getDepartmentId()).orElseThrow(() -> new RuntimeException("Department not found"));
                    EmployeeEntity employee = new EmployeeEntity();
                    employee.setEmployeeId(dto.getEmployeeId());
                    employee.setName(dto.getName());
                    employee.setRole(dto.getRole());
                    employee.setDateStartedRole(dto.getDateStartedRole());
                    employee.setDateLeftRole(dto.getDateLeftRole());
                    employee.setDutiesInRole(dto.getDutiesInRole());
                    employee.setDepartment(department);
                    return employee;
                })
                .collect(Collectors.toList());

        System.out.println("Employeies are "+employees.size());
        List<EmployeeEntity> updateRes = (List<EmployeeEntity>) employeeRepository.saveAll(employees);

        List<EmployeeDTO> responseDTOs = updateRes.stream()
                .map(EmployeeMapper::toDTO)
                .collect(Collectors.toList());
        return responseDTOs;
    }


    @DeleteMapping("/deleteEmployee/{employeeId}")
    public ResponseEntity deleteEmployee(@PathVariable String employeeId){
        employeeRepository.deleteById(employeeId);
        return ResponseEntity.ok().build();
    }


    @PatchMapping("/updateEmployee")
    public List<EmployeeEntity> updateEmployee(@RequestBody List<EmployeeEntity> employee){
        return (List<EmployeeEntity>) employeeRepository.saveAll(employee);
    }

    @GetMapping("/searchEmployee")
    public ResponseEntity searchCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/getCompanyEmployees/{departmentId}")
    public List<EmployeeDTO> getAllCompanies(@PathVariable Long departmentId){
        List<EmployeeEntity> employeeEntities = employeeRepository.findByDepartmentDepartmentId(departmentId);
        return employeeEntities.stream()
                .map(EmployeeMapper::toDTO)
                .collect(Collectors.toList());
    }
}

class EmployeeMapper {
    public static EmployeeDTO toDTO(EmployeeEntity employeeEntity) {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setEmployeeId(employeeEntity.getEmployeeId());
        employeeDTO.setName(employeeEntity.getName());
        employeeDTO.setRole(employeeEntity.getRole());
        employeeDTO.setDateStartedRole(employeeEntity.getDateStartedRole());
        employeeDTO.setDateLeftRole(employeeEntity.getDateLeftRole());
        employeeDTO.setDutiesInRole(employeeEntity.getDutiesInRole());
        employeeDTO.setDepartmentId(employeeEntity.getDepartment().getDepartmentId());
        return employeeDTO;
    }
}