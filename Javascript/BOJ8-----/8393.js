//합
//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
//Input:첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
//Output:1부터 n까지 합을 출력한다.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let N = Number(input);
let answer = 0;
for (let i = 1; i <= N; i++) {
  answer += i;
}
console.log(answer);
