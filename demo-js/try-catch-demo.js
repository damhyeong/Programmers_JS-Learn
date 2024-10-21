let string = '{ "number" : 1 }';

try {
    let json = JSON.parse(string);

    if(!json.name) {
        throw new SyntaxError("구문은 아닌데 내부에 name 값이 없음");
    } else {
        console.log(json.name);
    }

} catch (err){
    console.log(err.name);
    console.log(err.message);
}