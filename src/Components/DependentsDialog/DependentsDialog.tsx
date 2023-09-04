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
import { Dependent } from '../../Models/Dependent';
import { formatDate } from '../../utils/formatters';
import { Employee } from '../../Models/Employee';
import CloseIcon from '@mui/icons-material/Close';
import { relationshipMap } from '../../Models/Relationship';

export interface DependentsDialogProps {
  open: boolean;
  selectedEmployee: Employee;
  dependents?: Dependent[];
  onClose(): void;
}

export const DependentsDialog = ({
  selectedEmployee,
  dependents,
  open,
  onClose,
}: DependentsDialogProps) => {
  const handleClose = () => {
    onClose();
  };

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
        {dependents?.length} Dependent(s) for {selectedEmployee.lastName},{' '}
        {selectedEmployee.firstName}
      </DialogTitle>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 575 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Relationship</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dependents &&
              dependents.length > 0 &&
              dependents.map((dependent) => {
                return (
                  <TableRow
                    key={dependent.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formatDate(new Date(dependent.dateOfBirth))}
                    </TableCell>
                    <TableCell>{dependent.lastName}</TableCell>
                    <TableCell>{dependent.firstName}</TableCell>
                    <TableCell>{relationshipMap[dependent.relationship]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
};
