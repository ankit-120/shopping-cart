import React, { useContext } from 'react'
import { CartContext } from './Context'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

const SingleProduct = ({ prod }) => {

    const { state, dispatch } = useContext(CartContext);

    function checkCart(){
        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].id === prod.id){
                return true;
            }
        }
    }
    
    return (
        <div className='col-12 main-div'>
            <div className='img-div'>
                <img className='img' src={prod.image} alt={prod.name} />
            </div>
            <div className='info-div'>
                <div className='fw-bold fs-6'>{prod.name}</div>
                <div className='fs-6'>{Math.ceil(prod.price)}</div>
                <div className='fs-6'>{prod.fastDelivery?'Fast Delivery':'4 day delivery'}</div>
                <div className='fs-6'>{
                    [...Array(5)].map((_,i)=>(
                        <span key={i+10}>
                            {
                                prod.ratings>i?<AiFillStar />:<AiOutlineStar />
                            }
                        </span>
                    ))
                }</div>
            </div>
            <div>
                {
                    checkCart() ? (    
                        <button className='m-3 p-2 px-3 btn btn-danger'
                        onClick={() => dispatch({
                            type: 'REMOVE',
                            payload: prod
                        })} >
                        Remove from cart
                    </button>
                    ) : (
                        <button className='m-3 p-2 px-3 btn btn-primary'
                            onClick={() =>dispatch({
                                type: 'ADD',
                                payload: prod
                            })}
                            disabled={prod.inStock===0?true:false}>
                                {prod.inStock===0?'Out of Stock':'Add Product'}
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default SingleProduct
