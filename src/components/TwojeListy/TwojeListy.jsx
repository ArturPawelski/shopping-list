import React from 'react'
import Twoje from '../images/TWOJE.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BiCaretDown } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'

const TwojeListy = () => {
    return (
        <div className='w-full font-rob min-h-screen flex flex-col justify-center items-center  '>




            <main className='bg-[#B7C6FF] py-4 px-8 rounded-xl   min-h-[500px]  '>


                <img src={Twoje} alt="" className='mt-[2rem]   mx-auto' />


                <div className='flex justify-center items-center mt-8 gap-2 '>
                    <AiOutlineHeart size={25} />

                    <section className='flex flex-col w-full justify-center items-center gap-2  bg-white py-2 px-4 rounded-xl sm:flex-row sm:justify-between sm:w-[80%]'>
                        <h2 className='uppercase font-extrabold'>"nazwa listy"</h2>

                        <div className='flex flex-col gap-2 items-center sm:flex-row sm:gap-4'>

                            <p className='font-extrabold'>01.01.2022</p>
                            <BiCaretDown />
                        </div>

                    </section>

                    <BsTrash size={25} />

                </div>





            </main>







        </div>
    )
}

export default TwojeListy