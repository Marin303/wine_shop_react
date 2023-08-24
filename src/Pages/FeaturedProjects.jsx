import React, { useEffect, useState } from "react";
import icon from "../Images/icons/Icon-sep.png";
import Products from "../Components/Products";
import { renderDots } from "../Utility/Dot";

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setCurrentSlide(0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const smallerScreen = screenWidth <= 800;
  const mobileVersion = screenWidth < 400;

  const nextSlide = () => {
    switch (true) {
      case mobileVersion && currentSlide < 5:
        setCurrentSlide(currentSlide + 1);
        break;
      case mobileVersion && currentSlide >= 5:
        setCurrentSlide(0);
        break;
      case smallerScreen && currentSlide < 1:
        setCurrentSlide(currentSlide + 1);
        break;
      case smallerScreen && currentSlide >= 1:
        setCurrentSlide(0);
        break;
      default:
        break;
    }
  };

  const prevSlide = () => {
    switch (true) {
      case mobileVersion && currentSlide > 0:
        setCurrentSlide(currentSlide - 1);
        break;
      case mobileVersion && currentSlide <= 0:
        setCurrentSlide(5);
        break;
      case smallerScreen && currentSlide > 0:
        setCurrentSlide(currentSlide - 1);
        break;
      case smallerScreen && currentSlide <= 0:
        setCurrentSlide(1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-5">
        <h2 className="md:text-4xl text-2xl break-words text-center mb-1">
          Featured Projects
        </h2>
        <img src={icon} alt="" className="w-10 h-2" />
      </div>
      <div className="flex md:justify-center justify-around mt-5 gap-5 flex-wrap">
        <p className="featured">BEST SELLER</p>
        <p className="featured">NEW ARRIVAL</p>
        <p className="featured">MOST WANTER</p>
      </div>

      <div className="product-wrapper flex justify-around mt-5 relative">
        <Products 
         currentSlide={currentSlide} 
         screenWidth={screenWidth} 
        />
        {mobileVersion
          ? renderDots(6, currentSlide)
          : smallerScreen
          ? renderDots(2, currentSlide)
          : null}
      </div>
      <div className="flex gap-1 justify-center mt-5">
        <button
          className="bg-yellow-200 w-8 h-8 text-black font-semibold rounded-sm hidden-tablet"
          onClick={prevSlide}
        >
          {"\u003C"}
        </button>
        <button
          className="bg-yellow-200 w-8 h-8 text-black font-semibold rounded-sm hidden-tablet "
          onClick={nextSlide}
        >
          {"\u003E"}
        </button>
      </div>
    </>
  );
};

export default FeaturedProjects;
