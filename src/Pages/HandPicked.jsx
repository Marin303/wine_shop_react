import React from "react";
import handPickBack from "../Images/bg-hand.png";

const HandPicked = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center md:p-10 p-2 flex justify-end"
      style={{ backgroundImage: `url(${handPickBack})` }}
    >
      <aside className="text-white md:pr-16 flex flex-col justify-center h-full">
        <h3 className="text-4xl font-bold">Hand-Picked</h3>
        <p className="text-4xl">Collection</p>
        <p>Save More, Pour More</p>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          laboriosam, obcaecati voluptate voluptatem, aliquam quis officia
          sapiente optio, earum similique iusto numquam! Assumenda, nam ratione
          ab quas culpa nobis eius.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-700">
          SHOP NOW
        </button>
      </aside>
    </div>
  );
};

export default HandPicked;
