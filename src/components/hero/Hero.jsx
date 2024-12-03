import React from "react";
import { FaSearch } from "react-icons/fa";
import Products from "../products/Products";

const Hero = () => {
  return (
    <div className="   mx-auto pt-20 flex flex-col justify-center items-center p-5">
      <h1 className="  text-7xl text-white font-semibold text-center capitalize">
        {" "}
        light your life{" "}
      </h1>
      <h2 className="text-7xl text-white font-semibold text-center mt-5 capitalize">
        with great Lumen
      </h2>
      <p className=" text-slate-400 text-center text-lg mt-4">
        We ansure the Quality in best price on time delivery
      </p>
      <div className=" mt-10  max-w-[450px] w-full mx-auto rounded-full px-4 py-2 bg-secondary flex gap-4">
        <input
          type="text"
          className=" bg-transparent border-none  text-gray-400 outline-none w-full flex-1"
          placeholder=" search what you want..."
        />
        <button className=" bg-orange-600 h-10 w-10 rounded-full flex items-center justify-center">
          <FaSearch className=" text-white text-base" />
        </button>
      </div>
     
    </div>
  );
};

export default Hero;
