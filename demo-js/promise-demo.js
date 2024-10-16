let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log("complete");
        resolve("완료!")
    }, 2000);
});


promise.then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
});
