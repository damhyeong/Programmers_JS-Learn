let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Complete!"), 3000);
}).then(
    function (result) {
        console.log(result);
        return result + "!!!!";
    },
    function (err) {
        console.log(err);
    }
).then(
    function (result) {
        console.log(result);
        return result + "????";
    },
    function (err) {
        console.log("err");
        console.log(err);
    }
).then(
    function (result) {
        console.log(result);
    },
    function (err) {
        console.log("err");
        console.log(err);
    }
)