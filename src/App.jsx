import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css';
import About from './Components/About';

function App() {
  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
      </>
  );
}

export default App;
