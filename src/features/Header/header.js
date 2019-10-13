import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <div className="loginBlock" >
        {props.isAuth ? props.email 
        : <NavLink to={'/login'}>Login</NavLink>}
    </div>
}
export default Header