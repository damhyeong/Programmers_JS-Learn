
let error = new Error("최상위 에러 객체");
let syntaxError = new SyntaxError("구문 에러 객체");
let referencedError = new ReferenceError("참조 에러 객체");

console.log(error.name);
console.log(error.message);

console.log();

console.log(syntaxError.name);
console.log(syntaxError.message);

console.log();

console.log(referencedError.name);
console.log(referencedError.message);
