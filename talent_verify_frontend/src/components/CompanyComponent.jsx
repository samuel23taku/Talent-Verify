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
  const [isCreateCompanyModalOpen, setIsModalOpen] = useState(false);
  const [jsonData, setJsonData] = useState(null);




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

  const handleDeleteCompany = (company) => {
    deleteCompany(dispatch,company)
  };
  const handleSubmit = () => {
    createCompany(dispatch,[companyData]);
    setIsModalOpen(false);
    console.log(companyData)
  };
  const handleFileUpload = (event) => {
    let file = (event.target.files[0]);
  if(file){
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonContent = JSON.parse(e.target.result);
        setJsonData(jsonContent);
        createCompany(dispatch,jsonContent)
        setIsModalOpen(false)
      } catch (error) {
        alert("Error parsing JSON:", error);
        setJsonData(null);
        setIsModalOpen(false)
      }
    };
    reader.readAsText(file);
  }else{
    console.log("File is empty ",file)
  }


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
                    handleDeleteCompany(company);
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
        isOpen={isCreateCompanyModalOpen}
        onRequestClose={handleCloseDialog}
        title={"Create New Company"}
        handleSubmit={handleSubmit}
        companyData={companyData}
        setCompanyData={setCompanyData}
        handleFileUpload={handleFileUpload}
      />

      
    </div>
  );
};

export default CompanyComponent;
