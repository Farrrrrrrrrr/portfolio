import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects limit={3} showButton={true} />
      <Contact />
    </>
  );
};

export default HomePage;
