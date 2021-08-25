import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Projects from './components/Projects';
import Students from './components/Students';
import Student from './components/Student';
//NavBar and Footer are always there anyway

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/project/:slug' />
        <Route component={Projects} path='project' />
        <Route component={Students} path='/student/:slug' />
        <Route component={Student} path='/student' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  );
}
