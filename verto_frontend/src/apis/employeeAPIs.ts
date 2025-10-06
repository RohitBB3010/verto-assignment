import axios from "axios";

export const fetchEmployees = async () => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/fetch-employees`;

    const response = await axios.get(url);
    
    return response.data.employees;
}