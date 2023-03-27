import React from 'react'

import Phone from '../images/illustration1.svg'
import Food from '../images/illustration2.svg'
import Phone3 from '../images/illustration3.svg'
import Phone4 from '../images/illustration4.svg'



const Home = () => {
    return (
        <div className='w-full font-rob '>



            <div className='flex  flex-col justify-center items-center min-h-[450px] max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row  md:bg-transparent md:max-w-[80%] md:mt-[4rem] '>

                <div className=' md:w-[50%] '>
                    <img src={Phone} alt="" className=' w-[30%]  sm:w-[28%] md:w-[40%] lg:left-12 2xl:w-[35%] mx-auto ' />
                </div>

                <div className=' md:w-[50%] '>

                    <h2 className=' text-center   text-white  font-bold text-2xl mt-4 md:text-left md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '>TWÓRZ SWOJE WŁASNE <br /> LISTY ZAKUPÓW </h2>
                    <p className='text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] '>i korzystaj z przykładowych list z <br /> “SKLEP LISTA” wszystko jest proste</p>

                </div>
            </div >



            <div className='flex flex-col  min-h-[450px] justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row-reverse md:bg-transparent md:max-w-[80%] md:mt-[8rem]'>

                <div className=' md:w-[50%]'>
                    <img src={Food} alt="" className=' w-[40%] sm:w-[37%] md:w-[70%] mx-auto md:mr-[20%] ' />
                </div>

                <div className=' md:w-[50%]  '>

                    <h2 className=' text-center   text-white font-lol font-bold text-2xl mt-4 md:text-left md:ml-[30%]  md:ml- md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '>KORZYSTAJ Z PODANYCH PRZEPISÓW</h2>
                    <p className='text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left md:ml-[30%] lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] '> i na ich podstawie <br /> dodawaj produkty do listy</p>

                </div>
            </div >



            <div className='flex flex-col  justify-center min-h-[450px] items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row  md:bg-transparent md:max-w-[80%] md:mt-[8rem] '>

                <div className='  md:w-[50%]  '>
                    <img src={Phone3} alt="" className=' w-[30%]  relative left-6 sm:w-[28%] md:w-[60%] md:left-16 lg:w-[45%] xl:left-24 mx-auto ' />
                </div>

                <div className=' md:w-[50%] xl:pr-40'>

                    <h2 className=' text-center   text-white font-lol font-bold text-2xl mt-4 md:text-left md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '> DODAWAJ WŁASNE PRZEPISY</h2>
                    <p className='text-center  text-white font-lol font-light text-[1rem] mt-4 md:text-left lg:text-2xl xl:mt-8 xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2rem] 2xl:leading-[2.8rem] '>  i zapisuj przydatne produkty <br />  niech tworzenie listy z zakupami już zawsze będzie proste!</p>

                </div>
            </div >




            <div className='flex   flex-col min-h-[450px] justify-center items-center max-w-[90%] mx-auto mt-[4rem] gap-4 shadow-2xl py-8 rounded-2xl px-4 bg-[#000B70] bg-opacity-60 md:flex-row-reverse md:bg-transparent md:max-w-[80%] md:mt-[8rem]'>

                <div className=' md:w-[50%]'>
                    <img src={Phone4} alt="" className=' w-[40%] relative left-6 sm:left-14 sm:w-[37%] md:w-[50%] md:left-0 md:bottom-[100%] mx-auto md:mr-[20%] ' />
                </div>

                <div className=' md:w-[50%] relative  '>

                    <h2 className=' text-center relative   text-white font-lol font-bold text-2xl mt-4 md:right-[30%] md:text-left md:ml-[30%]  md:ml- md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '>ZAPISZ SWOJE LISTY </h2>
                    <h2 className=' text-center relative   text-white font-lol font-bold text-2xl mt-4 md:right-[5%] md:text-left md:ml-[30%]  md:ml- md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '> I WRACAJ DO NICH </h2>
                    <h2 className=' text-center relative   text-white font-lol font-bold text-2xl  md:right-[-30%] mt-4 md:text-left md:ml-[30%]  md:ml- md:leading-[2.6rem] md:text-3xl lg:leading-[2.8rem] xl:text-4xl xl:leading-[3rem] 2xl:text-5xl 2xl:leading-[4rem] '>KIEDY TYLKO CHCESZ</h2>



                </div>
            </div >







        </div >
    )
}

export default Home