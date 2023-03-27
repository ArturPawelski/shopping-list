import React from 'react'
import { BsTrash } from 'react-icons/bs'

import { BsCircle } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const TwojaListaBox = ({ product, index, handleDelete, toggleComplete }) => {


    return (

        <section key={index} className='flex items-center justify-center gap-2 mt-[2rem] md:gap-8'>

            <BsTrash size={25} onClick={() => handleDelete(index)} />

            <div className='flex flex-col justify-between items-center w-[90%] bg-[#B7C6FF] py-3 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)] sm:flex-row md:px-8'>
                <p className='font-bold'>{product.nazwa}</p>

                <div className='flex gap-4 items-center py-2 sm:py-0 md:gap-16 '>
                    <p className='font-bold'>{product.ilosc}</p>
                    <p className='font-bold'>{product.cena}</p>

                    <div className='max-w-[1rem] ' onClick={() => toggleComplete(index)} >
                        {product.status ? <BsCircle size={25} /> : <AiOutlineCheckCircle size={25} />}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default TwojaListaBox