package org.talentverify_api.model.role_model;

import jakarta.persistence.*;
import org.talentverify_api.model.employee_model.EmployeeEntity;

@Entity
public class RoleHistoryEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "employee_id")
        private EmployeeEntity employee;

        private String role;
        private String dateStarted;
        private String dateLeft;
        private String duties;
        // Getters and Setters
    }
