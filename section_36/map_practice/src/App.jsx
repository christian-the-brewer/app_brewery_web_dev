import './App.css'
import Entry from "./components/Entry.jsx";
import emojipedia from "./emojipedia.js";


function App() {

    function createEntry(term) {
        return <Entry
            key={term.id}
            term={term} />
            }

            return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">

                {emojipedia.map(createEntry)}


            </dl>
        </div>
    );
}

export default App
