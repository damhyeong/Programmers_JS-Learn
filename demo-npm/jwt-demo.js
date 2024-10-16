var jwt = require("jsonwebtoken")

var dotenv = require("dotenv")

dotenv.config();

var token = jwt.sign({foo : "bar"}, process.env.PRIVATE_KEY);
// token 생성 = jwt 서명을 했다. == (페이로드, 나만의 암호키) + SHA256

console.log(token);

// 검증 - 페이로드 값 확인용

var decoded = jwt.verify(token, process.env.PRIVATE_KEY);

console.log(decoded);




