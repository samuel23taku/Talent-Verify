import "../styles/DepartmentComponent.css";
import React from "react";
import CreateEmployeeModalDialog from "./Dialogs/CreateNewEmployeeDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../services/employee_service";
import EditEmployeeModalDialog from "./Dialogs/EditDialogs/EditEmployeeDialog";
import FileSelectButton from "./Buttons/FileSelectButton";
const EmployeeComponent = ({ selectedDepartment }) => {
  const dispatch = useDispatch();
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const loadingEmployees = useSelector((state) => state.employees.loading);
  const employees = useSelector((state) => state.employees.data);

  const [bulkCreateJsonData, setBulkCreateEmployeeJsonData] = useState(null);
  const [bulkUpdateJsonData, setBulkUpdateEmployeeJsonData] = useState(null);

  const [employeeData, setEmployeeData] = useState({
    name: "",
    employeeId: "",
    role: "",
    departmentId: "",
    dutiesInRole: "",
    dateStartedRole: "",
    dateLeftRole: "",
  });
  const [editEmployeeData, setEditEmployeeData] = useState({
    name: "",
    employeeId: "",
    role: "",
    departmentId: "",
    dutiesInRole: "",
    dateStartedRole: "",
    dateLeftRole: "",
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
    employeeData.departmentId = selectedDepartment.departmentId;
    createEmployee(dispatch, [employeeData]);
  };

  const handleSubmitEditedEmployee = () => {
    // Handle the form submission here
    setIsEditEmployeeModalOpen(false);
    updateEmployee(dispatch, [editEmployeeData]);
  };

  const handleDeleteEmployee = (employee) => {
    deleteEmployee(dispatch, employee);
  };

  const handleUpdateEmployee = (employee) => {
    setEditEmployeeData({
      name: employee.name,
      employeeId: employee.employeeId,
      role: employee.role,
      departmentId: employee.department,
      dutiesInRole: employee.dutiesInRole,
      dateStartedRole: employee.dateStartedRole,
      dateLeftRole: employee.dateLeftRole,
    });
    setIsEditEmployeeModalOpen(true);
  };

  const handleCreateEmployeesFileUpload = (event) => {
    console.log("Create employee");
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonContent = JSON.parse(e.target.result);
          console.log("employes are ", jsonContent);
          setBulkCreateEmployeeJsonData(jsonContent);
          console.warn("Employee list is ", jsonContent);
          createEmployee(dispatch, jsonContent);
        } catch (error) {
          alert("Error parsing JSON:", error);
          setBulkCreateEmployeeJsonData(null);
        }
      };
      reader.readAsText(file);
    } else {
      console.log("File is empty ", file);
    }
  };

  // Bulk upload company
  const handleUpdateEmployeeFileUpload = (event) => {
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonContent = JSON.parse(e.target.result);
          setBulkUpdateEmployeeJsonData(jsonContent);
          updateEmployee(dispatch, jsonContent);
        } catch (error) {
          alert("Error parsing JSON:", error);
          setBulkUpdateEmployeeJsonData(null);
        }
      };
      reader.readAsText(file);
    } else {
      console.log("File is empty ", file);
    }
  };

  if (loadingEmployees && employees) {
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
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteEmployee(employee);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setSelectedEmployee(employee);
                  handleUpdateEmployee(employee);
                }}
                className="edit-button"
              >
                Edit
              </button>
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
      />

      <EditEmployeeModalDialog
        isOpen={isEditEmployeeModalOpen}
        onRequestClose={() => setIsEditEmployeeModalOpen(false)}
        title={"Edit Employee"}
        setEditEmployeeData={setEditEmployeeData}
        employeeData={editEmployeeData}
        handleSubmit={() => handleSubmitEditedEmployee()}
      />

      <button
        className="single-entry-button"
        onClick={() => {
          handleOpenEmployeeModal();
        }}
      >
        Add New employee
      </button>
      <h1></h1>
      <FileSelectButton
        title={"Bulk Create Employees (json)"}
        buttonClassType={"bulk-entry-button"}
        id={4}
        onFileSelect={handleCreateEmployeesFileUpload}
      />
      <h1></h1>
      <FileSelectButton
        title={"Bulk Update Employees"}
        buttonClassType={"bulk-update-button"}
        id={3}
        onFileSelect={handleUpdateEmployeeFileUpload}
      />
    </div>
  );
};

export default EmployeeComponent;
