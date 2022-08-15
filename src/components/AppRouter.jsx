import React, {useState, useContext} from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate,  } from "react-router-dom";
import Posts from "../pages/Posts";
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';

export default function AppRouter() {
	const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)
	console.log(isAuth);
	if (isLoading) {
		return <Loader/>
	}
	return (
		isAuth 
		?	<Routes> 
				{privateRoutes.map(route => 
					<Route key={route.path} path={route.path} element={<route.element/>} />
				)}
				<Route path="/login" element={<Navigate to="/posts" replace />} />
			</Routes>
		:	<Routes> 
				{publicRoutes.map(route => 
					<Route key={route.path} path={route.path} element={<route.element/>} />
				)}
				<Route path="/*" element={<Navigate to="/login" replace />} />
			</Routes>

	




		// <Routes> 
		// 	<Route path="/social-network/about" element={<About/>}/>
		// 	<Route path="/social-network" element={<Posts/>}/>
		// 	<Route path="/social-network/error" element={<Error/>}/>
		// 	<Route path="/social-network/:id" element={<PostIdPage/>}/>
		// 	<Route path="/*" element={<Navigate to="/social-network/error" replace={true} />} />
		// </Routes>
	)
}
