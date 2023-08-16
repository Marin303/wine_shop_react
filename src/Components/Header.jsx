import React from "react";
import glassOfWine from "../Images/wine-logo.png";
import "../Lib/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <nav className="flex gap-6 items-center bg-slate-800">
      <img src={glassOfWine} alt="glass of wine" className="w-40 h-14 m-2" />
      <ul className="flex gap-4 ul-desktop">
        <li>HOME</li>
        <li>
          WINES
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="pl-2" />
        </li>
        <li>GIFTS</li>
        <li>ABOUT US</li>
        <li>
          REGION
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="pl-2" />
        </li>
        <li>
          USER
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="pl-2" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
