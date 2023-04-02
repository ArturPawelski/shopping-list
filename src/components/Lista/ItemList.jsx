import React, { useState } from 'react'
import TwojaLista from '../images/TWOJA.png'
import TwojaListaBox from './TwojaListaBox'
import { BsTrash } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const ItemList = ({ fullList, handleDelete, toggleComplete, allProducts, fullPrice, delateAllProducts }) => {

    const [openButton, setOpenButton] = useState(true)
    const toggleOpenButton = () => {
        setOpenButton(!openButton)
    }

    const [listName, setListName] = useState('')
    const [listDate, setListDate] = useState('')

    const nameTarget = (e) => {
        setListName(e.target.value)
    };
    const dateTarget = (e) => {
        setListDate(e.target.value)
    };



    const postDataToServer = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": listName,
            "date": listDate,
            "products": fullList

        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/list", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }




    return (

        <main className='mt-[8rem] font-rob'>

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
                    <button onClick={toggleOpenButton} className='bg-[#4A55AA] text-white font-extrabold px-2 py-4 text-center rounded-[25px] text-[1rem] tracking-[0.1rem] sm:text-[1.5rem] sm:tracking-[0.3rem] sm:px-4'>ZAPISZ LISTĘ</button>

                    <BsTrash size={35} onClick={delateAllProducts} />
                </section>




            </div>





            {!openButton &&

                <aside class="bg-black bg-opacity-80 fixed inset-0 flex justify-center items-center">

                    <section class="relative z-10 bg-white max-w-[400px] px-8 py-8 rounded-xl">

                        <GrClose onClick={toggleOpenButton} className='absolute right-5 top-5' size={20} />

                        <h2 class="text-center pt-8 font-extrabold">CZY CHCESZ ZAPISAĆ SWOJĄ LISTĘ?</h2>

                        <p class="mt-8 font-extralight">NAZWA LISTY:</p>
                        <input value={listName} onChange={nameTarget} class="bg-[#D9D9D9] bg-opacity-60 px-2 py-2 rounded-xl w-full" type="text" />

                        <p class="mt-4 font-extralight">DATA:</p>
                        <input value={listDate} onChange={dateTarget} class="bg-[#D9D9D9] bg-opacity-60 py-2 px-2 rounded-xl w-full" type="text" />

                        <button onClick={postDataToServer} class="block mt-8 mx-auto bg-black text-white py-2 px-8 rounded-xl font-extrabold hover:bg-blue-700">ZAPISZ</button>


                    </section>

                </aside>}








        </main>
    )
}

export default ItemList




