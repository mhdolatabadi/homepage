import React from 'react'

export function Header() {
  return (
    <div>
      <div className="intro container">
        <img className="profile-picture" src="profile-picture.jpg" />
        <h1 style={{ marginTop: '50px' }}>Mohammad Hossein Dolatabadi</h1> 
        <h5 style={{ marginTop: '30px' }}>
          You may like to read &nbsp;
          <a href="https://github.com/mhdolatabadi" target="_blank">
            my introduction
          </a>
          &nbsp; on Github
        </h5>
      </div>
    </div>
  )
}
