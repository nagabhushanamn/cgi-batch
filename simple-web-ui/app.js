
//------------------------------------------------------------
// using DOM-API
//------------------------------------------------------------

// Query Elements & bind Event-listers

let alertBox = document.getElementsByClassName('alert')[0];
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

showBtn.addEventListener('click', function () {
    alertBox.style.display = 'block'
});

hideBtn.addEventListener('click', function () {
    alertBox.style.display = 'none'
});
//------------------------------------------------------------

// Timer API

let images = [
    './images/1.jpeg',
    './images/2.jpeg',
    './images/3.jpeg',
    './images/4.jpeg',
    './images/5.jpeg'
];

let imgEle = document.getElementById('imgEle');

document.querySelector('#startBtn')
    .addEventListener('click', function () {
        let idx = 0;
        let interval = setInterval(function () {
            let image = images[idx];
            imgEle.src = image;
            idx++;
            if (idx === images.length) {
                idx = 0;
            }
        }, 1000);

        document.querySelector('#stopBtn')
            .addEventListener('click', function () {
                clearInterval(interval);
            })

    });


//------------------------------------------------------------

// XHR / Fetch API

document.querySelector('#todos-btn')
    .addEventListener('click', function () {

        //
        let promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        promise
            .then(function (response) {
                return response.json();
            })
            .then(function (todos) {
                document.querySelector('.jumbotron')
                    .innerText = JSON.stringify(todos);
            });

    })

//------------------------------------------------------------    