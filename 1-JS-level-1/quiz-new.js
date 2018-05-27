

//service
let teachService = {
    doTeach: function () {
        console.log(this.name + " teaching .js");
    }
}

// model
let tnr = { name: 'Nag' }

// View
let btn = document.getElementById('btn');

// btn.addEventListener('click', teachService.doTeach.bind(tnr))
// or
btn.addEventListener('click', (e) => {
    teachService.doTeach.call(tnr);
})
