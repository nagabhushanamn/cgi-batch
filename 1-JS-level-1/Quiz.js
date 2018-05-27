


var myFunctions = [];
//---------------------------------------------
function getF(i) {
    var f = function () {
        console.log(i);
    }
    return f;
}
for (var i = 0; i < 2; i++) {
    //myFunctions.push(getF(i));
    //myFunctions.push((function (i) { return function () { console.log(i) } })(i));
    //myFunctions.push(((i) => { return () => { console.log(i) } })(i));
    myFunctions.push(((i) => () => console.log(i))(i));
}
//---------------------------------------------
myFunctions[0]();
myFunctions[1]();