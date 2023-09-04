import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  Box,
} from '@mui/material';
import { formatDate, formatter } from '../../utils/formatters';
import { Employee } from '../../Models/Employee';
import CloseIcon from '@mui/icons-material/Close';

export interface PaychecksDialogProps {
  open: boolean;
  selectedEmployee: Employee;
  onClose(): void;
}

export const PaychecksDialog = ({ selectedEmployee, open, onClose }: PaychecksDialogProps) => {
  const handleClose = () => {
    console.log('closing');
    onClose();
  };

  // create an array with 26 payday dates in it
  const payDates = Array.from({ length: 26 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i * 14);
    return date;
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{ backgroundColor: (theme) => theme.palette.secondary.light, p: 1, cursor: 'pointer' }}
        display="flex"
        justifyContent="flex-end"
        onClick={handleClose}
      >
        <CloseIcon />
      </Box>
      <DialogTitle sx={{ backgroundColor: (theme) => theme.palette.secondary.light }}>
        {selectedEmployee.paychecks?.length} Paychecks(s) for {selectedEmployee.lastName},{' '}
        {selectedEmployee.firstName}
      </DialogTitle>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 575 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pay Date</TableCell>
              <TableCell>Monthly Earnings</TableCell>
              <TableCell>Benefit Deductions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedEmployee &&
              selectedEmployee.paychecks &&
              selectedEmployee.paychecks.length > 0 &&
              selectedEmployee.paychecks.map((paycheck, index) => {
                return (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {formatDate(new Date(payDates[index].toString()))}
                    </TableCell>
                    <TableCell>{formatter.format(paycheck.monthlyEarnings)}</TableCell>
                    <TableCell>{formatter.format(paycheck.benefitDeductions)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
};
