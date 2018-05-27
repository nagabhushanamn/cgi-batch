
// Ex.2

// // hotel-module
// //---------------------------------------------------
// let hotel = {
//     getFood: function () {
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => { // async-1
//                 //console.log('hotel resolving/reject promise..');
//                 //reject('delivery-boys r busy'); return;
//                 setTimeout(() => { // async-2
//                     console.log('hotel resolving/reject promise..');
//                     resolve('full-birynai'); // response
//                     //reject('No Idly & `Vada');
//                 }, 3000);
//             }, 3000);
//         });
//         return promise;
//     }
// };
// //---------------------------------------------------
// // bar-module
// //---------------------------------------------------
// let bar = {
//     getDrink: function () {
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('bar resolving/reject promise');
//                 resolve('BEER');
//                 //reject('No Beer');
//             }, 3000);
//         });
//         return promise;
//     }
// }
// //---------------------------------------------------
// // person-module
// //---------------------------------------------------

// let person = {
//     doWork: function () {
//         console.log('person working....');
//         console.log('person feels hungry..requesting food on hotel module');
//         let promise1 = hotel.getFood();
//         //let promise2 = bar.getDrink();
//         console.log('got promise...defer actions to future..');
//         //Promise.all([promise1, promise2])
//         //Promise.race([promise1, promise2])
//         let newPromise = promise1.then((results) => {
//             console.log('yummy with ' + results);
//             return "half-biryani"; // rep.json();
//         }, (error) => {
//             console.log('oops ' + error);
//         });

//         newPromise.then(result => {
//             console.log('having ' + result);
//         });

//         console.log('cont.. with further work....end...');
//     }
// };
// person.doWork();

// //-------------------------------------------------------

// Ex.2

// //  View - Module
// document.getElementById('btn')
//     .addEventListener('click', () => {
//         // service-module ( e.g fetch api )
//         let promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit-5'); // 5s
//         promise
//             .then((resp) => {
//                 return resp.json();
//             }, (error) => {
//                 console.log('on error');
//                 console.log(errr);
//             })
//             .then(todos => {
//                 console.log(todos);
//             })

//     });
//------------------------------------------------------------------


// Ex.3

// service
let service = {
    loadUsers: function () {
        let promise = new Promise((resolve, reject) => {
            let promise = fetch('https://jsonplaceholder.typicode.com/users');
            let newPromise = promise.then((resp) => resp.json());
            newPromise.then(users => {
                while (true) {

                }
                setTimeout(() => {
                    resolve(users);
                }, 5000);
            });
        });
        return promise;

    }
};

// View
document.getElementById('btn')
    .addEventListener('click', () => {
        let promise = service.loadUsers();
        promise.then(users => {
            document.querySelector('.jumbotron')
                .innerText = JSON.stringify(users)
        })
    })

//-----------------------------------------------------------
