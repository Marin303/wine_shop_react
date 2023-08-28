import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Newsletter = () => {
  return (
    <div className="h-1/2 flex flex-wrap">
      <section className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="p-10">
          <h2 className="md:text-4xl text-lg">Newsletter</h2>
          <p>Sign up to our newsletter and save 20% of on next purchase</p>
        </div>
      </section>
      <section className="md:w-1/2 w-full bg-red-900 flex flex-col justify-center items-center inner-shadow p-10 ">
        <div className="flex flex-wrap gap-1 justify-center w-full px-4">
          <input
            type="text"
            placeholder="enter email adress"
            className="p-2 flex-grow min-w-[88px] w-0 rounded-sm"
          />
          <button className="bg-yellow-600 p-2 rounded-sm">
            <FontAwesomeIcon icon="fa-solid fa-envelope" className="mr-1"/>
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
