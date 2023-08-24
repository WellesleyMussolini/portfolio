import './App.css';
import Introduction from './layout/intro/introduction';
import Projects from './layout/projects/projects';
import Skills from './layout/skills/skills';
import Contact from './layout/contact/contact';

function App() {
  return (
    <div>
      <Introduction />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;