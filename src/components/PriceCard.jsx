import React from "react";
import Description from "./Description";
import check from "../assets/check.svg";

const PriceCard = ({ data }) => {
  return (
    <div className="min-h-[580px] shadow-xl flex items-start  flex-col justify-between w-full p-5 rounded-md sm:w-80 mr-2 bg-[#1A1B1A] mt-2 text-white">
        <div className="wrapper">

      <div className="text-xl mb-3 bg-gradient-to-b from-[#A66D3C] to-[#DEA96B] bg-clip-text text-transparent">
        {data.title}
      </div>
      <div className="flex  mt-1 mb-3">
        <div className="text-xl font-medium bg-gradient-to-b from-[#DBCFB8] to-[#837C67] bg-clip-text text-transparent">
          {data.price}
        </div>
        <div className="text-[12px] ml-1 pt-[8px]   bg-gradient-to-b from-[#746E5E] to-[#837C67] bg-clip-text text-transparent">
          Ft
        </div>
      </div>
      <div className="mb-5">
        <Description content={data.description} />
      </div>
      {data.services.map((service, id) => {
        return (
          <div className="flex mb-3 items-start" key={`service_${id}`}>
            <img src={check} alt="check" className="mr-1 h-3" />
            <div className="text-[11px] thin bg-gradient-to-b from-[#757575] to-[#757575] bg-clip-text text-transparent">
              {service}
            </div>
          </div>
        );
      })}
        </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="fit p-[1px] bg-slate-50 w-fit  rounded-full bg-gradient-to-br from-[#CFBEA4]  to-[#b28647] hover:cursor-pointer transition-all  hover:from-orange-300 hover:shadow-xl">
          <div className="px-3 py-1 rounded-full bg-[#151414] w-fit ">
            <div className="text-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#DBCFB8] to-[#837C67]">
              Ezt választom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
