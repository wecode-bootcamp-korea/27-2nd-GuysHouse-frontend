import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main.js';
import Nav from './components/Nav/Nav';
import Host from './pages/Host/Host';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  );
}
