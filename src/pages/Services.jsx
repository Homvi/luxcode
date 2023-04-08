import React from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";

const Services = () => {
  const data = {
    description:
      "Fedezze fel a LuxCode kreatív és hatékony webfejlesztési szolgáltatásait, amelyek segítenek vállalkozásának növekedésében és sikerességében az online világban.",
      moreInfo:"Amennyiben a fentiekben felsorolt szolgáltatásoktól eltérő igényük merülne fel, kérjük, ne habozzanak jelezni felénk. Kattintsanak az alábbi gombra, és használják a webes kalkulátorunkat az igényeik pontosabb meghatározásához. "
  };

  return (
    <div className="inter p-8">
      <Navbar />
      <div className="mt-12">
        <Subheading content="Minőségi weboldalak, elegáns megjelenés - LuxCode" />
      </div>
      <div className="mb-5">
        <Heading content="Szolgáltatásaink" />
      </div>
      <div className="mb-16">
        <Description content={data.description} />
      </div>
      <div className="mt-12">
        <Subheading content="Kiemelt szolgáltatásaink" />
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <div className="h-96 w-full sm:w-72 mr-2 bg-black mt-2">
          price card component
        </div>
        <div className="h-96 w-full  sm:w-72 mr-2 bg-black mt-2">price card component</div>
        <div className="h-96 w-full sm:w-72 mr-2 bg-black mt-2">price card component</div>
      </div>
      <div className="mb-16">
        <Description content={data.moreInfo} />
      </div>
      <Button content="Kérjen ajánlatot most" />
    </div>
  );
};

export default Services;
