import React from "react";
import star from "../assets/star.svg";

const TestemonialCard = ({ content }) => {
  return (
    <div className="w-28 mr-1 h-36 bg-[#2E2F2C] p-1 flex flex-col justify-between items-center">
      <div className="text-center thin  text-[8px] italic text-transparent flex justify-center h-full items-center bg-clip-text bg-gradient-to-br from-[#DBCFB8] via-[#B8A080] to-[#DBCFB8] p-2">
        {content}
      </div>
      <div className="flex  justify-center items-center w-[95%] border-t-2 p-1 border-[#5D564A]">
        <img src={star} alt="star" height="13px" className="w-[13px]" />
      </div>
    </div>
  );
};

export default TestemonialCard;
