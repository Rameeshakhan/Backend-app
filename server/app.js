const express = require("express");
const app = express();
const dotenv = require("dotenv")

dotenv.config({path: "./.env"})
const port = process.env.PORT

//database
require("./db/conn")
app.use(express.json())

// linking the router files
app.use(require("./routes/auth"))
//middelware
const middelware = (req, res, next) =>{
    console.log("Hello Middle ware")
    next()
}

app.get("/", (req, res) => {
    res.send("Hello World from server")
});

app.get("/signup", (req, res) => {
    res.send("Hello from server in sign up page")
});

app.get("/login", (req, res) => {
    res.send("Hello World from server login")
});

app.get("/about", middelware , (req, res) => {
    res.send("Hello World from server about")
});

app.get("/contact", (req, res) => {
    res.send("Hello World from server contact")
});

app.listen(port,() => {
    console.log(`Server is running at ${port}`)
})