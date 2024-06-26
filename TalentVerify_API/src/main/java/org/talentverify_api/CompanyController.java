package org.talentverify_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.talentverify_api.model.CompanyEntity;
import org.talentverify_api.model.company_model.CompanyRepository;

import java.util.List;


// Adding,Removing companies etc
@RestController
@CrossOrigin(origins = "http://localhost:3000") // allow requests from React app on port 3000
@RequestMapping("/company")
public class CompanyController {
    private final CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @PostMapping("/addNewCompany")
    public CompanyEntity addNewCompany(@RequestBody CompanyEntity company){
        return companyRepository.save(company);
    }


    @PostMapping("/deleteCompany")
    public ResponseEntity deleteCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/updateCompany")
    public ResponseEntity updateCompany(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/searchCompany")
    public ResponseEntity searchCompany(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/getAllCompanies")
    public List<CompanyEntity> getAllCompanies(){
        return (List<CompanyEntity>) companyRepository.findAll();
    }
}
