//두 수 비교하기
//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오
//Input 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
/*Print 첫째 줄에 다음 세 가지 중 하나를 출력한다.
A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.*/

//방법 1( 마지막 else 사용)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}

//방법 2( 마지막 else if 사용)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A === B) {
  console.log("==");
}
