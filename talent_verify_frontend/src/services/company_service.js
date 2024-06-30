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

export const createCompany = async (dispatch,company) => {
    dispatch({ type: actions.CREATE_COMPANY_REQUEST });
    try {
    const response = await axios.post(`${URL}/createNewCompany`, JSON.stringify(company), {
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

export const updateCompany = (companyId, company) => async (dispatch) => {

  try {
    dispatch({ type: actions.UPDATE_COMPANY_REQUEST });
    const response = await axios.patch(
      `${URL}/updateCompany/${companyId}`,
      company
    );
    dispatch({ type: actions.UPDATE_COMPANY_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.UPDATE_COMPANY_FAILURE });
  }
};

export const deleteCompany = async (dispatch,company) => {
  console.log("Comapnpy is",company);
  dispatch({ type: actions.DELETE_COMPANY_REQUEST });
  try {
  const response = await axios.delete(`${URL}/deleteCompany/${company.companyId}`,  {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await fetchAllCompanies(dispatch);
    wait(2000)
  dispatch({ type: actions.DELETE_COMPANY_SUCCESS, });
} catch (error) {
  dispatch({ type: actions.DELETE_COMPANY_FAILURE });
}
};
