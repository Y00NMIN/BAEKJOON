//N찍기
//자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
//첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
//첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

//방법1 (시간초과로 문제 해결 X)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let N = Number(input);
for (let i = 1; i < N; i++) {
  console.log(i);
}

//방법2
//시간 초과를 해결하는 answer 변수
//for 문을 이용해 max까지 i를 증가시켜 출력하면 시간 초과가 납니다. 그래서 문자열에 결과값과 개행 문자(줄바꿈문자)를 넣어 마지막에 출력해줘야 합니다.
let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let answer = " ";
for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}
console.log(answer);
