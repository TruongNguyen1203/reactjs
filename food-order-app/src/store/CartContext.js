import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearCart: () => {}
 })

 export default CartContext;