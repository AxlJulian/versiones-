import React, { createContext, useContext, useState } from 'react';

const EstudiantesContext = createContext();

export const EstudiantesProvider = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  return (
    <EstudiantesContext.Provider value={{ estudiantes, setEstudiantes }}>
      {children}
    </EstudiantesContext.Provider>
  );
};

export const useEstudiantes = () => {
  const context = useContext(EstudiantesContext);
  if (!context) {
    throw new Error('useEstudiantes must be used within an EstudiantesProvider');
  }
  return context;
};
