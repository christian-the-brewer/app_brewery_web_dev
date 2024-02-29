import './App.css'
import {useState} from "react";

function App() {

    const [name, setName] = useState("")
    const [headingName, setHeadingName] = useState("")

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleSubmit(event) {
        setHeadingName(name)

        event.preventDefault()
    }

    return (
        <div className="container">
            <h1>Hello {headingName}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text" placeholder="What's your name?"
                    value={name}
                />
                <button
                    type="submit">Submit
                </button>
            </form>
        </div>
    )
}

export default App
