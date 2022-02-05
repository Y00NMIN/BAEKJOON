//사칙연산
//두 자연수 a와 b가 주어지지고
//Print (line 1) a+b ,(line 2) a-b ,(line 3) a*b ,(line 4) a/b ,(line 5) a%b

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b)); //몫을 구해해야함 즉, parseInt는 정수 변환(몫 출력) 역할을 수행한다.
console.log(a % b);
