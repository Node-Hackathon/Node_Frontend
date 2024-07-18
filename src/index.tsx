import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './assets/fonts/GlobalFont';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
