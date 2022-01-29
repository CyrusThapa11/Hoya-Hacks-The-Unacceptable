import React, { useState, useEffect } from 'react';
// import { db } from '../../../firebase';
import './Contact.css';
import Aos from 'aos';
import "aos/dist/aos.css";
// import Contactbg from '../../../images/footerbg.svg';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    Aos.init({});
})

//   const details = e => {
//     e.preventDefault();
//     db
//         .collection("ContactDetails")
//         .add({
//             name: name,
//             email: email,
//             subject: subject,
//             message: message, 
//         })
//         .then(() => {
//             alert("Your Form Submitted Successfully");
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
//     setName('');
//     setEmail('');
//     setSubject('');
//     setMessage('');
// }
  return (
    <div className="xl:mt-[50px] xl:mb-[90px]" data-aos="fade-up" data-aos-delay="100">
      <div
        className="sm:hidden lg:inline-block lg:w-[1440px] 2xl:w-[1519.5px] lg:h-[720px]  justify-center bg-no-repeat xl:ml-[0px] 2xl:ml-[0px]"
        // style={{ backgroundImage: `url(${Contactbg})` }}
      ></div>
      <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] xl:mt-[-800px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h1 className="w-[800px] text-7xl text-white font-bold">
            {' '}
            Hey! <br /> Do you have any doubts?{' '}
          </h1>
        </div>
        <div className="xl:ml-[170px] 2xl:ml-[210px] mt-[150px]">
          <div className="bg-white h-[700px] w-[500px] shadow-xl rounded-lg">
            <div className="max-w-[500px] px-4 py-8 items-center text-center">
              <h1 className="text-4xl text-[#6F5DE0] font-bold mt-[20px]">Keep In Touch</h1>
              <div className="contact-formContent">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="test"
                  placeholder="Enter Full Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="test"
                  placeholder="Enter Email Id"
                />
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="test"
                  placeholder="Enter Subject"
                />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="test"
                  placeholder="Enter Message"
                />
              </div>
              <button className="bg-[#6F5DE0] text-white py-6 px-[180px] rounded-lg xl:ml-[-10px] mt-[30px]" >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
