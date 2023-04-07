import React from "react";
import ProgressBar from "./ProgressBar";
import luxCodeLogo from "../../src/assets/luxcode-logo.svg";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen fixed top-0 left-0 svg-bcg z-50">
      <img src={luxCodeLogo} alt="luxcode logo" className="h-[100px] mb-5" />
      <ProgressBar />
    </div>
  );
};

export default Loading;
