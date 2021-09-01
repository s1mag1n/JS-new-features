"use strict";

let number = 10;

function showMessage(text) {
    console.log(text)
    //let number = 20;
    console.log(number);
}

showMessage("hello!!!");
console.log(number);

const server = function(){
    console.log('server start...');
};

server();

const calc = (x, y) => x+y;
// const calc = (x, y) => {
//  return x+y
// };

//const calc = x => x+10;

console.log(calc(10,5));