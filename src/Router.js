import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main.js';
import Nav from './components/Nav/Nav';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
