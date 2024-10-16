const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");

app.use(express.json());
app.listen(process.env.PORT);

// jwt 발행 데모 ;
app.get("/jwt", function (req, res) {
    const {email} = req.body;

    const token = jwt.sign({email : email}, process.env.PRIVATE_KEY);

    console.log(token);

    res.cookie("jwt", token, {
        httpOnly : true
    });

    res.setHeader("Authorization", token);

    res.status(200).send("Create Token Success!");
});

app.get("/jwt/decoded", function (req, res) {
    const {authorization} = req.headers;

    console.log(authorization);

    const decoded = jwt.verify(authorization, process.env.PRIVATE_KEY);

    res.status(200).send(decoded);
})


