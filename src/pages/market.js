import React from 'react';
import ProductListing from '../features/product-listing';
import {Redirect} from 'react-router-dom';

export default function MarketPage(props) {
    if(!localStorage.getItem("email") && !localStorage.getItem("password")) 
     return <Redirect to={"/login"} /> ;
return <div>
    <h2> Market</h2>
    <ProductListing />
</div>
}
