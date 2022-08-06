import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './components/Calculator';
// import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
