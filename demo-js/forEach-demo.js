const arr = [1, 2, 3, 4, 5];

arr.forEach((value, key, object) => {
    console.log(`value : ${value}, key : ${key}, Object : ${object}`);
})

let map = new Map();

map.set(7, "Seven");
map.set(9, "Nine");
map.set(8, "Eight");

map.forEach((value, key, object) => {
    console.log(`value : ${value}, key : ${key}, object : ${object}`);
});