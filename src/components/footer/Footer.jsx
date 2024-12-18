import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import Link and useLocation
import { IoLocation } from "react-icons/io5";
const Footer = () => {
  const location = useLocation(); // Get the current location

  const hiddenRoute = location.pathname === "/login";

  if (hiddenRoute) {
    return null;
  }
  return (
    <div className="w-full px-5 mx-auto total-width flex flex-wrap gap-5 justify-between items-start py-8">
      {/* Logo Section */}
      <ul className="text-white">
        <li>
          <a
            href="/"
            className="flex items-center gap-2 rounded-md overflow-hidden w-[200px] h-14"
          >
            <img
              src="/assets/svg/gayatrilogo.jpg"
              alt=""
              className="  h-full w-full rounded-md object-contain"
            />
          </a>
        </li>
        <li className=" mt-8 flex items-center  gap-3">
          <a
            href="/"
            className=" h-8 w-8 flex items-center justify-center rounded-full bg-secondary p-2"
          >
            <MdEmail className=" text-white" />{" "}
            
          </a>
          <span className="text-slate-400">greatlumen.dnh@gmail.com</span>
        </li>
        <li className=" mt-4 flex items-center   gap-3">
          <a
            href="/"
            className=" h-8 w-8  flex items-center justify-center rounded-full bg-secondary p-2"
          >
            <IoLocation  className=" text-white" />
            
          </a>
          <span className="text-slate-400 max-w-[350px]" >Shop No-4 Pletinum Square,Bhurkud Faliya Shilvassa-396230 DNH & DD</span>
        </li>
        <li className=" mt-4 flex items-center   gap-3">
          <a
            href="/"
            className=" h-8 w-8  flex items-center justify-center rounded-full  bg-orange-600 p-2"
          >
            <FaPhoneAlt className=" text-white" />
          </a>
          <span className="text-slate-400 max-w-[350px]" >+91 9106824852</span>

        </li>
      </ul>

      {/* Products Section */}
      <ul className="text-white">
        <li className="font-semibold text-lg mb-2">Products</li>
        <li className=" mt-6 mb-2">
          <a
            href="/products"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            LED Lights
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/products"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            Panel Lights
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/products"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            Flood Lights
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/products"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            COB Lamps
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/products"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            LED Strips
          </a>
        </li>
      </ul>

      {/* Resources Section */}
      <ul className="text-white">
        <li className="font-semibold text-lg mb-2">Resources</li>
        <li className="mb-2  mt-6">
          <a href="/" className="text-sm text-gray-400 hover:text-orange-600">
            Documentation
          </a>
        </li>
        <li className="mb-2">
          <a href="/" className="text-sm text-gray-400 hover:text-orange-600">
            FAQs
          </a>
        </li>
        <li className="mb-2">
          <a href="/" className="text-sm text-gray-400 hover:text-orange-600">
            Blog
          </a>
        </li>
        <li className="mb-2">
          <a href="/" className="text-sm text-gray-400 hover:text-orange-600">
            Tutorials
          </a>
        </li>
      </ul>

      {/* Company Section */}
      <ul className="text-white">
        <li className="font-semibold text-lg mb-2">Company</li>
        <li className=" mt-6 mb-2">
          <a
            href="/contactus"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            Contact Us
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/about"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            About Us
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/products"
            className="text-sm text-gray-400 hover:text-orange-600"
          >
            Products
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
