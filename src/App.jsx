import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Massage from './components/Massage';
import Layanan from './components/Layanan';
import About from'./components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <Massage />
      <Layanan/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;