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

let A = parseInt(userInput[0].split("").join(""));
let b="";
let c="";
for(i=0;i<A.length;i++){
if(A%2===0){
    b=b+A[i]+" ";
    }else{
    c=c+A[i]+" ";
   }
}
console.log(b);
console.log(c);
});