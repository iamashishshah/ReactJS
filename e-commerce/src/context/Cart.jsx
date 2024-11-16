import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null)

export const useCart = () => {
     const { items } = useContext(CartContext);
     return items
}

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([])

    return(
        <CartContext.Provider value={{items, setItems}}>
            {children}
        </CartContext.Provider>
    )
}