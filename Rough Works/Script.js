
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
  
  const filtered = [12, 5, 8, 130, 44]
  // filtered is [12, 130, 44]
  console.log(  filtered.filter((value)=>value>=10));
  
