import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
