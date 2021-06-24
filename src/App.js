import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/common/NavMenu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/common/Footer';
import SmoothScrollBar from './components/common/SmoothScrollBar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/resume"
              render={() => {
                window.location.href = 'resume.html';
              }}
            />
          </Switch>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
