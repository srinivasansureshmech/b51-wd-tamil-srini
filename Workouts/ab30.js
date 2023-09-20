// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  var n = userInput[0];
  //Your code goes here … replace the below line with your code logic 
  var sum = n.toString().split('').map(Number).reduce(function (a, b) { return a + b; }, 0);
  console.log(sum)
  //end-here
});