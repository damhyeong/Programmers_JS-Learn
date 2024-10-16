const object1 = {}
const object2 = { message : "안 빔"}

const number = 3;
const str1 = "abc";
const str2 = "";

console.log(Object.keys(object1));
console.log(Object.keys(object2));

console.log(Object.keys(number));
console.log(Object.keys(str1));

function isEmpty(object) {
    if (Object.keys(object).length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(object1));
console.log(isEmpty(object2));

console.log(isEmpty(str1));
console.log(isEmpty(str2));