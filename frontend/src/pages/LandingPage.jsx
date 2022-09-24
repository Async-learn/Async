import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Comment from '../components/Comment';
import Footer from "../components/footer/Footer";

export const MobilelogoContext = React.createContext();
export const DesktoplogoContext = React.createContext();

function LandingPage() {
  
    const desktoplogo = "/desktoplogo.png";
    const mobilelogo = "/mobilelogo.png";
    return (
        <React.Fragment>
            <div>
                <DesktoplogoContext.Provider value={desktoplogo}>
                    <MobilelogoContext.Provider value={mobilelogo}>
                        <Hero  />
                    </MobilelogoContext.Provider>
                </DesktoplogoContext.Provider>
                <About />
                <Roadmap />
                <Comment />
                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;