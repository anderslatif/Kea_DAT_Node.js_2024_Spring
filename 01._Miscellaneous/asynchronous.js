// asynchronous code:
// Browser event handlers, network calls, buffers / streams, 
// working with files / directories, setTimeout / setInterval, 
// databases

// Javascript one thread - the main thread 

// Solution 1. Callbacks
// Problem: Callback hell, Pyramid of Doom

// Solution 2. Promises
// states: 
// 1. pending
// 2. fulfilled 
//     - resolved
//     - rejected

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            // throw new Error("some error");
            const functionReference = () => "NICE";
            resolve(functionReference)
        } catch (error) {
            // console.log(error);
            reject(error);
        }
    }, 2000);
})
.then((successMessage) => console.log(successMessage()))
.catch((errorMessage) => console.log(errorMessage));


/* assignment  Create a promisified function
that is, a function that returns a new promise
the function should be called myPromise
and it should either resolve as "Something Good" or reject as "Something Bad" 
create a 3 second timeout to simulate asynchronous behavior
*/


