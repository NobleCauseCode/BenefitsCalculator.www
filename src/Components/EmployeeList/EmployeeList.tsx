import { useLoaderData } from 'react-router-dom';
import { Employee } from '../../Models/Employee';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import { formatDate } from '../../utils/formatters';
import { DependentsDialog } from '../DependentsDialog/DependentsDialog';
import { useState } from 'react';
import { getDependents } from '../../Api/Dependents.Api';
import { Dependent } from '../../Models/Dependent';
import { getEmployeePaychecks } from '../../Api/Employees.Api';
import { PaychecksDialog } from '../PaychecksDialog/PaychecksDialog';

export const EmployeeList = () => {
  const loaderData = useLoaderData() as Employee[];
  const [openDependentsDialog, setOpenDependentsDialog] = useState(false);
  const [openPaychecksDialog, setOpenPaychecksDialog] = useState(false);
  const [dependents, setDependentsValue] = useState(([] as Dependent[]) || null);
  const [selectedEmployee, setSelectedEmployee] = useState(({} as Employee) || null);

  const handleDependentsClick = async (employeeId: number) => {
    const selectedEmp = loaderData.find((e) => e.id === employeeId);
    setSelectedEmployee(selectedEmp || ({} as Employee));
    const deps = await getDependents(employeeId);
    setDependentsValue(deps);
    setOpenDependentsDialog(true);
  };

  const handlePaychecksClick = async (employeeId: number) => {
    const employee = await getEmployeePaychecks(employeeId);
    setSelectedEmployee(employee);
    setOpenPaychecksDialog(true);
  };

  const handleClose = () => {
    setOpenDependentsDialog(false);
    setOpenPaychecksDialog(false);
  };

  return (
    <Paper sx={{ p: 1, m: 1 }} elevation={2}>
      <DependentsDialog
        selectedEmployee={selectedEmployee}
        dependents={dependents}
        open={openDependentsDialog}
        onClose={() => handleClose()}
      />
      <PaychecksDialog
        selectedEmployee={selectedEmployee}
        open={openPaychecksDialog}
        onClose={() => handleClose()}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data of Birth</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loaderData &&
              loaderData.length > 0 &&
              loaderData.map((employee: Employee) => {
                return (
                  <TableRow
                    key={employee.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formatDate(new Date(employee.dateOfBirth))}
                    </TableCell>
                    <TableCell>{employee.lastName}</TableCell>
                    <TableCell>{employee.firstName}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ mr: 2 }}
                        onClick={() => handleDependentsClick(employee.id)}
                      >
                        Dependents
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handlePaychecksClick(employee.id)}
                      >
                        Paychecks
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
