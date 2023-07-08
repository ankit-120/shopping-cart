import React, { createContext, useReducer} from 'react'

const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
    }
    if(action.type === 'REMOVE'){
        return {...state,cart:state.cart.filter((p)=>p.id!==action.payload.id)}
    }
    if(action.type === 'CHANGE_QUANTITY'){
        return {...state,cart:state.cart.filter((c)=>c.id === action.payload.id?c.qty=action.payload.qty:c.qty)}
    }
    return state;
}

const filterReducer = (state,action) => {
    if(action.type === 'SORT_BY_PRICE'){
        return {...state,sort:action.payload};
    }
    if(action.type === 'FILTER_BY_STOCK'){
        return {...state,byStock : !state.byStock};
    }
    if(action.type === 'FILTER_BY_DELIVERY'){
        return {...state,byFastDelivery : !state.byFastDelivery};
    }
    if(action.type === 'FILTER_BY_RATING'){
        return {...state,byRating : action.payload};
    }
    if(action.type === 'FILTER_BY_SEARCH'){
        return {...state,searchQuerry : action.payload};
    }
    if(action.type === 'CLEAR_FILTER'){
        return {
            byStock : false,
            byFastDelivery : false,
            byRating : 0,
            searchQuerry : ''
        }
    }
    return state;
}

export const CartContext = createContext();

const Context = ({ children }) => {

    // const [cart,setCart] = useState([]);
    const [state,dispatch] = useReducer(cartReducer,{
        cart:[]
    });

    const [filterState,filterDispatch] = useReducer(filterReducer,{
        byStock : false,
        byFastDelivery : false,
        byRating : 0,
        searchQuerry : ''
    });

    return (
        <CartContext.Provider value={{state,dispatch,filterState,filterDispatch}} >
            {children}
        </CartContext.Provider>
    )
}

export default Context
