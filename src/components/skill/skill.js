import React from 'react'

export function Skill({ icon, title, content }) {
  return (
    <div className="skill-container">
      <header className="skill-title">
        <div className={`fas fa-${icon}`}></div>
        <div style={{ marginLeft: '10px' }}>{title}</div>
      </header>
      <section className="skill-body">{content}</section>
    </div>
  )
}
