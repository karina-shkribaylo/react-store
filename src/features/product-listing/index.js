import React from 'react';
import ProductListItem from './product-list-item'
import { connect } from 'react-redux';
import * as axios from 'axios';
import { getProducts } from '../../api/api';
import { loadProducts } from './reducer';
import { addToCart, removeFromCart } from '../cart/reducer'
import {Redirect} from 'react-router-dom';


class ProductListing extends React.Component {
    
    componentDidMount() {
  
        const { loadProducts } = this.props
        getProducts()
            .then(data => {
                
                loadProducts(data.product) 
            })

    }
    
    
    
    render() {
        const { addToCart, removeFromCart, products, cart, goToCart } = this.props
        return <div className='product-listing'>
          {
            products.map(product =>
              <ProductListItem
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                goToCart={goToCart}

              />)
          }
        </div>
      }
    }
    
    function mapStateToProps(state) {
      return {
        cart: state.cart,
        products: state.products,
      }
    }
    
    function mapDispatchToProps(dispatch) {
      return {
        loadProducts: (products) => {
          dispatch({ type: 'LOAD', payload: products })
        },
        addToCart: (item) => {
          dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
          dispatch({ type: 'REMOVE', payload: item })
        }
      }
    }

export default connect(mapStateToProps, mapDispatchToProps )(ProductListing)