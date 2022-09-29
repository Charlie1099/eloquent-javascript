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

/* there are special name that are resurved in javaScript 
that you can not use called keywords if you seach for them you can find a list of them 
also they can not start with a number
*/



