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


