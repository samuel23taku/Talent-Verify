import "../styles/DepartmentComponent.css";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeComponent from "./EmployeeComponent";
import {
  createDepartment,
  updateDepartment,
  deleteDepartment,
  fetchDepartmentsByCompany,
} from "../services/department_service";
import CreateDepartmentDialog from "./Dialogs/CreateDepartmentDialog";
import { fetchEmployeesByDepartment } from "../services/employee_service";

const DepartmentComponent = ({ selectedCompany,selectedDepartment,setSelectedDepartment }) => {
  const dispatch = useDispatch();
  const depData = useSelector((state) => state.departments.data)
  const [departments,setDepartments] = useState([]);
  useEffect(() => {
    setDepartments(depData);
  }, [depData]);
  const loadingDepartments = useSelector((state) => state.departments.loading);
  const errorDepartments = useSelector((state) => state.departments.error);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [departmentData, setDepartmentData] = useState({
    id: 0,
    departmentName: "",
    company: selectedCompany,
  });

  const handleSelectDepartment = (department) => {
    setSelectedDepartment(department);
    fetchEmployeesByDepartment(dispatch,department.departmentId);
  };

  const handleCreateDepartment = (newDepartment) => {
    // dispatch(createDepartment(newDepartment));
    setIsModalOpen(true);
  };

  const handleUpdateDepartment = (departmentId, updatedDepartment) => {
    dispatch(updateDepartment(departmentId, updatedDepartment));
  };

  const handleDeleteDepartment = (departmentId) => {
    console.log("Dep is ",departmentId)
    deleteDepartment(dispatch,departmentId)
    // setDepartments(updateDepartment)
  };

  const handleSubmit = () => {
    // createDepartment(companyData,dispatch);
    createDepartment(dispatch, departmentData);
    setIsModalOpen(false);
    // console.log(companyData)
  };

  const handleCloseDialog = () => {
    setIsModalOpen(false);
  };

  if (loadingDepartments && departments) {
    return <div>Loading...</div>;
  }

  if (errorDepartments) {
    return <div>Error: {errorDepartments.message}</div>;
  }

  return (
    <div>
      {selectedCompany && (
          <div>
            <h2 className="department-header">Departments</h2>
            <ul>
              {departments.map((department) => (
                <li
                className={selectedDepartment != null  && department.departmentId != undefined && selectedDepartment.departmentId == department.departmentId ? "active": ""}
                  // className={department.depatmentId == selectedDepartment.departmentId ? "active" : ""}
                  onClick={() => handleSelectDepartment(department)}
                >
                  {department != undefined ? (
                    department.departmentName
                  ) : (
                    <h6></h6>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // handleUpdateDepartment(department.departmentId, department);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteDepartment(department.departmentId);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                handleCreateDepartment({
                  name: "New Department",
                  departmentId: selectedCompany.companyId,
                })
              }
            >
              Create Department
            </button>

            <CreateDepartmentDialog
              isOpen={isModalOpen}
              onRequestClose={handleCloseDialog}
              title={`Create Department for company ${selectedCompany.companyName}`}
              setDepartmentData={setDepartmentData}
              departmentData={departmentData}
              handleSubmit={handleSubmit}
            />
          </div>
      )}
    </div>
  );
};

export default DepartmentComponent;
