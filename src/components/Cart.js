import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './Context'
import SingleProduct from './SingleProduct';

const Cart = () => {

    const { state } = useContext(CartContext);
    console.log(state.cart)

    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice(state.cart.reduce((acc, prod) => acc + Math.ceil(prod.price), 0));
    }, [state])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-12 mt-3 fw-bold '>
                        Total Price : {price}
                    </div>
                </div>
                <div className="row">
                    {
                        state.cart.map((prod) => (
                            <div className="col-lg-3 col-md-4 " key={prod.id}>
                                <SingleProduct prod={prod} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart