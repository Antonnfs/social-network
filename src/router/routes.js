import React from 'react'
import PostIdPage from '../pages/PostIdPage';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import { BrowserRouter, Link, Route, Routes, Navigate,  } from "react-router-dom";

export const routes = [
	{path:'/social-network/about', element: About},
	{path:'/social-network', element: Posts},
	{path:'/social-network/:id', element: PostIdPage},
	{path:"/social-network/error", element: Error},
]
