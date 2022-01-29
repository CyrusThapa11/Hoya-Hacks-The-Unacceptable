import React from 'react';
import About from '../components/HomePage/About/About';
import DetailsSection from '../components/HomePage/DetailsSection/DetailsSection';
import Features from '../components/HomePage/Features/Features';
import Header from '../components/HomePage/Header/Header';
import HomeSection from '../components/HomePage/HomeSection/HomeSection';
import Team from '../components/HomePage/Team/Team';

const Home = () => {
  return (
      <>
        <Header />
        <HomeSection />
        <About />
        <DetailsSection />
        <Features />
        <Team />
      </>
  );
};

export default Home;
