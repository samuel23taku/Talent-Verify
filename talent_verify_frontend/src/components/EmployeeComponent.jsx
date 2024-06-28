import "../styles/DepartmentComponent.css";
import React from "react";
import CreateEmployeeModalDialog from "./Dialogs/CreateNewEmployeeDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../services/employee_service";
const EmployeeComponent = ({selectedDepartment }) => {
  const dispatch = useDispatch();
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const loadingEmployees = useSelector((state) => state.employees.loading);
  const employees = useSelector((state) => state.employees.data);

  const [employeeData, setEmployeeData] = useState({
    name: "",
    employeeId: "",
    role: "",
    department: "",
  });
  
  const handleOpenEmployeeModal = () => {
    setIsEmployeeModalOpen(true);
  };

  const handleCloseEmployeeModal = () => {
    setIsEmployeeModalOpen(false);
  };

  const handleSubmitEmployee = () => {
    // Handle the form submission here
    console.log(employeeData);
    setIsEmployeeModalOpen(false);
    employeeData.department = selectedDepartment;
    createEmployee(dispatch,employeeData)
    
  };

  const handleFileUpload = (e) => {
    // Handle file upload here
    const file = e.target.files[0];
    // Process the file
  };
  if (loadingEmployees && employees ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="employee-header">Employees</h2>
      <div>
      <ul>
        <h1>Text</h1>
        <h2>Data{employees === undefined}</h2>
        {employees.map((employee, index) => (
          <li key={index} className="employee-item">
            {employee.name}
            <button className="employee-button">Edit</button>
          </li>
        ))}
      </ul>
      </div>
      <CreateEmployeeModalDialog
        isOpen={isEmployeeModalOpen}
        onRequestClose={handleCloseEmployeeModal}
        title="Create Employee"
        handleSubmit={handleSubmitEmployee}
        employeeData={employeeData}
        setEmployeeData={setEmployeeData}
        handleFileUpload={handleFileUpload}
      />


    <button
          onClick={()=>{handleOpenEmployeeModal()}}
        >
          Add New employee
        </button>
    </div>
  );
};

export default EmployeeComponent;
