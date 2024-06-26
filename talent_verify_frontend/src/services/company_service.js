import axios from "axios";
import { BASEURL } from "./constants";
import * as actions from "../state/actions.js";
import { Provider, useDispatch, useSelector } from 'react-redux';

const URL = `${BASEURL}/company`;

const createCompany = ()=>{

}
// POST http://localhost:2001/company/getAllCompanies

const fetchAllCompanies = async (dispatch) => {
    dispatch({ type: actions.FETCH_COMPANIES_REQUEST });
    try {
      const response = await axios.post(`${URL}/getAllCompanies`);
      console.log(response.data[0])
      return response.data; // Return the data from the response
    } catch (e) {
      console.log("Error ", e)
      return null; // Return null or an error object if there's an error
    }
  }

export default fetchAllCompanies;

// import axios from "axios";


// export const listEmployees = () =>  axios.get(URL);

// export const savedEmployee = (employee) => axios.post(URL, employee);

// export const editEmployee = (employeeid) => {
//     return axios.get(URL + '/' + employeeid);
// }

// export const updateDataEmployee = (employeeid , employee) =>{
//     return axios.put(URL + '/' + employeeid,employee);
// }
// export const deleteEmployee = (employeeId)=> axios.delete(URL + '/' + employeeId);