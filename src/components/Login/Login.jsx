import React from 'react'
import BgLogin from '../images/signup-bg.png'
const Login = () => {








    return (
        <div className='w-full  font-rob min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-60 '>








            <main className='bg-white min-w-[400px] min-h-[600px] relative px-8 py-8 overflow-hidden rounded-2xl shadow-2xl '>

                <img src={BgLogin} alt="" className=' absolute top-[-40%] z-[0]   left-[0%] ' />


                <section className=' '>

                    <h2 className='font-extrabold text-[1.6rem] text-center'>LOG IN</h2>

                    <div className='mt-[6rem] relative '>

                        <p className='font-bold text-[0.9rem]'>EMAIL:</p>
                        <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full ' />

                        <p className='font-bold text-[0.9rem] mt-4'>HASŁO:</p>

                        <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full' />

                        <div className='flex justify-between mt-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='min-w-[1rem] min-h-[1rem] rounded-md bg-blue-200'></div>
                                <p>Zapamiętaj mnie</p>
                            </div>

                            <p>Zapomniałeś hasła?</p>
                        </div>

                        <button className='bg-black mt-12 text-white font-extrabold py-1 px-12 block mx-auto rounded-xl text-[1.4rem] '>LOG IN</button>
                        <p className='mt-12 text-center'> Nie masz jeszcze konta? <span className='font-bold underline underline-offset-2'>SIGN UP</span></p>

                    </div>
                </section>
            </main>






            <main className='bg-white min-w-[400px] min-h-[600px] relative px-8 py-8 overflow-hidden rounded-2xl shadow-2xl '>

                <img src={BgLogin} alt="" className=' absolute top-[-40%] z-[0]   left-[0%] ' />


                <section className=' '>

                    <h2 className='font-extrabold text-[1.6rem] text-center'>LOG IN</h2>

                    <div className='mt-[6rem] relative '>

                        <p className='font-bold text-[0.9rem]'>EMAIL:</p>
                        <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full ' />

                        <p className='font-bold text-[0.9rem] mt-4'>HASŁO:</p>

                        <input type="text" className='bg-[#D9D9D9] bg-opacity-60 py-2 rounded-xl w-full' />

                        <div className='flex justify-between mt-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='min-w-[1rem] min-h-[1rem] rounded-md bg-blue-200'></div>
                                <p>Zapamiętaj mnie</p>
                            </div>

                            <p>Zapomniałeś hasła?</p>
                        </div>

                        <button className='bg-black mt-12 text-white font-extrabold py-1 px-12 block mx-auto rounded-xl text-[1.4rem] '>LOG IN</button>
                        <p className='mt-12 text-center'> Nie masz jeszcze konta? <span className='font-bold underline underline-offset-2'>SIGN UP</span></p>

                    </div>
                </section>
            </main>






        </div >
    )
}

export default Login