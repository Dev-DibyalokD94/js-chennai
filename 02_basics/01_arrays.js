//arrays

//shallow copy and deep copy - read these in details

const myArr = [0,1,2,5,8,6,8, true, "hitesh"] //resizable as well
const myArr2 = new Array(1,2,3,4,5)


// console.log(myArr2);
// myArr2.push(47)
// console.log(myArr2);

// myArr2.pop() //removes the last value
// console.log(myArr2);

// myArr2.unshift(99) //adds the value at the start of the array and shifts other elements by 1
// console.log(myArr2);


// myArr2.shift() //removes the added array at the start
// console.log(myArr2);

// console.log(myArr2.includes(9)); //false
// console.log(myArr2.indexOf(9)); //-1

// const newArr = myArr2.join();

// console.log(myArr2)
// console.log(newArr) //converts the array to a string
// console.log(typeof(newArr))

//*********************** */
//slice and splice
//*********************** */

console.log("A ", myArr2);
const myn1 = myArr2.slice(1,3)
console.log(myn1);
console.log("B ", myArr2);

const myn2 = myArr2.splice(1,3)
console.log(myn2);
console.log("C ", myArr2)





