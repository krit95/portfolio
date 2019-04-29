import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import WorkAndEducation from './components/WorkAndEducation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <div className = "main-content grey lighten-4">
            <Switch>
              <Route exact path = "/" component = {About} />
              <Route path = "/worknedu" component = {WorkAndEducation} />
              <Route path = "/projects" component = {Projects} />
              <Route path = "/skills" component = {Skills} />
              <Route path = "/*" component = {NotFound} />
            </Switch>
          </div>
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
