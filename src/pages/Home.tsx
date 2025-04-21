import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Initiatives from '../components/sections/Initiatives';
import Resources from '../components/sections/Resources';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;