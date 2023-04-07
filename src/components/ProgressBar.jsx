import React from "react";

const ProgressBar = ({ progress }) => {

  const progressBarStyle = {
    width: `${progress}%`,
  }
  
  return (
    <div className="flex w-[75%] md:w-[30%] bg-white/10">
      <div className="w-[75%] md:w-[30%]  h-1 bg-gradient-to-r from-[#A76F3D] to-[#D7A76B] ease-linear transition-all duration-[1500ms]" style={progressBarStyle}>
       
      </div>
    </div>
  );
};

export default ProgressBar;
