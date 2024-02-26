import React from 'react';
import './App.css';
import RouterPage from './pages/RouterPage';
import { EstudiantesProvider } from './pages/EstudianteContext';

function App() {
  return (
    <EstudiantesProvider>  {/* Envuelve tu aplicación con el proveedor del contexto */}
      <RouterPage />
    </EstudiantesProvider>
  );
}

export default App;