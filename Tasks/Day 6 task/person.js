class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    introduce() {
      return `Hi, my name is ${this.name}, I am ${this.age} years old, and I'm a ${this.gender} candidate.`;
    }
  }
  
  // Example usage of the Person class
  const person1 = new Person("Srini", 25, "male");
  console.log(person1.introduce()); // Output: "Hi, my name is Srini, I am 25 years old, and I identify as male."
  