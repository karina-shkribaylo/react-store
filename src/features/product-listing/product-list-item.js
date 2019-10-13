import React from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <h3>{ props.product.name }</h3>
        <img 
        height ={100}
        title={ props.product.name}
        src={`${props.product.imgUrl}`}
        />
        <div>$ { props.product.price }</div>
        <div>
            <AddButton 
            cartItem={props.cartItem} 
            product={props.product} 
            addToCart = {props.addToCart}
            />
            {
               props.cartItem 
               ?  <RemoveButton 
                cartItem={props.cartItem} 
                product={props.product} 
                removeFromCart={props.removeFromCart} />
                : null
            }
        </div>
    </div>
}