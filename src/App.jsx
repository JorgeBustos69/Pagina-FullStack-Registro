import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Registro from './Components/Registro';
import Login from './Components/Login';
import Catalogo from './Components/Catalogo';

import Carrito from './Components/Carrito';
import ProductoDetalle from './Components/ProductoDetalle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<div>Checkout (Paso de Pago)</div>} />
        <Route path="/pago-exitoso" element={<div>Pago Correcto</div>} />
        <Route path="/pago-error" element={<div>Pago con Error</div>} />
      </Routes>
    </Router>
  );
}

export default App;
