import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavMobile = React.forwardRef(({ isOpen, buttonClicked  }, btnContentRef) => {

if (!buttonClicked) {
    return null;
  }
  const animationClass = isOpen ? "slide-in-animation" : "slide-out-animation";
  
  return (
    <div className={`fixed top-20 right-0 z-50 overflow-hidden ${animationClass}`}>
    <div
        ref={btnContentRef}
        className="flex justify-center float-right box-border bg-white-opc-50 w-40 rounded-b-lg text-black h-[calc(100vh-5rem)] "
      >
        <ul className="flex flex-col gap-4 ul-desktop p-4">
          <li>
            <a href="home">HOME</a>
          </li>
          <li>
            <a href="wines">WINES</a>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="pl-2" />
          </li>
          <li>
            <a href="gifts">GIFTS</a>
          </li>
          <li>
            <a href="aboutUs">ABOUT US</a>
          </li>
          <li>
            <a href="region">REGION</a>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="pl-2" />
          </li>
          <li>
            <a href="user">USER</a>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="pl-2" />
          </li>
        </ul>
      </div>
    </div>
  );
});

export default NavMobile;
