import React, { useState } from 'react'
import { patchList } from './api';


const TwojeListyProducts = ({ product, id, index, listData, setListData }) => {


    const [editButton, setEditButton] = useState(true)
    const toggleEditButton = () => {
        setEditButton(!editButton)
    }


    const handleChangeInput = (event) => {
        const { name, value } = event.target
        setListData(previousList => {
            let newList = Array.from(previousList)
            newList[id - 1].products[index][name] = value;
            return newList
        })
    }


    return (


        <div key={index} className='flex justify-center items-center mt-4 gap-2 '>

            <section className='flex flex-col w-[90%] justify-center items-center gap-2 bg-white bg-opacity-40 py-1 px-4 rounded-xl sm:flex-row sm:justify-between sm:w-[70%]'>


                {editButton ?
                    <h2 className='uppercase font-extrabold'>{product.name}</h2>
                    : <input name='name' value={product.name} onChange={handleChangeInput} className='max-w-[4rem] bg-black text-white rounded-md shadow-md' ></input>}


                <div className='flex  gap-4 items-center sm:flex-row sm:gap-8 md:gap-12'>

                    {editButton ?
                        <p>{product.quantity}</p>
                        : <input name='quantity' value={product.quantity} onChange={handleChangeInput} className='max-w-[2rem] bg-black text-white rounded-md shadow-md' ></input>}


                    {editButton ?
                        <p className='font-extrabold'>{product.price}</p>
                        : <input name='price' value={product.price} onChange={handleChangeInput} className='max-w-[4rem] bg-black text-white rounded-md shadow-md' ></input>}


                    {editButton ?
                        <button onClick={toggleEditButton} className='font-bold text-white bg-black uppercase text-sm border-2 p-1 border-white hover:scale-[1.2] hover:border-red-700 transition duration-500'>Edit</button>
                        : <button onClick={() => patchList(listData, id, setEditButton, editButton)} className='font-bold text-white bg-black uppercase text-sm border-2 p-1 border-white hover:scale-[1.2] hover:border-red-700 transition duration-500 '> save</button>}

                </div>
            </section>
        </div>)
}
export default TwojeListyProducts