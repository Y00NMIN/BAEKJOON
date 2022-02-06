//시험 성적(A(90~100),B(80~89),C(70~79),D(60~69),F(0~59))
//First line input test score(0<pareseInt(score)<100)
//Print test grade
const input = require("fs").readFileSync("/dev/stdin");
const score = Number(input);
//const fs 선언이 아닌 input에 바로 fs 추가
if (score >= 90) {
  console.log("A");
} else if (89 >= score && score >= 80) {
  console.log("B");
} else if (79 >= score && score >= 70) {
  console.log("C");
} else if (69 >= score && score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
