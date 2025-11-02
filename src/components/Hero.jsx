import React from 'react'
import profileImage from '../assets/profile.jpg'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <img src={profileImage} alt="SushNoob100" className="hero-photo" />
          {/* Profile image for portfolio */}
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">SushNoob100</span> 👋
          </h1>
          <h2 className="hero-subtitle">Full Stack Software Engineer & Web Developer</h2>
          <p className="hero-description">
            I'm passionate about building creative solutions and bringing ideas to life through code.
            From AI-powered applications to full-stack web development, I love tackling challenging problems.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
