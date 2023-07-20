import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
// eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="inter p-8">
      <Navbar />
      <div className="mt-12"  data-aos="fade-right"
          data-aos-offset="1"
          data-aos-duration="400"
          data-aos-delay="210">
        <Subheading content={data[language].subheading} />
      </div>
      <div className="mb-5"  data-aos="fade-right"
          data-aos-offset="1"
          data-aos-duration="400"
          data-aos-delay="200">
        <Heading content={data[language].services.heading} />
      </div>
      <div className="mb-16">
        <Description content={data[language].services.description} />
      </div>
      <div className="mt-12">
        <Subheading content={data[language].services.featuredServices}/>
      </div>
      <div className="flex flex-col items-stretch mb-10 md:flex-row">
        
        <PriceCard  data={data[language].services.priceCardData.cardOne} buttonContent={data[language].services.priceCardBtnContent}/>
       
        <PriceCard data={data[language].services.priceCardData.cardTwo} buttonContent={data[language].services.priceCardBtnContent}/>
        <PriceCard data={data[language].services.priceCardData.cardThree} buttonContent={data[language].services.priceCardBtnContent}/>
        <PriceCard data={data[language].services.priceCardData.cardFour} buttonContent={data[language].services.priceCardBtnContent}/>
      </div>
      <div className="mb-5">
        <Description content={data[language].services.moreInfo} />
      </div>
      <div className="mb-28">
        <Link to="/quote">
          <Button content={data[language].services.requestQuoteBtnContent} />
        </Link>
      </div>
      <div className="mb-3">
      <Subheading content={data[language].testemonialTitle} />
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
        <div className="max-w-[190px] font-normal flex text-[10px] my-3  justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-[#DBCFB8]  to-[#B28647]  xl:p-4">
        {data[language].testemonialDescription}
        </div>
      </div>
    </div>
  );
};

export default Services;
