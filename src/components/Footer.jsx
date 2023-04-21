import React from "react";
import Logo from "../images/SKLEP-LISTA-footer.png";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full font-rob  font-bold bg-[#FFFFFF] bg-opacity-[85%]   ">
      <footer className="w-[90%] mx-auto py-12 md:flex md:items-center md:justify-center md:gap-[5%] xl:gap-[10%]">
        <div className="w-full md:w-auto">
          <img src={Logo} alt="/" className="w-[65%] md:w-full mx-auto" />
        </div>

        <ul className="grid  place-items-center mt-8 md:place-items-start md:items-center md:mt-0">
          <li className="flex items-center  gap-2 lg:text-xl">App created by: Artur Pawelski</li>
          <li className="flex items-center mt-4 gap-2 lg:text-xl">
            <HiOutlineMail size={30} /> arturpawelski13@gmail.com
          </li>
        </ul>

        <div className="flex justify-center items-center gap-[20%] mt-8 md:mt-0">
          <a href="https://linkedin.com/" target="blank">
            <AiFillLinkedin size={40} className="lg:w-[3rem] xl:w-[4rem]" />
          </a>
          <a href="https://github.com/ArturPawelski" target="blank">
            <BsGithub size={40} className="lg:w-[3rem] xl:w-[4rem]" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
