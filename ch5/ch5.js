const SCRIPTS = require('./scripts')

require('./scripts')
/*
Higher Order Functions CH 5

Abstraction

Abstraction hides details and give us the ability to talk about problems at a higher level

meaning that you can eather discribe/ write out every little function and sudo code or you can use a shorter way that would need some
understanding in programing.

It is useful to understand when you need to use one over the other.


Abstraction Repetition
Plane function are a good way to build abstrations. They do fall short.
if you wanted to do somthing n times you could write a for loop or you could use abstraction to describe it like so
*/
function repeatLog(n) {
    for( let i = 0; i < n; i++) {
        console.log(i)
    }
}

// but if you wanted to do somthing more and doing somthing can be represented as a function and functions are just values we can pass our action
// as function values
function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i)
    }
}
repeat(3, console.log)
// this will count out 0 1 2 3

/* 
you dont have to use a predefined function to the repeat function you can create a function value on the spot instead like so
*/

let labels = []
repeat(5, i => {
    // you can omit the body if you like 
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);

/*
Higher-Order Functions 
Functions that run on other functions either by taking them as arguments or by returning them are called higher-order functions

Higher order functions allow us to abstract over actions not just values for example funvtions that create other functions
*/

function greaterThan(n) {
    
    return m => m > n;
    
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11))

/*
you can also have functions that can change other functions like
*/

function noisy(f) {
    return (...args) => {
        console.log("calling with", args)
        let result = f(...args);
        console.log('called with', args, ", returned", result);
        return result
    }
}

noisy(Math.min)(3, 2, 1)

// You can also write functions that provide new types of control flow

function unless(test, then) {
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even")
    })
})

// There is a built-in array method, forEach that provides somthing like a for/of loop as a higher-order function

// ['A', 'B'].forEach(1 => console.log(1));
// filter is a standerd array method and is a pure method becuse we do not change the original array but build a new one
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if(test(element)) {
            passed.push(element)
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living))