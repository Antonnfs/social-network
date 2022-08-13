import React from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate,  } from "react-router-dom";
import Posts from "../pages/Posts";
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router/routes';

export default function AppRouter() {
	return (
		<Routes> 
			{/* <Route path="/social-network/error" element={<Error/>}/> */}
			{routes.map(route => 
				<Route key={route.path} path={route.path} element={<route.element/>} />
			)}
			<Route path="/*" element={<Navigate to="/social-network/error" replace />} />
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