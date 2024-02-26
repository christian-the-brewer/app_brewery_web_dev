export default function Detail(props) {
    const contact = props.contact
    return (
        <>
            <p className="info">{contact.phone}</p>
            <p className="info">{contact.email}</p>
        </>
    )
};