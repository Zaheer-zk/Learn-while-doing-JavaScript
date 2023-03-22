// // # Selecting Element
// const el = document.getElementById('input__element');
// console.log(el); // h1#input__element.input__text

// const el2 = document.getElementsByTagName('h1');
// console.log(el2); // HTMLCollection(2) [h1#input__element.input__text, h1.input__text, input__element: h1#input__element.input__text]

// const el3 = document.getElementsByClassName('input__text');
// console.log(el3); // HTMLCollection(2) [h1#input__element.input__text, h1.input__text, input__element: h1#input__element.input__text]

// const el4 = document.querySelectorAll('h1');
// console.log(el4); // NodeList(2) [h1#input__element.input__text, h1.input__text]

// const el5 = document.querySelector('#input__element');
// console.log(el5); // <h1 id=​"input__element" class=​"input__text">​Test text1​</h1>​

// const el6 = document.querySelector('.input__text');
// console.log(el6); // <h1 id="input__element" class="input__text">Test text1</h1>

// // # Elements properties and methods.
// const el7 = document.querySelector('#input__element');
// console.log(el7.classList); // DOMTokenList ['input__text', value: 'input__text']
// console.log(el7.className); // input__text

// const button = document.querySelector('.button');

// button.addEventListener('click', (e) => {
//   alert('Clicked');
// });

// button.getBoundingClientRect(); // View-Port Details

// console.log(button.hasAttribute('type')); // false

// button.removeAttribute('addAttributeHere'); // It will the specified attribute

// // # Creating, Traversing and Removing Nodes
// const h1El = document.createElement('h1');
// h1El.textContent = 'This is a node';
// button.appendChild(h1El); // Element.appendChild(element);

// const subjects = document.querySelector('.subjects');
// console.log(subjects.firstElementChild);

// const subjectList = document.querySelector('.subject__list');
// subjectList.remove();
