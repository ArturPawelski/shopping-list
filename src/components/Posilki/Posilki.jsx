import React, { useEffect, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'


const Posilki = () => {


    const [refresh, setRefresh] = useState(false);
    const toggleRefresh = () => {
        setRefresh(!refresh)
    }


    const [openListId, setOpenListId] = useState(null);
    const toggleOpenProducts = (id) => {
        setOpenListId(openListId === id ? null : id);
    };


    const [foodsData, setFoodsData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/foods")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setFoodsData(result)

            })
            .catch(error => console.log('error', error));
    }, [refresh])






    return (
        <div className='w-full font-rob min-h-screen flex flex-col justify-center items-center mb-[8rem] '>






            {foodsData && foodsData.map(({ id, name, description, img, productsList }) => (


                <section key={id} className='flex flex-col justify-center  bg-white mx-auto mt-[8rem] py-4 px-2 shadow-md rounded-xl sm:px-0 sm:max-w-[600px] md:min-w-[600px]  lg:max-w-[800px] xl:min-w-[800px]'>

                    <main className=' flex items-center gap-4 justify-center'>

                        <div className='flex justify-center w-[40%] ' >


                            <div className='w-[120px] grid place-items-center bg-slate-500  h-[120px] rounded-md'>
                                <img src={img} alt="" className='w-full h-[100%] opacity-50 rounded-md ' />
                            </div>
                        </div>


                        <div className='w-[60%] flex flex-col justify-center items-center'>
                            <h2 className='font-extrabold text-[#050C69]'>{name}</h2>
                            <p className='text-left mt-2'>{description}</p>

                            <div className='flex items-center gap-2'>
                                <button onClick={() => toggleOpenProducts(id)} className='mt-4 flex flex-col items-center  text-white font-extrabold  py-2 bg-[#4A55AA] rounded-2xl sm:px-8 sm:flex-row sm:gap-4 '>ROZWIŃ LISTĘ PRODUKTÓW <BiCaretDown /></button>
                                <BsTrash size={30} className=' relative sm:top-2' />
                            </div>
                        </div>

                    </main>


                    {openListId === id &&
                        <div>
                            <button className='mt-8 bg-black text-white block font-extrabold max-w-[10rem] px-2 py-2  rounded-xl mx-auto '>Dodaj do koszyka</button>


                            {productsList && productsList.map(({ nazwa, ilosc, cena }) => (
                                <>

                                    <section className='flex  items-center justify-center gap-2 mt-[2rem] md:gap-8'>

                                        <div className='flex flex-col justify-between  items-center w-[90%] bg-[#B7C6FF] py-3 px-4 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)] sm:flex-row md:px-8'>
                                            <p className='font-bold'>{nazwa}</p>

                                            <div className='flex gap-4 items-center py-2 sm:py-0 md:gap-16 '>
                                                <p className='font-bold'>{ilosc}</p>
                                                <p className='font-bold'>{cena}</p>

                                                <div className='max-w-[1rem] '  >
                                                </div>
                                            </div>
                                        </div>
                                    </section>



                                </>
                            ))}
                        </div>}





                </section>
            ))}















        </div >
    )
}

export default Posilki