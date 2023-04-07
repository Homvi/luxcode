import React from "react";
import ProgressBar from "./ProgressBar";
import luxCodeLogo from "../../src/assets/luxcode-logo.svg";

const Loading = ({ progress }) => {
  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen fixed top-0 left-0  z-50 bg-gradient-to-br from-neutral-800 to-neutral-900">
      <img
        src={luxCodeLogo}
        alt="luxcode logo"
        className="h-[100px] mb-5 md:mb-12"
      />
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Loading;
