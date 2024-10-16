let promise = new Promise(function(resolve, reject){
    // executor : Promise 가 할 일;
    // 할 일이 성공적이라면 resolve 실패하면 reject();

    // 즉, 완료 시 무조건 콜백함수 resolve() 혹은 reject() 둘 중 하나가 호출된다;

    setTimeout(() => {
        console.log("complete");
        resolve("완료!")
    }, 2000);
});


// promise 의 기본 메서드 : promise 완료 후 호출해야 하는 함수
promise.then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
});
