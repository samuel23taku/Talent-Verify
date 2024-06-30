import axios from "axios";
import { BASEURL } from "./constants";
import * as actions from "../state/actions.js";
import { wait } from "@testing-library/user-event/dist/utils/index.js";

const URL = `${BASEURL}/company`;

export const fetchAllCompanies = async (dispatch) => {
  dispatch({ type: actions.FETCH_COMPANIES_REQUEST });
  try {
    const response = await axios.get(`${URL}/getAllCompanies`);
    dispatch({ type: actions.FETCH_COMPANIES_SUCCESS, payload: response.data });
  } catch (e) {
    console.log("Error is ", e);
    dispatch({ type: actions.FETCH_COMPANIES_FAILURE });
  }
};

// pass list of companies
export const createCompany = async (dispatch,company) => {
  console.log("Company is ",company[0])
    dispatch({ type: actions.CREATE_COMPANY_REQUEST });
    try {
    const response = await axios.post(`${URL}/createNewCompany`,company, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await fetchAllCompanies(dispatch);
    dispatch({ type: actions.CREATE_COMPANY_SUCCESS });
} catch (error) {
    dispatch({ type: actions.CREATE_COMPANY_FAILURE });
  }
};

// pass list of companies to update
export const updateCompany = async (dispatch,companies) => {

  try {
    dispatch({ type: actions.UPDATE_COMPANY_REQUEST });
    const response = await axios.post(
      `${URL}/updateCompany`,
      companies , {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.warn("UPdated response is ",response.data)
    dispatch({ type: actions.UPDATE_COMPANY_SUCCESS,payload:response.data });
  } catch (error) {
    dispatch({ type: actions.UPDATE_COMPANY_FAILURE });
  }
};

export const deleteCompany = async (dispatch,company) => {
  console.log("Comapnpy is",company);
  dispatch({ type: actions.DELETE_COMPANY_REQUEST });
  try {
  const response = await axios.delete(`${URL}/deleteCompany/${company.registrationNumber}`,  {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await fetchAllCompanies(dispatch);
  dispatch({ type: actions.DELETE_COMPANY_SUCCESS,payload:company });
} catch (error) {
  dispatch({ type: actions.DELETE_COMPANY_FAILURE });
}
};
