const express = require("express");
const app = express();
const port = 8888;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use(express.json());
app.post("/test", (req, res) => {
    console.log(req.body.testing);

    res.send(req.body.testing);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})