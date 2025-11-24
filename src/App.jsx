import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import About from './components/About';
import Impact from './components/Impact'
import Program from './components/Program';
import Project from './components/Project';
import Team from './components/Team';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import './App.css';
import ThemeToggle from './components/ThemeToggle';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Impact/>
      <Program/>
      <Project/>
      <Team/>
      <Contact/>
     <ThemeToggle />
      <Footer/>
    </div>
  );
}

export default App;
