
// async await : Promise 객체를 좀 더 쉽게 사용하기 위한 문법;
// 즉 비동기 처리가 쉽다.;


// function f() {} : 일반 함수;
// async function f() {} : async 함수

async function foo () {
    return 8;
}

foo().then(
    function (result) {
        console.log("Promise Resolve : ", result);
    },
    function (err) {
        console.log("Promise Reject : ", err);
    }
)