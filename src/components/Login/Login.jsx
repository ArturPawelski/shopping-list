import React from 'react'
import BgLogin from '../images/signup-bg.png'
const Login = () => {
    return (
        <div className='w-full font-rob min-h-screen flex flex-col justify-center items-center bg-black '>




            <div className='flex gap-[4rem]'>

                <main className='bg-white min-w-[400px] min-h-[600px] relative px-8 py-8 overflow-hidden  '>
                    <img src={BgLogin} alt="" className=' absolute  top-[-30%]   left-[0%] ' />


                    <section className=' '>


                        <p className=''>email</p>


                        <input type="text" className='bg-[#D9D9D9] w-full' />
                    </section>

                </main>



            </div>


        </div >
    )
}

export default Login