import React from 'react';
import HomeNavbar from "../navbar/HomeNavbar";
import { motion } from "framer-motion";

const Hero = () => {
    const heroSignupButton = (
        <div className="flex justify-center items-center md:block cursor-pointer">
            <button className="w-[183px] h-[53px] rounded-[31px] md:w-[318px] md:h-[94px] bg-[#001933] md:rounded-[47px] text-[white] md:text-[25px] md:leading-[38px] hover:bg-[#002b5c] transition-all duration-300">Get started for free</button>
        </div>
    );
  return (
    <React.Fragment>
        <div className="w-screen h-screen md:h-[700px] bg-[#DDF6FF]">
            <HomeNavbar />
            <div className="h-[454px] md:mt-[76px] md:mx-[41px] md:flex md:justify-between">
                <div className="h-[263px] pt-[70px] md:pt-\[95\.5px\] mb-[76px] md:pl-[20px]">
                    <h1 className="text-center md:text-start md:font-[600] md:text-[52px] md:leading-[78px] text-[#010914] text-[20px] leading-[30px] font-[600]">Learn <span className="font-[700]">web</span> development...</h1>
                    <p className="font-[500] text-[16px] leading-[24px] text-center pt-[24px] block md:hidden">Gain the professional knowledge you<br /> need for front-end web development<br /> with us at <span className="text-[#001933] font-[600]"><i>async</i></span></p>
                    <p className="hidden md:block font-[500] text-[20px] leading-[164%] text-[#000000] pt-[6px] md:pt-0">Gain the professional knowledge you need for front-end<br /> web development with us at <span className="text-[#001933] font-[600]"><i>async</i></span></p>
                    {/* button */}
                    <div className="pt-[61px] md:pt-[52px]">
                        {heroSignupButton}
                    </div>
                </div>
                {/*  */}
                <div>
                    <div className="h-[454px]">
                        <img className="block md:hidden pl-[33px]"  src="/illustrationmobile.png" alt="illustration" />
                        {/* mobile */}
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 5 }}
                            className="block md:hidden absolute left-[250px] top-[440px]" 
                            src="/htmlmobile.png" 
                            alt="html" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0, duration: 5 }}
                            className="block md:hidden absolute left-[290px] top-[550px]" 
                            src="/cssmobile.png" 
                            alt="css" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.0, duration: 5 }}
                            className="block md:hidden absolute left-[240px] top-[650px]" 
                            src="/jsmobile.png" 
                            alt="js" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.0, duration: 5 }}
                            className="block md:hidden absolute left-[68px] top-[650px]" 
                            src="/reactmobile.png" 
                            alt="react" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5.0, duration: 5 }}
                            className="block md:hidden absolute left-[13px] top-[550px]" 
                            src="/nodemobile.png" 
                            alt="node" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6.5, duration:  5 }}
                            className="block md:hidden absolute left-[58px] top-[440px]" 
                            src="/pythonmobile.png" 
                            alt="python" />
                        {/* desktop */}
                        <img className="hidden md:block absolute left-[871px] top-[184px]"  src="/illustrationdesktop.png" alt="illustration" />
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 5 }}
                            className="hidden md:block absolute left-[1200px] top-[200px]" 
                            src="/html.png" 
                            alt="html" />
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0, duration: 5 }}
                            className="hidden md:block absolute left-[1257px] top-[370px]" 
                            src="/css.png" 
                            alt="css" />
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.0, duration: 5 }}
                            className="hidden md:block absolute left-[1190px] top-[539px]" 
                            src="/js.png" 
                            alt="javascript" />
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.0, duration: 5 }}
                            className="hidden md:block absolute left-[870px] top-[539px]" 
                            src="/react.png" 
                            alt="react" />
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5.0, duration: 5 }}
                            className="hidden md:block absolute left-[810px] top-[370px]" 
                            src="/node.png" 
                            alt="node" />
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6.5, duration: 5 }}
                            className="hidden md:block absolute left-[850px] top-[200px]" 
                            src="/python.png" 
                            alt="python" />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Hero;