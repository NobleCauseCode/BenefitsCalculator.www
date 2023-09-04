import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../Components/AppBar/Header';
import { Footer } from '../Components/Footer/Footer';
export const SiteTemplate = () => {
  return (
    <>
      <Stack direction="column" justifyContent="flex-start">
        <Header />
        <Outlet />
        <Footer />
      </Stack>
    </>
  );
};
