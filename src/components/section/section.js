import React from 'react'
import { Card } from '../card/card'

export function Section({ title, cards }) {
  return (
    <div>
      <div className="main container">
        <header className="major">
          <h2>{title}</h2>
        </header>
        <div className="content">
          {cards.map(({ title, duration, content, picture }) => (
            <Card
              title={title}
              duration={duration}
              content={content}
              picture={picture}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
