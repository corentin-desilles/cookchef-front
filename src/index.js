import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.scss';
import { ApiContext } from './context/ApiContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipe">
      <RouterProvider router={router} />
    </ApiContext.Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
