/*
Data Structures: Objects and Arrays

Data Sets
in order to work with a collection of say numbers insted of say one long string we can use whats called an array to store the data in

Arrays are a written as a list of values between square brackets the values are seprated by commas
such as.
*/
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]) 
//5 
console.log(listOfNumbers[0])
//2
console.log(listOfNumbers[2 - 1])
//3
/* 
As shown above the way you get the elements inside an array is you would use the brackets notation at the end. Also you
would use the index that the value/element is located 

index in arrys start at 0 and counts up from there look at the console log for getting the number 2
*/

/*
Properties
Almost all JavaScript values have properties except null and undefined such as the .length to get the length of somthing like a string
as an example myString.lenght would give us the length

the .lenght has acess to the string as a propertie of the string there are others like the Math object

The two ways you can access properties for JavaScript are a dot notation and square brackets

with the dot notation what follows after is the literal name of the property

Brackets are a bit diffrent in that the expression between the brackets is EVALUATED to get the property name
*/

/*
Methods
Strings array objects contain a number of propertys that hold function values one of them is the .length  
*/ 
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// this will show that the toUpperCase is a function
console.log(doh.toUpperCase())
//DOH

// Every String has the property toUpperCase 

// arrays have some of the same thaings like the .push method it will push a value to the end of the array

// more to come on Methods later

/*
Objects

Values of type Object are collections of properties to make an object value you do so by useing braces as an expression then 
you can put the properties in the and sperate them by a comma like array values.

After you name the poperties you use a colon to sperate the pop and the value.

if the pop name is not a valid name it will need to be in ""

for example
*/
let day1 = {
// popertie name and then the value
    squirrel: false,
//objects can have arrays and other objects in them
    events: ["work", "tuched tree", "pizza", "running"]
};
console.log(day1.squirrel)
//false
console.log(day1.wolf)
// this will read as undefined becuse this is not a prop in the day1 object so lets create it

day1.wolf = false
console.log(day1.wolf)
//now created and it has a boolen value of false

/*
Arrys are a kinda object that specialized in storing a sequences of thing and they can store objects in them and be known as an array of objects

Mutability

*/

