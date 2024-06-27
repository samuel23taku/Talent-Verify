import './styles/App.css';
import React, { useState,useEffect } from 'react';
import CompanyComponent from './components/CompanyComponent';
import DepartmentComponent from './components/DepartmentComponent';
import EmployeeComponent from './components/EmployeeComponent';
import ModalDialog from './components/ModalDialog';
import CompanyService, { FetchAllCompanies } from './services/company_service';
import createCompany from './services/company_service';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from "./state/store";


const  App = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalValue, setModalValue] = useState('');
  const [modalType, setModalType] = useState('');
  const [modalId, setModalId] = useState(null);

  return (
    <Provider store={store}>
    <div className="container">
      <div className="list-container">
        <CompanyComponent
        />
      </div>
      </div>
    </Provider>
  );

}

export default App;
