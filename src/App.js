import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';        // keep Bootstrap
import './index.css';                                 // the CSS above
import { initReveal } from './utils/reveal';          // the JS above

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience"
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  useEffect(()=>{ initReveal(); },[]);
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
