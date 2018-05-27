"use strict"

// const person = {
//     name: 'Nag',
//     age: 34
// };

//------------------------------------------------------------
// Object.defineProperty(person, 'name', { configurable: false, writable: false });

// delete person.name;
// person.name = "Nag N"

//------------------------------------------------------------

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

//person.address = "blr";
//delete person.age;
// person.name = "";


//------------------------------------------------------------


// ES5



// const person = {
//     _name: 'Nag',  // data properties
//     _age: 34,
//     set name(name) { // accessor property
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         return this._name;
//     }
// };

// person.name = ""; // set
// console.log(person.name); // get

