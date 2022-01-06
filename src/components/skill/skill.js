import React from 'react'

export function Skill({ icon, title, content }) {
  return (
    <div className="skill-container">
      <header className="skill-title">
        <i className={`fas fa-${icon}`}></i>
        <div style={{ marginLeft: '10px' }}>{title}</div>
      </header>
      <section className="skill-body">{content}</section>
    </div>
  )
}
