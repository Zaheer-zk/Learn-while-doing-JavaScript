// f(a, b) into f(a)(b)
// curring is basically calling a function by a single parameter which return a function with its clousers.
// #### ex - 1 ####
// function func(a) {
//   return (b) => {
//     console.log('a: ', a, ' b: ', b)
//   }
// }

// console.log(func(5)(6))

// #### ex - 2 ####
// Why should we use curring
/** 
✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.
*/

// #### ex - 3 ####
// sum(2)(3)(4)

// function sum (a) {
//   return (b) => {
//     return (c) => {
//       console.log(`${a}, ${b}, ${c}`)
//       return a+b+c
//     }
//   }
// }

// const sumValue = sum(2)(3)(4)
// console.log(sumValue)

// #### ex - 4 ####
// Create a function which take parameters as func(arithmeticOpp)(para1,para2)

// function evaluation(arithmeticOpp) {
//   return (param1) => {
//     return (param2) => {
//       if (arithmeticOpp === '+') return param1 + param2;
//       else if (arithmeticOpp === '-') return Math.abs(param1 - param2);
//     };
//   };
// }

// console.log('evaluation :>> ', evaluation('+')(2)(4));
// console.log('evaluation :>> ', evaluation('-')(2)(4));

// #### ex - 5 ####
