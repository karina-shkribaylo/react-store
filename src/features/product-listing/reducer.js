import { getProducts } from '../../api/api'

const LOAD = 'LOAD'

const productsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD:
            return action.payload
        default:
            return state
}
} 

export const loadProducts = (products) => ({type: LOAD, products})

/*export const loadProductsThunk = (products) => {
    return(dispatch) => {
        getProduts(products).then(response => {
            dispatch(loadProducts(response.data) )
        })
    }
}
*/
export const loadProductsThunk = (products) => (dispatch) => {
    getProducts(products).then(response => {
        dispatch(loadProducts(response.data))
    })
}

export default productsReducer 
