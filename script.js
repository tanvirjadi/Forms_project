import  express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post ("/next", (req, res) => {
    res.sendFile(__dirname + "/forms project/index2.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/forms project/index1.html");
});

app.listen (port, () => {
    console.log(`Listening on port ${port}`);
});