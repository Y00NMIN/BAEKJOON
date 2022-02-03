const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value); //map,readFileSync 공부 필요
const [a, b] = inputData;
console.log(a + b);
//2번의 런타임오류 => 사유: toString의 ()소괄호 생략
