import React, { useState, useEffect } from 'react'

import AddListItem from './AddListItem'
import ItemList from './ItemList'



const Lista = () => {


    const toggleComplete = (index) => {
        const newList = [...fullList];
        newList[index].status = !newList[index].status;
        setFullList(newList);
    }


    const [fullList, setFullList] = useState([])

    const appendProductToList = (newProduct) => {
        setFullList([...fullList, newProduct]);
    }




    const handleDelete = (index) => {
        const newList = [...fullList];
        newList.splice(index, 1);
        setFullList(newList);
    };

    const delateAllProducts = () => {
        const emptyList = []
        setFullList(emptyList)
    }




    const [allProducts, setAllProducts] = useState(0)
    useEffect(() => {
        const newProduct = fullList.reduce((total, product) => total + Number(product.quantity), 0);
        setAllProducts(newProduct.toFixed(2));
    }, [fullList]);

    const [fullPrice, setFullPrice] = useState(0)
    useEffect(() => {
        const newPrice = fullList.reduce((total, product) => total + Number(product.price), 0);
        setFullPrice(newPrice.toFixed(2))
    }, [fullList])




    const loadListFromServer = () => {
        fetch('http://localhost:3001/actualList')
            .then(response => response.json())
            .then(data => {
                // Przetwórz dane tak, aby pasowały do formatu twojej aplikacji
                const newList = data[0].list.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price,
                    status: item.status
                }));

                // Zaktualizuj stan fullList, aby odzwierciedlić pobrane dane
                setFullList(newList);
            })
            .catch(error => console.log('error', error));
    };


    return (
        <div className='w-full font-rob mb-[8rem]'>

            <AddListItem
                appendProductToList={appendProductToList}
            />

            <ItemList
                fullList={fullList}
                handleDelete={handleDelete}
                toggleComplete={toggleComplete}
                allProducts={allProducts}
                fullPrice={fullPrice}
                delateAllProducts={delateAllProducts}
                setFullList={setFullList}
                loadListFromServer={loadListFromServer}
            />
        </div >
    )
}
export default Lista













