import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Context'
import './Header.css'
import { Dropdown, Badge } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const { state, filterDispatch, dispatch } = useContext(CartContext);

    return (
        <div className='bg-dark header'>
            <div className="container text-white ">
                <div className="row">
                    <div className="col-sm-2 col-6 div1 text-center">
                        <Link className='text-decoration-none text-white' to={'/'}>
                            <div className='home py-3'>Shopping Cart</div>
                        </Link>
                    </div>
                    <div className="col-sm-8 div2 text-center py-3">
                        {useLocation().pathname.split("/")[1] !== "cart" && (
                            <input type="text"
                                className='form-control'
                                placeholder="Search product"
                                onChange={(e) => filterDispatch({
                                    type: 'FILTER_BY_SEARCH',
                                    payload: e.target.value
                                })} />
                        )}
                    </div>
                    <div className="col-sm-2 col-6 div3 text-center ">
                        <Dropdown className='cart'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                <FaShoppingCart /><Badge bg='success'>{state.cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align='left' style={{ minWidth: 370 }}>
                                {
                                    state.cart.length !== 0 ? (
                                        state.cart.map((prod, i) => (
                                            <div className='d-flex justify-content-between align-content-center px-3 py-1' key={i + 20}>
                                                <div className=''>
                                                    <img className="img-dropdown"
                                                        src={prod.image}
                                                        alt={prod.name} />
                                                </div>
                                                <div className="info-dropdown d-flex flex-column justify-content-start ">
                                                    <span>{prod.name}</span>
                                                    <span>₹{prod.price}</span>
                                                </div>
                                                <div className="action-dropdown mx-2">
                                                    <span className='fs-5 text-danger' onClick={(e) => (
                                                        dispatch({
                                                            type: 'REMOVE',
                                                            payload: prod
                                                        })
                                                    )}><AiFillDelete /></span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className='text-center'>Cart is empty</div>
                                    )
                                }
                                <Link className='text-decoration-none text-white' to={'/cart'}>
                                    <button className='btn btn-primary'
                                        style={{
                                            width: "95%",
                                            margin: "0px 10px"
                                        }}>Go to Cart</button>
                                </Link>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
