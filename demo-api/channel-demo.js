const express = require("express")
const app = express();

app.listen(1234);
app.use(express.json());

app
    .route("/channels")
    .get((req, res) => {

        if(db.size === 0){
            res.status(404).json({
                message : "어떠한 채널도 존재하지 않습니다."
            })
        }

        let allChannel = {};

        db.forEach((value, key) => {
            allChannel[key] = value;
        })

        res.status(200).json(allChannel);

    }) // 채널 전체 조회
    .post((req, res) => {
        const {channelTitle} = req.body;

        if(channelTitle){
            db.set(db.size + 1, channelTitle);

            const title = db.get(db.size);

            res.status(201).json({
                message : `${title} 채널 응원함.`
            })
        } else {
            res.status(400).json({
                message : "채널명 데이터가 포함되지 않았습니다."
            })
        }

    }) // 채널 개별 생성

app
    .route("/channels/:id")
    .get((req, res) => {
        let {id} = req.params;

        id = parseInt(id);

        const title = db.get(id);

        if(title){
            res.status(200).json(title);
        } else {
            res.status(404).json({
                message : "해당 채널 id 정보는 존재하지 않습니다."
            })
        }

    }) // 채널 개별 조회
    .put((req, res) => {
        let {id} = req.params;

        const {channelTitle} = req.body;

        id = parseInt(id);

        const title = db.get(id);

        if(!title){
            res.status(404).json({
                message : "해당 채널 id 객체는 존재하지 않아 채널명을 수정할 수 없습니다."
            })
        }

        if(title === channelTitle){
            res.status(400).json({
                message : "이미 해당 채널 id 객체의 타이틀이 동일합니다."
            })
        } else {
            db.set(id, channelTitle);

            res.status(201).json({
                message : `채널명이 ${title} 에서 ${channelTitle} 로 변경되었습니다.`
            })
        }
    }) // 채널 개별 수정
    .delete((req, res) => {
        let {id} = req.params;

        id = parseInt(id);

        if(db.has(id)){
            const channelTitle = db.get(id);

            db.delete(id);

            res.status(200).json({
                message : `${channelTitle} 채널이 정상적으로 삭제되었습니다.`
            })
        } else {
            res.status(400).json({
                message : "해당 id 의 채널은 존재하지 않아 삭제가 불가합니다."
            })
        }
    }) // 채널 개별 삭제

let db = new Map();

