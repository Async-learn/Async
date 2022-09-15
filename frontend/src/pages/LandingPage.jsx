import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Comment from '../components/Comment';

export const MobilelogoContext = React.createContext();
export const DesktoplogoContext = React.createContext();

function LandingPage() {
  
    const desktoplogo = "/desktoplogo.png";
    const mobilelogo = "/mobilelogo.png";
    return (
        <React.Fragment>
            <div className=" max-w-6xl mx-auto"  >
                <DesktoplogoContext.Provider value={desktoplogo}>
                    <MobilelogoContext.Provider value={mobilelogo}>
                        <Hero  />
                    </MobilelogoContext.Provider>
                </DesktoplogoContext.Provider>
                <About />
                <Roadmap />
                <Comment />
            </div>
        </React.Fragment>
    );
}

export default LandingPage;