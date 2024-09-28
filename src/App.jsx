import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App