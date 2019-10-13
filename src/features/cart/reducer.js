const ADD = 'ADD';
const REMOVE = 'REMOVE';
const REMOVE_ALL = 'REMOVE_ALL';

const cartWithoutItem=(cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]
const ItemAddToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
    : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
}

const ItemRemoveFromCart =(cart,item) => {
    return item.quantity === 1
    ? [ ...cartWithoutItem(cart, item)]
    : [ ...cartWithoutItem(cart, item), {...item, quantity: item.quantity -1 }]
}

const removeAllFromCart =(cart,item) => {
    return [...cartWithoutItem(cart, item)]
}

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case ADD:
            return  ItemAddToCart(state, action.payload)
        case REMOVE:
            return ItemRemoveFromCart(state, action.payload)   
        case REMOVE_ALL:
            return removeAllFromCart(state, action.payload)    
        default:
            return state
    }
}


export const addToCart = (item) => ({type: ADD, item})
export const removeFromCart = (item) => ({type: removeFromCart, item})


export default cartReducer