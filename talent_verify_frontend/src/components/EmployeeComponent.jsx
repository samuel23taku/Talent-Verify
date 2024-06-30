import "../styles/DepartmentComponent.css";
import React from "react";
import CreateEmployeeModalDialog from "./Dialogs/CreateNewEmployeeDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../services/employee_service";
import EditEmployeeModalDialog from "./Dialogs/EditDialogs/EditEmployeeDialog";
const EmployeeComponent = ({selectedDepartment }) => {
  const dispatch = useDispatch();
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [selectedEmployee,setSelectedEmployee] = useState(null)
  const loadingEmployees = useSelector((state) => state.employees.loading);
  const employees = useSelector((state) => state.employees.data);

  const [employeeData, setEmployeeData] = useState({
    name: "",
    employeeId: "",
    role: "",
    department: "",
    dutiesInRole:"",
    dateStartedRole:"",
    dateLeftRole:"",

  });
  const [editEmployeeData, setEditEmployeeData] = useState({
    name: "",
    employeeId: "",
    role: "",
    department: "",
    dutiesInRole:"",
    dateStartedRole:"",
    dateLeftRole:"",

  });
  
  const handleOpenEmployeeModal = () => {
    setIsEmployeeModalOpen(true);
  };

  const handleCloseEmployeeModal = () => {
    setIsEmployeeModalOpen(false);
  };

  const handleSubmitEmployee = () => {
    // Handle the form submission here
    setIsEmployeeModalOpen(false);
    employeeData.department = selectedDepartment;
    createEmployee(dispatch,[employeeData])
    
  };

  const handleDeleteEmployee = (employee)=>{

  }

  const handleUpdateEmployee = () => {
    console.log(selectedEmployee)
    setEditEmployeeData({
      name: selectedEmployee.name,
      employeeId: selectedEmployee.employeeId,
      role: selectedEmployee.role,
      department: selectedEmployee.department,
      dutiesInRole:selectedEmployee.dutiesInRole,
      dateStartedRole:selectedEmployee.dateStartedRole,
      dateLeftRole:selectedEmployee.dateLeftRole,
    })
  }

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
        {employees.map((employee, index) => (
          <li key={index} className="employee-item">
            {employee.name}
            <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteEmployee(employee);
                  }}
                >
                  Delete
                </button>
            <button onClick={()=>{
              setSelectedEmployee(employee);
              setIsEditEmployeeModalOpen(true)
              handleUpdateEmployee();
            }} className="employee-button">Edit</button>
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

      <EditEmployeeModalDialog isOpen={isEditEmployeeModalOpen}
      onRequestClose={()=>setIsEditEmployeeModalOpen(false)}
      
      employeeData={editEmployeeData} />


    <button
          onClick={()=>{handleOpenEmployeeModal()}}
        >
          Add New employee
        </button>
    </div>
  );
};

export default EmployeeComponent;
