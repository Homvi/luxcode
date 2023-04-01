import React from "react";

const Heading = ({ content }) => {
  return <h1 className="text-4xl py-[1px] font-semibold inter text-transparent bg-clip-text bg-gradient-to-br from-orange-100 via-orange-300 to-orange-300" >{content}</h1>;
};

export default Heading;
