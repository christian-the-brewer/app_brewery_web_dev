export default function Note(props) {
    const note = props.data;
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
    )
};