import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ClipLoader from 'react-spinners/ClipLoader';

import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/HeroSection';
import About from './components/AboutSection';
import Experience from './components/ExperienceSection';
import Projects from './components/ProjectsSection';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <FadeIn transitionDuration="700">
          <NavMenu />
        </FadeIn>
        <ScrollToTop />
        <Switch>
          <Home />
        </Switch>
      </Router>
    </>
  );
}
