'use strict';
// ###############
// #### ASYNC ####
// ###############
// #### If we return a value this function update a wrap that value then return a promise.####
// async function getData() {
//   return 'Hello';
// }

// const promise = getData();
// promise.then((res) => console.log(res)); // Hello

// #### async function always return a promise.####

// async function getData() {
//   return new Promise((resolve, reject) => {
//     resolve('Promise is resolved');
//   });
// }

// const promise = getData();
// promise.then((res) => console.log(res)); // Hello

// #### Using await with async ####
// async and await are use to handle promises.
// await is the keyword that can only be used inside an async function.
// await used before any promise.

// const p = new Promise((resolve, reject) => {
//   resolve('Promise is resolved');
// });

// async function handlePromises() {
//   const data = await p;
//   console.log('data is :', data);
// }

// handlePromises();

// #### EXAMPLE - 2 ####

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise is resolved');
//   }, 10000);
// });

// async function handlePromises() {
//   console.log('Before Promise'); // 2
//   const data = await p;
//   console.log(data); // 4
//   console.log('After Promise'); // 5
// }

// console.log('Before handlePromises'); // 1 calling sequence
// handlePromises();
// console.log('After handlePromises'); // 3

// #### EXAMPLE - 3 ####

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise is resolved');
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise is resolved');
//   }, 5000);
// });

// Here call stack suspend the execution of the function on line 77
// After that when the waiting is complete it calls the function again and execute
// but it will not wait here for p2 because p2 already complete 5s waiting before p1
// waiting.

// async function handlePromises() {
//   console.log('Before Promise');
//   const data1 = await p1;
//   console.log(data1);
//   console.log('After Promise');

//   const data2 = await p2;
//   console.log(data2);
//   console.log('After Promise 2');
// }

// handlePromises();

// #### REAL WORLD EXAMPLE ####
// fetch data from github server and show it.

// const API_URL = 'https://api.github.com/users/Zaheer-zk';
// async function fetchData() {
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   console.log(data.name); // Zaheer khan
// }
// fetchData();
