const school = {
  title: 'Shahid Babaee Highschool',
  duration: '2016-2019',
  picture: 'sampad.svg',

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
}
const university = {
  title: 'Sharif University of Technology',
  duration: '2019-now',
  picture: 'sharif.svg',
  content: (
    <p>
      I'm doing my Bachelor's in computer engineering at&nbsp;
      <a href="https://en.sharif.edu/" target="_blank">
        Sharif
      </a>
      &nbsp;University of Technology.
    </p>
  ),
}
const weblite = {
  title: 'Weblite',
  duration: '2020-2023',
  picture: 'weblite.svg',

  content: (
    <p>
      I was working at&nbsp;
      <a href="https://weblite.me" target="_blank">
        Weblite
      </a>
      &nbsp; as a part-time full stack developer. Weblite is a platform which
      recently provides educational tools for students. In Weblite you can
      easily publish your web app using its kind API.
    </p>
  ),
}
const sahab = {
  title: 'Sahab',
  duration: '2023-now',
  picture: 'sahab.jpeg',

  content: (
    <p>
      I am working at&nbsp;
      <a href="https://sahab.ir" target="_blank">
        Sahab
      </a>
      &nbsp; as a part-time backend developer. Relying on a wide range of
      data-oriented expertise, we can provide solutions for all data needs of
      organization and businesses. Sahab creates transformation in any
      organization where there is data and the desire to use it.
    </p>
  ),
}
const hardwar = {
  title: 'Hardwar',
  duration: '2023',
  picture: 'hardwar2.jpg',

  content: (
    <p>
      I was <b>technical staff</b> at&nbsp;
      {/*<a href="https://wss.ce.sharif.edu/" target="_blank">*/}
      Hardwar
      {/*</a>*/}
      &nbsp; as front-end developer of event website. Hardwar is a tiny event
      based on hardware knowledge for bachelor students
    </p>
  ),
}
const gamein = {
  title: 'Gamein',
  duration: '2022',
  picture: 'gamein.jpeg',

  content: (
    <p>
      I was <b>technical staff</b> at&nbsp;
      {/*<a href="https://wss.ce.sharif.edu/" target="_blank">*/}
      Gamein
      {/*</a>*/}
      &nbsp; as front-end developer of the game client. Gamein is the first
      challenge in the field of industrial engineering in Iran, held annually by
      the students of Sharif University of Technology.
    </p>
  ),
}
const datadays = {
  title: 'Data Days',
  duration: '2022',
  picture: 'datadays.jpeg',

  content: (
    <p>
      I was <b>technical staff</b> at&nbsp;
      {/*<a href="https://wss.ce.sharif.edu/" target="_blank">*/}
      Data Days
      {/*</a>*/}
      &nbsp; as front-end developer of the website. Data Days is the first data
      science competition of the computer engineering department.
    </p>
  ),
}
const loc = {
  title: 'League of Coders',
  duration: '2022',
  picture: 'loc.jpeg',

  content: (
    <p>
      I was <b>technical staff</b> at&nbsp;
      <a href="https://locsharif.com" target="_blank">
        LoC
      </a>
      &nbsp; as the <b>only</b> front-end developer of the website. LOC is an
      event aiming to create familiarity and increase knowledge of Java
      programming and topics of hardware, blockchain and ML for computer science
      and engineering students.
    </p>
  ),
}
const wss = {
  title: 'Winter Seminar Series',
  duration: '2022',
  picture: 'wss.jpg',

  content: (
    <p>
      I was <b>technical staff</b> at&nbsp;
      <a href="https://wss.ce.sharif.edu/" target="_blank">
        7th WSS
      </a>
      &nbsp; as front-end developer of the website. WSS is a two-day event
      consisting of scientific seminars in advanced computer science and
      engineering. The Winter Seminar Series (WSS) has been built to gather
      successful Iranians from all around the world and create a professional
      community in computer science and engineering topics.
    </p>
  ),
}
const aic = {
  title: 'AI Challenge',
  duration: '2021',
  picture: 'aic.jpg',
  content: (
    <p>
      I was <b>technical staff</b> at&nbsp;
      <a href="https://wss.ce.sharif.edu/" target="_blank">
        AIChallenge 2021
      </a>
      &nbsp; as member of graphic team. Sharif AI Challenge is a programming
      competition for all who are interested in artificial intelligence.
    </p>
  ),
}
export const data = {
  sections: [
    {
      title: 'education',
      cards: [school, university],
    },
    {
      title: 'work experience',
      cards: [weblite, sahab],
    },
    {
      title: 'student works',
      cards: [hardwar, gamein, datadays, loc, wss, aic],
    },
  ],
  skills: [
    {
      icon: 'cogs',
      title: 'Technical Skills',
      content: (
        <div>
          I'm experienced in web development (both back-end and front-end).
          <br />
          <br />
          I do many project using javascript frameworks and libraries like
          Vue.js, React.js, Node.js and Nest.js.
          <br />
          <br />
          I'm also familiar with clean code, object-oriented programming,
          functional programming and design patterns.
          <br />
          <br />
          I've been working with Unix-based operating systems like Linux since
          2020.
        </div>
      ),
    },
    {
      icon: 'code',
      title: 'Programming',
      content: (
        <div>
          Time flies when I do programming. There are few other activities that
          have the same feeling. I sometimes do programming just for fun.
          <br />
          <br />
          There are some programming languages like C, Java and Python, I have
          programmed in them.
        </div>
      ),
    },
    {
      icon: 'linux',
      title: 'Linux',
      content: (
        <div>
          I want to start with a sentence from Linus Torvalds: <br />
          "A computer is like air conditioning, it becomes useless if you open
          windows."
          <br />
          <br />
          I've worked with linux since 2020. I prefer to use it because it's
          optimal in using system resources as windows doesn't. Also linux is
          safer than windows and you can monitor everything you want.
          <br />
          <br />
          For me, installation of tools is easier in Linux. All of my needs, meets in
          Linux, and programming in it is so fun.
        </div>
      ),
    },
  ],
}
