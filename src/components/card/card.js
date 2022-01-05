import React from 'react'

export function Card({ title, duration, content, picture }) {
  const isEvent = picture === 'wss.jpg' || picture === 'aic.jpg'
  return (
    <div>
      <section className={`section ${isEvent ? 'student-work wss aic' : ''}`}>
        <img src={picture} />
        <h3>{title}</h3>
        <h4>
          <b>{duration}</b>
        </h4>
        {content}
      </section>
    </div>
  )
}
