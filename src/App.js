import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Section } from './components/section'
import { Skill } from './components/skill'
import { data } from './data'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header />
        {data.sections.map(({ title, cards }) => (
          <Section title={title} cards={cards} />
        ))}
        {/*<DevStory/>*/}
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
