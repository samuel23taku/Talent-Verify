import "../styles/DepartmentComponent.css";
import React from "react";
import CreateEmployeeModalDialog from "./Dialogs/CreateNewEmployeeDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, deleteEmployee, updateEmployee } from "../services/employee_service";
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

  const handleSubmitCreatedEmployee = () => {
    // Handle the form submission here
    setIsEmployeeModalOpen(false);
    employeeData.department = selectedDepartment;
    createEmployee(dispatch,[employeeData])
    
  };



  const handleSubmitEditedEmployee = () => {
    // Handle the form submission here
    setIsEditEmployeeModalOpen(false);
    updateEmployee(dispatch,[editEmployeeData])
  };

  const handleDeleteEmployee = (employee)=>{
    deleteEmployee(dispatch,employee)
  }

  const handleUpdateEmployee = (employee) => {
    console.log(selectedEmployee)
    setEditEmployeeData({
      name: employee.name,
      employeeId: employee.employeeId,
      role: employee.role,
      department: employee.department,
      dutiesInRole:employee.dutiesInRole,
      dateStartedRole:employee.dateStartedRole,
      dateLeftRole:employee.dateLeftRole,
    })
    setIsEditEmployeeModalOpen(true)
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
              handleUpdateEmployee(employee);
            }} className="employee-button">Edit</button>
          </li>
        ))}
      </ul>
      </div>
      <CreateEmployeeModalDialog
        isOpen={isEmployeeModalOpen}
        onRequestClose={handleCloseEmployeeModal}
        title="Create Employee"
        handleSubmit={handleSubmitCreatedEmployee}
        employeeData={employeeData}
        setEmployeeData={setEmployeeData}
        handleFileUpload={handleFileUpload}
      />

      <EditEmployeeModalDialog isOpen={isEditEmployeeModalOpen}
      onRequestClose={()=>setIsEditEmployeeModalOpen(false)} 
      title={"Edit Employee"}
      setEditEmployeeData={setEditEmployeeData}
      employeeData={editEmployeeData} 
      handleSubmit={()=>handleSubmitEditedEmployee()}
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
