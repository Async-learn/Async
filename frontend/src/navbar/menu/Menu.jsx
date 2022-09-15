import React, { } from 'react';
import { Link } from 'react-router-dom';
import { DesktoplogoContext, MobilelogoContext } from '../../pages/LandingPage';


function Menu({ menu, setMenu }) {


    return (
        <>
            {
                menu ?
                    <div onClick={() => setMenu(!menu)} className=
                        'w-[100vw] fixed bg-[#0c0c0c60] h-full top-0 left-0 cursor-pointer '>
                        < div className='md:w-[40%] w-full h-full fixed bg-[#FFFFFF] top-0 xl:right-[7.3%] right-0   border border-[#DDF6FF] rounded ' >
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


                                <Link to='/' className='block w-full  pt-[1.5rem] pl-[2rem] font-semibold ' >Home</Link>
                                <Link to='/about' className='block w-full  pt-[1.5rem] pl-[2rem] font-semibold ' >About Us</Link>
                                <Link to='/contact' className='block w-full  pt-[1.5rem] pl-[2rem] font-semibold ' >Contact Us</Link>
                                <Link to='/projectgenerator' className='block w-full  pt-[1.5rem] pl-[2rem] font-semibold ' >Project generator</Link>
                                <Link to='/help' className='block w-full  pt-[1.5rem] pl-[2rem] font-semibold ' >Help Center</Link>
                            </div>

                            <div className='w-[80%] mx-auto mb-[2rem]'>
                                <button className='w-full  rounded-full py-[1rem] mb-[1rem] bg-[#DDF6FF] text-[#001933] font-semibold ' >Log in</button>
                                <button className='w-full rounded-full py-[1rem] mb-[1rem] bg-[#001933] text-white ' >Get started for free</button>
                            </div>
                        </div>
                    </div>
                    :
                    <></>

            }
        </>

    );
}

export default Menu;
