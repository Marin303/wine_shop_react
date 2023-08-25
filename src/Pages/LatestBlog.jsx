import React from "react";
import bg1 from "../Images/blog/b1.jpg";
import bg2 from "../Images/blog/b2.jpg";
import bg3 from "../Images/blog/b3.jpg";

const LatestBlog = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="md:text-4xl text-2xl mb-10">Latest Blog</h2>
      <div className="flex flex-wrap m-5">
        <section className="md:w-1/3 flex flex-col p-3">
          <img src={bg1} alt="Glass of wine on a table inside restaurant" />
          <h3 className="mt-2">New Wine Shop in your area</h3>
          <p>August 25, 2023</p>
          <p className="p-3 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto
            numquam iure hic velit! Quae enim veniam omnis autem iste suscipit
            aspernatur architecto fuga, numquam corporis, excepturi, sequi
            libero fugit.
          </p>
          <button className="text-yellow-400">Read more</button>
        </section>
        <section className="inner-shadow md:w-1/3 p-2 flex flex-col bg-gray-500 ">
          <h3 className="mt-2">New Wine Shop in your area</h3>
          <p>August 25, 2023</p>
          <p className="p-3 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto
            numquam iure hic velit! Quae enim veniam omnis autem iste suscipit
            aspernatur architecto fuga, numquam corporis, excepturi, sequi
            libero fugit.
          </p>
          <button className="text-yellow-400">Read more</button>
          <img src={bg2} alt="Jack Daniels glass" />
        </section>
        <section className="md:w-1/3 flex flex-col p-3">
          <img src={bg3} alt="Two glasses" />
          <h3 className="mt-2">New Wine Shop in your area</h3>
          <p>August 25, 2023</p>
          <p className="p-3 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto
            numquam iure hic velit! Quae enim veniam omnis autem iste suscipit
            aspernatur architecto fuga, numquam corporis, excepturi, sequi
            libero fugit.
          </p>
          <button className="text-yellow-400">Read more</button>
        </section>
      </div>
    </div>
  );
};

export default LatestBlog;
