import React, { Fragment, useEffect } from 'react';
import DetailsPic from './DetailsPic/DetailsPic';
import Aos from 'aos';
import "aos/dist/aos.css";

function DetailsSection() {
    useEffect(() => {
        Aos.init({});
    })
  return (
      <Fragment>
        <div id='services' className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-[55px] xl:mb-[-50px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center" data-aos="fade-up" data-aos-delay="80">
            <div className="space-y-6 ml-[20px] lg:ml-0">
                <h1 className="font-bold text-[#6F5DE0] text-4xl lg:text-6xl">Services</h1>
                <p className="w-[350px] lg:w-[550px] text-2xl">
                    Listed services our Hitech provides:
                </p>
                {/* <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded">
                    START NOW
                </button> */}
            </div>
            <div>
                <DetailsPic />
            </div>
        </div>
      </Fragment>
  );
}

export default DetailsSection;
