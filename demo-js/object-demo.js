let book = {
    title : "Node.js 를 공부해보자.",
    price : 20000,
    description : "좋다 "
}

console.log(book.title);

console.log(book.price);

console.log(book.description);

function printObj(book){
    console.log("----------printObj----------")
    console.log(book.title);
    console.log(book.price);
    console.log(book.description);
}

function printObj2(book) {
    console.log("-0-0-0-0-0-printObj2-0-0-0-0-0-")
    console.log(book["title"]);
    console.log(book["price"]);
    console.log(book["description"])
}

printObj(book);
printObj2(book);







