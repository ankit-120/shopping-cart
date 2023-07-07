import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Context'

const Header = () => {

    const {cart} = useContext(CartContext);

    return (
        <div className='bg-dark p-3'>
            <div className="container text-white ">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-around ">
                        <Link className='text-decoration-none text-white' to={'/'}>Home</Link>
                        <Link className='text-decoration-none text-white' to={'/cart'}>Cart({cart.length})</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
