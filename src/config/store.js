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

const store = createStore (reducers, /*applyMiddleware(thunkMiddleware)*/
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//window.store = store;

export default store;