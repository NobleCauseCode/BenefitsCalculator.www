import axios from 'axios';
import { Dependent } from '../Models/Dependent';

export const getDependents = async (employeeId: number): Promise<Dependent[]> => {
  const response = await axios.get(
    `https://localhost:7124/api/v1/Employees/dependents/${employeeId}`
  );

  if (response) {
    return response.data.data;
  }
  return [] as Dependent[];
};
