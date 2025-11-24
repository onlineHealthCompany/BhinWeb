import React, { useState } from 'react'
import '../App.css'
import Heri from '../assets/images/bhin-logo-removebg-preview.png'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  

  return (
    <nav className="navbar">
      <div className="container">
         <div className="nav-container">
            <div className='logo-icon'>
              <div className="logo">
                <img src={Heri} alt=""  className="logosize"/>
              </div>

              <div className="span">
                <h1>Brain Health Initiative</h1>
                <p>Nigeria</p>
              </div>
              
            </div>
    

            
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
                <a href="#home" className="nav-link" onClick={closeMenu}>
                Home
                </a>
            </li>
            <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>
                About
                </a>
            </li>
            <li className="nav-item">
                <a href="#services" className="nav-link" onClick={closeMenu}>
                Impact
                </a>
            </li>
            <li className="nav-item">
                <a href="#products" className="nav-link" onClick={closeMenu}>
                Programs
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contact us
                </a>
            </li>
            </ul>

            <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar