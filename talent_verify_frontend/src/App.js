import './styles/App.css';
import React, { useState } from 'react';
import CompanyComponent from './components/CompanyComponent';
import DepartmentComponent from './components/DepartmentComponent';
import EmployeeComponent from './components/EmployeeComponent';
import ModalDialog from './components/ModalDialog';
import CompanyService from './services/company_service';
import createCompany from './services/company_service';

function App() {



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalValue, setModalValue] = useState('');
  const [modalType, setModalType] = useState('');
  const [modalId, setModalId] = useState(null);



  // const handleUpdate = (type, id, currentValue) => {
  //   setModalType(type);
  //   setModalId(id);
  //   setModalValue(currentValue);
  //   setModalTitle(`Update ${type}`);
  //   setIsModalOpen(true);
  // };

  // const handleSave = () => {
  //   if (modalType === 'company') {
  //     setCompanies((prevCompanies) =>
  //       prevCompanies.map((company) =>
  //         company.id === modalId ? { ...company, name: modalValue } : company
  //       )
  //     );
  //   } else if (modalType === 'department') {
  //     setSelectedCompany((prevCompany) => ({
  //       ...prevCompany,
  //       departments: prevCompany.departments.map((department) =>
  //         department.id === modalId ? { ...department, name: modalValue } : department
  //       ),
  //     }));
  //   } else if (modalType === 'employee') {
  //     setSelectedDepartment((prevDepartment) => {
  //       const updatedEmployees = prevDepartment.employees.map((employee, index) =>
  //         index === modalId ? modalValue : employee
  //       );
  //       return { ...prevDepartment, employees: updatedEmployees };
  //     });
  //   }
  //   setIsModalOpen(false);
  // };
  return (
    <div className="container">
      <div className="list-container">
        <CompanyComponent
        />
      </div>
   

   
   

{/* Todo (Open in State Manager) */}
      {/* <ModalDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        title={modalTitle}
      >
        <input
          type="text"
          value={modalValue}
          onChange={(e) => setModalValue(e.target.value)}
        />
      </ModalDialog> */}
    </div>
  );
}

export default App;
