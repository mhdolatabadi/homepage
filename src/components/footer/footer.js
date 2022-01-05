import React from 'react'

export function Footer() {
  return (
    <div>
      <footer className="container">
        <ul className="icons">
          <p>
            &copy;2019-2022 MohammadHossein Dolatabadi.
            <br />
            You could contact me at&nbsp;
            <a href="mailto:mhdolatabadia@ce.sharif.edu">
              mhdolatabadia@ce.sharif.edu
            </a>
          </p>
          <div
            style={{
              borderLeft: '1px solid white',
              borderRight: '1px solid white',
              borderTop: '1px solid white',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              Social media: @mhdolatabadi|@mhdolatabadia
            </div>
            <li>
              <a
                href="https://www.linkedin.com/in/mhdolatabadi"
                className="fab fa-linkedin"
              >
                <span></span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/mhdolatabadi"
                className="fab fa-twitter"
              >
                <span></span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mhdolatabadi"
                className="fab fa-instagram"
              >
                <span></span>
              </a>
            </li>
            <li>
              <a
                href="https://telegram.me/mhdolatabadia"
                className="fab fa-telegram-plane"
              >
                <span></span>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/12337783/mohammadhossein-dolatabadi"
                className="fab fa-stack-overflow"
              >
                <span></span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mhdolatabadi"
                className="fab fa-github"
              >
                <span></span>
              </a>
            </li>
          </div>
        </ul>
      </footer>
    </div>
  )
}
