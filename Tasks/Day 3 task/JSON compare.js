let obj1 = { name: "Person 1", age:5}; 
let obj2 = { age:5, name: "Person 1" };
import _ from "lodash";

console.log(_.isEqual(obj1, obj2));