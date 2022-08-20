import React from 'react'

const Roadmap = () => {
  return (
    <React.Fragment>
        <div className="h-[320px] md:h-[700px] bg-[#EDF5F7]">
            {/* mobile */}
            <div className="flex items-center justify-center">
                <img className="block md:hidden mt-[15px]" src="/roadmapmobile.png" alt="Roadmap" />
            </div>
            {/* desktop */}
            <div className="flex items-center justify-center">
                <img className="hidden md:block px-[10px] pt-[20px]" src="/roadmapdesktop.png" alt="Roadmap" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Roadmap;