import * as React from 'react'
import './style.css'

export function DevStory() {
  return (
    <div className="container main">
      <header className="major">
        <h2>Developer Story</h2>
      </header>
      <div className="wrapper">
        <details open>
          <summary style={{ fontSize: 'large' }}>
            <strong>Germination</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              <span className="caps">M</span>y story started in the first grade of high school by coding with
              C++ programming language to get ready for the computing olympiad.
              After 2 years, I continued my path, by learning and coding C and
              C++ programming languages in the first days of university. My
              first encounter with git and github was in those days. The result
              of this part of the journey was a project named&nbsp;
              <a
                href="https://github.com/mhdolatabadi/chat-application"
                target="_blank"
              >
                chat application
              </a>
              .
            </b>
          </p>
        </details>
        <details>
          <summary style={{ fontSize: 'large' }}>
            <strong>Enter the University</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              After that, I got familiar with advanced programming paradigms
              like object-oriented programming and network programming and
              learnt and code them in Java. It was a good experience to do team
              work in a project which resulted in an implementation of an &nbsp;
              <a
                href="https://github.com/AdvProg2020/Project_team-4"
                target="_blank"
              >
                online store
              </a>
              .
            </b>
          </p>
        </details>
        <details>
          <summary style={{ fontSize: 'large' }}>
            <strong>The New Operating System</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              After one year in university, there was a turning point in my
              story and it was installing Ubuntu as my second operating system.
              First days with the new OS, for me, who had lived with Windows
              since he was about 5, was so hard. But there was some ease in
              Linux that couldn't be ignored. For example I could stick in the
              terminal and do everything I want to do.
            </b>
          </p>
        </details>
        <details>
          <summary style={{ fontSize: 'large' }}>
            <strong>Dive to JavaScript</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              Then I attended an internship in which I got familiar with
              JavaScript and it was another turning point in my career. I ended
              up the internship with a project named&nbsp;
              <a
                href="https://github.com/mhdolatabadi/noghte-bazi"
                target="_blank"
              >
                noghte bazi
              </a>
              &nbsp; (means dots and boxes in persian) and a adequate
              understanding of JavaScript and getting familiar with some
              JavaScript framework and library like Vue.js, Node.js, Express.js,
              Socket.io and a database management system, PostgreSQL and also an
              offer for working as a part-time full stack developer. I accepted
              that offer, and besides gaining experience in JavaScript, learnt
              React.js, Material-UI, and some technical concepts of web
              programming.
            </b>
          </p>
        </details>
        <details>
          <summary style={{ fontSize: 'large' }}>
            <strong>The Smart Phones World</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              Let's go back to the university again. Mobile programming course,
              helped me to get familiar with android, ios and flutter
              development. I ended this course with a team project which was an
              app for educational purposes named&nbsp;
              <a href="https://github.com/mob-developer/LearnX" target="_blank">
                LearnX
              </a>
              . That was a pleasant experience.
            </b>
          </p>
        </details>
        <details>
          <summary style={{ fontSize: 'large' }}>
            <strong>In to Compilers</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              I also got familiar with Python during the implementation of the
              project of the design of compilers course which resulted in
              a&nbsp;
              <a
                href="https://github.com/mhdolatabadi/c-minus-compiler"
                target="_blank"
              >
                one-pass compiler
              </a>
              &nbsp; for a minified version of C programming language called
              C-minus.
            </b>
          </p>
        </details>
        <details>
          <summary style={{ fontSize: 'large' }}>
            <strong>The Last Word</strong>
          </summary>
          <p style={{ marginLeft: '20px' }}>
            <b>
              At the end, I should say, Life is going on, and who knows about
              fate?
            </b>
          </p>
        </details>
      </div>
    </div>
  )
}
