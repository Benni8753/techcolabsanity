import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import Students from './Students';
import Welcome from './Welcome';
import NavBar from './NavBar';
import About from './About';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Welcome />
      <NavBar />
      <About />
      <Projects />
      <Students />
      <Contact />
      <Footer />
    </div>
  );
}
