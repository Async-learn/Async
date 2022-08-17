import React from 'react'

const Roadmap = () => {
  return (
    <React.Fragment>
        <div className="h-[320px] md:h-[700px] bg-[#EDF5F7]">
            {/* mobile */}
            <div>
                <img className="block md:hidden absolute left-[31px] top-[2360px]" src="/roadmapmobile.png" alt="Roadmap" />
            </div>
            {/* desktop */}
            <div>
                <img className="hidden md:block absolute left-[40px] top-[1500px]" src="/roadmapdesktop.png" alt="Roadmap" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Roadmap;