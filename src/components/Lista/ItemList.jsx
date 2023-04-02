import React from 'react'
import TwojaLista from '../images/TWOJA.png'
import TwojaListaBox from './TwojaListaBox'
import { BsTrash } from 'react-icons/bs'

const ItemList = ({ fullList, handleDelete, toggleComplete, allProducts, fullPrice, delateAllProducts }) => {
    return (

        <main className='mt-[8rem]'>

            <img src={TwojaLista} alt="/" className='mx-auto w-auto px-8 md:max-w-[550px]' />




            <div className='mt-[2rem] bg-white w-[90%] mx-auto rounded-2xl py-8 px-4 md:w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[50%]'>


                <div className='text-right pr-3'>
                    <button className='text-white bg-black px-4 py-2 tracking-[0.2rem] rounded-3xl  '>Filtruj</button>
                </div>

                <div>

                    {fullList.map((product, index) => (
                        <TwojaListaBox
                            product={product}
                            index={index}
                            handleDelete={handleDelete}
                            toggleComplete={toggleComplete}
                        />
                    ))}

                </div>





                <section className='flex flex-col text-center justify-center gap-[2rem] mt-16 sm:flex-row sm:gap-[4rem]  '>
                    <div className=''>
                        <p className='font-extrabold '>ILOŚĆ PRODUKTÓW:</p>
                        <input className='bg-[#B7C6FF] rounded-2xl font-bold text-center py-2 shadow-[inset_10px_12px_8px_rgba(0,0,0,0.25)]  ' type="text" value={allProducts} readonly='' />
                    </div>

                    <div>
                        <p className='font-extrabold '>CENA:</p>
                        <input className='bg-[#B7C6FF] rounded-2xl font-bold py-2 text-center   shadow-[inset_10px_12px_8px_rgba(0,0,0,0.25)] ' type="text" value={fullPrice} readonly="" />
                    </div>
                </section>



                <section className=' relative flex items-center justify-center mt-[4rem] gap-[0.5rem] left-[1.8rem] sm:gap-[2rem] '>
                    <button className='bg-[#4A55AA] text-white font-extrabold px-2 py-4 text-center rounded-[25px] text-[1rem] tracking-[0.1rem] sm:text-[1.5rem] sm:tracking-[0.3rem] sm:px-4'>ZAPISZ LISTĘ</button>

                    <BsTrash size={35} onClick={delateAllProducts} />
                </section>




            </div>

            <section className=''>
                <div>
                    <h2>CZY CHCESZ ZAPISAĆ SWOJĄ LISTĘ?</h2>

                    <p>NAZWA LISTY:</p>
                    <input type="text" />

                    <p>DATA:</p>
                    <input type="text" />

                    <button>ZAPISZ</button>
                </div>


            </section>


        </main>
    )
}

export default ItemList