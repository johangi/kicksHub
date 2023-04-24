import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShoesContextProvider } from './context/ShoeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShoesContextProvider>
        <App />
      </ShoesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);