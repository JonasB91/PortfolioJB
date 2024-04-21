import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function App() {
  return (
<Router>
      <Navbar />
      <Hero />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;
