import React, { useState } from 'react';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';
export default function Shop() {
    const [addToCart, setAddToCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderedItems, setOrderedItems] = useState([]);
    function addItemHandler(count, price, id) {
        setAddToCart(prev => prev += count)
        setTotalPrice(prev => prev += price)
        setOrderedItems([...orderedItems, id])
    }
    function removeItemHandler(count, price, id) {
        const clickedItemIndex = orderedItems.indexOf(id)
        if (clickedItemIndex !== -1) {
            setAddToCart(prev => prev -= count)
            setTotalPrice(prev => prev -= price)
            orderedItems.splice(clickedItemIndex, 1)
        }
    }
    function clearCartHandler() {
        setAddToCart(0)
        setTotalPrice(0)
        orderedItems.length = 0

    }
    
    return (
        <div style={{ position: 'relative' }}>
            <ShopItems addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} />
            <ShoppingCart addToCart={addToCart} totalPrice={totalPrice} clearCartHandler={clearCartHandler} />
        </div>
    )
}
