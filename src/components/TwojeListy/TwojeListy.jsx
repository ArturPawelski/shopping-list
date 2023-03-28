import React from 'react'
import Twoje from '../images/TWOJE.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BiCaretDown } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'

const TwojeListy = () => {
    return (
        <div className='w-full font-rob min-h-screen flex flex-col justify-center items-center  '>




            <main className='bg-[#B7C6FF] px-8 rounded-xl   min-h-[500px] min-w-[800px] '>


                <img src={Twoje} alt="" className='mt-[2rem] max-w-[500px] mx-auto' />


                <div className='flex justify-center items-center mt-8 '>
                    <AiOutlineHeart size={25} />

                    <section className='flex justify-between w-[80%] bg-white py-2 px-4 rounded-xl'>
                        <h2>nazwa listy</h2>

                        <div className='flex'>

                            <p>01.01.2022</p>
                            <BiCaretDown />
                        </div>

                    </section>

                    <BsTrash />

                </div>




            </main>







        </div>
    )
}

export default TwojeListy