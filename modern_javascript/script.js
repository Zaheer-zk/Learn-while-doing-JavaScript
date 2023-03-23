// # ECMAS6

// -> const and let
// -> Arrow function
// -> Default parameters
// -> Template Strings

// # Imports and Exports
// import { data } from './data.js';
// import { text } from './data.js';
// console.log(`Data listed here ${data}`); // Data listed here 1,2,3,4,5,6
// console.log(`text listed here ${text}`); // Data listed here A, B, C, D, E, F

// // # Rest and spread operator
// const add = (...args) => {
//   return args.reduce((acc, val) => {
//     return acc + val;
//   });
// };

// console.log(add(2, 2, 2, 2));

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(...numbers);

// const newNumbers = [...numbers, 7, 8, 9];

// console.log(newNumbers);

// // # Object Destructuring
// const person = {
//   name: 'John',
//   age: 21,
//   car: {
//     color: 'Black',
//     wheel: 4,
//   },
//   animals: {
//     dog: {
//       name: 'Dog',
//       age: 3,
//     },
//     cat: {
//       name: 'Cat',
//       age: 3,
//     },
//   },
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.car);
// console.log(person.car.color);
// console.log(person.car.wheel);
// console.log(person.animals);
// console.log(person.animals.dog);
// console.log(person.animals.dog.name);
// console.log(person.animals.dog.age);
// console.log(person.animals.cat.name);
// console.log(person.animals.cat.age);

// /*
// John
// 21
// {color: 'Black', wheel: 4}
// Black
// 4
// {dog: {…}, cat: {…}}
// {name: 'Dog', age: 3}
// Dog
// 3
// Cat
// 3
// */

// // Using destruction -> use key for destructure

// const {
//   name,
//   age,
//   car: { color, wheel },
//   animals: { dog, cat },
// } = person;
// console.log(name);
// console.log(age);
// console.log(color);
// console.log(wheel);
// console.log(dog.name);
// console.log(dog.age);
// console.log(cat.name);
// console.log(cat.age);

// Array destructuring
// const introduction = ['Hello', 'I', 'm', 'Zaheer'];

// // const [mess, , , name] = introduction;
// const [...mess] = introduction;

// // console.log(mess, name);
// console.log(mess);
