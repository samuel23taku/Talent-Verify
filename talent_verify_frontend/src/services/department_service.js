import axios from "axios";
import { BASEURL } from "./constants";
import * as actions from "../state/actions.js";

const URL = `${BASEURL}/department`;

export const fetchDepartmentsByCompany = async(dispatch,registrationNumber)=> {
  dispatch({ type: actions.FETCH_DEPARTMENTS_REQUEST });
  try {
    const response = await axios.get(
      `${URL}/getDepartments/${registrationNumber}`
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
    dispatch({ type: actions.CREATE_DEPARTMENT_SUCCESS, payload: response.data });
    fetchDepartmentsByCompany(dispatch,department.company.registrationNumber)
  } catch (error) {
    dispatch({ type: actions.CREATE_DEPARTMENT_FAILURE });
  }
};

export const updateDepartment =
  (departmentId, department) => async (dispatch) => {
    dispatch({ type: actions.UPDATE_DEPARTMENT_REQUEST });
    try {
      const response = await axios.patch(
        `${URL}/updateDepartment/${departmentId}`,
        department
      );
      console.warn(response.data)
      dispatch({ type: actions.UPDATE_DEPARTMENT_SUCCESS,payload:response.data });
    } catch (error) {
      dispatch({ type: actions.UPDATE_DEPARTMENT_FAILURE });
    }
  };

  export const deleteDepartment = async (dispatch,department) => {
    dispatch({ type: actions.DELETE_DEPARTMENT_REQUEST });
    try {
      const response = await axios.delete(`${URL}/deleteDepartment/${department.departmentId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      await fetchDepartmentsByCompany(dispatch,department.company.registrationNumber)
      dispatch({ type: actions.DELETE_DEPARTMENT_SUCCESS, payload: department.departmentId });
    } catch (error) {
      dispatch({ type: actions.DELETE_DEPARTMENT_FAILURE });
    }
  };
