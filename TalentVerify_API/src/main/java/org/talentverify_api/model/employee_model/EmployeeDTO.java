package org.talentverify_api.model.employee_model;

public class EmployeeDTO {
        private String employeeId;
        private String name;
        private String role;
        private String dateStartedRole;
        private String dateLeftRole; // Can be null
        private String dutiesInRole;
        private Long departmentId;

        public String getEmployeeId() {
                return employeeId;
        }

        public void setEmployeeId(String employeeId) {
                this.employeeId = employeeId;
        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public String getRole() {
                return role;
        }

        public void setRole(String role) {
                this.role = role;
        }

        public String getDateStartedRole() {
                return dateStartedRole;
        }

        public void setDateStartedRole(String dateStartedRole) {
                this.dateStartedRole = dateStartedRole;
        }

        public String getDateLeftRole() {
                return dateLeftRole;
        }

        public void setDateLeftRole(String dateLeftRole) {
                this.dateLeftRole = dateLeftRole;
        }

        public String getDutiesInRole() {
                return dutiesInRole;
        }

        public void setDutiesInRole(String dutiesInRole) {
                this.dutiesInRole = dutiesInRole;
        }

        public Long getDepartmentId() {
                return departmentId;
        }

        public void setDepartmentId(Long departmentId) {
                this.departmentId = departmentId;
        }
}
