import React from "react";
import star from "../assets/star.svg";

const TestemonialCard = ({ content }) => {
  return (
    <div className="w-40 mr-1 h-52 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-900 p-2 flex flex-col justify-between items-center">
      <div className="text-center text-xs italic text-transparent flex justify-center h-full items-center bg-clip-text bg-gradient-to-br from-orange-100 to-orange-200 font-semibold">
        {content}
      </div>
      <div className="flex justify-center items-center w-[95%] border-t-2 p-1 border-[#5D564A]">
        <img src={star} alt="star" height="20px" />
      </div>
    </div>
  );
};

export default TestemonialCard;
