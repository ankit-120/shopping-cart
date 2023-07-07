import React, { createContext, useReducer} from 'react'

const reducer = (state,action) => {
    if(action.type === 'ADD'){
        return {...state,cart:[...state.cart,action.payload]}
    }
    if(action.type === 'REMOVE'){
        return {...state,cart:state.cart.filter((p)=>p.id!==action.payload.id)}
    }
    return state;
}

export const CartContext = createContext();

const Context = ({ children }) => {

    // const [cart,setCart] = useState([]);
    const [state,dispatch] = useReducer(reducer,{
        cart:[]
    });

    return (
        <CartContext.Provider value={{state,dispatch}} >
            {children}
        </CartContext.Provider>
    )
}

export default Context
