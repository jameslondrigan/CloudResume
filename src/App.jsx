import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';        // keep Bootstrap
import './index.css';                                 // the CSS above
import { initReveal } from './utils/reveal';          // the JS above

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.body.classList.add('ready');
    return () => document.body.classList.remove('ready');
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

