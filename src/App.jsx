import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navegacion from './Components/Navegacion';
import RutaProtegida from './Components/RutaProtegida';

import Home from './Components/Home';
import Registro from './Components/Registro';
import Login from './Components/Login';
import Catalogo from './Components/Catalogo';
import AdminProductos from "./Components/AdminProductos";
import Carrito from './Components/Carrito';
import ProductoDetalle from './Components/ProductoDetalle';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>

      <Navegacion />

      <div className="container mt-4">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />

          <Route path="/checkout" element={<div>Checkout</div>} />
          <Route path="/pago-exitoso" element={<div>Pago Correcto</div>} />
          <Route path="/pago-error" element={<div>Pago Error</div>} />

          <Route path="/catalogo" element={<Catalogo />} />


          <Route
            path="/admin"
            element={
              <RutaProtegida allowedRoles={["ADMIN"]}>
                <AdminProductos />
              </RutaProtegida>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
