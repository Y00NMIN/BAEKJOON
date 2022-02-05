//A-B
//Enter first line input a,b(a<0,b<10)
//Print first line output a,b
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
//3번의 문제 오류 발생 =>사유: split('')안에 공백이 없었다.
const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);
console.log(a - b);
