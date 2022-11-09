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
console.log(sum([1, 2]));
//returns 3 sum takes in an array wich is what the function range retuns when it is done

/*
Reversing an Array

For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

The second reverseArrayInPlace does what the reverse method does it modifies the array given as argument by reversing its elements

neither may use the standerd reverse method.
*/
//this uses memory useful if memory is not a issue this will not change it on globle
function reverseArray(array) {
  let array2 = [];

  for(let i = array.length -1; i >= 0; i-- ) {
    array2.push(array[i])
  }
return array2
}


//this does not use memory also it will change it on the globle scop
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let hold = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = hold;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]