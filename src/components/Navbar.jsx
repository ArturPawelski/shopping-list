import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/SKLEP-nav.png";
import { FiMenu } from "react-icons/fi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu((change) => !change);
  };

  return (
    <div className="w-full font-rob font-bold       ">
      <nav className="flex text-white min-h-[6rem]  bg-[#000B70] justify-between py-8 px-4 uppercase items-center gap-4 sm:px-8   ">
        <Link to="/" className=" hover:scale-[1.1] transition duration-500">
          <img
            src={Logo}
            alt=""
            className="w-[12rem]   md:w-[16rem]  lg:w-[20rem]"
          />
        </Link>

        <ul className="hidden  lg:flex lg:gap-12 lg:text-[1.2rem] lg:items-center ">
          <li className="hover:text-green-500 hover:scale-[1.2] transition duration-500">
            <Link to="/lista"> LIST </Link>
          </li>
          <li className="hover:text-green-500 hover:scale-[1.2] transition duration-500">
            <Link to="/posilki"> MEALS </Link>
          </li>
          <li className="hover:text-green-500 hover:scale-[1.2] transition duration-500">
            <Link to="/twojelisty"> YOUR LISTS </Link>
          </li>
          <li className="bg-[#262A83] py-2 px-8 rounded-xl hover:bg-slate-200 hover:text-black">
            <Link to="/login"> Log In </Link>
          </li>
        </ul>

        {menu ? (
          <FiMenu
            size={25}
            className="hover:scale-[1.1] hover:text-red-500 transition duration-500 lg:hidden"
            onClick={toggleMenu}
          />
        ) : (
          <HiX
            size={25}
            className="hover:scale-[1.2] hover:text-red-500 transition duration-500 fixed top-9 right-8
                 lg:hidden z-10"
            onClick={toggleMenu}
          />
        )}

        {!menu && (
          <ul
            style={{ zIndex: 5 }}
            className="fixed right-0 top-[0] px-8 bg-black h-[100%] w-[44%] z-5 bg-opacity-90  lg:hidden"
          >
            <div className="mt-32 ">
              <li className="hover:text-green-500 hover:scale-[1.1] transition duration-500">
                <Link to="/"> HOME </Link>
              </li>
              <li className="mt-8 hover:text-green-500 hover:scale-[1.1] transition duration-500">
                <Link to="/lista"> LIST </Link>
              </li>
              <li className="mt-8 hover:text-green-500 hover:scale-[1.1] transition duration-500">
                {" "}
                <Link to="/posilki">MEALS</Link>
              </li>
              <li className="mt-8 hover:text-green-500 hover:scale-[1.1] transition duration-500">
                <Link to="/twojelisty"> YOUR LISTS </Link>
              </li>
              <li className="bg-[#262A83] py-2  rounded-xl mt-16 flex justify-center max-w-[150px] mx-auto md:mx-0  hover:bg-slate-200 hover:text-black transition duration-500">
                <Link to="/login"> Log In </Link>
              </li>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
