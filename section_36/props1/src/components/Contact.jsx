export default function Contact({contact}) {
    return (
        <div>
            <h2>{contact.name}</h2>
            <img src={contact.imgURL}
                 alt={contact.alt}/>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
};