import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login.jsx";

function App() {
    const isLoggedIn = false;

  return (
      <div className="container">
          {
              isLoggedIn ?
              <h1>Hello</h1> :
              <Login />
          }


      </div>
  )
}

export default App
