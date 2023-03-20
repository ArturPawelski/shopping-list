import React, { useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import TwojaLista from '../images/TWOJA.png'
import { BsTrash } from 'react-icons/bs'

const Lista = () => {


    const [nazwaProduktu, setNazwaProduktu] = useState('');
    const targetNazwaInput = (e) => {
        setNazwaProduktu(e.target.value)
    };


    const [iloscProduktu, setIloscProduktu] = useState();
    const targetIloscInput = (e) => {
        setIloscProduktu(e.target.value)
    };


    const [cenaProduktu, setCenaProduktu] = useState();
    const targetCenaInput = (e) => {
        setCenaProduktu(e.target.value)
    };


    const [fullList, setFullList] = useState([])


    const addProductToList = () => {
        const cena = cenaProduktu * iloscProduktu

        const newProduct = {
            nazwa: nazwaProduktu,
            ilosc: iloscProduktu,
            cena: cena.toFixed(2)
        };
        setFullList([...fullList, newProduct]);
        setNazwaProduktu('');
        setIloscProduktu(``);
        setCenaProduktu(``);
    };


    const handleDelete = (index) => {
        const newList = [...fullList];

        newList.splice(index, 1);

        setFullList(newList);
    };


    const [complete, setComplete] = useState(true)

    const toggleComplete = () => {
        setComplete(!complete)
    }


    return (
        <div className='w-full font-lol'>



            <section>

                <button button className='w-[85%] shadow-[6px_4px_8px_rgba(0,0,0,0.50)] gap-4 flex justify-center items-center font-extrabold mx-auto mt-[6rem] py-2 px-8 bg-white rounded-xl sm:max-w-[500px] md:min-w-[650px]   ' > WYBIERZ PRODUKTY Z PODANYCH < BiCaretDown size={25} className='' /> </button >


                <div className=' w-full  mt-[6rem] flex flex-col bg-[#32388F] bg-opacity-90 py-8 px-8 mx-auto md:max-w-[650px]  md:rounded-2xl   '>

                    <div className='flex flex-col md:flex-row md:items-center md:justify-center md:mx-auto  md:gap-[8rem]'>

                        <div className='mx-auto grid '>

                            <p className='text-white font-bold mx-auto md:mx-0 '>WPISZ PRODUKT:</p>
                            <input className='py-4 px-4 max-w-[18rem] rounded-lg  mx-auto shadow-[6px_4px_8px_rgba(0,0,0,0.35)]  ' type="text" placeholder='mleko...' value={nazwaProduktu} onChange={targetNazwaInput} />
                        </div>

                        <div className='flex justify-center gap-[4rem] mt-[2rem] md:mt-0'>
                            <div >
                                <p className='text-white font-bold mx-auto'>ILOŚĆ:</p>
                                <input className='py-3 px-4 max-w-[4rem] text-center  rounded-lg  shadow-[6px_4px_8px_rgba(0,0,0,0.35)] md:mt-0  ' type="number" placeholder='2' value={iloscProduktu} onChange={targetIloscInput} />
                            </div>

                            <div  >
                                <p className='text-white font-bold mx-auto'>PODAJ CENĘ:</p>
                                <input className='py-3 px-4 max-w-[6.5rem] text-left rounded-lg    shadow-[6px_4px_8px_rgba(0,0,0,0.35)] md:mt-0  ' type="number" placeholder='3.59' value={cenaProduktu} onChange={targetCenaInput} />
                            </div>
                        </div>

                    </div>
                    <button className=' mt-[2rem] max-w-[400px] mx-auto bg-white shadow-[6px_4px_8px_rgba(0,0,0,0.50)] font-extrabold py-2 px-8 rounded-xl md:mt-[4rem]' onClick={addProductToList} >DODAJ PRODUKT DO LISTY</button>
                </div>
            </section>






            <main className='mt-[8rem]'>


                <img src={TwojaLista} alt="/" className='mx-auto w-auto px-8 md:max-w-[550px]' />

                <div className='mt-[2rem] bg-white w-[90%] mx-auto rounded-2xl py-8 px-4 md:w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[50%]'>



                    <div>

                        {fullList.map((product, index) => (
                            <section key={index} className='flex items-center justify-center gap-2 mt-[2rem] md:gap-8'>

                                <BsTrash size={25} onClick={() => handleDelete(index)} />

                                <div className='flex justify-between items-center w-[90%] bg-[#B7C6FF] py-4 px-2 rounded-xl shadow-[0px_5px_4px_rgba(0,0,0,0.35)] md:px-8'>
                                    <p className='font-bold '>{product.nazwa}</p>

                                    <div className='flex gap-4 items-center md:gap-16'>
                                        <p className='font-bold'>{product.ilosc}</p>
                                        <p className='font-bold'>{product.cena}</p>
                                        <div className={complete ? 'bg-black  max-w-[0.3rem] min-h-[1.5rem] rounded-[100%] px-2 md:px-4' : 'bg-red-600   max-w-[0.3rem] min-h-[1.5rem] rounded-[100%] px-2 md:px-4'} onClick={toggleComplete} ></div>
                                    </div>
                                </div>
                            </section>
                        ))}


                    </div>








                </div>


            </main>


        </div >
    )
}
export default Lista
