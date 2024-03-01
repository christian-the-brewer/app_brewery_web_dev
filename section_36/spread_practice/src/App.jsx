import {useState} from 'react'

import './App.css'
import ListItem from "./components/ListItem.jsx";

function App() {

    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    function handleClick(event) {
        setList((prevValue) => {
            return [
                ...prevValue,
                item
            ]
        });
        setItem("")
    }

    function handleChange(event) {
        const {value} = event.target
        setItem(value)
    }

    function createList(item, key) {
        return (
            <ListItem
                key={key}
                item={item} />
        )
    }

    const List = list.map(createList)

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    name="item"
                    onChange={handleChange}
                    value={item}
                    type="text"/>
                <button
                    onClick={handleClick}
                >
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {List}
                </ul>
            </div>
        </div>
    )
}

export default App

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s