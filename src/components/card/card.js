import React from 'react'

export function Card({title, duration, content, picture}) {
  // const isEvent = picture === 'wss.jpg' || picture === 'aic.jpg' || picture === 'gamein.jpeg' || picture === 'loc.jpeg' || picture === 'datadays.jpeg' || picture === 'sahab.jpg'
  return (
    <div>
      <section className="section student-work">
        <img src={picture} alt={picture}/>
        <h3>{title}</h3>
        <h4>
          <b>{duration}</b>
        </h4>
        <p>
          {content}
        </p>
      </section>
    </div>

  )
}
