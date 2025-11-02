import React from 'react'

function Skills() {
  const skills = [
    { icon: '☕', name: 'Java', description: 'Backend Development' },
    { icon: '🐘', name: 'PHP', description: 'Server-Side Scripting' },
    { icon: '🐍', name: 'Python', description: 'Machine Learning & AI' },
    { icon: '⚡', name: 'JavaScript', description: 'Full Stack Development' },
    { icon: '📘', name: 'TypeScript', description: 'Type-Safe Development' },
    { icon: '🎨', name: 'CSS', description: 'UI/UX Design' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
