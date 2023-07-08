import React from 'react';
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';
import './Rating.css'

const Rating = ({onClick,rating}) => {
    return (
        <div>
            {
                [...Array(5)].map((_,i)=>(
                    <span onClick={()=>onClick(i+1)} key={i+1}>
                        {i<rating?<span className='star'><AiFillStar/></span>:<span className='star'><AiOutlineStar/></span>}
                    </span>
                ))
            }
        </div>
    )
}

export default Rating
