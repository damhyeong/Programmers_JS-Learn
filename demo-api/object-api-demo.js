const express = require("express");
const app = express();

const info = {
    "@15ya.fullmon" : {
        "channelTitle" : "십오야",
        "subscription" : 5_930_000,
        "videoNum" : 993
    },
    "@ChimChakMan_Official" : {
        "channelTitle" : "침착맨",
        "subscription" : 2_780_000,
        "videoNum" : 2_600
    },
    "@TEO_universe" : {
        "channelTitle" : "테오",
        "subscription" : 1_500_000,
        "videoNum" : 500
    }
}

app.get("/:nickname", function (req, res) {

    const {nickname} = req.params;

    if(info.hasOwnProperty(nickname)){
        res.json(info[nickname]);
    } else {
        res.json({
            error : "찾을 수 없음"
        })
    }
})

app.listen(8888);