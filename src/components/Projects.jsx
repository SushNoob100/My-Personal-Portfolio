import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Typing Test Application',
      description: 'A full stack typing test application that helps users improve their typing speed and accuracy with real-time feedback and performance metrics.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/SushNoob100/Typing-Test-Application'
    },
    {
      title: 'URL Shortener',
      description: 'A Full Stack URL Shortener application with proper analytics to track link performance, clicks, and user engagement. Built with modern JavaScript technologies.',
      tags: ['JavaScript', 'Node.js', 'Analytics'],
      github: 'https://github.com/SushNoob100/URL-Shortener'
    },
    {
      title: 'Travel Booking Website',
      description: 'A comprehensive travel booking platform built with TypeScript, offering seamless booking experiences with modern UI/UX design patterns.',
      tags: ['TypeScript', 'React', 'Full Stack'],
      github: 'https://github.com/SushNoob100/Travel_Booking_Website'
    },
    {
      title: 'License Plate Detection System',
      description: 'A vehicle license plate detection system using machine learning. Features image upload and live camera capabilities for real-time detection and recognition.',
      tags: ['Python', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/SushNoob100/License-Plate-Detection-System'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
