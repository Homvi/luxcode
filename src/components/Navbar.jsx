import React, { useContext } from "react";
import { Link } from "react-router-dom";
import luxCodeLogo from "../../src/assets/luxcode-logo.svg";
import { LanguageContext } from "../LanguageContext";
import Button from "./Button";
import { HiLanguage } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useContext(LanguageContext);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between  relative">
        <Link to="/">
          <img className="h-8 w-auto mb-5" src={luxCodeLogo} alt="LuxCode" />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div
            onClick={(e) => setLanguageOpen(!languageOpen)}
            className="h-10 text-white/30 text-2xl cursor-pointer"
          >
            <HiLanguage />
          </div>
        </div>
      </div>
      <div className="relative flex justify-end h-10 top-[-10px]">
        {languageOpen && (
          <>
            <div
              onClick={(e) => {
                setLanguage("EN");
                setLanguageOpen(false);
              }}
              className="cursor-pointer mr-1 select-none"
            >
              <Button content="EN" />
            </div>
            <div
              onClick={(e) => {
                setLanguage("ES");
                setLanguageOpen(false);
              }}
              className="cursor-pointer mr-1 select-none"
            >
              <Button content="ES" />
            </div>
            <div
              onClick={(e) => {
                setLanguage("HU");
                setLanguageOpen(false);
              }}
              className="cursor-pointer select-none"
            >
              <Button content="HU" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
