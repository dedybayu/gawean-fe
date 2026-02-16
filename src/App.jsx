import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"


import Footer from "./pages/landing_page/components/Footer";
import Landing from "./pages/landing_page/Landing";
import Navbar from './pages/landing_page/components/Navbar';
import Login from './pages/login_page/Login';

function App() {
  return (
  <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;