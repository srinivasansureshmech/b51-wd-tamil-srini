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
  //Your code goes here … replace the below line with your code logic 
   let q = (userInput[0].split(""));
   let a= (q.sort());
 
   let s="";
   let t="";
   for(let i=0 ; i<a.length ; i++){
       if(a[i] % 2 === 0){
           s=s+a[i]+ " "
        //   console.log(s)
       }else{
           t=t+a[i]+ " "
        //   console.log(t)
       }
   }
  console.log(s)
  console.log(t)
 

  //end-here
});