const express = require("express")
const app = express()

app.get("/test", function (req, res) {
    res.status(200);
    res.contentType("text/html");
    res.write("<h2>TEST SUCCESS</h2>");
    res.send();
})

app.get("/test/:n", function (req, res) {
    res.status(200);
    res.json({
	number : parseInt(req.params.n)
    });
})

app.listen(8888);
