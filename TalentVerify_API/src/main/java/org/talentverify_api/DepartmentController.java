package org.talentverify_api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("department")
@RestController
public class DepartmentController {
    @PostMapping("/addNewDepartment")
    public ResponseEntity addNewDepartment(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/deleteDepartment")
    public ResponseEntity deleteDepartment(){
        return ResponseEntity.ok().build();
    }


    @GetMapping("/updateDepartment")
    public ResponseEntity updateDepartment(){
        return ResponseEntity.ok().build();
    }
    @GetMapping("/searchDepartment")
    public ResponseEntity searchDepartment(){
        return ResponseEntity.ok().build();
    }


    @PostMapping("/getDepartments")
    public ResponseEntity getDepartments(){
        return ResponseEntity.ok().build();
    }
}