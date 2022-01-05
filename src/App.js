import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{ overflowY: 'scroll', height: '100%' }}>
        <div className="intro container">
          <img className="profile-picture" src="profile-picture.jpg" />
          <h1>Mohammad Hossein Dolatabadi</h1>
          <h3 style={{ marginTop: 0 }}>
            <a href="http://ce.sharif.edu/">Computer Engineering</a> Student at
            <a href="https://en.sharif.edu/">Sharif University of Technology</a>
          </h3>
          <h5 style={{ marginTop: 0 }}>
            You may like to read
            <a href="https://github.com/mhdolatabadi" target="_blank">
              my introduction
            </a>
            on Github
          </h5>
        </div>
        <div className="main container">
          <header className="major">
            <h2>education</h2>
          </header>
          <div className="content">
            <section className="section">
              <img src="sharif.png" />
              <h3>Sharif University of Technology</h3>
              <h4>
                <b> 2019-now </b>
              </h4>
              <p>
                I'm doing my Bachelor's in computer engineering at
                <a href="https://en.sharif.edu/" target="_blank">
                  Sharif
                </a>
                University of Technology.
              </p>
            </section>
            <section className="section">
              <img src="sampad.jpg" />
              <h3>Shahid Babaee Highschool</h3>
              <h4>
                <b>2016-2019</b>
              </h4>
              <p>
                I studied Math and Physics at
                <a
                  href="https://en.wikipedia.org/wiki/Shahid_Babaee_High_School_(Qazvin_Sampad)"
                  target="_blank"
                >
                  Shahid Babaee
                </a>
                highschool, located in Qazvin province.
              </p>
            </section>
          </div>
        </div>
        <div className="main container">
          <header className="major">
            <h2>work experience</h2>
          </header>
          <div className="content">
            <section className="section">
              <img src="weblite.svg" />
              <h3>Weblite</h3>
              <h4>
                <b> 2020-2021 </b>
              </h4>
              <p>
                I was working at
                <a href="https://weblite.me" target="_blank">
                  Weblite
                </a>{' '}
                as a part-time full stack developer. Weblite is a platform which
                recently provides educational tools for students. In Weblite you
                can easily publish your web app using its kind API.
              </p>
            </section>
          </div>
        </div>
        <div className="main container">
          <header className="major">
            <h2>student works</h2>
          </header>
          <div className="content">
            <section className="section student-work wss">
              <img src="wss.jpg" />
              <h3>Winter Seminar Series</h3>
              <h4>
                <b> 2022 </b>
              </h4>
              <p>
                I was technical staff at
                <a href="https://wss.ce.sharif.edu/" target="_blank">
                  7th WSS
                </a>
                as front-end developer of the website. WSS is a two-day event
                consisting of scientific seminars in advanced computer science
                and engineering. The Winter Seminar Series (WSS) has been built
                to gather successful Iranians from all around the world and
                create a professional community in computer science and
                engineering topics . Over the years, this seminar has grown to
                become one of the best events in the Sharif University of
                Technology. WSS is for everyone who works on or interested in
                any computer science topics and wants to share and express his
                ideas and research.
              </p>
            </section>
            <section className="section student-work aic">
              <img src="aic.jpg" />
              <h3>AI Challenge</h3>
              <h4>
                <b> 2021 </b>
              </h4>
              <p>
                I was technical staff at
                <a href="https://wss.ce.sharif.edu/" target="_blank">
                  AIChallenge 2021
                </a>
                as member of graphic team. Sharif AI Challenge is a programming
                competition for all who are interested in artificial
                intelligence. This competition is held in two phases annually.
                Including an online and an on-site phase in which competitors
                will compete in teams of three in a game designed by technical
                team.
              </p>
            </section>
          </div>
        </div>
        <div className="skills container">
          <header className="major">
            <h2>Interests and Skills</h2>
          </header>
          <div className="skills-body">
            <div className="skill-container">
              <header className="skill-title">
                <div className="fas fa-chalkboard-teacher"></div>
                <div style={{ marginLeft: '10px' }}>Teaching</div>
              </header>
              <section className="skill-body">
                I love teaching. I have been teaching math and physics for
                highschool students since 3 years ago. Teaching is a part of my
                life and gives me more energy to do other things. I also tried
                teaching assistant for Advanced programming course twice and it
                was lovely.
              </section>
            </div>
            <div className="skill-container">
              <header className="skill-title">
                <div className="fas fa-cogs"></div>
                <div style={{ marginLeft: '10px' }}>Technical Skills</div>
              </header>
              <section className="skill-body">
                I'm experienced in web development (both back-end and
                front-end). I do many project using javascript frameworks and
                libraries like Vue.js, React.js, Node.js and Nest.js. I'm also
                familiar with clean code, object-oriented programming,
                functional programming and design patterns. I've been working
                with Unix-based operating systems like Linux since 2020.
              </section>
            </div>
            <div className="skill-container">
              <header className="skill-title">
                <div className="fas fa-code"></div>
                <div style={{ marginLeft: '10px' }}>Programming</div>
              </header>
              <section className="skill-body">
                Time flies when I do programming. There are few other activities
                that have the same feeling. I sometimes do programming just for
                fun. There are some programming languages like C, C++, Java,
                Python and swift, i have programmed in them but I always prefer
                JavaScript.
              </section>
            </div>
            <div className="skill-container">
              <header className="skill-title">
                <div className="fas fa-gamepad"></div>
                <div style={{ marginLeft: '10px' }}>Hobbies</div>
              </header>
              <section className="skill-body">
                I enjoy watching every professional sport, especially football.
                I'm a fan of FC Bayern. I also love playing football games like
                FIFA (since FIFA98!). I played football computer games most of
                the time when I was a teenager. Now i love to play futsal with
                friends(this is another thing which in it time flies:D)
              </section>
            </div>
          </div>
        </div>
        <footer className="container">
          <ul className="icons">
            <p>
              &copy;2019-2022 MohammadHossein Dolatabadi.
              <br />
              You could contact me at mhdolatabadia@ce.sharif.edu
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
    </div>
  )
}

export default App
