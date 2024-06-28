import "../styles/DepartmentComponent.css";
import React from "react";

const EmployeeComponent = ({ employees }) => {
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

    <button
          onClick={()=>{}}
        >
          Add New employee
        </button>
    </div>
  );
};

export default EmployeeComponent;
