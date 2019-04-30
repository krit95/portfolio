import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import About from './components/pages/About';
import WorkAndEducation from './components/pages/WorkAndEducation';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import NotFound from './components/pages/NotFound';
import Contact from './components/sections/Contact';
import Navbar from './components/sections/Navbar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        <Navbar />
        <div className = "main-content grey lighten-4">
            <Switch>
              <Route exact path = "/" component = {About} />
              <Route path = "/worknedu" component = {WorkAndEducation} />
              <Route path = "/projects" component = {Projects} />
              <Route path = "/skills" component = {Skills} />
              <Route path = "/res/files/resume.pdf" render = {() => {
                return (
                <a href = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer" />
              )}} />
              <Route path = "/" component = {NotFound} />
            </Switch>
          </div>
          <Contact />
        </div>
      </HashRouter>
    );
  }
}

export default App;
