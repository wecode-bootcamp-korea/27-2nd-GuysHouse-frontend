import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main.js';
import Nav from './components/Nav/Nav';
import Host from './pages/Host/Host';
import Login from './pages/Login/Login';
import RegisterHost from './pages/Host/RegisterHost.js';
// import Detail from './pages/Detail/Detail';
import Detail from './pages/Detail/Detail.js';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/detail/:id" element={<Detail>}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/host/*" element={<Host />} />
        <Route path="/register-host" element={<RegisterHost />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
