import React, { useState, useEffect } from "react";
import AddListItem from "./AddListItem";
import ItemList from "./ItemList";
import { motion } from "framer-motion";

const List = () => {
  const toggleComplete = (index) => {
    const newList = [...fullList];
    newList[index].status = !newList[index].status;
    setFullList(newList);
  };

  const [fullList, setFullList] = useState([]);

  const appendProductToList = (newProduct) => {
    setFullList([...fullList, newProduct]);
  };

  const handleDelete = (index) => {
    const newList = [...fullList];
    newList.splice(index, 1);
    setFullList(newList);
  };

  const delateAllProducts = () => {
    const emptyList = [];
    setFullList(emptyList);
  };

  const [allProducts, setAllProducts] = useState(0);
  useEffect(() => {
    const newProduct = fullList.reduce((total, product) => total + Number(product.quantity), 0);
    setAllProducts(newProduct.toFixed(2));
  }, [fullList]);

  const [fullPrice, setFullPrice] = useState(0);
  useEffect(() => {
    const newPrice = fullList.reduce((total, product) => total + Number(product.price), 0);
    setFullPrice(newPrice.toFixed(2));
  }, [fullList]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.2 } }} className="w-full font-rob mb-[8rem]">
      <AddListItem appendProductToList={appendProductToList} />

      <ItemList
        fullList={fullList}
        handleDelete={handleDelete}
        toggleComplete={toggleComplete}
        allProducts={allProducts}
        fullPrice={fullPrice}
        delateAllProducts={delateAllProducts}
        setFullList={setFullList}
      />
    </motion.div>
  );
};
export default List;
