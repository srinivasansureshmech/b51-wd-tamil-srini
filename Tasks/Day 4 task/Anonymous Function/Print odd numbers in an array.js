//Anonymous function to 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function
array.forEach(function(number) {
  if (number % 2 !== 0) {
    console.log(number);
  }
});