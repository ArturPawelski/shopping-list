import React, { useState } from 'react'
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi'
import { motion, AnimatePresence } from "framer-motion"
import { loadListFromServer } from './api'

const ItemListFiltr = ({ setFullList, fullList }) => {

    const [filter, setFilter] = useState(false)
    const toggleFilter = () => {
        setFilter(!filter)
    }

    const sortFullListByLowestPrice = () => {
        const newList = [...fullList].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        setFullList(newList)
    }

    const sortFullListByHighestPrice = () => {
        const newList = [...fullList].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        setFullList(newList)
    }

    const sortFullListByHighestQuantity = () => {
        const newList = [...fullList].sort((a, b) => parseFloat(b.quantity) - parseFloat(a.quantity))
        setFullList(newList)
    }

    const sortFullListByLowestQuantity = () => {
        const newList = [...fullList].sort((a, b) => parseFloat(a.quantity) - parseFloat(b.quantity))
        setFullList(newList)
    }

    return (

        <div className='flex flex-col-reverse gap-8 sm:flex-row sm:justify-between mx-[2rem] '>

            <button onClick={() => loadListFromServer(setFullList)} className='bg-[#4A55AA] transition duration-500 hover:bg-black text-white font-extrabold px-6 py-2 rounded-3xl text-center '>Wczytaj dane z chmury</button>

            <div>
                <button onClick={toggleFilter} className='text-white bg-black flex items-center px-4 py-2 tracking-[0.2rem] rounded-3xl hover:bg-[#4A55AA] transition duration-500 hover:scale-[1.1]'>Filtruj <HiArrowSmDown size={20} />  </button>

                <AnimatePresence>

                    {filter && <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.2 }}

                        className='bg-black text-white font-extralight mt-1 px-5 py-4 rounded-2xl absolute  transition={{ duration: 0.5 }} '
                    >
                        <ul>
                            <li onClick={sortFullListByLowestPrice} className='hover:text-red-500 cursor-pointer'>Cena - rosnąco</li>
                            <li onClick={sortFullListByHighestPrice} className='mt-2 hover:text-red-500 cursor-pointer'>Cena - malejąco</li>
                            <li onClick={sortFullListByLowestQuantity} className='mt-2 hover:text-red-500 cursor-pointer'>Ilość - rosnąco</li>
                            <li onClick={sortFullListByHighestQuantity} className='mt-2 hover:text-red-500 cursor-pointer'>Ilość - malejąco</li>
                        </ul>
                    </motion.div>}
                </AnimatePresence>

            </div>
        </div >
    )
}
export default ItemListFiltr