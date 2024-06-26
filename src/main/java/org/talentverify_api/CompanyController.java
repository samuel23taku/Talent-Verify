package org.talentverify_api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// Adding,Removing companies etc
@RestController
@RequestMapping("/company")
public class CompanyController {

    @PostMapping("/addNewCompany")
    public ResponseEntity addNewCompany(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/deleteCompany")
    public ResponseEntity deleteCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/updateCompany")
    public ResponseEntity updateCompany(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/getAllCompanies")
    public ResponseEntity getAllCompanies(){
        return ResponseEntity.ok().build();
    }
}
