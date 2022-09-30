// Chapter 2 take aways //
/*
Expressions
a fragment of code that produces a value is called an expresion every value that is writen literally is an expression
like (var num = 22) 

also epressions can have other expressions in then 

after the end of an expression you want to put a ; at the end this will let javaScript know that that is the end 
of the satement other wise it could conbine multiple expressions togather 
*/

/*
Bindings
With bindings javaSript will be able to keep a internal state/remember things that are going on
how that will works is you use a special word like let, const, or var it will signal that we are 
defineing a binding.
*/
let caught = 5 * 5;
// the binding name can be use as an exprssion also the bindings value can change like so
let mood = "light";
console.log(mood);
//light
mood = "dark"; // if you had put let in the start it will throw a error your way beecuse it is allready defined 
console.log(mood);
//dark

/* 
Binding Names
There are special name that are resurved in javaScript 
that you can not use called keywords if you seach for them you can find a list of them 
also they can not start with a number
*/

/*
The Enviorment
Bindings and values make up the Enviorment also you can make ways to interact with that enviorment for 
example a webrowser and the websites. 
*/

/*
Functions
functions are a pice of the program that is Wrapped in a value that can be applied in order to run a program
for example
*/
prompt("Enter password"); 
/* 
This is whats called exicuting a function call other names are invoking, calling or applying
you will need to put () at the end to complet the call and you can pass in values that are called arguments 
some functions will use diffrent arguments
*/

/* 
Return values
When a function produces a value it is said that it will return it 
*/
console.log(Math.min(2, 4) + 100);// the result will make a value of 102 

// Control Flow 
// when you have a program that has multiple functions and values it will read it top down
let theNumber = Number(prompt("pick a number"));
console.log("your number is the square root of " + theNumber * theNumber);
// this would be an exapil of a straight line control flow

// Conditional Exiecution
/*Tis is where you have a progoram that needs to do multiple things or somthing based on a action 
to do this you use a if statment that will exicute only if a conditon is true*/
let thatNumber = Number(prompt("pick a number"));
if (!Number.isNaN(thatNumber)) {
    console.log("Your Number is the square root of " + thatNumber * thatNumber);// this is alos a example of what a block of code is
}
// The if statment can also handle two separate exicution paths with the else statment after the if like so
let theyNumber = Number(prompt("pick a number"));
if (!Number.isNaN(theyNumber)) {
    console.log("Your Number is the square root of " + theyNumber * theyNumber);
} else {
    console.log("Hey where is my number?")
}
// also you can chain more else statments on

