import { Box, Typography } from '@mui/material';
import { EmployeeList } from '../Components/EmployeeList/EmployeeList';

export const Home = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ p: 2 }}>
        Employees
      </Typography>
      <Box sx={{ p: 2 }}>
        <EmployeeList />
      </Box>
    </Box>
  );
};
