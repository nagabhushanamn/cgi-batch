console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';

import Rx, { Observable } from 'rxjs/Rx';

// //--------------------------------------------

// const observableStream = Observable.create((observer) => {
//     let n = 0;
//     setInterval(function () {
//         n++;
//         observer.next(n); // event...// push new element into stream
//     }, 1000);
// });

// //--------------------------------------------
// // Even Nums-View
// let evenStream =
//     observableStream
//         .filter(n => n % 2 === 0 ? n : undefined);
// evenStream.subscribe((ele) => {
//     console.log('subscribing - ' + ele);
// })
// //--------------------------------------------


// //--------------------------------------------
// // ODD Nums-View
// let oddStream =
//     observableStream
//         .filter(n => n % 2 !== 0 ? n : undefined);
// oddStream.subscribe((ele) => {
//     console.log('subscribing - ' + ele);
// })
// //--------------------------------------------------------


//------------------------------------------------------------

let myForm = document.getElementById('myForm');

let userModel = {};

let obervableStream = Observable.fromEvent(myForm, 'keyup');
// const debounceTimeStream = obervableStream.debounceTime(2000);
obervableStream.subscribe((e) => {
    userModel[e.target.id] = e.target.value
    console.log(userModel);
});
//------------------------------------------------------------

