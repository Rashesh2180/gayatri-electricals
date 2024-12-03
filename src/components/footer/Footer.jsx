import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <div className='w-full px-5 mx-auto total-width flex flex-wrap justify-between items-start py-8'>
      {/* Logo Section */}
      <ul className="text-white">
        <li>
          <a href="/" className="flex items-center gap-2">
            <div className="bg-red-950 p-2 text-lg flex items-center justify-center h-10 w-10 rounded-full text-white font-bold">
              GL
            </div>
            <div className="font-semibold text-xl max-sm:text-base">GreatLumen</div>
          </a>
        </li>
        <li className=' text-slate-400 mt-4'>
          greatlumen.dnh@gmail.com
        </li>
        <li className=' mt-8 flex items-center gap-3'>
          <a href="/" className=' h-10 w-10  flex items-center justify-center rounded-full bg-secondary p-2'><MdEmail className=" text-white" /></a>
          <a href="/" className=' h-10 w-10  flex items-center justify-center rounded-full bg-secondary p-2'><TbWorld className=" text-white" /></a>

          <a href="/" className=' h-10 w-10  flex items-center justify-center rounded-full  bg-orange-600 p-2'><FaPhoneAlt className=" text-white" /></a>

        </li>
      </ul>

      {/* Products Section */}
      <ul className="text-white">
        <li className="font-semibold text-lg mb-2">Products</li>
        <li  className=' mt-6 mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">LED Lights</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Panel Lights</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Flood Lights</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">COB Lamps</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">LED Strips</a></li>
      </ul>

      {/* Resources Section */}
      <ul className="text-white">
        <li className="font-semibold text-lg mb-2">Resources</li>
        <li className='mb-2  mt-6'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Documentation</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">FAQs</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Blog</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Tutorials</a></li>
      </ul>

      {/* Company Section */}
      <ul className="text-white">
        <li className="font-semibold text-lg mb-2">Company</li>
        <li className='mb-2 mt-6' ><a href="/" className="text-sm text-gray-400 hover:text-orange-600">About Us</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Careers</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Contact</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Privacy Policy</a></li>
        <li className='mb-2'><a href="/" className="text-sm text-gray-400 hover:text-orange-600">Terms of Service</a></li>
      </ul>
    </div>
  );
}

export default Footer;
