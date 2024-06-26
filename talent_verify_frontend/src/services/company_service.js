import axios from "axios";
import { BASEURL } from "./constants";

const URL = `${BASEURL}/company`;

const createCompany = ()=>{

}
// POST http://localhost:2001/company/getAllCompanies

const fetchAllCompanies = ()=>{
    let values;    
    axios.post(`${URL}/getAllCompanies`).then((data)=>{
        console.log("Data is ",data);
    }).catch((e)=>{
        console.log("Error ",e)
    })
    return values;
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