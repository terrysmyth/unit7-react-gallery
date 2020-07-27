import React from 'react';
import {
	NavLink
} from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="main-nav">
	        <ul>
	          <li><NavLink to='/results/cats'>Cats</NavLink></li>
	          <li><NavLink to='/results/dogs'>Dogs</NavLink></li>
	          <li><NavLink to='/results/computers'>Computers</NavLink></li>
	        </ul>
	    </nav>
	)

} 

export default Nav;