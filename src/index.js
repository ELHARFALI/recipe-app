import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CategoriesProvider } from './context/categories_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CategoriesProvider>
    <App />
  </CategoriesProvider>
);

