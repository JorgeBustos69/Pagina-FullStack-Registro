import React from 'react';
import { Navigate } from 'react-router-dom';


const RutaProtegida = ({ children, allowedRoles }) => {
  
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('rol');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    alert("Acceso denegado. No tienes permisos de " + allowedRoles.join(" o "));
    return <Navigate to="/" replace />; 
  }

  return children;
};

export default RutaProtegida;