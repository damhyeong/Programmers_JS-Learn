const express = require("express")
const app = express()

app.get("/hello", function (req, res) {
    res.json({
        say : "안녕하세요"
    })
})

app.get("/bye", function (req, res) {
    res.status(200);
    res.contentType("text/json");
    res.json({
        say : "안녕히 가세용"
    });
})

app.get("/nicetomeetyou", function (req, res) {
    res.status(200);
    res.contentType("text/json");
    res.json({
        say : "만나서 반가워용"
    });
})

app.listen(8888);