import { applyMiddleware, createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer';
import productsReducer from '../features/product-listing/reducer';
import authReducer from '../features/login/reducer'
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers ({
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer
})

const rootReducer = (state, action) => {
    return reducers(state,action)
}



export function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}