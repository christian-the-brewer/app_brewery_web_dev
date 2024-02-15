import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import FoodList from "./components/FoodList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <FoodList />
    </>
  )
}

export default App
