import React from 'react'
import { BsTrash } from 'react-icons/bs'

import { BsCircle } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const Twoja = ({ product, index, handleDelete, toggleComplete }) => {


    return (

        <section key={index} className='flex items-center justify-center gap-2 mt-[2rem] md:gap-8'>

            <BsTrash size={25} onClick={() => handleDelete(index)} />

            <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-2 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)] md:px-8'>
                <p className='font-bold '>{product.nazwa}</p>

                <div className='flex gap-4 items-center md:gap-16'>
                    <p className='font-bold'>{product.ilosc}</p>
                    <p className='font-bold'>{product.cena}</p>
                    <div className={product.status ? 'bg-black  max-w-[0.3rem] min-h-[1.5rem] rounded-[100%] px-2 md:px-4' : 'bg-red-600   max-w-[0.3rem] min-h-[1.5rem] rounded-[100%] px-2 md:px-4'} onClick={() => toggleComplete(index)} ></div>
                </div>
            </div>
        </section>

    )
}

export default Twoja