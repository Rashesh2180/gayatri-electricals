import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
const Features = () => {
  return (
    <div className=" max-w-[800px] flex justify-center  mx-auto items-center mt-16 pb-10">
      <div className="flex gap-3 items-center">
        <FaShippingFast className=" text-orange-600 text-4xl" />
        <div className=" pr-8 border-r border-slate-600">
          <h2 className=" text-white text-sm font-bold  ">
            {" "}
            Fast Shipping
          </h2>
          <p className=" text-slate-400 text-xs">Very Quickly Delivery</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <MdSecurity  className=" text-white pl-5 text-5xl" />
        <div className=" pr-8 border-r border-slate-600">
          <h2 className=" text-white text-sm font-bold  ">
            {" "}
            Secured
          </h2>
          <p className=" text-slate-400 text-xs">High and Technology</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <IoStorefrontOutline   className=" text-white pl-5 text-5xl" />
        <div className=" ">
          <h2 className=" text-white text-sm font-bold  ">
            {" "}
            10 Stores
          </h2>
          <p className=" text-slate-400 text-xs">All High Quality Products</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
