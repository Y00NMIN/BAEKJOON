//검증수
//
//Input:첫째 줄에 고유번호의 처음 5자리의 숫자들이 빈칸을 사이에 두고 하나씩 주어진다.
//Output:첫째 줄에 검증수를 출력한다.

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
//trim() String 공백 제거
const sum = input.reduce((p, v) => p + v * v, 0);
//reduce(acc,curr.index)
//p+v*v
console.log(sum % 10);
