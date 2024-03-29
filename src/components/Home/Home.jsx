import React from "react";
import Phone from "../images/illustration1.svg";
import Food from "../images/illustration2.svg";
import Phone3 from "../images/illustration3.svg";
import Phone4 from "../images/illustration4.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.2 } }} className="w-full font-rob mb-[8rem]">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex  flex-col justify-center items-center min-h-[450px] max-w-[90%] mx-auto mt-[6rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row  md:bg-transparent md:max-w-[80%] md:mt-[6rem] "
      >
        <div className=" md:w-[50%] ">
          <img src={Phone} alt="" className=" w-[30%]  sm:w-[28%] md:w-[40%] lg:left-12 2xl:w-[35%] mx-auto " />
        </div>

        <div className=" md:w-[50%] ">
          <h2 className=" text-center   text-white  font-bold text-2xl mt-4 md:text-left md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] ">
            Creating your own shopping lists is a convenient and practical way to stay organized while shopping.
          </h2>
          <p className="text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] ">
            With our app, you can easily create custom lists for all your shopping needs, from groceries to household items and beyond.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 1, scale: 0, x: -900 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ stiffness: 100, type: "spring", damping: 10 }}
        viewport={{ once: true }}
        className="flex flex-col  min-h-[450px] justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row-reverse md:bg-transparent md:max-w-[80%] md:mt-[8rem]"
      >
        <div className=" md:w-[50%]">
          <img src={Food} alt="" className=" w-[40%] sm:w-[37%] md:w-[70%] mx-auto md:mr-[20%] " />
        </div>

        <div className=" md:w-[50%]  ">
          <h2 className=" text-center   text-white font-lol font-bold text-2xl mt-4 md:text-left md:ml-[30%]  md:ml- md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] ">
            Take full control of your list by filtering and editing your products.
          </h2>
          <p className="text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left md:ml-[30%] lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] ">
            With our app, you can easily manage your inventory and make changes as needed. Stay organized and efficient by customizing your list to fit your specific needs.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 1, scale: 0, x: 900 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ stiffness: 40, type: "spring", damping: 10 }}
        viewport={{ once: true }}
        className="flex flex-col  justify-center min-h-[450px] items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row  md:bg-transparent md:max-w-[80%] md:mt-[8rem] "
      >
        <div className="  md:w-[50%]  ">
          <img src={Phone3} alt="" className=" w-[30%]  relative left-6 sm:w-[28%] md:w-[60%] md:left-16 lg:w-[45%] xl:left-24 mx-auto " />
        </div>

        <div className=" md:w-[50%] xl:pr-40">
          <h2 className=" text-center   text-white font-lol font-bold text-2xl mt-4 md:text-left md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] ">
            Our app goes beyond just creating shopping lists.
          </h2>
          <p className="text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] ">
            You can also create and save meals based on your shopping list.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 1, scale: 0, x: -900 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex   flex-col min-h-[450px] justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row-reverse md:bg-transparent md:max-w-[80%] md:mt-[8rem]"
      >
        <div className=" md:w-[50%]">
          <img src={Phone4} alt="" className=" w-[40%] relative left-6 sm:left-14 sm:w-[37%] md:w-[50%] md:left-0 md:bottom-[100%] mx-auto md:mr-[20%] " />
        </div>

        <div className=" md:w-[50%] xl:pr-40">
          <h2 className=" text-center   text-white font-lol font-bold text-2xl mt-4 md:text-left md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] ">
            Save your lists and access them anytime you need them with our app.
          </h2>
          <p className="text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] ">
            Whether it's a shopping list, or a meals you can easily save and store your lists for future use.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
