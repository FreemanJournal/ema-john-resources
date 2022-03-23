import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import ReactStarsRating from 'react-awesome-stars-rating';

export default function ShopItem({ item, addItemHandler, removeItemHandler }) {
    const [count, setCount] = useState(0);
  

    const onChange = (value) => {
        // console.log(`React Stars Rating value is ${value}`);
    };
    function addItemToCart(price, id) {
        addItemHandler(1, price, id)
        setCount(prev => ++prev)
    }
    function removeItemFromCart(price, id) {
        removeItemHandler(1, price, id)
        setCount(prev => --prev)
    }

    const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping } = item
    return (
        <Card className="p-3" key={id}>
            <Card.Img variant="top" src={img} style={{ userSelect: "none" }} />
            <Card.Body style={{ userSelect: "none" }}>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item className='fw-bolder'>Price : $ {price}</ListGroup.Item>
                    <ListGroup.Item>Brand : {seller}</ListGroup.Item>
                    <ListGroup.Item>Rating : <ReactStarsRating onChange={onChange} value={ratings} /></ListGroup.Item>
                    <ListGroup.Item>Rating Count : {ratingsCount}</ListGroup.Item>
                </ListGroup>

           


            </Card.Body>
            <Button variant="warning" className='mb-3' onClick={() => addItemToCart(price, id)}>Add to cart</Button>

            <Button variant="danger" disabled={count === 0 ? true : false} onClick={() => removeItemFromCart(price, id)}>Remove from  cart</Button>
        </Card>
    )
}
