import "../styles/CompanyComponent.css";
import React, { useState } from "react";
import DepartmentComponent from "./DepartmentComponent";
import fetchAllCompanies from "../services/company_service";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';


const CompanyComponent = ({ onUpdateCompany }) => {
  const loading = useSelector((state) => state.items.loading);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllCompanies(dispatch)
      .then(companies => {
        setCompanies(companies);
      })
      .catch(error => {
        console.error(error);
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
            {company.companyName}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUpdateCompany(company.id, company.name);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUpdateCompany(company.id, company.name);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> }

    </div>
  );
};

export default CompanyComponent;
