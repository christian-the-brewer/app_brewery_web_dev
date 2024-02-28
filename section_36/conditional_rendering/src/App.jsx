import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/Form.jsx";


function App() {

    const userIsRegistered = false;
    const isLoggedIn = false;

  return (
      <div className="container">
       <Form
       isUserRegistered={userIsRegistered}/>
      </div>
  )
}

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

export default App
