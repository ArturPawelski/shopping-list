import React, { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import TwojaLista from '../images/TWOJA.png'
import TwojaListaBox from './TwojaListaBox'
import ItemListFiltr from './ItemListFiltr'

const ItemList = ({ fullList, setFullList, handleDelete, toggleComplete, allProducts, fullPrice, delateAllProducts, loadListFromServer }) => {


    const [openButton, setOpenButton] = useState(true)
    const toggleOpenButton = () => {
        setOpenButton(!openButton)
    }

    const [openFoods, setOpenFoods] = useState(true)
    const toggleOpenFoods = () => {
        setOpenFoods(!openFoods)
        setOpenButton(true)
    }

    const [openList, setOpenList] = useState(true)
    const toggleOpenList = () => {
        setOpenList(!openList)
        setOpenButton(true)
    }



    const [listName, setListName] = useState('')
    const [listDate, setListDate] = useState('')
    const [checkRouter, setCheckRouter] = useState(true)

    const nameTarget = (e) => {
        setListName(e.target.value)
    };

    const dateTarget = (e) => {
        setListDate(e.target.value)
    };

    useEffect(() => {
        if (listName.trim().length >= 3 && listDate.trim().length >= 3) {
            setCheckRouter(false);
        }
        else {
            setCheckRouter(true);
        }
    }, [listName, listDate]);



    const history = useNavigate()
    const postDataToList = () => {
        if (listName.trim().length >= 3 && listDate.trim().length >= 3) {

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
                .then(result => {
                    console.log(result);
                    history('/twojelisty'); // przekierowanie użytkownika do /twojelisty
                })
                .catch(error => console.log('error', error));
        }
    }



    const [foodsName, setFoodsName] = useState('')
    const [foodsDescription, setFoodsdescription] = useState('')
    const [foodsImg, setFoodsImg] = useState('')

    const foodsNameTarget = (e) => {
        setFoodsName(e.target.value)
    };

    const foodsDescriptionTarget = (e) => {
        setFoodsdescription(e.target.value)
    };
    const foodsImgTarget = (e) => {
        setFoodsImg(e.target.value)
    };


    const postDataToFoods = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": foodsName,
            "description": foodsDescription,
            "img": foodsImg,
            "productsList": fullList
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/foods", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                history('/posilki'); // przekierowanie użytkownika do /twojelisty
            })
            .catch(error => console.log('error', error));
    }


    return (
        <main className='mt-[6rem] font-rob'>


            <img src={TwojaLista} alt="/" className='mx-auto w-auto px-8 md:max-w-[550px]' />


            <div className='mt-[2rem] bg-white w-[90%] mx-auto rounded-2xl py-8 px-4 md:w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[50%]'>

                <ItemListFiltr
                    setFullList={setFullList}
                    fullList={fullList}

                />

                <div className='mt-8'>
                    {fullList.map((product, index) => (
                        <TwojaListaBox
                            product={product}
                            key={index}
                            index={index}
                            handleDelete={handleDelete}
                            toggleComplete={toggleComplete}
                            setFullList={setFullList}
                        />
                    ))}
                </div>


                <section className='flex flex-col text-center justify-center gap-[2rem] mt-16 sm:flex-row sm:gap-[4rem]  '>
                    <div className=''>
                        <p className='font-extrabold '>ILOŚĆ PRODUKTÓW:</p>
                        <input className='bg-[#B7C6FF] rounded-2xl font-bold text-center py-2 shadow-[inset_10px_12px_8px_rgba(0,0,0,0.25)]  ' type="text" value={allProducts} readOnly={true} />
                    </div>

                    <div>
                        <p className='font-extrabold '>CENA:</p>
                        <input className='bg-[#B7C6FF] rounded-2xl font-bold py-2 text-center   shadow-[inset_10px_12px_8px_rgba(0,0,0,0.25)] ' type="text" value={fullPrice} readOnly={true} />
                    </div>
                </section>


                <section className=' relative flex items-center justify-center mt-[4rem] gap-[0.5rem] left-[1rem] sm:left-[1.8rem] sm:gap-[2rem] '>
                    <button onClick={toggleOpenButton} className='bg-[#4A55AA] transition duration-500 hover:bg-black text-white font-extrabold px-6 py-4 text-center rounded-[20px] text-[1rem] tracking-[0.1rem] sm:text-[1.5rem] sm:tracking-[0.3rem] sm:px-8'>ZAPISZ </button>

                    <BsTrash className='hover:scale-[1.5] transition duration-700' size={35} onClick={delateAllProducts} />
                </section>
            </div>




            <section >
                {!openButton && <aside className='bg-black bg-opacity-80 fixed inset-0 flex justify-center items-center'  >

                    <section className="relative w-full  z-10 bg-white sm:max-w-[400px] sm:px-16 py-8 rounded-xl">

                        <GrClose onClick={toggleOpenButton} className='absolute right-5 top-5' size={25} />

                        <h2 className="text-center pt-8 font-extrabold text-[1.8rem] tracking-wider">Zapisz jako?</h2>

                        <div className='flex gap-4  mt-8 justify-center sm:gap-12 '>
                            <button onClick={toggleOpenFoods} className='text-white min-w-[100px] bg-blue-800 py-2 px-4 rounded-2xl font-bold hover:bg-black'>POSIłEK</button>

                            <button onClick={toggleOpenList} className=' text-white min-w-[100px] bg-blue-800 px-4 rounded-2xl font-bold hover:bg-black'>LISTA</button>
                        </div>
                    </section>
                </aside>}
            </section>




            {
                !openFoods &&
                <aside className="bg-black bg-opacity-80 fixed inset-0 flex justify-center items-center">
                    <section className="relative z-10 bg-white max-w-[400px] px-8 py-8 rounded-xl">

                        <GrClose onClick={toggleOpenFoods} className='absolute right-5 top-5' size={25} />

                        <h2 className="text-center text-[1.3rem] pt-8 font-extrabold">CZY CHCESZ ZAPISAĆ SWÓJ POSIŁEK??</h2>


                        <h2 className="mt-8 font-extralight">NAZWA POSIŁKU:</h2>
                        <input value={foodsName} onChange={foodsNameTarget} className="bg-[#D9D9D9] bg-opacity-60 px-2 py-2 rounded-xl w-full" type="text" />

                        <h2 className="mt-4 font-extralight">OPIS:</h2>
                        <input value={foodsDescription} onChange={foodsDescriptionTarget} className="bg-[#D9D9D9] bg-opacity-60 py-2 px-2 rounded-xl w-full" type="text" />

                        <h2 className="mt-4 font-extralight">LINK DO ZDJĘCIA:</h2>
                        <input value={foodsImg} onChange={foodsImgTarget} class="bg-[#D9D9D9] bg-opacity-60 py-2 px-2 rounded-xl w-full" type="text" />


                        <button onClick={postDataToFoods} className="block mt-8 mx-auto bg-black text-white py-2 px-8 rounded-xl font-extrabold hover:bg-blue-700">
                            Zapisz </button>

                    </section>
                </aside>
            }




            {
                !openList &&
                <aside className="bg-black bg-opacity-80 fixed inset-0 flex justify-center items-center">
                    <section className="relative z-10 bg-white max-w-[400px] px-8 py-8 rounded-xl">

                        <GrClose onClick={toggleOpenList} className='absolute right-5 top-5' size={25} />

                        <h2 className="text-center pt-8 font-extrabold">CZY CHCESZ ZAPISAĆ SWOJĄ LISTĘ?</h2>

                        <h2 class="mt-8 font-extralight">NAZWA LISTY:</h2>
                        <input value={listName} onChange={nameTarget} className="bg-[#D9D9D9] bg-opacity-60 px-2 py-2 rounded-xl w-full" type="text" />

                        {checkRouter && <p className="font-bold text-[0.8rem] text-red-600 pt-1">Minimum 3 znaki!</p>}

                        <h2 className="mt-4 font-extralight">DATA:</h2>
                        <input value={listDate} onChange={dateTarget} class="bg-[#D9D9D9] bg-opacity-60 py-2 px-2 rounded-xl w-full" type="text" />

                        {checkRouter && <p className="font-bold text-[0.8rem] text-red-600 pt-1">Minimum 3 znaki!</p>}

                        <button onClick={postDataToList} className="block mt-8 mx-auto bg-black text-white py-2 px-8 rounded-xl font-extrabold hover:bg-blue-700">
                            Zapisz </button>

                    </section>
                </aside>
            }




        </main >
    )
}

export default ItemList




