import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";

export default function Card(props) {
    const contact = props.contact
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{contact.name}</h2>
                    <Avatar img={contact.imgURL} />
                </div>
                <div className="bottom">
                    <Detail
                    contact={contact}
                    />
                </div>
            </div>
        </div>
    )
};