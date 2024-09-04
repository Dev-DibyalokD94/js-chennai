/*

as per main documentation we have primarily 2 types of data which got categorised as
Primitives and non-primitives(reference types) but how and why? 

why? -> becoz it depends on the way the data gets stored and fetched from the memory. ( call by value and call by reference )

# Primitives - 7 types

String -> call by value
Number
Boolean
Null
Undefined
Symbol
BigInt

#Reference Type (Non primitives)
Array
Objects
Functions


JS is a dynamically typed language, as we don't need to specify the type of data we are going to assign a variable 
and we can change the type during coding


*/


const st = 100
const st1 = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 65652155478854213554579853655134586658213155215422356422512252211252n;



// Array
const heroes = ["Shaktiman", "Naagraj", "Doga"]

//objects
let myObjs = 
{
    name : "DD",
    age : 30
}

//Function
const myFunction = function(){
    console.log("Hello Function")
}

console.log(typeof myFunction);



//Memory +++++++++++++++++++++++++++++++++++++++++++++

//Stack and Heap

/*

Primitive -> Stack
Non-primitive -> Heap


*/

let myYoutubeName = "Dibyalok's"

let anotherName = myYoutubeName
anotherName = "ChaiandCoffee"

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email: "user.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "DD@dmail.com"

// console.log(userOne);
// console.log(userTwo);


