import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main.js';
import Nav from './components/Nav/Nav';
import Host from './pages/Host/Host';
import Login from './pages/Login/Login';
import RegisterHost from './pages/Host/RegisterHost.js';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/host/*" element={<Host />} />
        <Route path="/register-host" element={<RegisterHost />} />
      </Routes>
    </BrowserRouter>
  );
}
