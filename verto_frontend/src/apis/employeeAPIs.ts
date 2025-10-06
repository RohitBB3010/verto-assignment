import axios from "axios";
import type { AddEmployeeFormInput } from "../types/employee";

const BASE_API_URL = 'http://localhost:5000/api/employees';

export const fetchEmployees = async () => {
  const url = `${BASE_API_URL}/fetch-employees`;

  console.log(url);
  const response = await axios.get(url);

  return response.data.employees;
};

export const addEmployeee = async ({
  name,
  email,
  phone,
  role,
  dateOfJoining,
}: AddEmployeeFormInput) => {
  const url = `${BASE_API_URL}/add-employee`;

  const formattedDate = new Date(dateOfJoining).toISOString();

  const response = await axios.post(url, {
    name,
    email,
    phone,
    role,
    dateOfJoining: formattedDate,
  });

  return response.data;
};

export const deleteEmployee = async (employeeId: number) => {
  const url = `${
    BASE_API_URL
  }/delete-employee/${employeeId}`;

  const response = await axios.delete(url);

  return response.data;
};

export const updateEmployee = async (
  employeeId: number,
  data: Partial<AddEmployeeFormInput>
) => {
  const url = `${
    BASE_API_URL
  }/update-employee/${employeeId}`;
  const payload: Record<string, any> = {};
  if (data.name !== undefined) payload.name = data.name;
  if (data.email !== undefined) payload.email = data.email;
  if (data.phone !== undefined) payload.phone = data.phone;
  if (data.role !== undefined) payload.role = data.role;
  if (data.dateOfJoining !== undefined)
    payload.dateOfJoining = data.dateOfJoining;

  const response = await axios.put(url, payload);

  return response.data;
};
