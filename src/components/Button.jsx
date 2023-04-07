import React from "react";

const Button = ({ content }) => {
  return (
    <div className="fit p-[1px] bg-slate-50 w-fit rounded-full bg-gradient-to-br from-[#CFBEA4]  to-[#b28647] hover:cursor-pointer transition-all  hover:from-orange-300 hover:shadow-xl">
      <div className="px-3 py-2 rounded-full bg-[#151414] w-fit ">
        <div className="text-[10px] text-transparent bg-clip-text bg-gradient-to-b from-[#DBCFB8] to-[#837C67] font-semibold">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Button;
