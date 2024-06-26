import "../styles/CompanyComponent.css";
import React, { useState } from "react";
import DepartmentComponent from "./DepartmentComponent";
import fetchAllCompanies from "../services/company_service";
import { useEffect } from "react";

const initialCompanies = [
  {
    id: 1,
    name: "Company A",
    departments: [
      { id: 1, name: "HR", employees: ["Alice", "Bob"], isSelected: false },
      {
        id: 2,
        name: "Finance",
        employees: ["Charlie", "David"],
        isSelected: false,
      },
    ],
    isSelected: false,
  },
  {
    id: 2,
    name: "Company B",
    departments: [
      { id: 1, name: "IT", employees: ["Eve", "Frank"], isSelected: false },
      {
        id: 2,
        name: "Marketing",
        employees: ["Grace", "Heidi"],
        isSelected: false,
      },
    ],
    isSelected: false,
  },
];
const CompanyComponent = ({ onUpdateCompany }) => {
  const [loading, setLoading] = useState(false); // Add a loading state
  const [companies, setCompanies] = useState(initialCompanies);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    setLoading(true); // Set loading to true when the effect is triggered
    fetchAllCompanies()
      .then(companies => {
        setCompanies(companies);
        setLoading(false); // Set loading to false when the request is complete
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  const handleSelectCompany = (company) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((c) =>
        c.id === company.id
          ? { ...c, isSelected: true }
          : { ...c, isSelected: false }
      )
    );
    setSelectedCompany(company);
    // setSelectedDepartment(null);
  };

  return (
    <div>
      {selectedCompany && (
        <div className="list-container">
          <DepartmentComponent
          // onUpdateDepartment={(id, name) => handleUpdate('department', id, name)}
          />
        </div>
      )}

      {!selectedCompany && (
        <p className="selection-message">
          Please select a company to see the departments.
        </p>
      )}
      <h2 className="company-header">Companies</h2>
      {loading ?  
              <div>Loading...</div> // Render a loading indicator while the request is being made
      :        <ul>
        {companies.map((company) => (
          <li
            key={company.id}
            className={company.isSelected ? "active" : ""}
            // onClick={() => handleSelectCompany(company)}
          >
            {company.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUpdateCompany(company.id, company.name);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul> }

    </div>
  );
};

export default CompanyComponent;
