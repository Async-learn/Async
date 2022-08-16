import React from 'react'
import { DesktoplogoContext, MobilelogoContext } from '../pages/LandingPage';

const HomeNavbar = () => {
  return (
    <React.Fragment>
        <nav className="relative w-screen h-[100px] pt-[24px]">
            <div className="md:h-[48px] md:left-[40px] top-[30px] md:top-[24px] flex justify-between items-center">
                <div className="md:pl-[60px]">
                    {/* mobile */}
                    <MobilelogoContext.Consumer>
                        {
                            mobilelogo => {
                                return <img className="block md:hidden pl-[20px]" src={mobilelogo} alt="Logo" />
                            }
                        }
                    </MobilelogoContext.Consumer>
                    {/* desktop */}
                    <DesktoplogoContext.Consumer>
                        {
                            desktoplogo => {
                                return <img className="hidden md:block" src={desktoplogo} alt="Logo" />
                            }
                        }
                    </DesktoplogoContext.Consumer>
                </div>
                <div className="flex items-center pr-[20px] md:pr-[60px]">
                    <div className="mr-[12px] md:mr-[20px]">
                        <button className='flex justify-center align-center  md:pt-[16px] md:pb-[16px] md:pl-[24px] md:pr-[24px] w-[78px] h-[34px] md:w-[156px] md:h-[56px] bg-[#001933] rounded-[15px] md:rounded-[25px] font-[500] text-[12px] md:text-[16px] leading-[18px] pt-[8px] md:leading-[24px] text-[#FFFFFF] cursor-pointer hover:bg-[#002b5c] transition-all duration-300'>Sign Up</button>
                    </div>
                    <div className="cursor-pointer">
                        <img className="hover:rotate-180 duration-500 hover:scale-110 block md:hidden" src="/mobilemenu.png" alt="Hamburger Menu Icon" />
                        <img className="hover:rotate-180 duration-500 hover:scale-110 hidden md:block" src="/desktopmenu.png" alt="Hamburger Menu Icon" />
                    </div>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default HomeNavbar;