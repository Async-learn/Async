import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DesktoplogoContext, MobilelogoContext } from '../../pages/LandingPage';
import { motion } from 'framer-motion'


function Menu({ menu, setMenu }) {
    const [pathName, setPathName] = useState();

        useEffect(() => {
          return () => {
            function getLocation(params) {
                const url = window.location.pathname
                setPathName(url)

               
            }
            getLocation()
          };
        }, []);
    return (
        <>
            {
                menu ?
                    <div

                        onClick={() => setMenu(!menu)} className=
                        'w-[100vw] fixed bg-[#0c0c0c60] h-full top-0 left-0  cursor-pointer '>
                        <motion.div
                            initial={{
                                x: '50%'
                            }}
                            animate={{
                                x: '0',
                            }}
                            transition={{
                                // delay:'.2'
                                type: 'spring',
                                stiffness:70
                            }}
                        

                            className='md:w-[40%] w-full h-full fixed bg-[#FFFFFF] top-0 xl:right-0 right-0   border border-[#DDF6FF] rounded
                         ' >
                            <div className=" py-[1rem] border-b border-b-[#DDF6FF] relative ">
                                {/* mobile */}
                                <MobilelogoContext.Consumer>
                                    {
                                        mobilelogo => {
                                            return <img className="block md:hidden pl-[20px]" src="/mobilelogo.png" alt="Logo" />
                                        }
                                    }
                                </MobilelogoContext.Consumer>
                                {/* desktop */}
                                <DesktoplogoContext.Consumer>
                                    {
                                        desktoplogo => {
                                            return <img className="hidden md:block w-fit h-[2rem] mx-auto " src="/desktoplogo.png" alt="Logo" />
                                        }
                                    }
                                </DesktoplogoContext.Consumer>

                                <img src="./close.png" alt="x" className='absolute top-[1.3rem] right-[2rem]  duration-500 hover:rotate-180 hover:scale-110 cursor-pointer ' onClick={() => setMenu(!menu)} />
                            </div>

                            <div className="mb-[10rem]">


                                <Link to='/' className={pathName === '/' ?'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  scale-110 translate-x-[1.8rem] text-[#002b5c] ':' block w-full  pt-[1.5rem] pl-[2rem] font-semibold  hover:scale-110 hover:translate-x-[1.8rem] ease-in-out duration-500 '} >Home</Link>
                                <Link to='/about' className={pathName === '/about' ?'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  scale-110 translate-x-[1.8rem] text-[#002b5c] ':' block w-full  pt-[1.5rem] pl-[2rem] font-semibold  hover:scale-110 hover:translate-x-[1.8rem] ease-in-out '}>About Us</Link>
                                <Link to='/contact' className={pathName === '/contact' ?'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  scale-110 translate-x-[1.8rem] text-[#002b5c] ':'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  hover:scale-110 hover:translate-x-[1.8rem] ease-in-out duration-500 '}>Contact Us</Link>
                                <Link to='/projectgenerator' className={pathName === '/projectgenerator' ?'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  scale-110 translate-x-[1.8rem] text-[#002b5c] ':'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  hover:scale-110 hover:translate-x-[1.8rem] ease-in-out duration-500 '}>Project generator</Link>
                                <Link to='/help' className={pathName === '/help' ?'block w-full  pt-[1.5rem] pl-[2rem] font-semibold  hover:scale-110 hover:translate-x-[1.5rem] text-[#002b5c] ':' block w-full  pt-[1.5rem] pl-[2rem] font-semibold  hover:scale-110 hover:translate-x-[1.8rem] ease-in-out duration-500 '} >Help Center</Link>
                            </div>

                            <div className='w-[80%] mx-auto mb-[2rem]'>
                                <button className='w-full  rounded-full py-[1rem] mb-[1rem] bg-[#DDF6FF] hover:bg-[#001933] hover:text-[white] text-[#001933] font-semibold duration-500 ' >Log in</button>
                                <button className='w-full rounded-full py-[1rem] mb-[1rem] bg-[#001933] hover:bg-[#002b5c] text-white duration-500 ' >Get started for free</button>
                            </div>
                        </motion.div>
                    </div>
                    :
                    <></>

            }
        </>

    );
}

export default Menu;
