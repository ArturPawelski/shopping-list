import React from 'react'

import Phone from '../images/illustration1.svg'
import Food from '../images/illustration2.svg'
import Phone3 from '../images/illustration3.svg'
import Phone4 from '../images/illustration4.svg'



const Home = () => {
    return (
        <div className='w-full font-lol'>




            <div className='flex flex-col justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60'>

                <img src={Phone} alt="" className=' w-[30%]   ' />

                <div className=''>

                    <h2 className=' text-center text-white font-lol font-bold text-2xl mt-4 '>TWÓRZ SWOJE WŁASNE <br /> LISTY ZAKUPÓW </h2>
                    <p className='text-center text-white font-lol font-light text-[1rem] mt-4'>i korzystaj z przykładowych list z <br /> “SKLEP LISTA” wszystko jest proste</p>

                </div>
            </div>


            <div className='flex flex-col justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60'>

                <img src={Food} alt="" className=' w-[40%]   ' />

                <div className=''>

                    <h2 className=' text-center text-white font-lol font-bold text-2xl mt-4 '>TWÓRZ SWOJE WŁASNE <br /> LISTY ZAKUPÓW </h2>
                    <p className='text-center text-white font-lol font-light text-[1rem] mt-4'>i korzystaj z przykładowych list z <br /> “SKLEP LISTA” wszystko jest proste</p>

                </div>
            </div>


            <div className='flex flex-col justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60'>

                <img src={Phone3} alt="" className=' w-[40%] relative left-3  ' />

                <div className=''>

                    <h2 className=' text-center text-white font-lol font-bold text-2xl mt-4 '>TWÓRZ SWOJE WŁASNE <br /> LISTY ZAKUPÓW </h2>
                    <p className='text-center text-white font-lol font-light text-[1rem] mt-4'>i korzystaj z przykładowych list z <br /> “SKLEP LISTA” wszystko jest proste</p>

                </div>
            </div>


            <div className='flex flex-col justify-center items-center max-w-[90%] mx-auto mt-[4rem] mb-[4rem] gap-4 shadow-2xl py-8 rounded-xl px-4 bg-[#000B70] bg-opacity-60'>

                <img src={Phone4} alt="" className=' w-[40%] relative left-5   ' />

                <div className=''>

                    <h2 className=' text-center text-white font-lol font-bold text-2xl mt-4 '>TWÓRZ SWOJE WŁASNE <br /> LISTY ZAKUPÓW </h2>
                    <p className='text-center text-white font-lol font-light text-[1rem] mt-4'>i korzystaj z przykładowych list z <br /> “SKLEP LISTA” wszystko jest proste</p>

                </div>
            </div>




        </div>
    )
}

export default Home