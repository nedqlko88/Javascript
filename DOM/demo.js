/*jshint esversion: 6 */
console.log(x);
var x = 5;
console.log(x);

// this will produce a error ( y is not defined)
// console.log(y);
// let y = 10;
// console.log(y);

function printName() {
    const name = "Ned";

    setTimeout(() => {
        console.log(name);
    }, 3000);
}

printName();