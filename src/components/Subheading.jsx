import React from "react";

const Subheading = ({ content }) => {
  return (
    <div className="text-[14px] mb-2 inter text-transparent bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B] font-semibold">
      {content}
    </div>
  );
};

export default Subheading;
