import { Employee } from './Employee';
import { Relationship } from './Relationship';

export interface Dependent {
  id: number;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string;
  relationship: Relationship;
  employeeId: number;
  employee: Employee | null;
}
