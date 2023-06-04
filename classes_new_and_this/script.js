// The new keyword
// -> it create a new object

// here both are same
// const person = {};
// const person1 = new Object();

// const arr = []; // literal array
// const arr2 = new Array();

// NOTE : In javaScript everything is object

// the this keyword -> use to reference the current object
// console.log(this);
// /*
// [object Window]
//  */

// const person = {
//   name: 'John',
//   getName() {
//     console.log(this);
//   },
// };

// person.getName(); // {"name": "John"}

// function car(color, brand, wheel) {
//   this.color = color;
//   this.brand = brand;
//   this.wheel = wheel;
// }

// const blueCar = new car('blue', 'BMW', 4);
// console.log(blueCar);
// /* {
//   "color": "blue",
//   "brand": "BMW",
//   "wheel": 4
// } */
// console.log(blueCar.color); // blue

///----------------------------
// ------------- Class
// ----------------------------
// -> Class is a schema for an object that can save many values

// class Person {
//   constructor(name, age, isWorking) {
//     this.name = name;
//     this.age = age;
//     this.isWorking = isWorking;
//   }
// }

// const user = new Person('Zaheer', 21, true);
// const user2 = new Person('John', 21, false);
// console.log(user); // { "name": "Zaheer", "age": 21,"isWorking": true};
// console.log(user2); // { "name": "John", "age": 21,"isWorking": false};

// We can also create using function programming the above code

// const createPerson = (name, age, isWorking) => ({ name, age, isWorking });

// const user = createPerson('Zaheer', 21, true);
// console.log(user); // { "name": "Zaheer", "age": 21,"isWorking": true};
