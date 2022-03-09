//A+B-2
//Input:first Line print A,Second Line print B
//Print: A+B
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let answer = input[0] + input[1];
console.log(answer);
