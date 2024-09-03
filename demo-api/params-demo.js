const express = require("express")
const app = express()

// req.params 객체에 n 이라는 key로 경로 값을 담는다.
app.get("/products/:n", function (req, res) {
    res.json({
        num : req.params.n
    })
})

// app.get("/:nickname", function (req, res) {
//     res.json({
//         channel : req.params.nickname
//     });
// })

app.get("/watch", function (req, res) {
    const query = req.query;

    res.send({
        video : query.v,
        timeline : query.t
    })
})

app.listen(8888);