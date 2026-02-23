import { useState, useEffect } from 'react';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CertificationsPublications from './components/CertificationsPublications';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ScrollProgress />
      <Header isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CertificationsPublications />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;