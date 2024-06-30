import * as actions from "./actions.js";
import { combineReducers } from "redux";

const initialState = {
  companies: {
    data: [],
    loading: false,
    error: null,
  },
  departments: {
    data: [],
    loading: false,
    error: null,
  },
  employees: {
    data: [],
    loading: false,
    error: null,
  },
};

const companyReducer = (state = initialState.companies, action) => {
  switch (action.type) {
    case actions.FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_COMPANIES_SUCCESS:
      var data = {
        ...state,
        loading: false,
        data: action.payload,
      };
      return data;
    case actions.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map(existingCompany => {
          const updatedCompany = action.payload.find(
            newCompany => newCompany.registrationNumber === existingCompany.registrationNumber
          );
          return updatedCompany ? { ...existingCompany, ...updatedCompany } : existingCompany;
        })
      };
    case actions.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((company) => company.registrationNumber !== action.payload.company.registrationNumber),
      };
    case actions.FETCH_COMPANIES_FAILURE:
    case actions.CREATE_COMPANY_FAILURE:
    case actions.UPDATE_COMPANY_FAILURE:
    case actions.DELETE_COMPANY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const departmentsReducer = (state = initialState.departments, action) => {
  switch (action.type) {
    case actions.FETCH_DEPARTMENTS_REQUEST:
    case actions.CREATE_DEPARTMENT_REQUEST:
    case actions.UPDATE_DEPARTMENT_REQUEST:
    case actions.DELETE_DEPARTMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case actions.FETCH_DEPARTMENTS_SUCCESS:
      let value = { ...state, loading: false, data: action.data };
      return value;
    case actions.CREATE_DEPARTMENT_SUCCESS:
      const res =  {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
      console.warn("Res is ",action.payload)
      return res;
    case actions.UPDATE_DEPARTMENT_SUCCESS:
      initialState.departments.data.pop()
      return {
        ...state,
        loading: false,
        data: state.data.map((department) =>
          department.departmentId === action.payload.id ? action.payload : department
        ),
      };
    case actions.DELETE_DEPARTMENT_SUCCESS:
      const ress =  {
        ...state,
        loading: false,
        data: state.data.filter(
          (department) => department.departmentId !== action.payload
        ),
      };
      return ress;
    case actions.FETCH_DEPARTMENTS_FAILURE:
    case actions.CREATE_DEPARTMENT_FAILURE:
    case actions.UPDATE_DEPARTMENT_FAILURE:
    case actions.DELETE_DEPARTMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const employeesReducer = (state = initialState.employees, action) => {
  switch (action.type) {
    case actions.FETCH_EMPLOYEES_REQUEST:
    case actions.CREATE_EMPLOYEE_REQUEST:
    case actions.UPDATE_EMPLOYEE_REQUEST:
    case actions.DELETE_EMPLOYEE_REQUEST:
      return { ...state, loading: true, error: null };
    case actions.FETCH_EMPLOYEES_SUCCESS:
      let value = { ...state, loading: false, data: action.payload };
      console.log("Value is ",value)
      return value;
    case actions.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case actions.UPDATE_EMPLOYEE_SUCCESS:
      console.log("Payload is ",action.payload)
      return {
        ...state,
        loading: false,
        data: state.data.map(existingEmployee => {
          const updatedEmployee = action.payload.find(
            newEmployee => newEmployee.employeeId === existingEmployee.employeeId
          );
          return updatedEmployee ? { ...existingEmployee, ...updatedEmployee } : existingEmployee;
        })
      };

    case actions.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((employee) => employee.employeeId !== action.payload.employeeId),
      };
    case actions.FETCH_EMPLOYEES_FAILURE:
    case actions.CREATE_EMPLOYEE_FAILURE:
    case actions.UPDATE_EMPLOYEE_FAILURE:
    case actions.DELETE_EMPLOYEE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  companies: companyReducer,
  departments: departmentsReducer,
  employees: employeesReducer,
});
