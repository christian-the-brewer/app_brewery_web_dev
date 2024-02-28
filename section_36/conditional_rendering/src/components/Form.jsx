function Form(props) {

    const userIsRegistered = props.isUserRegistered

    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {!userIsRegistered && <input type="password" placeholder="Confirm Password"/>}
            <button type="submit">
            {userIsRegistered ? "Login" : "Register"}
            </button>
        </form>
    );
}

export default Form;
