// hoisting 
// getRandomInt();

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunctionOneLiner = 
        (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);


                            // string // callback function
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running.`;

const runningResult = genericActionPerformer("Alex", running);

// console.log(runningResult);

console.log(genericActionPerformer("Louis", (name) => `${name} is eating.`));

// in both we pass the function reference directly instead of packing it into a variable
