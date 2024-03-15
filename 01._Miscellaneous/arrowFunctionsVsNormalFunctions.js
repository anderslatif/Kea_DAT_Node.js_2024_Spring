class Person {
    constructor(name) {
        this.name = name;
    }

    normalFunctionGetName() {
        setTimeout(function () {
            console.log(`Hello, ${this.name}`);
        }, 1000);
    }

    arrowFunctionGetName() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);
        }, 1000);
    }
}

const person = new Person("Anders");
person.normalFunctionGetName();
person.arrowFunctionGetName();
