import React, { useState, useEffect } from 'react'
import moonIcon from '../assets/images/moon.png'
import sunIcon from '../assets/images/sun.png'
import '../App.css'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark') {
        document.documentElement.classList.add('dark-theme')
        setDarkMode(true)
      }
    } catch {
      // ignore
    }
  }, [])

  const toggleDarkMode = () => {
    const next = !darkMode
    setDarkMode(next)
    try {
      if (next) {
        document.documentElement.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark-theme')
        localStorage.setItem('theme', 'light')
      }
    } catch {
      // ignore
    }
  }

  return (
    <div
      className="site-theme-toggle"
      onClick={toggleDarkMode}
      aria-pressed={darkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      <img src={darkMode ? sunIcon : moonIcon} alt={darkMode ? 'sun' : 'moon'} className="theme-icon" />
    </div>
  )
}
