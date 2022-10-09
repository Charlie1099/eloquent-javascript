// CH 3 Functions

//Defining a Function
// A function definition is a reagular binding where the value of the binding is a function
const square = function(x) {
    return x * x;
};
console.log(square(12)); // 144
/*
In order to create a function it will have the word function after the = 

Functions can also have things called parameters it does not matter if you have them or not 
but they would go in the () 

After the () is the body and those always have {} to contain what the function does

for example
*/
const makeNoise = function() {
    console.log("ping!!");
};

makeNoise() // this is how you would call the function to fire off and exicute the code it will show the string ping


     // the parameters for this function is the base and exponent when you call the function you will enter the numbers you wnat
     // look at the console.log also w3 has a good explination on it here https://www.w3schools.com/js/js_functions.asp
const power = function(base, exponent) {
    let result = 1;
    for( let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result; // wht this does is when you call the function and supply the arguments it will return the result variable as the value
    // for the function
};
console.log(power(2, 10))// 1024
// the caller of a function with pramaitors gives it its value

/*
Bindings and Scopes


With bindings there is thing called scope and what that means is that not all vareables will be usable to every function in the program
it will deppending on the type and there are three diffrent kinds.Pre 2015 javaScript only had global scope and uesd only the var word 
for variables. After 2015 let and const where inroduced

Diffrent kinds of Scope
1.Global scope
2.Block scope
3.Function scope

Global scope 
is when everything can access the variable this can happen when a variable is declared outside of a function you can refrence it at
anytime. 

Block scope 
variables declared in the body ({}) of a function will be subject to block scope meaning that function outside of the block are not 
able to use the variables in that function.

Function scope
Vareables that are declared inside a function are only acsessible tho the function outside function can not acsess them

let and const variables are local to that block
bindings that have var are global
*/

let x = 10; //Global
if(true) {
    let y = 20; // Block / Local scope
    var z = 30; // Global
    console.log(x + y + z);
    //60
}

// y is not visible here
console.log(x + z) // 40

/*
Each scope can look out into the scope around it so x is visible in the block example with one exception that is when there are multiple bindings
with the same name
*/

const halve = function(n) {
    return n / 2;
};

let n = 10
console.log(halve(100)) // 50 this is useing the function
console.log(n) // useing the n outside of the function

/*
Nested scope
JavaScript distinguishes not just global and local bindings. Blocks and functions can be created inside of other blocks and functions
makeing multiple degrees of locality.
*/
const hummus = function(factor){
    // the code in this function can not see the code in the ingredient function
    const ingredient = function(amount, unit, name) {
        // the code can see the cose in this function and the outer function like the factor binding
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
    
    console.log(`${ingredientAmount} ${unit} ${name}`)
};
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");

};

/* 
JavaScript uses what is called lexical scoping wich is what is the above function. the set of bindings visible
is determined by the place of that block in the program text. each local scope can also see all the local scopes 
that contain it, and all scopes can see the global scope agian this approach is called lexical scoping
*/

/* 
Functions as Values

A functions binding/name is just that it acts as the name for that specific peace of program and once
defined it does not change DO NOT CONFUSE it with the function and its value they are diffrint things

The function value can do all the things that other values can do you can pass it as an argument 
to a diffrent function you can pass it as a argument to a fuction if it is a var, or a let
it can be assigned a new value like so
*/
let launchMissiles = function() {
    missleSystem.launch("now");

if(safeMode) {
    launchMissiles = function() {/* do nothing */}
};
};
/* 
Declaration Notation
There is a shorter way to create a funtion binding it does work diffrently but what you would do is this
you put the keyword function first and then the function binding name followed by the () and body {}
as show below.
*/
function squareTwo(x) {
    return x * x;
}
/* it does not need a ; at the end

The on diffrence with this way of writing a function is that it changes the way it is read. insted of the top to down approch it will 
be moved to the top of their scope and can be uesd by all the code in that scope.
*/ 

/*
Arrow Functions
This would be the third notation for functions and looks diffrent from the other functions. Instead of using the function statement you would use
whats called a arrow (=>) like so
*/
const powerTwo = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result
};
// when there is only one parameter then you can omit the parentheses and if there is a single expression then you can also omit the {}
const squareThree = (x) => { return x * x};
const squareFor = x => x * x
//these two are the same excluding the diffrent binding names

 
//Optional Arguments
function squareFive (x) {return x * x;}
console.log(squareFive(4, true, "hedgehog"))
// this works and will produce 16 as a value

/*
With arguments javaScript is broad-minded about the number of argumnets meaning that if you pass to many it will ignor them like the function above
or if you pass to few it will assign undefind to them

You should be cafule you could pass somthing that was not intended but the upside to this is 
you can allow the function to be called with diffrent number of arguments like so
*/
function minus(a, b) {
    if(b === undefined) return -a;
    else return a - b;
}
console.log(minus(10))
// -10 becuse we did not provide the vaule for b 
console.log(minus(10, 5))
// 5 we provided the value for a, and b

/*
Recursion
A function the recalls itself is recursive
Pros
-Bridges the gap between elegance an complexity.
-Reduces the need for complex loops and auxiliary data structures.
-Can reduce time complexity easily with memoization.
-Works really well with recursive structures like tress and graphs.

Cons
-Slowness due to CPU overhead.
-Can lead to out of memory errors / stack overflow excepitons.
-Can be unnecessarily complex if poorly constructed.

start with a absoult base case condition to brake out and next keep getting the problom smaller
*/
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history + 5})`) || find( current * 3, `(${history * 3})`)
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
// This subject needs more study

/*
Functions and side effects

*/