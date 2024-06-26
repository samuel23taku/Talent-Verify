
const EmployeeComponent = ({}) => {
    return (
      <div>
        <h2 className="employee-header">Employees</h2>
        <ul>
            <h5>takudzwa</h5>
          {/* {employees.map((employee, index) => (
            <li key={index}>
              {employee}
              <button onClick={() => onUpdateEmployee(index, employee)}>Edit</button>
            </li>
          ))} */}
        </ul>
      </div>
    );
  };

  export default EmployeeComponent;