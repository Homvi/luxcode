import React from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-12">
        <Subheading content="Minőségi weboldalak, elegáns megjelenés - LuxCode" />
      </div>
      <div className="mb-5">
        <Heading content="Egyedi tervezésű, " />
        <Heading content="gyönyörű weboldalak " />
      </div>
      <Subheading content="Elégedett ügyfelek mondták rólunk" />
    </div>
  );
};

export default Landing;
