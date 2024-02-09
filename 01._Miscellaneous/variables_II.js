"use strict";

// totalGlobalVariable = "Never EVER!!! do this!!!";
// var globalVariable = "Also NEVER ever do this!!!";

// use const whenver possible, else use let 

// about const:
// const cannot be undeclared or redeclared
// but its value can be changed as long as you don't change the assignment


// global scope

function someOtherScope() {
    // function scope
}

{
    // block scope
    // console.log("What is this?");
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    // console.log(someValue);
}

{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}

// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}