import React, { useState } from "react";
import BgLogin from "../images/signup-bg.png";
import { motion } from "framer-motion";

const Login = () => {
  const [changeLogIn, setChangeLogIn] = useState(true);

  const toggleChangeLogIn = () => {
    setChangeLogIn(!changeLogIn);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="w-full  font-rob min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-60 "
    >
      {changeLogIn ? (
        <main className="bg-white min-w-[200px] min-h-[600px] relative px-8 py-8 overflow-hidden rounded-2xl shadow-2xl  sm:min-w-[400px]">
          <img src={BgLogin} alt="" className=" absolute top-[-40%] z-[0]   left-[0%] " />

          <section className=" ">
            <h2 className="font-extrabold text-[1.6rem] text-center">LOG IN</h2>

            <div className="mt-[8rem] relative ">
              <p className="font-bold text-[0.9rem]">EMAIL:</p>
              <input type="text" className="bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full " />

              <p className="font-bold text-[0.9rem] mt-4">PASSWORD: :</p>
              <input type="password" className="bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full" />

              <div className="flex flex-col mt-4 sm:justify-between sm:flex-row">
                <div className="flex gap-2 items-center">
                  <div className="min-w-[1rem] min-h-[1rem] rounded-md bg-blue-200"></div>
                  <p>Remember me</p>
                </div>
                <p className="font-bold mt-4 sm:mt-0">Forgot password? </p>
              </div>

              <button className="bg-black mt-12 text-white font-extrabold py-1 px-12 block mx-auto rounded-xl text-[1.4rem] ">LOG IN</button>

              <p className="mt-12 text-center">
                Need an account?
                <span onClick={toggleChangeLogIn} className="font-bold ml-1 underline underline-offset-2">
                  SIGN UP
                </span>
              </p>
            </div>
          </section>
        </main>
      ) : (
        <main className="bg-white min-w-[200px] min-h-[600px] relative px-8 py-8 overflow-hidden rounded-2xl shadow-2xl sm:min-w-[400px] ">
          <img src={BgLogin} alt="" className=" absolute top-[-40%] z-[0]   left-[0%] " />

          <section className=" ">
            <h2 className="font-extrabold text-[1.6rem] text-center">SIGN UP</h2>

            <div className="mt-[4rem] relative ">
              <p className="font-bold text-[0.9rem]">EMAIL:</p>
              <input type="text" className="bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full " />

              <p className="font-bold text-[0.9rem] mt-4">NAME:</p>
              <input type="text" className="bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full" />

              <p className="font-bold text-[0.9rem] mt-4">PASSWORD:</p>
              <input type="text" className="bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full " />

              <p className="font-bold text-[0.9rem] mt-4">CONFIRM PASSWORD:</p>
              <input type="text" className="bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full" />

              <button className="bg-black mt-12 text-white font-extrabold py-1 px-12 block mx-auto rounded-xl text-[1.4rem] ">SIGN UP</button>
              <p className="mt-8 text-center">
                Already a user?
                <span onClick={toggleChangeLogIn} className="ml-1 font-bold underline underline-offset-2">
                  LOG IN
                </span>
              </p>
            </div>
          </section>
        </main>
      )}
    </motion.div>
  );
};

export default Login;
