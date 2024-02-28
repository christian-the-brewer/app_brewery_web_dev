
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import notes from "./notes.js";

function App() {

    const noteCards = notes.map(note => {
        return <Note
            key={note.key}
            data={note} />
    });

    return (
        <div>
            <Header/>
            {noteCards}
            <Footer/>
        </div>
    )
}

export default App
