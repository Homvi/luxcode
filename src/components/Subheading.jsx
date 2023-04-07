import React from "react";

const Subheading = ({ content }) => {
  return (
    <div className="text-[12px] mb-2 inter text-transparent bg-clip-text bg-gradient-to-br from-orange-100 to-orange-300 font-semibold">
      {content}
    </div>
  );
};

export default Subheading;
