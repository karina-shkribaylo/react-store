import React from 'react';

export default function AddButton(props) {
    return <button
   onClick={() => props.addToCart(props.product)}
> Add To Cart ({
    (props.cartItem && props.cartItem.quantity) || 0
})</button>
}
