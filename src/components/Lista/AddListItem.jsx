import React, { useState } from "react";

const AddListItem = ({ appendProductToList }) => {
  const [productName, setProductName] = useState("");
  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const [productQuantity, setProductQuantity] = useState();
  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const [productPrice, setProductPrice] = useState();
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const addProductToList = () => {
    const price = productPrice * productQuantity;

    const newProduct = {
      name: productName,
      quantity: productQuantity,
      price: price.toFixed(2),
      status: true,
    };
    appendProductToList(newProduct);
    setProductName("");
    setProductQuantity(``);
    setProductPrice(``);
  };

  return (
    <section>
      <article className=" w-full  mt-[6rem] flex flex-col bg-[#32388F] bg-opacity-90 py-8 px-8 mx-auto md:max-w-[650px]  md:rounded-2xl   ">
        <main className="flex flex-col md:flex-row md:items-center md:justify-center md:mx-auto  md:gap-[8rem]">
          <div className="mx-auto grid ">
            <p className="text-white font-bold mx-auto md:mx-0 ">PRODUCT NAME:</p>
            <input
              className="py-4 px-4 max-w-[18rem] rounded-lg  mx-auto shadow-[6px_4px_8px_rgba(0,0,0,0.35)]  "
              type="text"
              placeholder="milk..."
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>

          <div className="flex justify-center gap-[4rem] mt-[2rem] md:mt-0">
            <div>
              <p className="text-white font-bold mx-auto">QUANTITY:</p>
              <input
                className="py-3 px-4 max-w-[4rem] text-center  rounded-lg  shadow-[6px_4px_8px_rgba(0,0,0,0.35)] md:mt-0  "
                type="number"
                placeholder="2"
                value={productQuantity}
                onChange={handleProductQuantityChange}
              />
            </div>

            <div>
              <p className="text-white font-bold mx-auto">PRICE:</p>
              <input
                className="py-3 px-4 max-w-[6.5rem] text-left rounded-lg    shadow-[6px_4px_8px_rgba(0,0,0,0.35)] md:mt-0  "
                type="number"
                placeholder="3.59"
                value={productPrice}
                onChange={handleProductPriceChange}
              />
            </div>
          </div>
        </main>

        <button
          className=" mt-[2rem] max-w-[400px] mx-auto bg-white shadow-[6px_4px_8px_rgba(0,0,0,0.50)] font-extrabold py-2 px-8 rounded-xl md:mt-[4rem] hover:bg-black hover:text-white transition duration-500"
          onClick={addProductToList}
        >
          ADD PRODUCT TO LIST
        </button>
      </article>
    </section>
  );
};

export default AddListItem;
