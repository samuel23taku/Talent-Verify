import axios from "axios";
import * as actions from "../state/actions.js";
import { BASEURL } from "./constants.js";

const URL = `${BASEURL}/employee`;
// Employee is a list of employees
export const fetchEmployeesByDepartment = async (dispatch, departmentId) => {
  dispatch({ type: actions.FETCH_EMPLOYEES_REQUEST });
  try {
    console.warn("Deparmetn Id is ", departmentId);
    const response = await axios.get(
      `${URL}/getCompanyEmployees/${departmentId}`
    );
    console.warn("Employees are ", response.data);
    dispatch({ type: actions.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actions.FETCH_EMPLOYEES_FAILURE });
  }
};

// Employee is a list of employees

export const createEmployee = async (dispatch, employee) => {
  dispatch({ type: actions.CREATE_EMPLOYEE_REQUEST });
  try {
    const response = await axios.post(`${URL}/addNewEmployee`, employee);
    dispatch({ type: actions.CREATE_EMPLOYEE_SUCCESS, data: response.data });
    fetchEmployeesByDepartment(dispatch, employee.department.departmentId);
  } catch (error) {
    dispatch({ type: actions.CREATE_EMPLOYEE_FAILURE });
  }
};

// Employee is a list of employees
export const deleteEmployee = async (dispatch, employee) => {
    dispatch({ type: actions.DELETE_EMPLOYEE_REQUEST });
    try {
      const response = await axios.delete(`${URL}/deleteEmployee`, employee);
      dispatch({ type: actions.DELETE_EMPLOYEE_SUCCESS, data: response.data });
      fetchEmployeesByDepartment(dispatch, employee.department.departmentId);
    } catch (error) {
      dispatch({ type: actions.DELETE_EMPLOYEE_FAILURE });
    }
  };
