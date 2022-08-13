import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className='navbar__container'>
				<Link to='/social-network/about' className="navbar__link">About</Link>
				<Link to='/social-network' className="navbar__link">Posts</Link>
			</div>
		</div>
	)
}
