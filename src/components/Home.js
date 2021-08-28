import React from 'react';
import Contact from './Contact';
import Project from './Project';
import Projects from './Projects';
import Students from './Students';
import Student from './Student';
import Welcome from './Welcome';
import NavBar from './NavBar';

export default function Home() {
  return (
    <div>
      <Welcome />
      <NavBar />
      <Welcome />
      <Projects />
      <Students />
      <Contact />
    </div>
  )
}
