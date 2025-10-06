import axios from "axios";
import type { Role } from "../constants/enums";
import type { AddEmployeeFormInput } from "../types/employee";

export const fetchEmployees = async () => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/fetch-employees`;

    const response = await axios.get(url);
    
    return response.data.employees;
}

export const addEmployeee = async ({
    name, email, phone, role, dateOfJoining
} : AddEmployeeFormInput ) => {

    //await new Promise((resolve) => setTimeout(resolve, 5000));
    const url = `${import.meta.env.VITE_BASE_API_URL}/add-employee`;

    const formattedDate = new Date(dateOfJoining).toISOString();
    
    const response = await axios.post(url, {
        name, email, phone, role, dateOfJoining : formattedDate
    });

    return response.data;
}