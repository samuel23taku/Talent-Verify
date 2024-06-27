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
      var data =  {
        ...state,
        loading: false,
        data: action.payload,
      };
      console.log("Received payload is ",data)
      return data;
      case actions.UPDATE_COMPANY_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.map((company) =>
            company.id === action.payload.id ? action.payload : company
          ),
        };
      case actions.DELETE_COMPANY_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.filter((company) => company.id !== action.payload),
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
        return { ...state, loading: false, data: action.payload };
      case actions.CREATE_DEPARTMENT_SUCCESS:
        return { ...state, loading: false, data: [...state.data, action.payload] };
      case actions.UPDATE_DEPARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.map((department) =>
            department.id === action.payload.id ? action.payload : department
          ),
        };
      case actions.DELETE_DEPARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.filter((department) => department.id !== action.payload),
        };
      case actions.FETCH_DEPARTMENTS_FAILURE:
      case actions.CREATE_DEPARTMENT_FAILURE:
      case actions.UPDATE_DEPARTMENT_FAILURE:
      case actions.DELETE_DEPARTMENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export default combineReducers({
  companies: companyReducer,
  departments:departmentsReducer
});
