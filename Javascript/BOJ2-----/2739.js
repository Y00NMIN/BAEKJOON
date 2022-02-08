//구구단(input N ,print Club N )
//First line give N.(1<=N,N<=9)
//Print N*1~N*9

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString();//split 빠진 이유 
const N = +input;// +input 들어간 이유

for( let i =1 ;, i<10;, i++;){
  console.log(`${N}*${i}=${N*i}`);
}

//split, parseInt 연관성 추가 공부 필요