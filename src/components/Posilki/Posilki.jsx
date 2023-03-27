import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import TwojaListaBox from '../Lista/TwojaListaBox'


const Posilki = () => {



    return (
        <div className='w-full font-rob min-h-screen flex flex-col justify-center items-center '>


            <section className='flex items-center gap-4 justify-center bg-white mx-auto mt-[8rem] py-4 px-2 rounded-xl sm:px-0 sm:max-w-[600px]  lg:max-w-[800px]'>

                <div className='flex justify-center w-[40%] ' >
                    <div className='w-[100px] bg-slate-500 h-[100px] rounded-md'></div>
                </div>


                <div className='w-[60%] flex flex-col justify-center items-center'>
                    <h2 className='font-extrabold text-[#050C69]'>POSIŁEK 1</h2>
                    <p className='text-left mt-2'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
                    <button className='mt-4 flex flex-col items-center  text-white font-extrabold px-2 py-2 bg-[#4A55AA] rounded-2xl sm:px-8 sm:flex-row sm:gap-4 '>ROZWIŃ LISTĘ PRODUKTÓW <BiCaretDown /></button>
                </div>


                {/* <section key={index} className='flex items-center justify-center gap-2 mt-[2rem] md:gap-8'>

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
                </section> */}

            </section>







        </div >
    )
}

export default Posilki