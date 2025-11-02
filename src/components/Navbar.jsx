import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">SushNoob100</div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')} className="nav-link">Home</a></li>
          <li><a onClick={() => scrollToSection('about')} className="nav-link">About</a></li>
          <li><a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
        </ul>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
