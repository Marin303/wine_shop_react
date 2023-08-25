import React from "react";
import background from "../Images/customer-bg.png";
import customer1 from "../Images/customers/t1.png";
import customer2 from "../Images/customers/t2.png";
import customer3 from "../Images/customers/t3.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const CustomerReview = () => {
  return (
    <div
      className="flex text-center flex-col bg-center bg-cover bg-fixed mt-2"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="md:text-4xl text-2xl mt-10 break-word">Customer Review</h2>

      <div className="mt-20 w-3/4 m-auto">
        <Slide>
          <div className="w-3/4 m-auto">
            <img src={customer1} alt="Customer image" className="m-auto" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              atque saepe nihil quo veniam error maiores sed, perferendis
              voluptate consequuntur voluptas debitis, fugit modi minima dicta
              animi earum, vel iusto.
            </p>
            <span>Slide 1</span>
          </div>

          <div className="w-3/4 m-auto">
            <img src={customer2} alt="Customer image" className="m-auto" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              perspiciatis voluptatum dolor amet eveniet dicta alias? Officiis
              repudiandae magni soluta ea temporibus, eaque impedit nisi! Fuga
              optio ad ut non?
            </p>
            <span>Slide 2</span>
          </div>

          <div className="w-3/4 m-auto">
            <img src={customer3} alt="Customer image" className="m-auto" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet consequuntur ipsa quisquam dolore consequatur
              eius quasi, expedita excepturi? Quidem rerum eaque iure. Tenetur
              veniam iusto soluta repudiandae, excepturi harum.
            </p>
            <span>Slide 3</span>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default CustomerReview;
