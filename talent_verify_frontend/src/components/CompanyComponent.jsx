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
import EditCompanyModalDialog from "./Dialogs/EditDialogs/EditCompanyDialog";
import FileSelectButton from "./Buttons/FileSelectButton";

const CompanyComponent = ({ selectedCompany, setSelectedCompany }) => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.data);
  const loadingCompanies = useSelector((state) => state.companies.loading);
  const errorCompanies = useSelector((state) => state.companies.error);
  const [isCreateCompanyModalOpen, setIsCreateCompanyDialogOpen] =
    useState(false);
  const [isEditCompanyModalOpen, setIsEditCompanyDialog] = useState(false);

  const [jsonData, setJsonData] = useState(null);

  const [editCompanyData, setEditCompanyData] = useState({
    companyId: 0,
    companyName: "",
    registrationNumber: "",
    dateRegistered: "",
    address: "",
    contactPerson: "",
    contactPersonPhone: "",
    emailAddress: "",
  });

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
    fetchDepartmentsByCompany(dispatch, company.companyId);
    setEditCompanyData({
      companyId: company.companyId,
      companyName: company.companyName,
      registrationNumber: company.registrationNumber,
      dateRegistered: company.dateRegistered,
      address: company.address,
      contactPerson: company.contactPerson,
      contactPersonPhone: company.contactPersonPhone,
      emailAddress: company.emailAddress,
    });
    // dispatch(fetchDepartmentsByCompany(company.id));
  };

  const handleSubmitCompanyEdits = () => {
    updateCompany(dispatch, [editCompanyData]);
    setIsEditCompanyDialog(false);
  };

  const handleDeleteCompany = (company) => {
    deleteCompany(dispatch, company);
  };
  const handleSubmit = () => {
    createCompany(dispatch, [companyData]);
    setIsCreateCompanyDialogOpen(false);
    console.log(companyData);
  };

  // Bulk upload company
  const handleFileUpload = (event) => {
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonContent = JSON.parse(e.target.result);
          setJsonData(jsonContent);
          createCompany(dispatch, jsonContent);
          setIsCreateCompanyDialogOpen(false);
        } catch (error) {
          alert("Error parsing JSON:", error);
          setJsonData(null);
          setIsCreateCompanyDialogOpen(false);
        }
      };
      reader.readAsText(file);
    } else {
      console.log("File is empty ", file);
    }
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
                className={
                  company.companyId === selectedCompany?.companyId
                    ? "active"
                    : ""
                }
                onClick={() => handleSelectCompany(company)}
              >
                {company.companyName}
                <button
                  onClick={(e) => {
                    // e.stopPropagation();
                    setIsEditCompanyDialog(true);
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
        <button onClick={() => setIsCreateCompanyDialogOpen(true)}>
          Create Company
        </button>
        <h1></h1>
        <FileSelectButton title={"Bulk Update Companies"} onFileSelect={() => {}} />
      </div>
      <CreateCompanyModalDialog
        isOpen={isCreateCompanyModalOpen}
        onRequestClose={() => setIsCreateCompanyDialogOpen(false)}
        title={"Create New Company"}
        handleSubmit={handleSubmit}
        companyData={companyData}
        setCompanyData={setCompanyData}
        handleFileUpload={handleFileUpload}
      />
      <EditCompanyModalDialog
        isOpen={isEditCompanyModalOpen}
        onRequestClose={() => setIsEditCompanyDialog(false)}
        handleSubmitCompanyEdits={handleSubmitCompanyEdits}
        companyDataToEdit={editCompanyData}
        setEditCompanyData={setEditCompanyData}
        handleFileUpload={handleFileUpload}
      />
    </div>
  );
};

export default CompanyComponent;
