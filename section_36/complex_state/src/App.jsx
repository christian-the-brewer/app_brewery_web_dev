import {useState} from 'react'

import './App.css'

function App() {

    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
    });

    const {fName, lName} = fullName;


    function handleChange(event) {
        const { name, value } = event.target
        setFullName((prevValue => {
            if (name === fName) {
                return {
                    fName: value,
                    lName: prevValue.lName,
                }
            } else if (name === lName) {
                return {
                    fName: prevValue.fName,
                    lName: value,
                }
            }
        }));
    }

    return (
        <div className="container">
            <h1>Hello {fName} {lName}</h1>
            <form>
                <input
                    onChange={handleChange}
                    value={fName}
                    name={fName} placeholder="First Name"/>
                <input
                    onChange={handleChange}
                    value={lName}
                    name={lName} placeholder="Last Name"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
