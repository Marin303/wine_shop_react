import React from "react";
import bgImg from "../Images/bg-img-1.png";
import bgImg2 from "../Images/bg-img-2.png";

const Main = () => {
  return (
    <div className="w-full relative top-20 h-[calc(100vh-5rem)] overflow-x-hidden">
      <div>
        <img
          src={bgImg}
          alt="cuban cigarette smoke and a bottle of the wine"
          className="bg-cover bg-center bg-no-repeat w-full 
          animate-slide1 absolute"
        />
      </div>
      <div>
        <img
          src={bgImg2}
          alt="rose and a bottle of the wine"
          className="bg-cover bg-center bg-no-repeat w-full 
          animate-slide2 absolute"
        />
      </div>
    </div>
  );
};

export default Main;
