import React from "react";
import Hero from "../components/Hero";

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
                    <Hero />
                </MobilelogoContext.Provider>
            </DesktoplogoContext.Provider>
        </div>
    </React.Fragment>
  );
}

export default LandingPage;