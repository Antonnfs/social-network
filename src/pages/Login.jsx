import React, {useContext} from 'react'
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

export default function Login() {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	function login(e) {
		e.preventDefault();
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}
	return (
		<div style={{width: 400, margin: '0 auto'}}>
			<h1 className='title'>Sign in page</h1>
			<form  onSubmit={login}>
				<MyInput type="text" placeholder='Enter login'/>
				<MyInput type="password" placeholder='Enter password'/>
				<MyButton>Enter</MyButton>
			</form>
		</div>
	)
}
