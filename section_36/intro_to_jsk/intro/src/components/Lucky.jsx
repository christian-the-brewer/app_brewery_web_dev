export default function Lucky({fName, lName, number}) {
    return (
        <div>
            <h1>Hello {fName} {lName}</h1>
            <p>Your lucky number is {number}</p>
        </div>
    );
}