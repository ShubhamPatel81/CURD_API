const express = require("express");
const app = express();
const routes = require("../routes/task")
const port = process.env.PORT || 2000;
const connectdb = require("../controller/db/connect")
require("dotenv").config()

//middleware
app.use(express.json());
app.use(routes)
// routes 
app.get("/hello", (req, res) => {
    res.send(" hello from - Tsakapp manager app");
})


const start = async () => {
    try {
        await connectdb()
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

start()