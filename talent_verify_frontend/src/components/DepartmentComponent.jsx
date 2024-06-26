import "../styles/DepartmentComponent.css";
import EmployeeComponent from "./EmployeeComponent";
import { useState } from "react";

const DepartmentComponent = ({selectedCompany}) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  let departments = [];

  const handleSelectDepartment = ({department}) => {
    // setSelectedCompany((prevCompany) => ({
    //   ...prevCompany,
    //   departments: prevCompany.departments.map((d) =>
    //     d.id === department.id
    //       ? { ...d, isSelected: true }
    //       : { ...d, isSelected: false }
    //   ),
    // }));
    setSelectedDepartment(department);
  };

  return (
    <div>
      {selectedCompany && !selectedDepartment && (
        <p className="selection-message">
          Please select a department to see the employees.
        </p>
      )}

      {selectedDepartment && (
        <div className="list-container">
          <EmployeeComponent
          // employees={selectedDepartment.employees}
          // onUpdateEmployee={(index, name) => handleUpdate('employee', index, name)}
          />
        </div>
      )}
      <h2 className="department-header">Departments</h2>
      <ul>
        {departments.map((department) => (
          <li
            key={department.id}
            className={department.isSelected ? "active" : ""}
            onClick={() => handleSelectDepartment(department)}
          >
            {department.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                // onUpdateDepartment(department.id, department.name);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentComponent;
