import React from 'react';
import { NavLink } from 'react-router-dom'


const Navigation = ({ cart }) => <nav>
  <ul className='top-menu'>
    <li><NavLink to='/'>Market</NavLink></li>
    <li><NavLink to='/cart'>Cart({cart.reduce((acc, item) => {
      return acc+ item.quantity
    }, 0)})</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
  </ul>
</nav>


export default Navigation