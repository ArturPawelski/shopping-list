import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import TwojaLista from '../images/TWOJA.png'
import { BsTrash } from 'react-icons/bs'

const Lista = () => {





    return (
        <div className='w-full font-lol'>





            <section className='xl:flex xl:items-center xl:justify-center xl:gap-[8rem] '>

                <button button className='w-[85%] shadow-[6px_4px_8px_rgba(0,0,0,0.50)] gap-4 flex justify-center items-center font-extrabold mx-auto mt-[6rem] py-2 px-8 bg-white rounded-xl sm:max-w-[500px] xl:mx-0 xl:max-w-[400px]  ' > WYBIERZ PRODUKTY Z PODANYCH < BiCaretDown size={25} className='' /> </button >


                <div className=' w-full  mt-[6rem] flex flex-col bg-[#32388F] bg-opacity-90 py-8 px-8 mx-auto md:max-w-[650px]  md:rounded-2xl xl:mx-0    '>

                    <div className='flex flex-col md:flex-row md:items-center md:justify-center md:mx-auto  md:gap-[8rem]'>

                        <div className='mx-auto grid '>

                            <p className='text-white font-bold mx-auto md:mx-0 '>WPISZ PRODUKT:</p>
                            <input className='py-4 px-4 max-w-[18rem] rounded-lg  mx-auto shadow-[6px_4px_8px_rgba(0,0,0,0.35)]  ' type="text" placeholder='mleko...' />
                        </div>

                        <div className='flex justify-center gap-[4rem] mt-[2rem] md:mt-0'>
                            <div >
                                <p className='text-white font-bold mx-auto'>ILOŚĆ:</p>
                                <input className='py-3 px-4 max-w-[4rem] text-center  rounded-lg  shadow-[6px_4px_8px_rgba(0,0,0,0.35)] md:mt-0  ' type="number" placeholder='2' />
                            </div>

                            <div  >
                                <p className='text-white font-bold mx-auto'>PODAJ CENĘ:</p>
                                <input className='py-3 px-4 max-w-[6.5rem] text-left rounded-lg    shadow-[6px_4px_8px_rgba(0,0,0,0.35)] md:mt-0  ' type="number" placeholder='3.59' />
                            </div>
                        </div>

                    </div>
                    <button className=' mt-[2rem] max-w-[400px] mx-auto bg-white shadow-[6px_4px_8px_rgba(0,0,0,0.50)] font-extrabold py-2 px-8 rounded-xl md:mt-[4rem]  '>DODAJ PRODUKT DO LISTY</button>
                </div>
            </section>






            <main className='mt-[8rem]'>


                <img src={TwojaLista} alt="/" className='mx-auto' />

                <div className='mt-[2rem] bg-white w-[90%] mx-auto rounded-2xl py-8 px-4 md:w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[50%]'>




                    <section className='flex items-center justify-center gap-4 mt-[2rem]'>
                        <BsTrash size={22} />
                        <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)]'>
                            <p className='font-bold'>MLEKO</p>

                            <div className='flex gap-12 items-center'>
                                <p className='font-bold'>2</p>
                                <p className='font-bold'>7.18</p>
                                <div className='bg-black max-w-[0.4rem] rounded-[100%] px-4'>x</div>
                            </div>
                        </div>
                    </section>

                    <section className='flex items-center justify-center gap-4 mt-[2rem]'>
                        <BsTrash size={22} />
                        <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)]'>
                            <p className='font-bold'>MLEKO</p>

                            <div className='flex gap-12 items-center'>
                                <p className='font-bold'>2</p>
                                <p className='font-bold'>7.18</p>
                                <div className='bg-black max-w-[0.4rem] rounded-[100%] px-4'>x</div>
                            </div>
                        </div>
                    </section>

                    <section className='flex items-center justify-center gap-4 mt-[2rem]'>
                        <BsTrash size={22} />
                        <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)]'>
                            <p className='font-bold'>MLEKO</p>

                            <div className='flex gap-12 items-center'>
                                <p className='font-bold'>2</p>
                                <p className='font-bold'>7.18</p>
                                <div className='bg-black max-w-[0.4rem] rounded-[100%] px-4'>x</div>
                            </div>
                        </div>
                    </section>

                    <section className='flex items-center justify-center gap-4 mt-[2rem]'>
                        <BsTrash size={22} />
                        <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)]'>
                            <p className='font-bold'>MLEKO</p>

                            <div className='flex gap-12 items-center'>
                                <p className='font-bold'>2</p>
                                <p className='font-bold'>7.18</p>
                                <div className='bg-black max-w-[0.4rem] rounded-[100%] px-4'>x</div>
                            </div>
                        </div>
                    </section>

                    <section className='flex items-center justify-center gap-4 mt-[2rem]'>
                        <BsTrash size={22} />
                        <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)]'>
                            <p className='font-bold'>MLEKO</p>

                            <div className='flex gap-12 items-center'>
                                <p className='font-bold'>2</p>
                                <p className='font-bold'>7.18</p>
                                <div className='bg-black max-w-[0.4rem] rounded-[100%] px-4'>x</div>
                            </div>
                        </div>
                    </section>

                    <section className='flex items-center justify-center gap-4 mt-[2rem]'>
                        <BsTrash size={22} />
                        <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)]'>
                            <p className='font-bold'>MLEKO</p>

                            <div className='flex gap-12 items-center'>
                                <p className='font-bold'>2</p>
                                <p className='font-bold'>7.18</p>
                                <div className='bg-black max-w-[0.4rem] rounded-[100%] px-4'>x</div>
                            </div>
                        </div>
                    </section>










                </div>



            </main>


        </div >
    )
}

export default Lista