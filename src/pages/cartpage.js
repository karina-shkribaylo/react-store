import React from 'react';
import Cart from '../features/cart';
import {Redirect} from 'react-router-dom';

export default function CartPage(props) {
    if(!localStorage.getItem("email") && !localStorage.getItem("password")) 
     return <Redirect to={"/login"} /> ;
return <div>
    <h2> My cart</h2>
    <Cart />
</div>
}
