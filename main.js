"use strict";
/*
let start = 1;
while (start <= 10) {
  if (start == 5) {
    break;
  }
  console.log("Hello " + start);
  start++;
}
*/

// increament 10 porjonto run exeecute hobe; but break dile break er oi number er aghe increment stop hoye jabe;
/*
    Hello 1
    Hello 2
    Hello 3
    Hello 4
*/

// true value
/*
{
  let start = 1;

  while (true) {
    // console.log("Hello " + start ); 6 count hobe
    if (start == 6) {
      break;
    }
    console.log("Hello " + start); // 6 count hobena
    start++;
  }
}
*/

// break with prompt
/*
{
  let myName = "";

  while (true) {
    let promptName = prompt("Enter Your Name ");
    if (!promptName) {
      break;
    }
    myName = myName + " " + promptName;
  }
  console.log(myName);
}
*/

// prompt with break with number
{
  let sum = 0;

  while (true) {
    let pNumber = +prompt("Enter Your Number");
    if (!pNumber) {
      break;
    }
    sum += pNumber;
  }
  console.log(sum);
}
