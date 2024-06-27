import "../styles/CompanyComponent.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DepartmentComponent from "./DepartmentComponent";
import { fetchAllCompanies, createCompany, updateCompany, deleteCompany } from "../services/company_service";

const CompanyComponent = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.data);
  const loadingCompanies = useSelector((state) => state.companies.loading);
  const errorCompanies = useSelector((state) => state.companies.error);
  
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetchAllCompanies(dispatch);
  }, [dispatch]);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    // dispatch(fetchDepartmentsByCompany(company.id));
  };

  const handleCreateCompany = (newCompany) => {
    dispatch(createCompany(newCompany));
  };

  const handleUpdateCompany = (companyId, updatedCompany) => {
    dispatch(updateCompany(companyId, updatedCompany));
  };

  const handleDeleteCompany = (companyId) => {
    dispatch(deleteCompany(companyId));
  };

  if (loadingCompanies) {
    return <div>Loading...</div>;
  }

  if (errorCompanies) {
    return <div>Error: {errorCompanies.message}</div>;
  }

  return (
    <div className="container">
      <div className="list-container">
        <h2 className="company-header">Companies</h2>
        {companies && companies.length > 0 ? (
          <ul>
            {companies.map((company) => (
              <li
                key={company.id}
                className={company.id === selectedCompany?.id ? "active" : ""}
                onClick={() => handleSelectCompany(company)}
              >
                {company.companyName}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUpdateCompany(company.id, company);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCompany(company.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>No companies available.</div>
        )}
        <button onClick={() => handleCreateCompany({ name: 'New Company' })}>Create Company</button>
      </div>

      {selectedCompany && (
        <DepartmentComponent selectedCompany={selectedCompany} />
      )}
    </div>
  );
};

export default CompanyComponent;
