const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.status(200);
    res.contentType("text/html")
    res.write("Hello Node.js and dam");
    res.send();
})

app.get("/products/1", function (req, res) {
    res.json({
        title : "Node.js 를 공부해보자.",
        price : 20000,
        description : "좋다 "
    });
})

app.listen(8888);