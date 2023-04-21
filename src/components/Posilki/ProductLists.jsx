import React, { useState } from 'react'
import { patchFoods } from './api';


const ProductLists = ({ product, id, index, setFoodsData, foodsData }) => {


    const [editButton, setEditButton] = useState(true)
    const toggleEditButton = () => {
        setEditButton(!editButton)
    }


    // const setName = (event) => {
    //     const newName = event.target.value;
    //     setFoodsData(previousList => {
    //         let newList = Array.from(previousList);
    //         newList[id - 1].productsList[index].name = newName; 
    //         return newList;
    //     });

    // };


    const handleChangeInput = (event) => {
        const { name, value } = event.target
        setFoodsData(previousList => {
            let newList = Array.from(previousList);
            newList[id - 1].productsList[index][name] = value;
            return newList;
        });

    }


    return (
        <section key={index} className='flex  items-center justify-center gap-2 mt-[2rem] md:gap-8'>


            <div className='flex flex-col justify-between  items-center w-[90%] bg-[#B7C6FF] py-3 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)] sm:flex-row md:px-8'>


                {editButton ?
                    <p className='font-bold'>{product.name}</p>
                    : <input name='name' value={product.name} onChange={handleChangeInput} className='max-w-[4rem] bg-black text-white rounded-md shadow-md' ></input>}


                <div className='flex gap-4 items-center py-2 sm:py-0 md:gap-16 '>

                    {editButton ?
                        <p className='font-bold'>{product.quantity}</p>
                        : <input name='quantity' value={product.quantity} onChange={handleChangeInput} className='max-w-[4rem] bg-black text-white rounded-md shadow-md' ></input>}

                    {editButton ?
                        <p className='font-bold'>{product.price}</p>
                        : <input name='price' value={product.price} onChange={handleChangeInput} className='max-w-[4rem] bg-black text-white rounded-md shadow-md' ></input>}

                    {editButton ?
                        <button onClick={toggleEditButton} className='font-bold text-white bg-black uppercase text-sm border-2 p-1 border-white hover:scale-[1.2] hover:border-red-700 transition duration-500'>Edit</button>
                        : <button onClick={() => patchFoods(foodsData, id, setEditButton, editButton)} className='font-bold text-white bg-black uppercase text-sm border-2 p-1 border-white hover:scale-[1.2] hover:border-red-700 transition duration-500 '> save</button>}
                </div>
            </div>
        </section >
    )
}
export default ProductLists