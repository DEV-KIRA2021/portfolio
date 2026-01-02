// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealSection from './components/RevealSection'; // Importamos el componente

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = {
    textMain: darkMode ? 'text-gray-100' : 'text-gray-900',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-600',
    bgMain: darkMode ? 'bg-gray-950' : 'bg-slate-50',
    cardBg: darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-purple-100',
    purpleText: 'text-purple-600 dark:text-purple-400',
    gradientText: 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400',
  };

  return (
      <div className={darkMode ? "dark" : ""}>
        <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-purple-200 dark:selection:bg-purple-900 ${theme.bgMain} ${theme.textMain}`}>

          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} theme={theme} />

          <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
            <RevealSection>
              <Hero theme={theme} darkMode={darkMode} />
            </RevealSection>
            
            <RevealSection delay={100}>
              <Skills theme={theme} darkMode={darkMode} />
            </RevealSection>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-16"></div>
            
            <RevealSection delay={150}>
              <Experience theme={theme} darkMode={darkMode} />
            </RevealSection>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-16"></div>
            
            <RevealSection delay={200}>
              <Projects theme={theme} darkMode={darkMode} />
            </RevealSection>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-16"></div>
            
            <RevealSection delay={250}>
              <Education theme={theme} darkMode={darkMode} />
            </RevealSection>
            
            <RevealSection delay={300}>
              <Certificates theme={theme} darkMode={darkMode} />
            </RevealSection>
            
            <RevealSection delay={350}>
              <Contact theme={theme} darkMode={darkMode} />
            </RevealSection>
          </main>

          <Footer theme={theme} darkMode={darkMode} />
        </div>
      </div>
  );
};

export default App;