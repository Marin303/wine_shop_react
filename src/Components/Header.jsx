import React, { useCallback, useEffect, useRef, useState } from "react";
import glassOfWine from "../Images/wine-logo.png";
import "../Lib/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMobile from "./NavMobile";

const Header = () => {
  const [openNavContent, setOpenNavContent] = useState(false);
  const btnContentRef = useRef(null);

  const toggleNavMobile = () => {
    setOpenNavContent((prev) => !prev);
  };

  const handleClickOutside = useCallback((e) => {
    if (e.target.closest('.navContent')) {
        return; 
    }
    const isClickOutside =
      btnContentRef.current && !btnContentRef.current.contains(e.target);
    if (isClickOutside) {
      toggleNavMobile();
    }
}, []);


useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [handleClickOutside]);

  return (
    <>
      <nav className="flex bg-slate-800">
        <img src={glassOfWine} alt="glass of wine" className="w-40 h-14 m-2" />
        <div className="gap-6 items-center md:flex hidden m-auto">
          <ul className="flex gap-4 ul-desktop">
            <li>
              <a href="home">HOME</a>
            </li>
            <li>
              <a href="wines">WINES</a>

              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                className="pl-2"
              />
            </li>
            <li>
              <a href="gifts">GIFTS</a>
            </li>
            <li>
              <a href="aboutUs">ABOUT US</a>
            </li>
            <li>
              <a href="region">REGION</a>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                className="pl-2"
              />
            </li>
            <li>
              <a href="user">USER</a>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                className="pl-2"
              />
            </li>
          </ul>
        </div>

        <button className="navContent md:hidden ml-auto" onClick={toggleNavMobile}>
          <FontAwesomeIcon icon="fa-solid fa-bars" className="pr-5" />
        </button>
      </nav>
      {
      openNavContent && 
        <NavMobile ref={btnContentRef} />
      }
    </>
  );
};

export default Header;
