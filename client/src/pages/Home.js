import React from 'react';
import About from '../components/HomePage/About/About';
import DetailsSection from '../components/HomePage/DetailsSection/DetailsSection';
import Header from '../components/HomePage/Header/Header';
import HomeSection from '../components/HomePage/HomeSection/HomeSection';

const Home = () => {
  return (
      <>
        <Header />
        <HomeSection />
        <About />
        <DetailsSection />
      </>
  );
};

export default Home;
