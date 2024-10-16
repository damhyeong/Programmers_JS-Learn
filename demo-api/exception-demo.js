const express = require("express");
const app = express();

app.listen(4321);

const fruits = [
    { id : 1, name : "apple"},
    { id : 2, name : "orange"},
    { id : 3, name : "strawberry"},
    { id : 4, name : "blueberry"}
]

app.get("/fruits", (req, res) => {
    res.json(fruits);
});

app.get("/fruits/:id", (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    let fruit = fruits.find(fruit => fruit.id == id);

    if(fruit)
        res.json(fruit)
    else
        res.status(404).json({ message : "해당 과일은 없는데요?" });

    res.json(fruit);
})
