import React, { useCallback, useEffect, useRef, useState } from "react";
import glassOfWine from "../Images/wine-logo.png";
import "../Lib/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMobile from "./NavMobile";

const Header = () => {
  const [openNavContent, setOpenNavContent] = useState(false);
  const btnContentRef = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false)

  const toggleNavMobile = () => {
      setButtonClicked(true)
      setOpenNavContent((prev) => !prev);
  
  };

  const handleClickOutside = useCallback(
    (e) => {
      if (e.target.closest(".navBtn")) {
        return;
      }
      const isClickOutside =
        btnContentRef.current && !btnContentRef.current.contains(e.target);
      if (isClickOutside && openNavContent) {
        toggleNavMobile();
      }
    },
    [openNavContent]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <nav className="flex bg-black-opc-50 sticky top-0 left-0 w-full h-20 z-10">
        <img src={glassOfWine} alt="glass of wine" className="max-w-40 max-h-14 m-2" />
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
        <button
          className="navBtn md:hidden relative w-full"
          onClick={toggleNavMobile}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-x"
            className={`absolute inset-0 border-2 p-2 m-auto mr-2 w-7 ${
              openNavContent ? "opacity-100" : "opacity-0"
            }`}
          />

          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            className={`absolute inset-0 border-2 p-2 m-auto mr-2 w-7 ${
              openNavContent ? "opacity-0" : "opacity-100"
            }`}
          />
        </button>
      </nav>

      <NavMobile ref={btnContentRef} isOpen={openNavContent} buttonClicked={buttonClicked}/>
    </>
  );
};

export default Header;
