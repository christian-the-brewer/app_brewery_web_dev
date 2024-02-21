import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from "./components/Contact.jsx";

function App() {
    const JackBauer = {
        name: "Jack Bauer",
        imgURL: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        alt: "jack bauer image",
        phone: "+123 4e6 789",
        email: "j@beyonce.com",
    }

    const ChuckNorris = {
        name: "Chuck Norris",
        imgURL: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        alt: "Chuck Norris image",
        phone: "+123 5556 789",
        email: "c@beyonce.com",
    }

    return (
        <div>
            <h1>My Contacts</h1>
            <Contact
                contact={{
                    name: "Beyonce",
                    imgURL: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
                    alt: "beyonce image",
                    phone: "+123 456 789",
                    email: "b@beyonce.com",
                }}
            />
            <Contact contact={ChuckNorris} />
            <Contact contact={JackBauer} />
        </div>
    )
}

export default App
