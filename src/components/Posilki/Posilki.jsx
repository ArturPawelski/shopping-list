import React, { useEffect, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import ProductLists from './ProductLists';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

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
                setFoodsData(result)
            })
            .catch(error => console.log('error', error));
    }, [refresh])


    const deleteFoodList = (id,) => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`http://localhost:3001/foods/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                toggleRefresh()
            })
            .catch(error => console.log('error', error));
    }


    const Navigate = useNavigate()
    const postDataToActualList = (id) => {
        // Usunięcie wszystkich pozostałych wpisów z listy czyli 1
        fetch(`http://localhost:3001/actualList/1`, { method: 'DELETE' })
            .then(response => {
                // Dodanie nowego wpisu do listy po usunięciu pozostałych
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "list": foodsData[id - 1].productsList
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                return fetch("http://localhost:3001/actualList", requestOptions);
            })
            .then(response => response.text())
            .then(result => {
                console.log(result)
                Navigate('/lista')
            })
            .catch(error => console.log('error', error));
    }


    return (
        <motion.div
            initial={{ opacity: 0, transition: { duration: 2 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className='w-full font-rob min-h-screen flex flex-col justify-center items-center mb-[8rem] '
        >




            {foodsData && foodsData.map(({ id, name, description, img, productsList }) => (


                <section key={id} className='flex flex-col justify-center  bg-white mx-auto mt-[8rem] py-4 px-2 shadow-md rounded-xl sm:px-0 sm:max-w-[600px] sm:min-w-[600px] md:min-w-[600px] md:max-w-[600px]  lg:max-w-[800px] lg:min-w-[800px] xl:min-w-[800px]'>




                    <main className=' flex items-center gap-4 justify-center'>

                        <div className='flex justify-center w-[40%]  ' >
                            <div className='max-w-[120px] grid place-items-center bg-slate-500   rounded-md'>
                                <img src={img} alt="" className='min-w-[100px] max-w-[100px] max-h-[100px] min-h-[100px] opacity-50 rounded-md ' />
                            </div>
                        </div>


                        <div className='w-[60%] flex flex-col justify-center items-center'>

                            <h2 className='font-extrabold text-[#050C69]'>{name}</h2>
                            <p className='text-left mt-2'>{description}</p>

                            <div className='flex items-center gap-2'>
                                <button onClick={() => toggleOpenProducts(id)} className='mt-4 hover:bg-black transition duration-500 flex flex-col items-center  text-white font-extrabold  py-2 bg-[#4A55AA] rounded-2xl sm:px-8 sm:flex-row sm:gap-4 '>ROZWIŃ LISTĘ PRODUKTÓW <BiCaretDown /></button>
                                <BsTrash size={30} className=' relative hover:scale-[1.3] transition-all duration-500 sm:top-2' onClick={() => deleteFoodList(id)} />
                            </div>

                        </div>

                    </main>




                    {openListId === id &&
                        <div>

                            <button onClick={() => postDataToActualList(id)} className='hover:bg-[#4A55AA] transition-all duration-500 mt-8 bg-black text-white block font-extrabold  px-2 py-2  rounded-xl mx-auto '>Dodaj listę do 'Chmury'</button>

                            {productsList && productsList.map((product, index) => (

                                <ProductLists
                                    key={index}

                                    product={product}
                                    id={id}
                                    index={index}
                                    setFoodsData={setFoodsData}
                                    foodsData={foodsData}

                                />

                            ))}

                        </div>}





                </section>
            ))}
        </motion.div >
    )
}

export default Posilki