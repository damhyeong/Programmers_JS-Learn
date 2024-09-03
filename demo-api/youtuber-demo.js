const express = require("express")
const app = express();

app.listen(8888);

app.get("/youtubers/:id", function (req, res) {
    const {id} = req.params;

    if(!db.has(parseInt(id))){
        res.json({
            message : "없는 유튜버임"
        })
    } else {
        res.json(db.get(parseInt(id)));
    }
})

app.get("/youtubers", function (req, res) {
    res.json({message : "Testing"});
})

app.use(express.json());
app.post("/youtubers", (req, res) => {
    // const {channelTitle, subscription, videoNum} = req.body;

    const body = req.body;

    db.set(db.size + 1, body);

    res.json({
        message : `${body.channelTitle} 님, 유튜버 생활을 응원합니다!`
    });
})

let db = new Map();
db.set(1, {
    "channelTitle" : "십오야",
    "subscription" : 5_930_000,
    "videoNum" : 993
});
db.set(2, {
    "channelTitle" : "침착맨",
    "subscription" : 2_780_000,
    "videoNum" : 2_600
});
db.set(3, {
    "channelTitle" : "테오",
    "subscription" : 1_500_000,
    "videoNum" : 500
});