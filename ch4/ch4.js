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
Objects can be modified however when it comes to other values such as numbers, strings, and Booleans they can not be so they are 
whats called immutable it is impossible to change values of thoes types.

Objects work in away so you can change their properties causing a single object value to change.

also there is a diffrence in having two references to the same object and having two objects that contain the same properties
for example
*/
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2)
// this will show true becuse obj2 value is set to equl obj1
console.log(object1 == object3)
// this will show as false becuse these are two diffrent objects even if they have the same value

object1.value = 15;
console.log(object2.value)
// the value will show 15 becuse object1s value was updated so object2 will update in tandum

console.log(object3)
// the value will still be 10 becuse it was never updated

/*
When you use a const binding tho the object can not be changed becuse it is a const variable
you can update them like so 
*/
const score = {visitors: 0, home: 0};
//This is ok
score.visitors = 1 

// This is not
//score = {visitors: 0, home: 0}

/*
when you compare objects in JavaScript with the == operator it will compare by the identity it will show true if they are the same
value. But it will show false even if they have the same identical properties there is no deep comparison in JavaScript which compares
object by contents. you would have to write that yourself.
*/

let journal = []
function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}
// this is allowed the poperty name and value are the same thing 

/*
Looping over objects

In javaScript you can loop over an array with a for loop with like this 

for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i]
    // do somthing...
}

but with objects it is diffrent you would do this like so and this still works for arrays
for (let entry of JOURNAL) {
    consle.log(`${entry.events.length} events`);
}
the of key word will loop over the elementd of the value given after of. This can work for other data structures.

Further Arrayology
In arrays to add or remove things on the end you would use push to add and pop to remove.

Adding and removing from the start you would use unshift and shift
*/

let todoList = []

function remember(task) {
    todoList.push(task);
}
// removes and returns the first element
function getTask() {
    return todoList.shift();
}

//inserts the element to the front of the array
function rememberUrgently(task) {
    todoList.unshift(task);
}

// you can also get a specific tasks index how you would do that is indexOf(the number of the index you want here)
console.log([1, 2, 3, 4].indexOf(2))
//1
//you can start the search from the end with doing .lastIndexOf method
/*
these methods do take a second optional arg that will let you chose where to start the search from a index

Another useful array method is the .slice it will take off all of the elements after the start index and end index
and will return a new array

the start index is included 
but the end index is not

*/
console.log([1, 2, 3, 4].slice(2, 4))
//[2, 4]
console.log([1, 2, 3, 4].slice(2))
//[2, 3, 4]

// Intrestingly youi can glue arrys togeather by useing the cancat method like so
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// ["a", "b", "d", "e"]

/*
Strings and there Properties

You can ues properties like length and toUpperCase sence they are string values but you can not just make a new property for example
*/
let kim = "Kim";
kim.age = 20;
console.log(kim.age);
/*  
this will show as undefiend the reason is that vlaues of type string, number, and boolean are not objects so it will not store
the new propertie also they are immutable.
 
There are other usefull properties to be aware of
*/
console.log("one two three".indexOf("ee"));
//this will get the index of the string that is contaning more than one character not the same as the array method that will only get one

console.log("  okay \n".trim());
// will show okay with the white space removed that is wht the trim will do

console.log(String(6).padStart(3, 0));
// shows 006 

//you can also split a string on every occurrence of another string with split and join it again with join like so
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// wil show [ 'Secretarybirds', 'specialize', 'in', 'stomping' ]