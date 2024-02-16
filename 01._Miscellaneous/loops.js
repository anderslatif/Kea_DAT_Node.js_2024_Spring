// loop method
// forEach, map, filter, sort, find, reduce

const dogs = [
    { name: "Lassie", famelevel: 13 },
    { name: "Beethoven", famelevel: 8 },
    { name: "Hachiko", famelevel: 18 },
    { name: "Balto", famelevel: 5 },
];

const increasedPublicityDogs = dogs.map((dog) => {
    dog.famelevel += 3;
    return dog;
});


const genderedDogs = increasedPublicityDogs.map((dog) => ({
    isMale: dog.name === "Lassie" ? false : true,
    ...dog
}));

console.log(genderedDogs);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

// console.log(numbers); // 1 2 3 4 5 
// console.log(doubledNumbers); // 2 4 6 8 10

const numberObjects = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
];
const doubledNumberObjects = numberObjects.map((number) => {
    number.number *= 2;
    return number;
});

// console.log(numberObjects);  // 2 4 6 8 10
// console.log(doubledNumberObjects); // 2 4 6 8 10

numbers.map((number, index, originalArray) => console.log(number, index, originalArray));
