import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsComingSoon from './components/ProjectsComingSoon';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
