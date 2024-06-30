package org.talentverify_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.talentverify_api.model.company_model.CompanyEntity;
import org.talentverify_api.model.company_model.CompanyRepository;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/company")
public class CompanyController {
    private final CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @PostMapping("/createNewCompany")
    public List<CompanyEntity> createNewCompany(@RequestBody List<CompanyEntity> companies){
        return (List<CompanyEntity>) companyRepository.saveAll(companies);
    }


    @DeleteMapping("/deleteCompany/{companyId}")
    public ResponseEntity deleteCompany(@PathVariable Long companyId){
        companyRepository.deleteById(companyId);
        return ResponseEntity.ok().build();
    }


    @PatchMapping("/updateCompany")
    public ResponseEntity updateCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/searchCompany")
    public ResponseEntity searchCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/getAllCompanies")
    public List<CompanyEntity> getAllCompanies(){
        return (List<CompanyEntity>) companyRepository.findAll();
    }
}

// Adding,Removing companies etc
