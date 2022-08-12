import React from 'react'
import PostIdPage from '../pages/PostIdPage';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import { BrowserRouter, Link, Route, Routes, Navigate,  } from "react-router-dom";

export const routes = [
	{path:'/about', element: About},
	{path:'/', element: Posts},
	{path:'/:id', element: PostIdPage},
	// {path:"/error", element: Error},
]
