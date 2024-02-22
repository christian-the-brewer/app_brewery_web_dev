import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";
import contacts from "./contacts.js";

function App() {
    return (
        <>
        <h1 className="heading">My Contacts</h1>
    <Card
        contact={contacts[0]}/>
    <Card
        contact={contacts[1]}/>
    <Card
        contact={contacts[2]}/>
        </>
)
}

export default App
