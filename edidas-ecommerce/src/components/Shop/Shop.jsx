import React, { useEffect, useState } from 'react';
import { removeLocalStore } from '../../utilities/localStorage/localStorage';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';
export default function Shop() {
    const [orderedItems, setOrderedItems] = useState([]);

    console.log(orderedItems);

    // useEffect(()=>{
    //     if (typeof window !== 'undefined') {
    //         setOrderedItems(JSON.parse(localStorage.getItem('orderItems')))
    //     }

    // },[])

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         localStorage.setItem('orderItems', JSON.stringify(orderedItems))
    //     }
    // }, [orderedItems])



    function addItemHandler(item) {
        setOrderedItems([...orderedItems, item])
    }

    function removeItemHandler(item) {
        const clickedItemIndex = orderedItems.indexOf(item)
        if (clickedItemIndex !== -1) {
            orderedItems.splice(clickedItemIndex, 1)
            setOrderedItems([...orderedItems])
        }
    }
    function clearCartHandler() {
        setOrderedItems([])
        removeLocalStore('productKey')
    }

    return (
        <div style={{ position: 'relative' }}>
            <ShopItems addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} />
            <ShoppingCart orderedItems={orderedItems} clearCartHandler={clearCartHandler} />
        </div>
    )
}
