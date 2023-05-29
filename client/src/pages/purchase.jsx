import React from "react";
import Title from "../components/title";

import Reservation from "../assets/images/reservation-img.png";
import Order from "../assets/images/order-img.png";

export default function Purchase() {
  return (
    <div className="flex flex-col items-center mt-8 gap-28 md:mt-16">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0 lg:px-32">
        <img
          src={Reservation}
          alt="reservation-img"
          className="w-[70%] md:w-[390px]"
        />
        <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-16">
          <p className="font-poppins text-white px-16 text-justify md:text-xl md:w-[85%] lg:text-2xl">
            At The Golden Fork, we believe that fine dining is more than just a
            meal; it's an experience. We invite you to join us for a culinary
            journey that will tantalize your taste buds and leave you with
            memories to last a lifetime.
          </p>
          <p className="font-poppins text-goldenYellow font-bold md:text-xl lg:ml-16">
            Make Your Reservation
          </p>
        </div>
      </div>

      <Title text="Or" />

      <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-0 lg:px-32">
        <img src={Order} alt="order-img" className="w-[70%] md:w-[390px]" />
        <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-16">
          <p className="font-poppins text-white px-16 text-justify md:text-xl md:w-[85%] lg:text-2xl">
            Experience the art of fine dining from the comfort of your own home
            with The Golden Fork's online ordering system. Simply browse our
            menu, select your dishes, and place your order.
          </p>
          <p className="font-poppins text-goldenYellow font-bold md:text-xl lg:ml-16">
            Make Your Online Order
          </p>
        </div>
      </div>
    </div>
  );
}