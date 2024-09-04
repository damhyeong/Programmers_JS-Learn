const arr = [1, 2, 3, 4, 5];

arr.forEach((value, key, object) => {
    console.log(`value : ${value}, key : ${key}, object : ${object}`);
})

let newArr = arr.map((value, key, object) => {
    console.log(`value : ${value}, key : ${key}, object : ${object}`);
    this.arr[key] = value * 5;
    return value + 1;
})

console.log(arr);
console.log(newArr);