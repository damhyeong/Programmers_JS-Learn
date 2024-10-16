const express = require("express")
const app = express();

app.listen(8888);

app.get("/youtubers/:id", function (req, res) {
    const {id} = req.params;

    if(!db.has(parseInt(id))){
        res.status(404).json({
            message : "없는 유튜버임"
        })
    } else {
        res.json(db.get(parseInt(id)));
    }
})

app.get("/youtubers", function (req, res) {
    let sendObject = {};

    if(db.size !== 0){
        db.forEach(function (youtuber, key) {
            sendObject[key] = youtuber;
        })
        res.json(sendObject);
    } else {
        res.status(404).json({
            message : "db 에 데이터가 존재하지 않습니다."
        })
    }
})

app.use(express.json());
app.post("/youtubers", (req, res) => {
    const {channelTitle, subscription, videoNum} = req.body;

    if(channelTitle !== undefined){
        const body = req.body;

        db.set(db.size + 1, body);

        res.status(201).json({
            message : `${body.channelTitle} 님, 유튜버 생활을 응원합니다!`
        });
    } else {
        res.status(400).json({
            message : "채널명이 포함되지 않았습니다."
        })
    }
})

app.delete("/youtubers/:id", (req, res) => {
    let {id} = req.params;

    id = parseInt(id)

    console.log(id);

    if(db.has(id)){
        res.json({
            message : `${id} 에 해당하는 유튜버 ${db.get(id).channelTitle} 님이 삭제되었습니다.`
        })

        db.delete(id);
    } else {
        res.status(404).json({
            message : "해당 유튜버는 존재하지 않아 삭제할 수 없습니다. "
        })
    }
})

app.delete("/youtubers", (req, res) => {
    if(db.size === 0){
        res.status(404).json({
            message : "이미 유튜버가 없는 상태입니다."
        })
    } else {
        db.clear();
        res.json({
            message : "모든 유튜버들이 삭제되었습니다."
        })
    }
})

app.put("/youtubers/:id", (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    const {channelTitle} = req.body;

    if(!db.has(id)) {
        res.status(404).json({
            message: "해당 유튜버가 없어 수정 할 수 없습니다."
        })
    }

    let msg = "";
    const title = db.get(id)["channelTitle"];

    if (title === channelTitle) {
        res.status(401).json({
            message : "이미 동일한 채널명을 사용하고 있습니다."
        })
    } else {
        let object = db.get(id);
        object["channelTitle"] = channelTitle;
        db.set(id, object);
        msg = `${title} 채널명이 ${channelTitle} 로 채널명이 변경되었습니다.`
        res.json({
            message : `${title} 채널명이 ${channelTitle} 로 채널명이 변경되었습니다.`
        })
    }
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