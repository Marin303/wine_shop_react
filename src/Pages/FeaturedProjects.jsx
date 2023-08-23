import React, { useEffect, useState } from "react";
import icon from "../Images/icons/Icon-sep.png";
import Products from "../Components/Products";

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(3); // max 2 slides for mobile - 3 slide for desktop version
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 800) {
        setCurrentSlide(3);
        //slide sould disaper and all section showed
      } else {
        setCurrentSlide(1);
        // slider should apper so user can scroll it
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  console.log(screenWidth, currentSlide);

  return (
    <>
      <div className="flex flex-col items-center mt-5">
        <h2 className="text-4xl">FeaturedProjects</h2>
        <img src={icon} alt="" className="w-10 h-2" />
      </div>
      <div className="flex justify-center mt-5 gap-5">
        <p className="featured">BEST SELLER</p>
        <p className="featured">NEW ARRIVAL</p>
        <p className="featured">MOST WANTER</p>
      </div>

      <div className="flex justify-between mt-5">
        <Products />
      </div>
      <div className="flex gap-1 justify-center">
        <button
          className="bg-yellow-200 w-8 h-8 text-black font-semibold rounded-sm"
          onClick={prevSlide}
        >
          {"\u003C"}
        </button>
        <button
          className="bg-yellow-200 w-8 h-8 text-black font-semibold rounded-sm"
          onClick={nextSlide}
        >
          {"\u003E"}
        </button>
      </div>
    </>
  );
};

export default FeaturedProjects;
