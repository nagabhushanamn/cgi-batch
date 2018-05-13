

var myFunctions = [];

//---------------------------------------

for (var i = 0; i < 2; i++) {
    var f = function () {
        console.log(i);
    }
    //f();
    myFunctions.push(f)
}

//---------------------------------------

myFunctions[0](); // 0
myFunctions[1](); // 1