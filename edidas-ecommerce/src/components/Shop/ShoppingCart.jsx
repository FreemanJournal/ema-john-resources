
import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

export default function ShoppingCart({ addToCart, totalPrice, clearCartHandler }) {
    let TAX = (totalPrice * .2)
    const DELIVERY_CHARGE = totalPrice ? 100 : 0
    return (
        <div className="shoppingCart" >
            <Card className="p-3 h-100">
                <Card.Body>
                    <Card.Title>Shopping Cart</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='fw-bolder'>Selected Items :  {addToCart}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>Total Price : $ {totalPrice}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>Delivery Charge : $ {DELIVERY_CHARGE}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>Tax : $ {TAX.toFixed(0)}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>You have to pay : $ {(totalPrice +  DELIVERY_CHARGE  + TAX).toFixed(0)}</ListGroup.Item>

                    </ListGroup>


                </Card.Body>
                <Button variant="warning" className='mb-3' onClick={clearCartHandler}>Clear cart</Button>
                <Button variant="success" >Order review</Button>
            </Card>
        </div>
    )
}
