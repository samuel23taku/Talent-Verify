package org.talentverify_api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("employee")
public class EmployeeController {

    @PostMapping("/addNewCompany")
    public ResponseEntity addNewEmployee(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/deleteCompany")
    public ResponseEntity deleteEmployee(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/updateCompany")
    public ResponseEntity updateEmployee(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/getCompanyEmployees")
    public ResponseEntity getAllCompanies(){
        return ResponseEntity.ok().build();
    }
}
