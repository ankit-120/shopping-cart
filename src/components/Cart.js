import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './Context'
import './Cart.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai'


const Cart = () => {

    const { state, dispatch } = useContext(CartContext);
    console.log(state.cart)

    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice(state.cart.reduce((acc, prod) => acc + Math.ceil(prod.price) * prod.qty, 0));
    }, [state])

    const fun = () => { }

    return (
        <div>
            <div className="container-fluid main-cart-div">
                <div className="row">
                    <div className='col-sm-9 left-cart-div'>
                        <ListGroup>
                            {
                                state.cart.map((prod) => (
                                    <ListGroup.Item>
                                        <div className="col-sm-10 offset-sm-1" key={prod.id}>
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <Image src={prod.image} alt='prod.name' fluid rounded />
                                                </div>
                                                <div className="col-sm-2">
                                                    <span>{prod.name}</span>
                                                </div>
                                                <div className="col-sm-2">
                                                    <span>₹{prod.price}</span>
                                                </div>
                                                <div className="col-sm-2">
                                                    <Rating rating={prod.ratings} onClick={fun} />
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className='form-control' value={prod.qty}
                                                        onChange={(e) => dispatch({
                                                            type: 'CHANGE_QUANTITY',
                                                            payload: {
                                                                id: prod.id,
                                                                qty: e.target.value
                                                            }
                                                        })}>
                                                        {
                                                            [...Array(prod.inStock)].map((_, i) => (
                                                                <option key={i}>
                                                                    {i + 1}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <span className='fs-2 text-danger'
                                                        onClick={(e) => (
                                                            dispatch({
                                                                type: 'REMOVE',
                                                                payload: prod
                                                            })
                                                        )}><AiFillDelete /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </div>
                    <div className="col-sm-3 right-cart-div p-sm-2 p-1">
                        <div className="right-cart bg-dark">
                            <div className='subtotal-div'>
                                Subtotal({state.cart.length}) items
                            </div>
                            <div className="price-div">
                                Total:₹{price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart