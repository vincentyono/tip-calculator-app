import React from "react";
import Logo from "../images/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img id="logo" src={Logo} alt="splitter logo" />;
    </header>
  );
};

export default Header;
