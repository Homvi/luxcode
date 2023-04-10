import React from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";
import PriceCard from "../components/PriceCard";
import TestemonialCard from "../components/TestemonialCard";
import { Link } from "react-router-dom";
import { data } from "../data";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Services = () => {
// eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useContext(LanguageContext);

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
        <Description content={data[language].services.description} />
      </div>
      <div className="mt-12">
        <Subheading content="Kiemelt szolgáltatásaink" />
      </div>
      <div className="flex flex-col items-stretch mb-10 md:flex-row">
        <PriceCard data={data[language].services.priceCardData.cardOne} />
        <PriceCard data={data[language].services.priceCardData.cardTwo} />
        <PriceCard data={data[language].services.priceCardData.cardThree} />
      </div>
      <div className="mb-5">
        <Description content={data[language].services.moreInfo} />
      </div>
      <div className="mb-28">
        <Link to="/quote">
          <Button content="Kérjen ajánlatot most" />
        </Link>
      </div>
      <div className="mb-3">
        <Subheading content="Elégedett ügyfelek mondták rólunk" />
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex">
          {data[language].testemonials.map((content, id) => (
            <TestemonialCard
              content={content}
              key={`testemonial-card-${id}`}
              active={id === 0 ? true : false}
            />
          ))}
        </div>
        <div className="max-w-[190px] font-normal flex text-[8px] my-3  justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-[#DBCFB8]  to-[#B28647]  xl:p-4">
        {data[language].testemonialDescription}
        </div>
      </div>
    </div>
  );
};

export default Services;
