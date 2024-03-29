import React from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";
import TestemonialCard from "../components/TestemonialCard";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import pc from "../assets/pc.webp";
import { data } from "../data";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingIsNecessary, setLoadingIsNecessary] = useState(true);
  const [language] = useContext(LanguageContext);

  const [arrayIndex, setArrayIndex] = useState(0);

  useEffect(() => {
    //check in the cookies if the user has already visited the website and if so, don't show the progress bar
    if (document.cookie.includes("visited")) {
      setLoadingIsNecessary(false);
      setImageLoading(false);
    } else {
      setLoadingIsNecessary(true);
      setImageLoading(true);
    }
  }, []);

  //set the progress bar
  useEffect(() => {
    //control the speed of the progress bar
    const progressArray = [0, 81, 87, 90];

    const interval = setInterval(() => {
      if (arrayIndex < progressArray.length && loadingIsNecessary) {
        setProgress(progressArray[arrayIndex]);
        setArrayIndex(arrayIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [arrayIndex, loadingIsNecessary]);

  //initialize AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //handle the image loading
  const handleLoaded = () => {
    setLoadingIsNecessary(false);
    setProgress(100);
    setTimeout(() => {
      setImageLoading(false);
    }, 2000);

    //set the cookie to remember that the user has already visited the website
    //set cookie expire in 1 day
    document.cookie = "visited=true; max-age=86400";
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }} />
      <div className="inter relative">
        <img
          src={pc}
          alt="pc"
          onLoad={handleLoaded}
          className="absolute right-0 bottom-0 h-[90%] hidden lg:block"
        />
        <div className="p-8">
          {imageLoading && <Loading progress={progress} />}
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
          <div className="mb-5">
            <div
              className=""
              data-aos="fade-right"
              data-aos-offset="1"
              data-aos-duration="400"
              data-aos-delay="210"
            >
              <Heading
                content={data[language].landingPage.mainHeadingFirstRow}
              />
            </div>
            <div
              className=""
              data-aos="fade-right"
              data-aos-offset="1"
              data-aos-duration="400"
              data-aos-delay="210"
            >
              <Heading
                content={data[language].landingPage.mainHeadingSecondRow}
              />
            </div>
          </div>
          <div className="mb-16">
            <Description content={data[language].intro.description} />
          </div>
          <div className="my-10 mb-24">
            <div className="my-5">
              <Link to="/services">
                <Button
                  content={data[language].landingPage.firstButtonContent}
                />
              </Link>
            </div>
            <Link to="/quote">
              <Button
                content={data[language].landingPage.secondButtonContent}
              />
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
            <div className="max-w-[200px] font-normal flex text-[12px] my-3  justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-[#DBCFB8]  to-[#B28647]  xl:p-4">
              {data[language].testemonialDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
