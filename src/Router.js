import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MarketPage from './pages/market';
import CartPage from './pages/cartpage';
import LoginPage from './pages/loginpage';

const Router = () => (
    <Switch>
        <Route exact path='/'component={LoginPage} />
        <Route exact path='/login'component={LoginPage} />
        <Route exact path='/cart'component={CartPage} />
        <Route exact path='/market'component={MarketPage} />
        
    </Switch>
)
export default Router;
