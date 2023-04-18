import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.scss';
import App from './App';
import { ApiContext } from './context/ApiContext';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipes">
      <App />
    </ApiContext.Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
