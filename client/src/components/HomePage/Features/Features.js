import React, { Fragment, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Features() {
    useEffect(() => {
        Aos.init({});
    })
  return (
      <Fragment>
        <div id='features' className="xl:max-w-[1350px] 2xl:max-w-[1490px] xl:mt-[-5px] 2xl:mt-[15px] mx-auto px-4 grid grid-row-2 lg:grid-rows-2 items-center" data-aos="fade-up" data-aos-delay="100">
            <div className="space-y-5" >
                <h1 className="font-bold text-[#6F5DE0] text-5xl">Features</h1>
                <p className="xl:w-[1350px] 2xl:w-[1420px] text-2xl">
                We’ll be suggesting the below four themes or impact areas to help
                spark your ideas. Remember that you’re welcome to build with the
                technologies of your choice, across any areas that you think would
                drive impact for these issues, so feel free to think outside the box
                too!
                </p>
            </div>
            <div className="grid grid-cols-4 mt-[-120px] mb-5" >
                <div className="bg-[#ECB924] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg" data-aos="fade-up" data-aos-delay="100">
                    <div className="max-w-[300px] mx-auto py-8 space-y-8">
                        <h1 className="text-white text-3xl font-bold">Virtual Verification</h1>
                        <p className="text-white text-2xl">
                            Without spending money on manpower to validate remote office employee’s presence, random verification is easily done using our product and integrated CV.
                        </p>
                    </div>
                </div>
                <div className="bg-[#5A91D1] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg" data-aos="fade-up" data-aos-delay="90">
                    <div className="max-w-[300px] mx-auto py-8 space-y-8">
                        <h1 className="text-white text-3xl font-bold">No fake attendance</h1>
                        <p className="text-white text-2xl">
                            Our product Detects face and captures the attendance of a single person from a group of people,and logs the identity and timestamp of a foregin entity.Vastly discouraging the act of proxies.
                        </p>
                    </div>
                </div>
                <div className="bg-[#7A9B44] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg" data-aos="fade-up" data-aos-delay="80">
                    <div className="max-w-[300px] mx-auto py-8 space-y-8">
                        <h1 className="text-white text-3xl font-bold w-[500px]">Workflow automation</h1>
                        <p className="text-white text-2xl">
                            Instead of using a paper spreadsheet, pen and paper, or a complicated template, you can access all information in one place, and automate processes. Read why you should stop using a time tracking spreadsheet.
                        </p>
                    </div>
                </div>
                <div className="bg-[#6F5DE0] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg" data-aos="fade-up" data-aos-delay="70">
                    <div className="max-w-[300px] mx-auto py-8 space-y-8">
                        <h1 className="text-white text-3xl font-bold">Intrusion detection</h1>
                        <p className="text-white text-2xl">
                            Our product alerts the authority in control of the organisation,if there is a suspicious activity involved surrounding the premises and office vicinity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
  );
}

export default Features;
