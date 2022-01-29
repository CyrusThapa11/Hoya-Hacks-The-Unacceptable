import React from 'react';
import About from '../components/HomePage/About/About';
import Contact from '../components/HomePage/Contact/Contact';
import DetailsSection from '../components/HomePage/DetailsSection/DetailsSection';
import Features from '../components/HomePage/Features/Features';
import Footer from '../components/HomePage/Footer/Footer';
import HomeSection from '../components/HomePage/HomeSection/HomeSection';
import Team from '../components/HomePage/Team/Team';

const Home = () => {
  return (
      <div className='bg-bgDark text-white overflow-x-hidden'>
        <HomeSection />
        <About />
        <DetailsSection />
        <Features />
        <Team />
        <Contact />
        <Footer />
      </div>
  );
};

export default Home;
