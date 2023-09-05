
// var greet = function (platform) {
//     console.log("Welcome to ",platform);
// };
  
// greet('GeeksforGeeks!');

// function proto(name){
//     this.name=name
// }
// proto1=new proto('Srini');
// console.log(proto1);

// function Student(name) {
//         this.name = name;
    
//         this.greet = function () {
//             console.log(`Hello! my name is ${this.name}`);
//         }
//     }
//     let student101 = new Student('Krish');
// let student102 = new Student('Sathish');

// let students = [student101, student102];
// student102.greet();
// // student101('Srini')
// console.log(student101);

// function isBigEnough(value) {
//     return value >= 10;
//   }
  

let array1 = [1, 2, 3, 4];

let array2 = array1; // copy by reference

array1.push(5);
array2.push(7);

console.log(array1);
console.log(array2);
