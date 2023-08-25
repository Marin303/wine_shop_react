import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import card1 from "../Images/cards/card-1.png";
import card2 from "../Images/cards/card-2.png";
import card3 from "../Images/cards/card-3.png";
import card4 from "../Images/cards/card-4.png";
import card5 from "../Images/cards/card-5.png";
import card6 from "../Images/cards/card-6.png";

const Footer = () => {
  return (
    <div className="mt-10">
      <section className="flex flex-wrap gap-4 justify-around">
        <ul className="ul-footer">
          <li className="border-b border-yellow-400">Company</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Support Center</li>
        </ul>
        <ul className="ul-footer">
          <li className="border-b border-yellow-400">Useful Link</li>
          <li>Gift Cards</li>
          <li>Size Chart</li>
          <li>My Account</li>
          <li>Our Locations</li>
          <li>FAQs</li>
        </ul>
        <ul className="ul-footer">
          <li className="border-b border-yellow-400">Questions?</li>
          <li>Help Center</li>
          <li>Track Order</li>
          <li>Return</li>
          <li>Shipping Info</li>
          <li>Wishlist</li>
        </ul>
        <ul className="ul-footer">
          <li className="border-b border-yellow-400">Connect With Us</li>
          <li>ICONS</li>
          <li>Europe, Croatia</li>
          <li>wine@gmail.com</li>
          <li>+385 98...</li>
        </ul>
      </section>
      <div className="flex flex-wrap w-full justify-around mt-6 mb-6 p-4 border-t border-b border-yellow-500">
        <img src={card1} alt="Paypal" />
        <img src={card2} alt="Discover" />
        <img src={card3} alt="Amazon" />
        <img src={card4} alt="Maestro" />
        <img src={card5} alt="MasterCard" />
        <img src={card6} alt="Visa" />
      </div>
      <p className="text-center">
        Web Shop &copy; 2023. Made with
        <FontAwesomeIcon
          icon="fa-solid fa-heart"
          className="pl-2 text-yellow-400"
        />{" "}
        by Marin Muktić
      </p>
    </div>
  );
};

export default Footer;
