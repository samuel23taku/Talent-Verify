package org.talentverify_api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("employee")
public class EmployeeController {

    @PostMapping("/addNewEmployee")
    public ResponseEntity addNewEmployee(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/deleteEmployee")
    public ResponseEntity deleteEmployee(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/updateEmployee")
    public ResponseEntity updateEmployee(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/searchEmployee")
    public ResponseEntity searchCompany(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/getCompanyEmployees")
    public ResponseEntity getAllCompanies(){
        return ResponseEntity.ok().build();
    }
}
