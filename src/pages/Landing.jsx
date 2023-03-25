import React from "react";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";

const data = {
  description:
    "Üdvözöljük a LuxCode-nál! Egyedi és elegáns weboldalak tervezése és fejlesztése az Ön vállalkozása számára. Profi csapatunk gondoskodik a tökéletes online megjelenésről. Legyen sikeres velünk az internetes világban!",
};

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
      <Description content={data.description} />
      <Subheading content="Elégedett ügyfelek mondták rólunk" />
    </div>
  );
};

export default Landing;
