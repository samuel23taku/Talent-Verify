import "../styles/CompanyComponent.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DepartmentComponent from "./DepartmentComponent";
import {
  fetchAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../services/company_service";
import CreateCompanyModalDialog from "./Dialogs/CreateCompanyModalDialog";
import { fetchDepartmentsByCompany } from "../services/department_service";
import EmployeeComponent from "./EmployeeComponent";

const CompanyComponent = ({selectedCompany,setSelectedCompany}) => {
  console.log("Main")
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.data);
  const loadingCompanies = useSelector((state) => state.companies.loading);
  const errorCompanies = useSelector((state) => state.companies.error);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const [companyData, setCompanyData] = useState({
    companyName: "",
    registrationNumber: "",
    dateRegistered: "",
    address: "",
    contactPerson: "",
    contactPersonPhone: "",
    emailAddress: "",
  });


  useEffect(() => {
    fetchAllCompanies(dispatch);
  }, [dispatch]);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    fetchDepartmentsByCompany(dispatch,company.companyId)
    // dispatch(fetchDepartmentsByCompany(company.id));
  };

  const handleUpdateCompany = (companyId, updatedCompany) => {
    dispatch(updateCompany(companyId, updatedCompany));
  };

  const handleDeleteCompany = (companyId) => {
    dispatch(deleteCompany(companyId));
  };
  const handleSubmit = () => {
    createCompany(companyData,dispatch);
    setIsModalOpen(false);
    console.log(companyData)
  };

  const handleCloseDialog = ()=>{
    setIsModalOpen(false)
  }
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
                className={company.companyId === selectedCompany?.companyId ? "active" : ""}
                onClick={() => handleSelectCompany(company)}
              >
                {company.companyName}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUpdateCompany(company.companyId, company);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCompany(company.companyId);
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
        <button
          onClick={()=>setIsModalOpen(true)}
        >
          Create Company
        </button>
      </div>
      <CreateCompanyModalDialog
        isOpen={isModalOpen}
        onRequestClose={handleCloseDialog}
        title={"Create New Company"}
        handleSubmit={handleSubmit}
        companyData={companyData}
        setCompanyData={setCompanyData}
      />

      
    </div>
  );
};

export default CompanyComponent;
