import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Projects from './components/Projects';
import Students from './components/Students';
import Student from './components/Student';
import Welcome from './components/Welcome';
import Navbartest from './components/Navbartest';
import NavBar from './components/NavBar';
//NavBar and Footer are always there anyway

export default function App() {
  return (
    <BrowserRouter>
      <Navbartest />
      {/* <NavBar /> */}
      <Welcome />
      <Projects />
      <Students />
      <Contact />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/project/:slug' />
        <Route component={Projects} path='project' />
        <Route component={Students} path='/student/:slug' />
        <Route component={Student} path='/student' />
        <Route component={Contact} path='/contact' />
        {/* <Route  path='https://www.ara.ac.nz/' /> */}
      </Switch>
    </BrowserRouter>
  );
}
