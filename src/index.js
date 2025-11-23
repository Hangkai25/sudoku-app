import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import SudokuProvider from './context/SudokuProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SudokuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SudokuProvider>
);
