import axios from 'axios';
import { Employee } from '../Models/Employee';

export const loader = async () => {
  const response = await axios.get('https://localhost:7124/api/v1/Employees');
  return response.data.data as Employee[];
};

export const getEmployeePaychecks = async (employeeId: number) => {
  const response = await axios.get(
    `https://localhost:7124/api/v1/Employees/${employeeId}/paychecks`
  );
  return response.data.data as Employee;
};
