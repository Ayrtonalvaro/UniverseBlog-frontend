import React from "react";
import Icons from "../Icons/Icon";
import GridIcons from "./GridIcons";
import GridSection from "./GridSection";
import ProfileImg from "./ProfileImg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-around p-10">
        <GridIcons />
        <GridSection />
        <div className="flex items-center gap-5">
          <Link to="/login">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
              Register
            </button>
          </Link>

          <ProfileImg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
