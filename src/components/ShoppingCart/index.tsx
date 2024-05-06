import React, { Children, ReactNode, createContext, useContext, useState } from "react";

interface CartProviderValueType {
  name: String,
  cart: {},
};

interface ShoppingCartInterface {
    children: ReactNode,
    cartProviderValue: CartProviderValueType,
};

const ShoppingCartContext = createContext(null); // or should it be null by default?

export default function ShoppingCart({children, cartProviderValue}: ShoppingCartInterface) {
    console.log('cartProviderValue', cartProviderValue);
    return (
        <ShoppingCartContext.Provider value={cartProviderValue}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
