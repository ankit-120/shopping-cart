import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartContext } from './Context';
import './Filter.css';


const Filter = ({prod}) => {

    const {filterState : {byStock,byFastDelivery,byRating,searchQuerry,sort},filterDispatch} = useContext(CartContext);
    console.log(byStock,byFastDelivery,byRating,searchQuerry,sort);
    return (
        <>
            <div className=' filter-head-div'>Filter Products</div>
            <div className='filter-types-div'>
                <Form.Check
                    type='radio'
                    name='sort'
                    label='Ascending'
                    onChange={()=>filterDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: 'lowToHigh'
                    })}
                    checked={sort==='lowToHigh'?true:false}
                />
            </div>
            <div className='filter-types-div'>
                <Form.Check
                    type='radio'
                    name='sort'
                    label='Descending'
                    onChange={()=>filterDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: 'highToLow'
                    })}
                    checked={sort==='highToLow'?true:false}
                />
            </div>
            <div className='filter-types-div'>
                <Form.Check
                    type='checkbox'
                    name='byStock'
                    label='Include out of stock'
                    onChange={()=>filterDispatch({
                        type: 'FILTER_BY_STOCK'
                    })}
                    checked={byStock}
                />
            </div>
            <div className='filter-types-div'>
                <Form.Check
                    type='checkbox'
                    name='fastDelivery'
                    label='Fast Delivery Only'
                    onChange={()=>filterDispatch({
                        type: 'FILTER_BY_DELIVERY'
                    })}
                    checked={byFastDelivery}
                />
            </div>
            <div className='filter-types-div'>
                <Rating 
                onClick={(i) => filterDispatch({
                    type: 'FILTER_BY_RATING',
                    payload : i
                })} 
                rating={byRating} />
            </div>
            <button className='btn btn-secondary'
            onClick={()=>filterDispatch({
                type: 'CLEAR_FILTER'
            })}>CLEAR FILTER</button>
        </>
    )
}

export default Filter
