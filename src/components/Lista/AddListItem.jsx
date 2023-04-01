import React, { useEffect, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'

const AddListItem = ({ appendProductToList }) => {


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


    const [complete, setComplete] = useState(true)


    const addProductToList = () => {

        const cena = cenaProduktu * iloscProduktu

        const newProduct = {
            nazwa: nazwaProduktu,
            ilosc: iloscProduktu,
            cena: cena.toFixed(2),
            status: complete
        };

        appendProductToList(newProduct);
        setNazwaProduktu('');
        setIloscProduktu(``);
        setCenaProduktu(``);

    };


    return (
        <section>

            <button button className='w-[85%] shadow-[6px_4px_8px_rgba(0,0,0,0.50)] gap-4 flex justify-center items-center font-extrabold mx-auto mt-[6rem] py-2 px-8 bg-white rounded-xl sm:max-w-[500px] md:min-w-[650px]   ' > WYBIERZ PRODUKTY Z PODANYCH < BiCaretDown size={25} className='' /> </button >


            <article className=' w-full  mt-[6rem] flex flex-col bg-[#32388F] bg-opacity-90 py-8 px-8 mx-auto md:max-w-[650px]  md:rounded-2xl   '>

                <main className='flex flex-col md:flex-row md:items-center md:justify-center md:mx-auto  md:gap-[8rem]'>

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

                </main>

                <button className=' mt-[2rem] max-w-[400px] mx-auto bg-white shadow-[6px_4px_8px_rgba(0,0,0,0.50)] font-extrabold py-2 px-8 rounded-xl md:mt-[4rem]' onClick={addProductToList} >DODAJ PRODUKT DO LISTY</button>

            </article>

        </section>


    )
}

export default AddListItem