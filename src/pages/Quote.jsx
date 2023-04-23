import React, { useEffect } from "react";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";
import TestemonialCard from "../components/TestemonialCard";
import Form from "../components/Form";
import { data } from "../data";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Quote = () => {
  /*  data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center" */

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <div className="inter p-8 " >
        <Navbar />
        <div
          className="mt-12"
          data-aos="fade-right"
          data-aos-offset="1"
          data-aos-duration="400"
          data-aos-delay="210"
        >
          <Subheading content={data[language].subheading} />
        </div>
          <div className="mb-5"  
          data-aos="fade-right"
          data-aos-offset="1"
          data-aos-duration="400"
          data-aos-delay="200">
            <Heading content={data[language].requestQuote.heading} />
          </div>
        <div className="mb-16">
          <Description content={data[language].requestQuote.description} />
        </div>
        {/* form comes here */}
        <div className="w-ful lg:w-[70%] xl:w-[50%] min-h-[500px] mb-24">
          <Form data={data} language={language} />
        </div>
        {/* form comes here */}
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
          <div className="max-w-[190px] font-normal flex text-[8px] my-3  justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-[#DBCFB8]  to-[#B28647]  xl:p-4">
            {data[language].testemonialDescription}
          </div>
        </div>
    </div>
  );
};

export default Quote;
