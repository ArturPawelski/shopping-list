import React, { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import ProductLists from "./MealsProductLists";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { deleteFoodList, postDataToActualList } from "./api";
import YourMeals from "../images/YOUR-MEALS.png";

const Meals = () => {
  const Navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const [openListId, setOpenListId] = useState(null);
  const toggleOpenProducts = (id) => {
    setOpenListId(openListId === id ? null : id);
  };

  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/foods")
      .then((response) => response.json())
      .then((result) => {
        setFoodsData(result);
      })
      .catch((error) => console.log("error", error));
  }, [refresh]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="w-full font-rob min-h-screen flex flex-col justify-center items-center mb-[8rem] "
    >
      <img src={YourMeals} alt="/" className="mx-auto mb-[-4rem] mt-[2rem] w-auto px-8 md:max-w-[600px]" />
      {foodsData &&
        foodsData.map(({ id, name, description, img, productsList }) => (
          <section
            key={id}
            className="flex flex-col justify-center  bg-white mx-auto mt-[8rem] py-4 px-2 shadow-md rounded-xl sm:px-0 sm:max-w-[600px] sm:min-w-[600px] md:min-w-[600px] md:max-w-[600px]  lg:max-w-[800px] lg:min-w-[800px] xl:min-w-[800px]"
          >
            <main className=" flex items-center gap-4 justify-center">
              <div className="flex justify-center w-[40%]  ">
                <div className="max-w-[120px] grid place-items-center bg-slate-500   rounded-md">
                  <img src={img} alt="" className="min-w-[100px] max-w-[100px] max-h-[100px] min-h-[100px] opacity-50 rounded-md " />
                </div>
              </div>

              <div className="w-[60%] flex flex-col justify-center items-center">
                <h2 className="font-extrabold text-[#050C69]">{name}</h2>
                <p className="text-left mt-2 p-1">{description}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleOpenProducts(id)}
                    className="mt-4 hover:bg-black transition duration-500 flex flex-col items-center  text-white font-extrabold  py-2 bg-[#4A55AA] rounded-2xl sm:px-8 sm:flex-row sm:gap-4 "
                  >
                    Open the list of products
                    <BiCaretDown />
                  </button>
                  <BsTrash size={30} className=" relative hover:scale-[1.3] transition-all duration-500 sm:top-2" onClick={() => deleteFoodList(id, toggleRefresh)} />
                </div>
              </div>
            </main>

            {openListId === id && (
              <div>
                <button
                  onClick={() => postDataToActualList(id, foodsData, Navigate)}
                  className="hover:bg-[#4A55AA] transition-all duration-500 mt-8 bg-black text-white block font-extrabold  px-2 py-2  rounded-xl mx-auto "
                >
                  Upload the list to the cloudd
                </button>

                {productsList && productsList.map((product, index) => <ProductLists key={index} product={product} id={id} index={index} setFoodsData={setFoodsData} foodsData={foodsData} />)}
              </div>
            )}
          </section>
        ))}
    </motion.div>
  );
};
export default Meals;
