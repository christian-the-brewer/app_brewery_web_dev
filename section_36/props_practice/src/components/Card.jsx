export default function Card(props) {
    const contact = props.contact
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{contact.name}</h2>
                    <img
                        className="circle-img"
                        src={contact.imgURL}
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className="info">{contact.phone}</p>
                    <p className="info">{contact.email}</p>
                </div>
            </div>
        </div>
    )
};