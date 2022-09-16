import React from 'react';

export default function Footer() {
  return (
    <div>
                  <div className="px-[5%] py-[4rem] bg-[#052531]  md text-white ">
                <div className="md:block flex">


                    <div className="md:flex justify-between w-[80%] mx-auto ">
                        <div>
                            <h1 className=' font-bold md:mb-[1rem] mb-[.3rem] '>Address</h1>
                            <p className='text-[.75rem] font-light'>Akwa Ibom</p>
                        </div>
                        <div>
                            <h1 className=' font-bold md:mb-[1rem] mb-[.3rem] md:mt-0 mt-[1rem]'>Sponsors</h1>
                            <p className='text-[.75rem] font-light'>Samjoedan  Sabino LLC</p>
                        </div>
                        <div>
                            <h1 className=' font-bold md:mb-[1rem] mb-[.3rem] md:mt-0  mt-[1rem]'>Contact</h1>
                            <p className='text-[.75rem] font-light'>+2340000000000</p>
                            <p className='text-[.75rem] font-light'>+async@gmail.com</p>
                        </div>
                    </div>
                    <div className="md:flex ml-[10%]  md:my-[3rem] ">
                        <div className=' md:mr-[5%]' >
                            <h1>
                                Join our Community
                            </h1>
                            <img src="/discord.png" alt="" className=' md:ml-[1rem] w-[70%]' />
                        </div>
                        <h1>Help Center</h1>
                    </div>
                </div>
                <div className=" mt-[2rem]">

                    <p className="text-center">All Rights Reserved ©</p>

                    <img src="/footerLogo.png" alt="" className="md:w-[7%]  mt-[.5rem]  mx-auto" />
                </div>
            </div>

    </div>
  );
}
