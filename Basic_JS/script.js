// Log the output to console ------------
// console.log('Hello, World!');

// Variables and Data types ------------
// let a = 'zaheer';
// const b = 40;
// var c;

// Object is key-value pairs ------------
// key should be a string and can be any data type
// const person = {
//   name: 'Zaheer',
//   birthYear: 2001,
// };

//Statically type
// int a = 1
//Dynamically type (Hence JavaScript is Dynamically typed language) ------------
// let d = 1;
// console.log(d);
// d = 'Rank';
// console.log(d);

// Scopes - Block/Function/Global ------------
// Global scope -----------
// const n1 = 'Zaheer Khan'; // can be access by any one
// function logName() {
//   console.log(n1);
// }
// logName();

// Local Scope / Function scope ------------
// const someFunction = () => {
//   // Local scope #1
//   const name = 'someFunction';

//   console.log(name); // it will work

//   const anotherFunction = () => {
//     // Local scope #2
//     console.log(name);
//   };

//   anotherFunction();
// };

// console.log(name); // it will not work
// someFunction();

// Block Scope ------------
// if (true) {
//   const name = 'name';
//   console.log(name); // it will work
// }

// console.log(name); // it will not work
// ## TIPs : Always declare the variable where you want to use them

// Hoisting --------------------

// Closures --------------------
// const outer = () => {
//   const outerVar = 'Hello!';

//   const inner = () => {
//     const innerVar = 'Zaheer';

//     console.log(outerVar, innerVar);
//   };

//   inner();

// return inner;
// };

// outer();

// const innerFunc = outer();

// innerFunc(); // Now we can see both outerVar and innerVar because of Closures

// Array Map ------------------
// const inventory = [
//   { price: 5, name: 'Lemon' },
//   { price: 10, name: 'Tomato' },
//   { price: 20, name: 'Potato' },
// ];
// // Map will return a new array by give as we want

// const prices = inventory.map((item) => {
//   return item.price;
// });

// const names = inventory.map((item) => item.name);

// console.log(prices);
// console.log(names);
// Array Filter ------------------
// It will return an array after filtering by the specified condition.
// const numbers = [-1, 3, 10, -9, 15];

// const positiveNumbers = numbers.filter((number) => number >= 0);

// console.log(positiveNumbers);
// Array Reduce ------------------
// const groceryList = [29, 12, 45, 100, 150];

// const totalPrice = groceryList.reduce((sum, number) => sum + number);
// number will be the each index number
// sum will be accumulator

/// -------------------------------------
// OBJECTS
/// -------------------------------------

// Object is an unordered collection of related data in form of key value pairs
// const person = {
//   firstName: 'Zaheer',
//   lastName: 'Khan',
//   age: 21,
// };

// It is same as making separated variable for each key
// const firstName = 'Zaheer';
// const lastName = 'Khan';
// const age = 21;

// // We can make nested object
// const person2 = {
//   firstName: 'Zaheer',
//   lastName: 'Khan',
//   age: 21,
//   bike: {
//     brand: 'Royal Enfield',
//     year: 2023,
//   },
// };

// Accessing / Adding / Updating properties on object
// // # dot notation
// const object = {
//   key: 'value',
// };

// console.log(object.key); // output = value
// console.log(object); // output = value

// object.key2 = 'value2';

// console.log(object); // {
// //   "key": "value",
// //   "key2": "value2"
// // }

// // # Square bracket notation

// console.log(object['key']); // value

// // By using square brackets we can get dynamic value

// const property = 'key2';

// console.log(object[property]); // value2

// // Note : In object both key and value is a string but in Map DataStructure we can use any data type in it.

// Built - in - methods --------------
// const dog = {
//   name: 'puppy',
//   age: 2,
//   bark: () => {
//     console.log('Woof Woof!');
//   },
//   listAllProperties: function () {
//     // console.log(name, age); // here we will get not defined
//     console.log(this.name, this.age);
//   },
// };

// dog.bark(); // Woof Woof!
// dog.listAllProperties(); // puppy 2

// // # Object Methods
// // -> Object.keys() creates an array which contains all the keys of the object

// const employees = {
//   boss: 'Name1',
//   secretary: 'Name2',
//   sales: 'Name3',
//   accountant: 'Name4',
// };

// const positions = Object.keys(employees);

// console.log(positions); // (4) ['boss', 'secretary', 'sales', 'accountant']

// // -> Object.values() creates an array which contains all the values of the object
// const session = {
//   id: 1,
//   time: 'day-mon-year',
//   device: 'mobile',
//   browser: 'Chrome',
// };

// const sessionInfo = Object.values(session);
// console.log(sessionInfo); // (4) [1, 'day-mon-year', 'mobile', 'Chrome']

// // -> Object.entries() creates a nested array of the key/values pairs of a object

// const operatingSystem = {
//   name: 'Ubuntu',
//   version: '18.04',
//   license: 'Open Source',
// };

// const entries = Object.entries(operatingSystem);

// console.log(entries);

// entries.forEach((entry) => {
//   key = entry[0];
//   value = entry[1];

//   console.log(`${key}: ${value}`);
// });

// // -> Object.freeze() prevents modification to
// // properties and values of an object prevents properties from being added or remove from an object.
// const user = {
//   username: 'Zaheer',
//   password: '123123',
// };

// const admin = Object.freeze(user);

// admin.username = 'tryToChangeUsername';
// admin.password = 'tryToChangePassword';

// console.log(admin); // But there will be not change {username: 'Zaheer', password: '123123'}

// -> Object.seal() prevents properties from being added an object but we can modification of existing properties.
// const user = {
//   username: 'Zaheer',
//   password: '123123',
// };

// const newUser = Object.seal(user);

// newUser.username = 'Zaheer Khan';
// console.log(newUser); // {username: 'Zaheer Khan', password: '123123'}

// newUser.isAdmin = true;
// console.log(newUser); // Will not add to the object.

/// -------------------------------------
// Value - vs - Reference
/// -------------------------------------

//When a variable assign to a variable it copy its value.
//but in Object it copies its reference that's how they have same address/ Location at the memory.

// # Shallow copy ---------------------
// -> Cloning arrays - 1st way: Spread Operator
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const copiedNumbers = numbers; // copies the reference
// const newArray = [...numbers]; // copies the value. Called as shallow clone

// console.log(newArray); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(copiedNumbers === numbers); // true
// console.log(copiedNumbers === newArray); // false

// 2nd way: Array.slice().
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const copiedNumbers = numbers; // copies the reference
// const newArray = numbers.slice();

// Cloning Objects
// 1st way: Spread Operator
// 2nd way: Object.assign(NEW_OBJECT, CLONING_OBJECT)

// # Deep Clone.
// 1st way : using spread operator
// 2nd way: using JSON.parse(JSON.stringify(object)); // Stringify will remove all reference

/// -------------------------------------
// DOM
/// -------------------------------------

//  ##############################################
// ###############  Cheat-Sheet #################
// ##############################################
// STRING ------------
// string[index] - get a certain character of a string
// string.length - return the number of characters in a string
// string.split(' ') - returns an array of words of a string
// string.split('') - returns an array of characters of a string
// string.toLowerCase() - returns a lowercased string
// string.toUpperCase() - returns an uppercase string
// string.includes('substring') - checks whether a substring exists inside of a string [check the character case]

// ARRAY ------------
// array[index] - returns a certain value from an array
// array.indexOf('value') - returns the index of the first occurrence of that value
// array.length - returns the number of elements in the array
// array.join('') - returns a string of array values
// array.push(value) - adds the value to the end of the array
// array.pop() - removes the value from the end of the array
// array.unshift(value) - adds the value to the start of the array
// array.shift() - removes the value from the start of the array
// array.splice(fromIndex, number_of_elements) - removes the number_of_elements, starting from fromIndex from the array
// array.slice(fromIndex, toIndex) - copies a certain part of the array

// // for - looping ------------
// const emojis = ['😀', '😆', '🙃', '😍'];
// const wavingEmojis = [];

// for (let i = 0; i < emojis.length; i++) {
//   wavingEmojis.push(`👋${emojis[i]}👋`);
// }

// console.log(wavingEmojis);

// // forEach - array method for looping ------------
// emojis.forEach((emoji) => console.log(emoji));

// // map - array method for looping BUT IT HAS RETURNS ------------
// const wavingEmojis = emojis.map((emoji) => `👋${emoji}👋`);

// // filter ------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numbersBiggerThanFive = numbers.filter((number) => number > 5);

// // sort ------------
// const numbers = [3, 4, 1, 5, 4, 7, 2, 23, 12];

// const sortFromSmaller = numbers.sort((a, b) => a - b);
// const sortFromLargest = numbers.sort((a, b) => b - a);

// // VALUE VS REFERENCE (part 1: intro)
// // arrays ------------
// const numbers = [1, 2, 3, 4]; // #123asd
// const anotherNumbers = numbers; // #123asd

// anotherNumbers.push(5);

// // objects ------------
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const anotherPerson = person;

// anotherPerson.lastName = 'DOEEEE';

// console.log(numbers === anotherNumbers); // true
// console.log(person === anotherPerson); // true

// // VALUE VS REFERENCE (part 2: CLONING ARRAYS AND OBJECTS) ------------
// // SHALLOW CLONING - ONE LEVEL DEEP
// const original = [1, 2, 3];
// const newOriginal = [...original];

// // DEEP CLONING - TWO LEVELS DEEP
// const users = [
//   { name: 'John', age: 21 },
//   { name: 'Khan', age: 21 },
//   { name: 'Zaheer', age: 21 },
// ];
// const newUsers = JSON.parse(JSON.stringify(users));

// console.log(newUsers);
