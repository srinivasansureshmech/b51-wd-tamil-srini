// let num = [1,2,3,4,5];
// console.log(num.map((N)=>N**2));


// - Create a `Book` class that has properties for `title`, `author` and `isbn`.

// - Implement a method `displayInfo` that prints the book's information

// - Create an object to the `Book` class with the name book1.

// class Book{
//     constructor(title,author,isbn){
//         this.Title=title,this.Author=author,this.Isbn=isbn;
//     }

//     displayInfo(){
//         console.log(`Title:${this.Title},
// Author:${this.Author},
// ISBN:${this.Isbn}`);
//     }
// }

// let book1 = new Book("The Magnet","Srinivasan",'VSI9787')
// // console.log(book1);
// book1.displayInfo();

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

let A = userInput[0].split("").join(" ");
let B= null;
let C = null;
for(i=0;i<A.length;i++){
    if(A%2==0){
     return B;
     
    }
    if(A%2==1){
        return C;
    }
}
console.log(B);
console.log(C);
});