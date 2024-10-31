import React, { Children, ReactNode, createContext, useContext, useState } from "react";

interface CartProviderValue {
  name: String,
  cart: Record<string, any>,
};

interface ShoppingCartInterface {
    children: ReactNode,
    cartProviderValue: CartProviderValue,
};

const ShoppingCartContext = createContext<CartProviderValue | null>(null);

export default function ShoppingCart({children, cartProviderValue}: ShoppingCartInterface) {
    return (
        <ShoppingCartContext.Provider value={cartProviderValue}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
