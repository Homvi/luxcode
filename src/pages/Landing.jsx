import React from "react";
import Button from "../components/Button";
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
    <div className="inter">
      <Navbar />
      <div className="mt-12">
        <Subheading content="Minőségi weboldalak, elegáns megjelenés - LuxCode" />
      </div>
      <div className="mb-5">
        <Heading content="Egyedi tervezésű, " />
        <Heading content="gyönyörű weboldalak " />
      </div>
      <Description content={data.description} />
      <div className="my-10">
        <div className="my-2">
        <Button content="Fedezze fel szolgáltatásainkat"/>
        </div>
        <Button content="Kérjen ajánlatot most"/>
      </div>
      <Subheading content="Elégedett ügyfelek mondták rólunk" />
    </div>
  );
};

export default Landing;
