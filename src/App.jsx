import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import About from './pages/about'
import Catalog from './pages/catalog'
import Navbar from './components/navbar'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Online Store</h1>

      <Home />
      <About />
      <Catalog />

      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
