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
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
    }

}