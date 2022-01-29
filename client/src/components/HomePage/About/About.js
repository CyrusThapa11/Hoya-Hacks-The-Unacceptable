import React, { Fragment, useEffect } from 'react';
import AboutBg from '../../../svg_img/homebg.svg'
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({});
    })
  return (
      <Fragment>
        <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-[125px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center" data-aos="fade-up" data-aos-delay="100">
            <div
                className="sm:hidden lg:inline-block lg:w-[950px] lg:h-[750px] justify-center bg-no-repeat ml-[-78px]"
                style={{ backgroundImage: `url(${AboutBg})` }}
            ></div>
            <div className="space-y-6 xl:ml-[-16px] 2xl:ml-[50px] mt-[-80px]">
                <h1 className="font-bold text-[#6F5DE0] text-6xl">We are One</h1>
                <p className="w-[680px] text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris tortor ultrices eu faucibus tellus.
                </p>
                {/* <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded">
                    START NOW
                </button> */}
            </div>
        </div>
      </Fragment>
  );
}

export default About;
