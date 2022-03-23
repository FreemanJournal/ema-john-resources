import React, { useEffect, useState } from 'react';
import ShopItem from './ShopItem';

export default function ShopItems({ addItemHandler, removeItemHandler }) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        fetch('/fakeData/products.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

   

    return (
        <div className='  my-5 p-4' style={{ marginRight: "20rem" }}>
            <div className="" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1em' }}>
                {
                    data?.map((item,index) => <ShopItem key={index} item={item} addItemHandler={addItemHandler} removeItemHandler={removeItemHandler}/>)
                }
            </div>
        </div>
    )
}
