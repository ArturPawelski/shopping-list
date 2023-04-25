import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const ItemListProducts = ({ product, index, handleDelete, toggleComplete, setFullList }) => {
  const [editEnabled, setEditEnabled] = useState(false);

  function editName() {
    setEditEnabled(true);
  }
  function saveName() {
    setEditEnabled(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFullList((previousList) => {
      let newList = Array.from(previousList);
      newList[index][name] = value;
      return newList;
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={index}
      className="flex items-center justify-center gap-2 mt-[2rem] md:gap-8"
    >
      <BsTrash className="hover:scale-[1.5] transition duration-700" size={25} onClick={() => handleDelete(index)} />

      <div className="flex flex-col justify-between items-center w-[90%] bg-[#B7C6FF] py-3 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)] sm:flex-row md:px-8">
        {!editEnabled ? (
          <p className="font-bold text-center">{product.name}</p>
        ) : (
          <input className={`max-w-[4rem] bg-black text-white rounded-md shadow-md`} name="name" value={product.name} onChange={handleChange}></input>
        )}

        <div className="flex flex-col gap-4 items-center py-2 sm:py-0 sm:flex-row sm:gap-12 md:gap-20 ">
          <div className="flex gap-4 items-center py-2 sm:py-0 md:gap-12">
            {!editEnabled ? (
              <p className="font-bold text-center">{product.quantity}</p>
            ) : (
              <input className="max-w-[4rem] bg-black text-white rounded-md shadow-md" name="quantity" value={product.quantity} onChange={handleChange}></input>
            )}

            {!editEnabled ? (
              <p className="font-bold text-center">{product.price}</p>
            ) : (
              <input className="max-w-[4rem] bg-black text-white rounded-md shadow-md" name="price" value={product.price} onChange={handleChange}></input>
            )}

            <div className="max-w-[1rem] " onClick={() => toggleComplete(index)}>
              {product.status ? <BsCircle size={25} /> : <AiOutlineCheckCircle size={25} />}
            </div>
          </div>

          {!editEnabled ? (
            <button className="font-bold text-white bg-black  uppercase text-sm border-2 p-1 border-white hover:scale-[1.2] hover:border-red-700 transition duration-500" onClick={editName}>
              {" "}
              edit
            </button>
          ) : (
            <button className="font-bold text-white bg-black uppercase text-sm border-2 p-1 border-white hover:scale-[1.2] hover:border-red-700 transition duration-500 " onClick={saveName}>
              save
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ItemListProducts;
