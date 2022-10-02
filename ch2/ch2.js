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
// also you can chain more else statments if you so chose

/*
While and do Loops
The purpuse of these are if you had a program you wanted to run multiple time to get to a value and then
continue from where it left off when it got to that point and continue runing for example
*/
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
};// this will incriment the value of number by 2 each time untell number is equle to 12 untell it eveluates to true.

// you can have more than one value in a while remaber the condition in the () will be evealuated and wen true the while loop stops
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
    
}
console.log(result);//1024
// if you switch out the values it would still work and counter would give you the amount of times that it incresed be for the while = true

/* 
There also whats called a "do while" statement it differs from a while statment in that it will exeutes at lest once there 
is a great explination at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
here is an exampile
*/
let yourName;
do {
    yourName = prompt("what is your name?");
} while (!yourName);
console.log(yourName);
// The do statment is whats going to run at least once and then the while is the condition that if it is true is will keep runing untell false

/*
for Loops
Many loops follow the same pattern as while loops in that there is a counter binding a while condition and the the
test expression there must be two ;
   counter binding | while condition | tester to see if the end value is meet*/
   
for(let number = 0; number <= 12; number = number + 2) {
    console.log(number)
};// this is exactly the same as the while loop on line 93 to 100.

/*
Breaking out of a Loop
you can insert a brake statment in a loop if the end condition = true and there is a chance that it will enter an infinite loop
*/

/*
Switch's
There is a construct called switch that will help you avoid haveing to use a long if else statement
that should look better for example
*/
switch (prompt("What is the wether like?")) {
    case "rainy":
        console.log("Get a umbrella!")
        break;
    case "sunny":
        console.log("Dress light")
        
    case "cloudy":
        console.log("Go out side")
        break;    
    default:
        console.log("Unknown weather!!!!")
        break;
};// if you want to run code across two case's then you can ommit the break statment

// There is a capitalization standard that is followed in javaScript where the first word is not capitalized but any word after is 
// As alway comment your cod to describe what is going on