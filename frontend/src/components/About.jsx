import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
    
  return (
    <React.Fragment>
        <h1 className="text-[#001933] font-[500] text-[16px] leading-[24px] text-center uppercase pt-[30px] md:text-[28px] md:font-[600]">what we deliver</h1>
        <div className="flex justify-center items-center pt-[30px]">
            <img className="block md:hidden" src="/thingymobile.png" alt="" />
        </div>
        <div className="md:h-[700px] bg-[#ffffff] pb-[50px] md:pb-0 flex justify-center items-center md:block">
            <div className="md:px-[40px] lg:px-[150px] md:py-[34px] md:flex md:justify-between">
                <div className="pt-[40px] md:pt-0">
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="w-[350px] h-[300px] bg-[#F0F1F3] shadow rounded-[5px] mb-[25px]">
                        <div className="flex justify-center pt-[20px]">
                            <img src="/code.png" alt="Code" />
                        </div>
                        <h1 className="text-center font-[500] md:text-[32px] md:leading-[36px] text-[#001933] uppercase pt-[13px]">learn to code</h1>
                        <p className="text-center font-[400] text-[16px] leading-[24px] text-[#001933] pt-[13px] px-[28px]">You'll be able tocode fluently in React.js or Next.js and be able to start building your own web Apps</p>
                    </div>
                    <div 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="w-[350px] h-[300px] bg-[#F0F1F3] shadow rounded-[5px] mb-[25px]">
                        <div className="flex justify-center pt-[20px]">
                            <img src="/design.png" alt="Design" />
                        </div>
                        <h1 className="text-center font-[500] md:text-[32px] md:leading-[36px] text-[#001933] uppercase pt-[13px]">learn web design</h1>
                        <p className="text-center font-[400] text-[16px] leading-[24px] text-[#001933] pt-[13px] px-[28px]">You'll be able tocode fluently in React.js or Next.js and be able to start building your own Web Apps</p>
                    </div>
                </div>
                <div>
                    <motion.img 
                        initial={{ y: -50 }}
                        animate={{ y: 50 }}
                        transition={{ delay: 1.5, duration: 5, yoyo: Infinity }}
                        className="hidden xl:block" src="/thingy.png" alt="Sally" />
                </div>
                <div>
                    <div 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="w-[350px] h-[300px] bg-[#F0F1F3] shadow rounded-[5px] mb-[25px]">
                        <div className="flex justify-center pt-[20px]">
                            <img src="/apps.png" alt="Apps" />
                        </div>
                        <h1 className="text-center font-[500] md:text-[32px] md:leading-[36px] text-[#001933] uppercase pt-[13px]">learn web apps</h1>
                        <p className="text-center font-[400] text-[16px] leading-[24px] text-[#001933] pt-[13px] px-[28px]">You'll be able tocode fluently in React.js or Next.jsand be able to start building your own web Apps</p>
                    </div>
                    <div 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="w-[350px] h-[300px] bg-[#F0F1F3] shadow rounded-[5px]">
                        <div className="flex justify-center pt-[20px]">
                            <img src="/cert.png" alt="Cert" />
                        </div>
                        <h1 className="text-center font-[500] md:text-[32px] md:leading-[36px] text-[#001933] uppercase pt-[13px]">Get certified</h1>
                        <p className="text-center font-[400] text-[16px] leading-[24px] text-[#001933] pt-[13px] px-[28px]">You'll be able tocode fluently in React.js or Next.jsand be able to start building your own web Apps</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About;