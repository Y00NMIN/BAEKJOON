//a/b
//Enter first line input a,b(a<0,b<10)
//Print first line a/b(print float okay)
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);
console.log(a / b);
