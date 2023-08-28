import React from "react";
import bgImg from "../Images/bg-img-1.png";
import bgImg2 from "../Images/bg-img-2.png";
import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";
import p3 from "../Images/p3.jpg";

const Main = () => {
  return (
    <div className="w-full" id="home">
      <div className="relative w-full aspect-video overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={bgImg}
            alt="cuban cigarette smoke and a bottle of the wine"
            className="bg-cover bg-center bg-no-repeat w-full h-full animate-slide1"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={bgImg2}
            alt="rose and a bottle of the wine"
            className="bg-cover bg-center bg-no-repeat w-full h-full animate-slide2"
          />
        </div>
      </div>
      <div className="relative h-auto">
        <div className="flex w-full flex-wrap">
          <div className="w-full sm:w-1/1 md:w-1/3 lineeffect">
            <div>
              <img src={p1} alt="three bottles of a wine" className="w-full" />
            </div>
          </div>
          <div className="w-full sm:w-1/1 md:w-1/3 lineeffect">
            <div>
              <img
                src={p2}
                alt="two candles bottle of a wine and two glasses"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/1 md:w-1/3 lineeffect">
            <div>
              <img src={p3} alt="strong drink on a table" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
