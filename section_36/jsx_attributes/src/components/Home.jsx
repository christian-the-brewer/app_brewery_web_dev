import FoodList from "./FoodList.jsx";

export default function Home() {
    const timeStyle = {
        color: "red"
    }

    let message = ""

    const time = new Date().getHours()

    if (time < 12) {
        message = "Good morning"
    } else if (time < 17) {
        message = "Good afternoon";
        timeStyle.color = "green"
    } else {
        message = "Good evening"
        timeStyle.color = "red"
    }
    return (
        <>
            <h1 style={timeStyle}>{message}</h1>

        </>
    );
};