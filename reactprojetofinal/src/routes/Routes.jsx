import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { Carrinho } from '../pages/Carrinho';
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

