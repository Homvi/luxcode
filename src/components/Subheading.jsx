import React from "react";

const Subheading = ({ content }) => {
  return (
    <div className="text-sm mb-5 inter text-transparent bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]">
      {content}
    </div>
  );
};

export default Subheading;
