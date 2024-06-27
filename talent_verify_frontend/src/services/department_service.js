import axios from "axios";
import { BASEURL } from "./constants";
import * as actions from "../state/actions.js";

export const fetchDepartmentsByCompany = (companyId) => async (dispatch) => {
  dispatch({ type: actions.FETCH_DEPARTMENTS_REQUEST });
  try {
    const response = await axios.get(
      `${URL}/getDepartmentsByCompany/${companyId}`
    );
    dispatch({ type: actions.FETCH_DEPARTMENTS_SUCCESS, data: response.data });
  } catch (error) {
    dispatch({ type: actions.FETCH_DEPARTMENTS_FAILURE });
  }
};

export const createDepartment = (department) => async (dispatch) => {
  dispatch({ type: actions.CREATE_DEPARTMENT_REQUEST });
  try {
    const response = await axios.post(`${URL}/createDepartment`, department);
    dispatch({ type: actions.CREATE_DEPARTMENT_SUCCESS, data: response.data });
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
