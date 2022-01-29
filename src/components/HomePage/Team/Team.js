import React, { useEffect } from 'react';
import Teambg from '../../../svg_img/team.svg';
import TeamMembers from './TeamMembers/TeamMembers';
import Aos from 'aos';
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    Aos.init({});
})
  return (
    <div id='team' className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-[130px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center" data-aos="fade-up" data-aos-delay="100">
      <div
        className="sm:hidden lg:inline-block lg:w-[950px] lg:h-[750px]  justify-center bg-no-repeat xl:ml-[-10px] 2xl:ml-[-10px]"
        style={{ backgroundImage: `url(${Teambg})` }}
      ></div>
      <div>
        <div className="grid grid-row-2 lg:grid-rows-2 space-y-2 ">
          <h1 className="font-bold text-[#6F5DE0] text-6xl">Our Team</h1>
          <p className="xl:w-[700px] 2xl:w-[700px]  text-2xl">
          Meet our exceptionally talented team that made the Starx Hitech a huge success.
          </p>
          <div className=" mb-5 w-[1200px] ml-[-530px] 2xl:ml-[-500px]">
          <TeamMembers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
