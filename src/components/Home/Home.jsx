import React from 'react'

import Phone from '../images/illustration1.svg'
import Food from '../images/illustration2.svg'
import Phone3 from '../images/illustration3.svg'
import Phone4 from '../images/illustration4.svg'



const Home = () => {
    return (
        <div className='w-full font-lol'>



            <div className='flex flex-col justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row  md:bg-transparent md:max-w-[80%] md:mt-[4rem] '>

                <div className=' md:w-[50%]'>
                    <img src={Phone} alt="" className=' w-[30%] sm:w-[28%] md:w-[40%] mx-auto ' />
                </div>

                <div className=' md:w-[50%] '>

                    <h2 className=' text-center   text-white font-lol font-bold text-2xl mt-4 md:text-left md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '>TWÓRZ SWOJE WŁASNE <br /> LISTY ZAKUPÓW </h2>
                    <p className='text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] '>i korzystaj z przykładowych list z <br /> “SKLEP LISTA” wszystko jest proste</p>

                </div>
            </div >



            <div className='flex flex-col justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row-reverse md:bg-transparent md:max-w-[80%] md:mt-[8rem]'>

                <div className=' md:w-[50%]'>
                    <img src={Food} alt="" className=' w-[40%] sm:w-[37%] md:w-[70%] mx-auto ' />
                </div>

                <div className=' md:w-[50%] '>

                    <h2 className=' text-center   text-white font-lol font-bold text-2xl mt-4 md:text-center md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '>KORZYSTAJ Z PODANYCH PRZEPISÓW</h2>
                    <p className='text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-center lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] '> i na ich podstawie <br /> dodawaj produkty do listy</p>

                </div>
            </div >






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




        </div >
    )
}

export default Home