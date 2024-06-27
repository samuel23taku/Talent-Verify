import axios from "axios";
import { BASEURL } from "./constants";
import * as actions from "../state/actions.js";

const URL = `${BASEURL}/company`;

export const fetchAllCompanies = async (dispatch) => {
  dispatch({ type: actions.FETCH_COMPANIES_REQUEST });
//   try {
    console.log("Executing");
    const response = await axios.get(`${URL}/getAllCompanies`);
    dispatch({ type: actions.FETCH_COMPANIES_SUCCESS, payload: response.data });
//   } catch (e) {
//     console.log("Error is ", e);
//     dispatch({ type: actions.FETCH_COMPANIES_FAILURE });
//   }
};

export const createCompany = (company) => async (dispatch) => {
    dispatch({ type: actions.CREATE_COMPANY_REQUEST });
    try {
    const response = await axios.post(`${URL}/createCompany`, company);
    dispatch({ type: actions.CREATE_COMPANY_SUCCESS });
} catch (error) {
    dispatch({ type: actions.CREATE_COMPANY_FAILURE });
  }
};

export const updateCompany = (companyId, company) => async (dispatch) => {

  try {
    dispatch({ type: actions.UPDATE_COMPANY_REQUEST });
    const response = await axios.put(
      `${URL}/updateCompany/${companyId}`,
      company
    );
    dispatch({ type: actions.UPDATE_COMPANY_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.UPDATE_COMPANY_FAILURE });
  }
};

export const deleteCompany = (companyId) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_COMPANY_REQUEST });
    await axios.delete(`${URL}/deleteCompany/${companyId}`);
    dispatch({ type: actions.DELETE_COMPANY_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.DELETE_COMPANY_FAILURE });
  }
};
