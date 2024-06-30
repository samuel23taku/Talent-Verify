import './styles/App.css';
import React, { useState,useEffect } from 'react';
import CompanyComponent from './components/CompanyComponent';
import DepartmentComponent from './components/DepartmentComponent';
import EmployeeComponent from './components/EmployeeComponent';
import CreateCompanyModalDialog from './components/Dialogs/CreateCompanyModalDialog';
import CompanyService, { FetchAllCompanies } from './services/company_service';
import createCompany from './services/company_service';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from "./state/store";


const  App = () =>{
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  return (
    <Provider store={store}>
    <div className="container">
        <CompanyComponent selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
        />
      <div className="list-container">
      {selectedCompany && (
        <DepartmentComponent selectedCompany={selectedCompany} selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} />
      )}
            
      </div>
      <div className="list-container">
      {selectedDepartment && (
          <EmployeeComponent selectedDepartment={selectedDepartment} />
      )}  
      </div>
      </div>
    </Provider>
  );

}

export default App;
