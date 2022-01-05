import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header/header'
import { Section } from './components/section/section'
import { Skill } from './components/skill'

const data = {
  sections: [
    {
      title: 'education',
      cards: [
        {
          title: 'Shahid Babaee Highschool',
          duration: '2016-2019',
          picture: 'sampad.jpg',

          content: (
            <p>
              I studied Math and Physics at&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Shahid_Babaee_High_School_(Qazvin_Sampad)"
                target="_blank"
              >
                Shahid Babaee
              </a>
              &nbsp; highschool, located in Qazvin province.
            </p>
          ),
        },
        {
          title: 'Sharif University of Technology',
          duration: '2019-now',
          picture: 'sharif.png',
          content: (
            <p>
              I'm doing my Bachelor's in computer engineering at&nbsp;
              <a href="https://en.sharif.edu/" target="_blank">
                Sharif
              </a>
              &nbsp;University of Technology.
            </p>
          ),
        },
      ],
    },
    {
      title: 'work experience',
      cards: [
        {
          title: 'Weblite',
          duration: '2020-2021',
          picture: 'weblite.svg',

          content: (
            <p>
              I was working at&nbsp;
              <a href="https://weblite.me" target="_blank">
                Weblite
              </a>
              &nbsp; as a part-time full stack developer. Weblite is a platform
              which recently provides educational tools for students. In Weblite
              you can easily publish your web app using its kind API.
            </p>
          ),
        },
      ],
    },
    {
      title: 'student works',
      cards: [
        {
          title: 'Winter Seminar Series',
          duration: '2022',
          picture: 'wss.jpg',

          content: (
            <p>
              I was technical staff at&nbsp;
              <a href="https://wss.ce.sharif.edu/" target="_blank">
                7th WSS
              </a>
              &nbsp; as front-end developer of the website. WSS is a two-day
              event consisting of scientific seminars in advanced computer
              science and engineering. The Winter Seminar Series (WSS) has been
              built to gather successful Iranians from all around the world and
              create a professional community in computer science and
              engineering topics . Over the years, this seminar has grown to
              become one of the best events in the Sharif University of
              Technology. WSS is for everyone who works on or interested in any
              computer science topics and wants to share and express his ideas
              and research.
            </p>
          ),
        },
        {
          title: 'AI Challenge',
          duration: '2021',
          picture: 'aic.jpg',
          content: (
            <p>
              I was technical staff at&nbsp;
              <a href="https://wss.ce.sharif.edu/" target="_blank">
                AIChallenge 2021
              </a>
              &nbsp; as member of graphic team. Sharif AI Challenge is a
              programming competition for all who are interested in artificial
              intelligence. This competition is held in two phases annually.
              Including an online and an on-site phase in which competitors will
              compete in teams of three in a game designed by technical team.
            </p>
          ),
        },
      ],
    },
  ],
  skills: [
    {
      icon: 'chalkboard-teacher',
      title: 'Teaching',
      content:
        'I love teaching. I have been teaching math and physics for highschool students since 3 years ago. Teaching is a part of my life and gives me more energy to do other things. I also tried teaching assistant for Advanced programming course twice and it was lovely.',
    },
    {
      icon: 'cogs',
      title: 'Technical Skills',
      content:
        "I'm experienced in web development (both back-end and     front-end). I do many project using javascript frameworks and libraries like Vue.js, React.js, Node.js and Nest.js. I'm also familiar with clean code, object-oriented programming, functional programming and design patterns. I've been working with Unix-based operating systems like Linux since 2020.",
    },
    {
      icon: 'code',
      title: 'Programming',
      content:
        '  Time flies when I do programming. There are few other activities that have the same feeling. I sometimes do programming just for fun. There are some programming languages like C, C++, Java, Python and swift, i have programmed in them but I always prefer JavaScript.',
    },
    {
      icon: 'gamepad',
      title: 'Hobbies',
      content:
        "I enjoy watching every professional sport, especially football. I'm a fan of FC Bayern. I also love playing football games like FIFA (since FIFA98!). I played football computer games most of the time when I was a teenager. Now i love to play futsal with friends(this is another thing which in it time flies:D)",
    },
  ],
}

function App() {
  return (
    <div className="App">
      <div style={{ overflowY: 'scroll', height: '100%' }}>
        <Header />
        {data.sections.map(({ title, cards }) => (
          <Section title={title} cards={cards} />
        ))}
        <div className="skills container">
          <header className="major">
            <h2>Interests and Skills</h2>
          </header>
          <div className="skills-body">
            {data.skills.map(({ icon, title, content }) => (
              <Skill icon={icon} title={title} content={content} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
