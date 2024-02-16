/* 
    Rules: Always use loop methods in modern JS. 
    for loops are only used when finger counting is needed (counting to a number).
*/

const numbers = [6, 7, 8, 9];

/* 
Argument 1: Brevity
Argument 2: Clarity (loop methods communicate intend)
Argument 3: No accidental indexing errors (out of bounds)
*/
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(number => console.log(number));

/* 
Argument 4: number of/in numbers confusion
Argument 5: not being able to access both element and index
Argument 6: side effects!!!
*/
let oddIndexSideEffect = [];
let index = 0;
for (number of numbers) {
    if (index % 2 === 1) {
        oddIndexSideEffect.push(Number(number));
    }
    index++;
}
console.log(oddIndexSideEffect);

const oddNumbers = numbers.filter((element, index) => index % 2 === 1);
console.log(oddNumbers);

/* Argument 7: Don't mutate the original list */
for (index in numbers) {
    numbers[index] = numbers[index] * 2;    
}

const doubledList = numbers.map(number => number * 2);

console.log(numbers);
console.log(doubledList);
