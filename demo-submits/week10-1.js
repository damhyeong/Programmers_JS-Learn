const validate = (value) => {
    return value instanceof Number ? value : null;
}

let age = 10;

function addAge(age) {
    return age + 3;
}

addAge(age);

const foo = (arg) => {
    return arg();
}

foo(() => {
    return 11;
})