import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(logger);
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"
));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function logger (req, res, next) {
    console.log("Request method: ", req.method);
    console.log("Request url: ", req.url);
    next();
}