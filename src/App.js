import './App.css';
import { useEffect } from 'react';
import logo from './assets/logo.png';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = logo;
    document.head.appendChild(favicon);
  }, []);

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
