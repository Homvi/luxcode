import React from "react";
import star from "../assets/star.svg";

const TestemonialCard = ({ content, active }) => {
  return (
    <div className="w-40 mr-1 h-52 bg-[#2E2F2C] px-1 flex flex-col relative justify-between items-center">
      {active ? (
        <div className="w-40 h-3 bg-gradient-to-br from-[#D4A062] to-[#D9964E] absolute top-0"></div>
      ) : (
        <div className="w-40 h-3 bg-[#20211F] absolute top-0"></div>
      )}

      <div className="text-center thin pt-4 text-[12px] italic text-transparent flex justify-center h-full items-center bg-clip-text bg-gradient-to-br from-[#DBCFB8] via-[#B8A080] to-[#DBCFB8] p-2">
        {content}
      </div>
      <div className="flex  justify-center items-center w-[95%] border-t-2 p-1 border-[#5D564A]">
        <img src={star} alt="star" height="13px" className="w-[13px]" />
      </div>
    </div>
  );
};

export default TestemonialCard;
