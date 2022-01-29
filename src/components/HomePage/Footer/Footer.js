import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="grid grid-rows-1 md:grid-cols-5 px-[100px] py-[80px] gap-x-[150px] mt-[80px] bg-[#6F5DE0] text-white">
        <div className="space-y-4 text-4xl text-white w-[380px]">
          <p className='font-bold'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
        <div className="space-y-4 text-sm text-white"></div>
        <div className="space-y-4 text-lg text-white">
          {/* <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p> */}
        </div>
        <div className="space-y-4 text-lg text-white">
          {/* <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p> */}
        </div>
        <div className="space-y-4 text-lg text-white">
          <h5 className="font-bold">Important Links</h5>
          <p><Link to="/about">About</Link></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href='#team'>Team</a></p>
        </div>
        <p className='w-[380px] mt-[50px]'>© Copyright Company. All Rights Reserved
Made in Hoya Hacks by The Unacceptables</p>
      </div>
    </footer>
  );
}

export default Footer;
