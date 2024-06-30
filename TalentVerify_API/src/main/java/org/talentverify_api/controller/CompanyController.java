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


    @DeleteMapping("/deleteCompany/{registrationNumber}")
    public ResponseEntity deleteCompany(@PathVariable String registrationNumber){
        companyRepository.deleteById(registrationNumber);
        return ResponseEntity.ok().build();
    }


    @PostMapping("/updateCompany")
    public List<CompanyEntity> updateCompany(@RequestBody List<CompanyEntity> companies){
        return (List<CompanyEntity>) companyRepository.saveAll(companies);
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
