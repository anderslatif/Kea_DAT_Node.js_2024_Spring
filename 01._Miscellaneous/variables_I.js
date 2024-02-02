// we will always default to using const 
const myName = "Anders";


const me = {
};
me.name = myName;

// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and thus also HAS to be assigned

// SyntaxError: Missing initializer in const declaration
// const test;

const hobbies =  ["coding", "eating"];

hobbies.push("sleeping");

// hobbies = [];
// hobbies = "";

me.hobbies = hobbies;

console.log(me);



