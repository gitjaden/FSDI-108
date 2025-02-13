import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Catalog from './pages/catalog'
import Navbar from './components/navbar'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/catalog" element={<Catalog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
