//Minimum 
// function that takes two arguments and returns their minimum

function min (a, b) {
    if(a < b) return a
    else return b
}
console.log(min(1, 10))
console.log(min(-2, 3))

// you could also do it this way
let minimum = (a, b) => {
    let min = Math.min(a, b)
    return min
}
console.log(minimum(4, 6))

// Recrsion
// checks if a number is even
function isEven(n) {
    if(n === 0) return true; 
    else if (n === 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


function countBs (input) {
    let inputString = String(input)
    for (let inputString = ""; inputString.length > ""; inputString++) {
        
    }
}
