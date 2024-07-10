import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import AboutMe from './components/about/about';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={ <Intro /> } />
        <Route path='about' element={ <AboutMe /> } />
        <Route path='projects' element={ <Projects /> } />
        <Route path='contact' element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
