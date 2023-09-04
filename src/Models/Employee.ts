import { Dependent } from './Dependent';
import { Paycheck } from './Paycheck';

export interface Employee {
  id: number;
  firstName: string | null;
  lastName: string | null;
  salary: number;
  dateOfBirth: string;
  dependents: Dependent[];
  paychecks: Paycheck[];
}
