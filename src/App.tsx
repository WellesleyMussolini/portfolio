import './App.scss';
import Introduction from './layout/introduction/introduction';
import Projects from './layout/projects/projects';
import Skills from './layout/skills/skills';
import Contact from './layout/contact/contact';
import Header from './layout/header/header';
import Loading from './layout/loading/loading.component';

const App = () => (
  <>
    {/* <Header /> */}
    <Introduction />
    <Projects />
    <Skills />
    <Contact />
    <Loading />
  </>
);

export default App;