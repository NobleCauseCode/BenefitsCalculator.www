import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { benefitsCalcTheme } from './Theme';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import siteRouter from './Router/Router';

// Although this is a one page application, I included react router with data loaders
// to show how things would be done in the future once the application grows.

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={benefitsCalcTheme}>
        <CssBaseline />
        <RouterProvider router={siteRouter} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
