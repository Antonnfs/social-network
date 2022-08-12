import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className='navbar__container'>
				<Link to='/about' className="navbar__link">About</Link>
				<Link to='/' className="navbar__link">Posts</Link>
			</div>
		</div>
	)
}
