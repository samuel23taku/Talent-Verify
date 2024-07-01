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

  const [jsonData, setCreateCompaniesJsonData] = useState(null);

  const [updateCompaniesJsonData, setUpdateCompaniesJsonData] = useState(null);

  const [editCompanyData, setEditCompanyData] = useState({
    registrationNumber: 0,
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
    fetchDepartmentsByCompany(dispatch, company.registrationNumber);
    setEditCompanyData({
      registrationNumber: company.registrationNumber,
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
  const handleCreateCompaniesFileUpload = (event) => {
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonContent = JSON.parse(e.target.result);
          setCreateCompaniesJsonData(jsonContent);
          createCompany(dispatch, jsonContent);
        } catch (error) {
          alert("Error parsing JSON:", error);
          setCreateCompaniesJsonData(null);
        }
      };
      reader.readAsText(file);
    } else {
      console.log("File is empty ", file);
    }
  };

    // Bulk upload company
    const handleUpdateCompaniesFileUpload = (event) => {
      let file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          try {
            const jsonContent = JSON.parse(e.target.result);
            setUpdateCompaniesJsonData(jsonContent);
            updateCompany(dispatch, jsonContent);
          } catch (error) {
            alert("Error parsing JSON:", error);
            setCreateCompaniesJsonData(null);
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
                  company.registrationNumber === selectedCompany?.registrationNumber
                    ? "active"
                    : ""
                }
                onClick={() => handleSelectCompany(company)}
              >
                {company.companyName}
                <button className="edit-button"
                  onClick={(e) => {
                    // e.stopPropagation();
                    setIsEditCompanyDialog(true);
                  }}
                >
                  Edit
                </button>
                <button className="delete-button"
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
        <hr/>
        <button className="single-entry-button" onClick={() => setIsCreateCompanyDialogOpen(true)}>
          Create Company
        </button>
        <h1></h1>
        <FileSelectButton buttonClassType={"bulk-entry-button"}  title={"Bulk Create Companies"} id={1} onFileSelect={handleCreateCompaniesFileUpload} />
        <h1></h1>
        <FileSelectButton title={"Bulk Update Companies (.json)"} id={2} buttonClassType={'bulk-update-button'}  onFileSelect={handleUpdateCompaniesFileUpload} />
    {/*   <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="form-input"
        /> */}
      </div>
      <CreateCompanyModalDialog
        isOpen={isCreateCompanyModalOpen}
        onRequestClose={() => setIsCreateCompanyDialogOpen(false)}
        title={"Create New Company"}
        handleSubmit={handleSubmit}
        companyData={companyData}
        setCompanyData={setCompanyData}
        handleFileUpload={handleCreateCompaniesFileUpload}
      />
      <EditCompanyModalDialog
        isOpen={isEditCompanyModalOpen}
        onRequestClose={() => setIsEditCompanyDialog(false)}
        handleSubmitCompanyEdits={handleSubmitCompanyEdits}
        companyDataToEdit={editCompanyData}
        setEditCompanyData={setEditCompanyData}
        handleFileUpload={handleUpdateCompaniesFileUpload}
      />
    </div>
  );
};

export default CompanyComponent;
