import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente para validar si el usuario puede ver la página
// `allowedRoles` es el rol que puede ver la ruta (ej: ["ADMIN"])
// `children` es el componente real que queremos proteger (ej: <AdminPanel />)
const RutaProtegida = ({ children, allowedRoles }) => {
  
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('rol');

  // 1. Verificar si hay token (Si no está logueado)
  if (!token) {
    // Si no hay token, lo enviamos al login
    return <Navigate to="/login" replace />;
  }

  // 2. Verificar si el rol es permitido (Si el rol no está en la lista de permitidos)
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Si el rol no es correcto (ej: Cliente intenta ver Admin)
    alert("Acceso denegado. No tienes permisos de " + allowedRoles.join(" o "));
    // Lo enviamos a la página de inicio o a una página de error.
    return <Navigate to="/" replace />; 
  }

  // Si pasa ambas verificaciones, mostramos el componente (la página)
  return children;
};

export default RutaProtegida;