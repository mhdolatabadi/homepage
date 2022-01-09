import React from 'react'

export function Header() {
  return (
    <div>
      <div className="intro container">
        <img className="profile-picture" src="profile-picture.jpg" />
        <h1>Mohammad Hossein Dolatabadi</h1>
        <h3 style={{ marginTop: 0 }}>
          <a href="http://ce.sharif.edu/">Computer Engineering</a> Student at &nbsp;
          <a href="https://en.sharif.edu/">Sharif University of Technology</a>
        </h3>
        <h5 style={{ marginTop: 0 }}>
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
