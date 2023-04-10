import React, { useContext } from "react";
import { Link } from "react-router-dom";
import luxCodeLogo from "../../src/assets/luxcode-logo.svg";
import { LanguageContext } from "../LanguageContext";
import Button from "./Button";

const Navbar = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <div className="flex justify-between">
      <Link to="/">
        <img className="h-8 mb-5" src={luxCodeLogo} alt="LuxCode" />
      </Link>
      <div onClick={(e) => setLanguage("ES")}>
        <Button content={language} />
      </div>
    </div>
  );
};

export default Navbar;
