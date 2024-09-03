const express = require("express");
const app = express();

app.listen(8888);

app.get("/:id", function (req, res) {
    let {id} = req.params;

    id = parseInt(id);

    if(!db.has(id)){
        res.json({
            message : "없는 상품임 "
        })
    } else {
        let product = db.get(id);
        product.id = id;

        res.json(product);
    }
})

let notebook = {
    productName: "Nodebook",
    price : 2_000_000
}
let cup = {
    productName : "Cup",
    price : 3_000
}
let chair = {
    productName : "Chair",
    price : 100_000
}
let poster = {
    productName : "Poster",
    price : 20_000
}

let db = new Map();

db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);
