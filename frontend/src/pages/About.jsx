import React from 'react';
import HomeNavbar from '../navbar/HomeNavbar';

export default function About() {
    return (
        <div className=' max-w-6xl mx-auto mt-[5rem]  bg-[#DDF6FF]'>
            <HomeNavbar />
            <div className="w-full  ">
                <div className=" md:w-full w-[90%] md:h-[15rem] lg:h-[20rem] h-[10rem] relative mx-auto ">
                    <img src="/aboutH.png" alt="" className='cover w-full h-full ' />
                    <div className="h-full w-full absolute top-0 left-0 bg-[#00000062]"></div>
                    <img src="/hero text desktop.png" alt="" className='cover left-[50%] translate-x-[-50%] w-[50%]  absolute md:top-[4rem] lg:top-[7rem] top-[3rem] ' />
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:pt-[4rem] pt-[1rem]  ">
                <div className='md:w-[80%] mx-auto md:mt-[6rem] font-semibold  '>
                    <p className='p-[1rem] '>Async compile resources that will make the learning process stress-free for indiviuals that are just starting out their career or chasing an extra skill in web development.</p>
                    <p className='p-[1rem]  '>We offer a lot of learning opportunites- from hands-on projects and courses to job-ready skills and experience.</p>
                </div>
                <div>
                    <img src="image 25.png" alt="" className=' md:mt-[7rem] lg:mt-[2rem]  ' />
                </div>
            </div>
            <div className=" md:py-[3rem] mt-[2rem] md:mt-0 ">
                <h1 className='text-center md:text-[2rem] text-[1.5rem] font-bold md:my-[2.5rem] '>Our Value</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-[1rem] mx-auto ">
                    <div className='text-center p-[.5rem] font-semibold'>
                        <img src="/Web Accessibility.png" alt="" className='w-[2.5rem] mx-auto ' />
                        <h1 className="font-semibold text-[1.2rem] md:text-[1.5rem] my-[.5rem] ">Inclusivity</h1>
                        <p>Our Program is opened to every category of people. We work with  diverse groups of people and collaborate with each other with respect for their voices, beliefs and so on.</p>
                    </div>
                    <div className='text-center p-[.5rem] font-semibold'>
                        <img src="/learning.png" alt="" className='w-[2.5rem] mx-auto ' />
                        <h1 className="font-semibold  text-[1.2rem] md:text-[1.5rem] my-[.5rem] ">Learning</h1>
                        <p>Learning is our main theme. “Learning is the source of human progress”- Coursera. We’ve compiled all you need to be job-ready in web development.</p>
                    </div>
                    <div className='text-center p-[.5rem] font-semibold'>
                        <img src="/Teamwork.png" alt="" className='w-[2.5rem] mx-auto ' />
                        <h1 className="font-semibold text-[1.2rem] md:text-[1.5rem] my-[.5rem] ">Our Community</h1>
                        <p>We cherish our community. We love and nurture environments where everyone is encouraged to learn and give back.</p>
                    </div>
                    <div className='text-center p-[.5rem] font-semibold'>
                        <img src="/Increase.png" alt="" className='w-[2.5rem] mx-auto ' />
                        <h1 className="font-semibold text-[1.2rem] md:text-[1.5rem] my-[.5rem] ">Growth</h1>
                        <p>We aim toward progress, exploration, seeking challenges, learning, and the increasing actualization of one's potentials and values.</p>
                    </div>
                </div>
            </div>

            <div className=" py-[3rem] px-[5%] mx-auto ">
                <h1 className='text-center text-[2rem] font-bold my-[2.5rem] '>Async Story</h1>
                <div className="md:flex">
                    <div className="md:w-[50%] font-semibold leading-[2rem] ">
                        Async was birthed by George, a fellow developer in 2022, in order to aid newcomers looking to launch a career in web development. We have also worked on carrying developers that are trying to get better in their career. We launched our programme on the 1st of October in 2022. With the goal of our highly esteemed learners and the community, we hope to keep giving more value and to reduce the barricades in learning, as the time goes on.
                    </div>
                    <div className="md:w-[60%] font-semibold">
                        <img src="/george.png" alt="" className=' w-[14rem] h-[14rem] rounded-full mx-auto mb-[1.1rem] cover mt-[3rem] md:mt-0 ' />
                        <h1 className="text-center font-bold">George, Founder Async</h1>
                        <h1 className="text-center text-[.8rem]">Front-end web developer</h1>
                    </div>
                </div>
            </div>
            <div className="px-[5%] py-[3rem] bg-[#CDF1FF] ">
                <p className="text-center">
                    Join us now on a journey to learn, build and grow your career
                </p>
                <div className="md:w-[40%] w-[60%]   mx-auto mt-[6rem] ">

                    <button className=' w-full rounded-full py-[1rem] mb-[1rem] bg-[#001933] text-white ' >Get started for free</button>
                </div>
            </div>

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
