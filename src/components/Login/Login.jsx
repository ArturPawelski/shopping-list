import React, { useState } from 'react'
import BgLogin from '../images/signup-bg.png'
import { motion } from "framer-motion"

const Login = () => {


    const [changeLogIn, setChangeLogIn] = useState(true)


    const toggleChangeLogIn = () => {
        setChangeLogIn(!changeLogIn)

    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-full  font-rob min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-60 '
        >




            {changeLogIn ? <main className='bg-white min-w-[400px] min-h-[600px] relative px-8 py-8 overflow-hidden rounded-2xl shadow-2xl '>


                <img src={BgLogin} alt="" className=' absolute top-[-40%] z-[0]   left-[0%] ' />


                <section className=' '>

                    <h2 className='font-extrabold text-[1.6rem] text-center'>LOG IN</h2>

                    <div className='mt-[8rem] relative '>


                        <p className='font-bold text-[0.9rem]'>EMAIL:</p>
                        <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full ' />

                        <p className='font-bold text-[0.9rem] mt-4'>HASŁO:</p>
                        <input type="password" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full' />


                        <div className='flex justify-between mt-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='min-w-[1rem] min-h-[1rem] rounded-md bg-blue-200'></div>
                                <p>Zapamiętaj mnie</p>
                            </div>
                            <p>Zapomniałeś hasła?</p>
                        </div>


                        <button className='bg-black mt-12 text-white font-extrabold py-1 px-12 block mx-auto rounded-xl text-[1.4rem] '>LOG IN</button>

                        <p className='mt-12 text-center'> Nie masz jeszcze konta? <span onClick={toggleChangeLogIn} className='font-bold underline underline-offset-2'>SIGN UP</span></p>

                    </div>
                </section>
            </main>


                : <main className='bg-white min-w-[400px] min-h-[600px] relative px-8 py-8 overflow-hidden rounded-2xl shadow-2xl '>


                    <img src={BgLogin} alt="" className=' absolute top-[-40%] z-[0]   left-[0%] ' />


                    <section className=' '>

                        <h2 className='font-extrabold text-[1.6rem] text-center'>SIGN UP</h2>

                        <div className='mt-[4rem] relative '>

                            <p className='font-bold text-[0.9rem]'>EMAIL:</p>
                            <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full ' />

                            <p className='font-bold text-[0.9rem] mt-4'>IMIĘ LUB NAZWA:</p>
                            <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full' />

                            <p className='font-bold text-[0.9rem] mt-4'>HASŁO:</p>
                            <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full ' />

                            <p className='font-bold text-[0.9rem] mt-4'>POTWIERDŹ HASŁO :</p>
                            <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full' />


                            <button className='bg-black mt-12 text-white font-extrabold py-1 px-12 block mx-auto rounded-xl text-[1.4rem] '>SIGN UP</button>
                            <p className='mt-8 text-center'> Masz juz konto? <span onClick={toggleChangeLogIn} className='font-bold underline underline-offset-2'>LOG IN</span></p>

                        </div>
                    </section>
                </main>}




        </motion.div >
    )
}

export default Login