import React, {useState, useEffect, useRef, useMemo, useId} from "react";
import "./styles/App.css"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';


export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  )
}
