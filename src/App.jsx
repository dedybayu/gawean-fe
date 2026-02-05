import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from "./pages/landing_page/components/Footer";
import Landing from "./pages/landing_page/Landing";
import Navbar from './pages/landing_page/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}

export default App;