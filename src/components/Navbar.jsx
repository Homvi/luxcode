import React from "react";
import { Link } from "react-router-dom";
import luxCodeLogo from "../../src/assets/luxcode-logo.svg";
const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img className="h-8 mb-5" src={luxCodeLogo} alt="LuxCode" />
      </Link>
    </div>
  );
};

export default Navbar;
