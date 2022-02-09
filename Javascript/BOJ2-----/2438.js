//Print Star
//Input first line N(1<=N && N<=100)
//Print stars (first line ~ N line)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let N = parseInt(input);
for (let i = 1; i < N + 1; i++) {
  console.log("*".repeat(i)); //Need to study: repeat method
}
