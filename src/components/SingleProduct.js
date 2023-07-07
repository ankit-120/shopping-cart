import React, { useContext } from 'react'
import { CartContext } from './Context'

const SingleProduct = ({ prod }) => {

    const { cart, setCart } = useContext(CartContext);

    function checkCart(){
        for(let i=0;i<cart.length;i++){
            if(cart[i].id === prod.id){
                return true;
            }
        }
    }
    
    return (
        <div className='col-12 main-div'>
            <div className='img-div'>
                <img className='img' src={prod.image} alt={prod.name} />
            </div>
            <div>
                <div className='fw-bold fs-6'>{prod.name}</div>
                <div className='text-center fs-6 '>{Math.ceil(prod.price)}</div>
            </div>
            <div>
                {
                    checkCart() ? (    
                        <button className='m-3 p-2 px-3 rounded-3'
                        onClick={() => setCart(cart.filter((c)=>c.id !== prod.id))} >
                        Remove from cart
                    </button>
                    ) : (
                        <button className='m-3 p-2 px-3 rounded-3'
                            onClick={() =>setCart([...cart, prod]) }>
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default SingleProduct
