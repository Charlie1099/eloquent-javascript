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


function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
        // console.log(i)
        console.log(string[i])
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4