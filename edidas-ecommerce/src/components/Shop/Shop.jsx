import React, { useState } from 'react';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';
export default function Shop() {
    const [orderedItems, setOrderedItems] = useState([]);

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
    }

    return (
        <div style={{ position: 'relative' }}>
            <ShopItems addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} />
            <ShoppingCart orderedItems={orderedItems} clearCartHandler={clearCartHandler} />
        </div>
    )
}
