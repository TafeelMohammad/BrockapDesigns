import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import gsap from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PastelDreams from './components/PastelDreams';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PastelDreams />
    </>
  );
}

export default App;
