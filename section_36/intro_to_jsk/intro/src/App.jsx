import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./components/List.jsx";
import Lucky from "./components/Lucky.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
    return (
        <>
            <Home
            name={"Christian Brewer"}/>
        <Footer />
        </>
    );
}

export default App
