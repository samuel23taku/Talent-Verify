import "../styles/DepartmentComponent.css";
import React from "react";
import CreateEmployeeModalDialog from "./Dialogs/CreateNewEmployeeDialog";
import { useState } from "react";
const EmployeeComponent = ({ employees }) => {
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
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
  };

  const handleFileUpload = (e) => {
    // Handle file upload here
    const file = e.target.files[0];
    // Process the file
  };
  return (
    <div>
      <h2 className="employee-header">Employees</h2>
      <div>
      <ul>
        <h1>Text</h1>
        {/* {employees.map((employee, index) => (
          <li key={index} className="employee-item">
            {employee.name}
            <button className="employee-button">Edit</button>
          </li>
        ))} */}
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
