//A+B
//Enter first line input a,b (0<a, b<10)
//Print first line output a+b
const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString() //문자열로 변환
  .split(" ") //배열화
  .map((value) => +value); //map,readFileSync 공부 필요
const [a, b] = inputData;
console.log(a + b); //2번의 런타임오류 => 사유: toString의 ()소괄호 생략

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
