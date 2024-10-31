import React, { useState } from 'react';
import ShoppingCart from '@component/components/ShoppingCart';
import HomeButton from '@component/components/HomeButton';


export default function Merch() {
    const [cart, setCart] = useState([]);
    const [guest, setGuest] = useState('');
    return (
        <ShoppingCart cartProviderValue={{cart, name: guest}}>
            <div>
                Shop Erix World
            </div>
            <input value={guest} onChange={(e) => setGuest(e.target.value)}/>
            <HomeButton />   
        </ShoppingCart>
    );
};
