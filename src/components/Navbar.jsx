import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import MyButton from './UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../context';


export default function Navbar() {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	function logout() {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	return (
		<div className="navbar">
			<div className='container' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<div >
					<Link to='/about' className="navbar__link">About</Link>
					<Link to='/' className="navbar__link">Posts</Link>
				</div>
				<MyButton onClick={logout} style={{color: 'white', border: '1px solid white', margin: 0}}>Exit</MyButton>
			</div>
		</div>
	)
}
