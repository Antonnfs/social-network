import React, {useState, useEffect, useRef, useMemo, } from "react";
import "./styles/App.css"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AuthContext } from "./context";


export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, []);
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <HashRouter>
        <Navbar />
        <AppRouter/>
      </HashRouter>
    </AuthContext.Provider>

  )
}
