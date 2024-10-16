async function foo () {

    let promise1 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("First Query"), 1000);
    });

    let result = await promise1;
    console.log(result);

    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Second Query With " + result), 1000);
    });

    result = await promise2;
    console.log(result);

    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Third Query " + result), 1000);
    });

    result = await promise3;
    console.log(result);
}

foo();
