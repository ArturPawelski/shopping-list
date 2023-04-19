import React, { useEffect, useState } from 'react'
import Twoje from '../images/TWOJE.png'
import { BiCaretDown } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import TwojeListyProducts from './TwojeListyProducts'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

const TwojeListy = () => {


    const [openListId, setOpenListId] = useState(null);
    const toggleOpenProducts = (id) => {
        setOpenListId(openListId === id ? null : id);
    };


    const [refresh, setRefresh] = useState(false);
    const toggleRefresh = () => {
        setRefresh(!refresh)
    }


    const [listData, setListData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/list")
            .then(response => response.json())
            .then(result => {

                setListData(result)
            })
            .catch(error => console.log('error', error));
    }, [refresh])


    const deleteList = (id,) => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`http://localhost:3001/list/${id}`, requestOptions)
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
                    "list": listData[id - 1].products
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
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}

            className='w-full font-rob min-h-screen flex flex-col justify-center items-center mb-[8rem]  '
        >
            <main className='bg-[#B7C6FF] py-4 px-8 rounded-xl   min-h-[500px]  '>

                <img src={Twoje} alt="" className='mt-[2rem]   mx-auto' />


                {listData && listData.map(({ id, name, date, products }) => (
                    <div key={id} >


                        <div className='flex justify-center items-center mt-10 gap-2 '>


                            <section className='flex flex-col w-full justify-center items-center gap-2  bg-white py-2 px-4 rounded-xl sm:flex-row sm:justify-between sm:w-[80%]'>

                                <h2 className='uppercase font-extrabold'>{name}</h2>

                                <div className='flex flex-col gap-2 items-center sm:flex-row sm:gap-4'>
                                    <p className='font-extrabold'>{date}</p>
                                    <BiCaretDown className='hover:scale-[1.8] hover:text-red-600 transition duration-500' size={25} onClick={() => toggleOpenProducts(id)} />
                                </div>

                            </section>


                            <BsTrash className='hover:scale-[1.5]  transition duration-500' size={25} onClick={() => deleteList(id)} />
                        </div>


                        {openListId === id &&
                            <div>
                                <button onClick={() => postDataToActualList(id)} className='hover:bg-[#4A55AA] ml-[10%] sm:ml-24 md:ml-28 transition-all duration-500 mt-4 mb-6 bg-black text-white block font-extrabold  px-2 py-2  rounded-xl '>Dodaj listę do 'Chmury'</button>
                                {products && products.map((product, index) => (

                                    <TwojeListyProducts
                                        key={index}

                                        product={product}
                                        id={id}
                                        index={index}
                                        listData={listData}
                                        setListData={setListData}

                                    />
                                ))}

                            </div>
                        }
                    </div>))
                }
            </main >
        </motion.div >
    )
}

export default TwojeListy