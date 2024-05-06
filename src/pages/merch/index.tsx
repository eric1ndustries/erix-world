import React, { useState } from 'react';
import ShoppingCart from '@component/components/ShoppingCart';


export default function Merch() {
    const [cart, setCart] = useState([]);
    const [guest, setGuest] = useState('Testing');
    return (
        <ShoppingCart cartProviderValue={{cart, name: guest}}>
            <div>
                Shop Erix World
            </div>
            <input value={guest} onChange={(e) => setGuest(e.target.value)}/>    
        </ShoppingCart>
    );
};
