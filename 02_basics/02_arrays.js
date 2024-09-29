const marve_hero = ["thor", "iron man", "spider man"]
const dc_hero = ["superman", "flash", "batman"]

// marve_hero.push(dc_hero) //here the problem comes are the second array is injected into the first array, not combined, but injected 

// console.log(marve_hero);

// const allheros = marve_hero.concat(dc_hero)  //this gives the actual concat of the 2 arrays
// console.log(allheros);

//spread concept :

const all_hero = [...marve_hero, ...dc_hero]
// console.log(all_hero)
// console.log(typeof all_hero)

const hello = [1,2,3,4,[5,6,7],8,9,[47,[747,47474], 49]]

// console.log(hello)
const spreadedArr = hello.flat(Infinity)
// console.log(spreadedArr);


console.log(Array.isArray("Alok"));
console.log(Array.from("Alok"));
console.log(Array.from({name: "ALok"})); // as we have not mentioned if we want to have the key value to be converted to an array, that's 
//why it is giving empty string

//now how to convert many variables into an array:
const a1 = 300
const a2 = 400
const a3 = 500

console.log(Array.of(a1,a2,a3));







