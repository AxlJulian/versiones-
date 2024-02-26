import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EstudiantesProvider } from './pages/EstudianteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EstudiantesProvider>
      <App />
    </EstudiantesProvider>
  </React.StrictMode>
);

reportWebVitals();
