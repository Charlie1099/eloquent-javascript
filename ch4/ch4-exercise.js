/*
The Sum of a Range
write a range function that will take two arguments, start and end, and returna an array containing all the numbers from start up to
and including the end

also write a sum function that will take an array of numbers and returns the sum of those numbers

as a bouns modify the rang function to take a step/anamout to increment by for the counting from the start and then the finish num

*/



function range (start, end, step = start < end ? 1 : -1) {
  let array = [];
    
  if (step > 0) {
    for(let i = start; i <= end; i += step) array.push(i)
  } else {
    for(let i = start; i >= end; i += step) array.push(i)
  }
  
  // arrNum.push(num1, num2)

  return array;
};

function sum (array) {
let total = 0;
for(let value of array) {
    total += value
}
return total
}
console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


/*
Reversing an Array

For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

The second reverseArrayInPlace does what the reverse method does it modifies the array given as argument by reversing its elements

neither may use the standerd reverse method.

*/
