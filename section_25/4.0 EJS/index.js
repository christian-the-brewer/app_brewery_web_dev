import express from "express";

const app = express();
const PORT = 3000;
const d = new Date();
let day = d.getDay();
day = 0;
let dayType = "a weekday";
let advice = "time to work";
if (day === 0 || day === 6) {
    dayType = "the weekend";
    advice = "time to party";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: dayType,
        advice: advice,
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});