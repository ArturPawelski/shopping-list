import React from 'react'
import { BiCaretDown } from 'react-icons/bi'

const Lista = () => {
    return (
        <div className='w-full font-lol'>

            <button className='w-[85%] shadow-[6px_4px_8px_rgba(0,0,0,0.50)] gap-4 flex justify-center items-center font-extrabold mx-auto mt-[6rem] py-2 px-8 bg-white rounded-xl sm:max-w-[500px]   '>WYBIERZ PRODUKTY Z PODANYCH <BiCaretDown size={25} className='' /> </button>




            <div className=' w-full  mt-[6rem] flex flex-col bg-[#32388F] bg-opacity-90 py-8   '>

                <div className='flex flex-col '>

                    <input className='py-3 px-4 max-w-[16rem] rounded-lg block mx-auto shadow-[6px_4px_8px_rgba(0,0,0,0.35)]  ' type="text" placeholder='mleko...' />

                    <div className='flex justify-center gap-[4rem]'>
                        <input className='py-3 px-4 max-w-[4rem] text-center  rounded-lg   mt-8 shadow-[6px_4px_8px_rgba(0,0,0,0.35)]  ' type="number" placeholder='2' />
                        <input className='py-3 px-4 max-w-[6rem] text-left rounded-lg   mt-8 shadow-[6px_4px_8px_rgba(0,0,0,0.35)]  ' type="number" placeholder='3.59' />
                    </div>

                </div>
                <button className=' mt-[2rem] max-w-[400px] mx-auto bg-white shadow-[6px_4px_8px_rgba(0,0,0,0.50)] font-extrabold py-2 px-8 rounded-xl  '>DODAJ PRODUKT DO LISTY</button>


            </div>



        </div >
    )
}

export default Lista