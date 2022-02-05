//A*B
//Enter first line input a,b(a<0,b<10)
//Print first line a*b
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);
//a,b index 설정시 함수 설정 신경 쓸 것
console.log(a * b);
