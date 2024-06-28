import axios from "axios";
import { BASEURL } from "./constants";
import * as actions from "../state/actions.js";

const URL = `${BASEURL}/department`;

export const fetchDepartmentsByCompany = async(dispatch,companyId)=> {
  dispatch({ type: actions.FETCH_DEPARTMENTS_REQUEST });
  try {
    const response = await axios.get(
      `${URL}/getDepartments/${companyId}`
    );
    dispatch({ type: actions.FETCH_DEPARTMENTS_SUCCESS, data: response.data });
  } catch (error) {
    dispatch({ type: actions.FETCH_DEPARTMENTS_FAILURE });
  }
};

export const createDepartment = async (dispatch,department) => {
  dispatch({ type: actions.CREATE_DEPARTMENT_REQUEST });
  try {
    const response = await axios.post(`${URL}/createNewDepartment`, department, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    
    );
    dispatch({ type: actions.CREATE_DEPARTMENT_SUCCESS, data: response.data });
    fetchDepartmentsByCompany(dispatch,department.company.companyId)
  } catch (error) {
    dispatch({ type: actions.CREATE_DEPARTMENT_FAILURE });
  }
};

export const updateDepartment =
  (departmentId, department) => async (dispatch) => {
    dispatch({ type: actions.UPDATE_DEPARTMENT_REQUEST });
    try {
      const response = await axios.put(
        `${URL}/updateDepartment/${departmentId}`,
        department
      );
      dispatch({ type: actions.UPDATE_DEPARTMENT_SUCCESS,data:response.data });
    } catch (error) {
      dispatch({ type: actions.UPDATE_DEPARTMENT_FAILURE });
    }
  };

export const deleteDepartment = (departmentId) => async (dispatch) => {
    dispatch({ type: actions.DELETE_DEPARTMENT_REQUEST });
  try {
    await axios.delete(`${URL}/deleteDepartment/${departmentId}`);
    dispatch({ type: actions.DELETE_DEPARTMENT_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.DELETE_DEPARTMENT_FAILURE });
  }
};
