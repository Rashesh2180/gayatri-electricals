import React, { useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import Link and useLocation

const navlist = [
  { id: 1, list: "home", href: "/" },
  { id: 2, list: "contact us", href: "/contactus" },
  { id: 3, list: "products", href: "/products" },
  { id: 4, list: "About", href: "/about" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Function to toggle the menu
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false); // Close the menu
  };

  // Always call useEffect unconditionally
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Disable body scroll when menu is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable body scroll when menu is closed
    }

    // Cleanup function to ensure body scroll behavior is reset if the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]); // Runs when the `open` state changes

  // Hide the header if the current route is /login
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="flex justify-between items-center total-width mx-auto px-3 sm:px-5 py-4 sticky top-0 left-0">
      {/* logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="bg-red-950 p-2 text-lg flex items-center justify-center h-10 w-10 rounded-full text-white font-bold">
          GL
        </div>
        <div className="text-white font-semibold text-xl max-sm:text-base">GreatLumen</div>
      </a>

      <ul className="flex items-center gap-8 text-white max-lg:hidden">
        {navlist &&
          navlist.map((ele) => (
            <li
              key={ele.id}
              className={`text-base font-semibold capitalize py-2 px-4 rounded-full ${
                location.pathname === ele.href
                  ? "bg-orange-600 text-white"
                  : "hover:bg-orange-600"
              }`}
            >
              <NavLink to={ele.href} onClick={handleLinkClick}>
                {ele.list}
              </NavLink>
            </li>
          ))}
      </ul>

      <div className="flex sm:gap-4 gap-2 items-center">
        <div className="relative p-2 h-10 w-10 border border-white flex items-center justify-center rounded-full">
          <a href="/cart">
            <CiShoppingCart className="text-white font-bold text-xl" />
          </a>
          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center text-center">
            0
          </div>
        </div>
        <button className="bg-[#11113b] px-7 py-3 max-sm:px-4 max-sm:text-xs rounded-full text-sm text-white font-semibold">
          <NavLink to="/login" onClick={handleLinkClick}>
            Sign in
          </NavLink>
        </button>
        <button className="lg:hidden" onClick={handleToggle}>
          {!open ? (
            <FaBars className="text-xl text-white" />
          ) : (
            <IoCloseSharp className="text-red-600 text-xl" />
          )}
        </button>
        {open && (
          <ul className="flex flex-col h-screen bg-[#09092a] shadow-2xl pl-4 pt-5 w-48 absolute top-[70px] right-0 z-50 items-start gap-4 text-orange-600 hover:text-white">
            {navlist &&
              navlist.map((ele) => (
                <li
                  key={ele.id}
                  className={`text-base font-semibold capitalize py-2 px-4 rounded-full ${
                    location.pathname === ele.href
                      ? "bg-orange-600 text-white"
                      : "hover:bg-orange-600"
                  }`}
                >
                  <NavLink to={ele.href} onClick={handleLinkClick}>
                    {ele.list}
                  </NavLink>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
