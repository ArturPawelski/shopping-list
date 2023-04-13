import React, { useEffect, useState } from 'react'
import Twoje from '../images/TWOJE.png'

import { BiCaretDown } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'

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
                console.log(result)
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
                console.log(result)
                toggleRefresh()

            })
            .catch(error => console.log('error', error));
    }




    return (
        <div className='w-full font-rob min-h-screen flex flex-col justify-center items-center mb-[8rem]  '>




            <main className='bg-[#B7C6FF] py-4 px-8 rounded-xl   min-h-[500px]  '>


                <img src={Twoje} alt="" className='mt-[2rem]   mx-auto' />


                {listData && listData.map(({ id, name, date, products }) => (


                    <div key={id} >

                        <div className='flex justify-center items-center mt-14 gap-2 '>


                            <section className='flex flex-col w-full justify-center items-center gap-2  bg-white py-2 px-4 rounded-xl sm:flex-row sm:justify-between sm:w-[80%]'>

                                <h2 className='uppercase font-extrabold'>{name}</h2>

                                <div className='flex flex-col gap-2 items-center sm:flex-row sm:gap-4'>
                                    <p className='font-extrabold'>{date}</p>
                                    <BiCaretDown size={25} onClick={() => toggleOpenProducts(id)} />
                                </div>

                            </section>


                            <BsTrash size={25} onClick={() => deleteList(id)} />
                        </div>



                        {openListId === id &&
                            <div>

                                {products && products.map(({ id, name, quantity, price }) => (
                                    <div key={id} className='flex justify-center items-center mt-4 gap-2 '>

                                        <section className='flex flex-col w-[50%] justify-center items-center gap-2 bg-white bg-opacity-40 py-1 px-4 rounded-xl sm:flex-row sm:justify-between sm:w-[65%]'>

                                            <h2 className='uppercase font-extrabold'>{name}</h2>

                                            <div className='flex  gap-4 items-center sm:flex-row sm:gap-8'>
                                                <p>{quantity}</p>
                                                <p className='font-extrabold'>{price}</p>
                                            </div>

                                        </section>

                                    </div>))}

                            </div>
                        }
                    </div>))
                }
            </main >




        </div >
    )
}

export default TwojeListy