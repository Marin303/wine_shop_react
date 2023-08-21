import React from "react";
import VintageWines from "../Images/wineList/c1.png";
import RedWines from "../Images/wineList/c2.png";
import WhiteWines from "../Images/wineList/c3.png";
import RoseWines from "../Images/wineList/c4.png";
import NonVintageWines from "../Images/wineList/c5.png";
import SparklingWines from "../Images/wineList/c6.png";

const WineCollect = () => {
  return (
    <div className="wineWrapper flex flex-wrap justify-around items-center p-2">
      <figure className="text-center m-2">
        <img src={VintageWines} alt="La Grande Dame wine bottle" />
        <figcaption className="text-lg">Vintage Wines</figcaption>
      </figure>

      <figure className="text-center m-2">
        <img src={RedWines} alt="Flowers wine bottle" />
        <figcaption className="text-lg">Red Wines</figcaption>
      </figure>

      <figure className="text-center m-2">
        <img src={WhiteWines} alt="Rombauer wine bottle" />
        <figcaption className="text-lg">White Wines</figcaption>
      </figure>

      <figure className="text-center m-2">
        <img src={RoseWines} alt="Hampton water wine bottle" />
        <figcaption className="text-lg">Rose Wines</figcaption>
      </figure>

      <figure className="text-center m-2">
        <img src={NonVintageWines} alt="Veuve Clicquot wine bottle" />
        <figcaption className="text-lg">Non-Vintage Wines</figcaption>
      </figure>

      <figure className="text-center m-2">
        <img src={SparklingWines} alt="Shandon wine bottle" />
        <figcaption className="text-lg">Sparkling Wines</figcaption>
      </figure>
    </div>
  );
};

export default WineCollect;
