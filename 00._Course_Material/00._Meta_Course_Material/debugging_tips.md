# Debugging 

The goal is to reflect on different debugging approaches since this seems to be a missing element of the education.

There is no perfect approach to debugging. Some methods work better for some people, but there are certain truths. 

## Reading the stack trace

This should be your first step. Familiarize yourself with stack traces and learn how to extract information from them.

Remember, in web development, errors can occur in:

1. The browser console (client-side errors)

2. The terminal (server-side errors)

Below is a Javascript stacktrace for a bug that you will encounter often. 

> Note: In JavaScript stack traces the error trigger appears in the top. In Python, for instance, it's at the bottom.

```plaintext
file://<ABSOLUTE_PATH>/app.jsjs:26
person.name;
       ^

TypeError: Cannot read properties of undefined (reading 'name')
    at <ABSOLUTE_PATH>/app.js:26:8
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:323:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:120:12)

```

### Task 1: Based on the above stack trace, answer the following questions:

1. What is the name of the file that the error occured in?

2. Which line number?

3. How many chars from the left-margin?

<details> 
  <summary>Reveal solution</summary>

    1. File name: `app.js`

    2. Line number: `26`

    3. Chars from the left-margin: `8`
</details>

### Task 2: Based on the stacktrace above, can you describe the code snippet that likely caused this error?

<details> 
  <summary>Reveal solution</summary>

    We are attempting to access the `name` property on a variable of type `undefined` .

    Notice the tiny pointer at the top of the stack trace. 
    
    It refers to `person.name` and because of the error we know that `person` is undefined. 

    There exists 3 possibilities as to why:

    1. It has not been declared but not initialized: ```js let person;```. 

    2. It has has been explicitly set to `undefined`: ``js const person = undefined;```

    3. The variable was either set to `undefined` after its declaration or within a function the argument of that name is `undefined`. 

    Note: If the `person` variable wasn't defined as either a variable or exists as an argument we would expect a different error. 
    
    The stack trace below illustrates that. Note which part that the tiny pointer points to now:

    ```plaintext
        file://<ABSOLUTE_PATH>/app.js:25
        person.name;
        ^

        ReferenceError: person is not defined
            at file:///<ABSOLUTE_PATH>/app.js:25:1
            at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
            at async ModuleLoader.import (node:internal/modules/esm/loader:323:24)
            at async loadESM (node:internal/process/esm_loader:28:7)
            at async handleMainPromise (node:internal/modules/run_main:120:12)

        Node.js v21.6.2

    ```
</details>

When debugging, if the stack trace does not sufficiently explain or locate the bug, proceed to the next step.

## Isolate the code 

Separate the functioning code from the problematic code.

1. Begin by commenting out large sections of code to identify a working baseline. 

2. Gradually uncomment sections to isolate the issue. 

This strategy helps in pinpointing the location of the bug.

## Understand the problem better

The philosophy behind [rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) is useful. 

Verbalizing the problem the problem is best and trying to explain it to a peer is the most optimal. 

During this process you should come to new realizations about the problem space and what you know about it and what you are unsure of. 

Instead of focusing on the solution try to figure out the following questions:
 
1. What is your expected outcome from the code?

2. How does the actual outcome differ from your expectations?

3. Step through the code and identify discrepencies. 

4. Analyze the observed behavior. Why might the output be as it is?

5. Explore potential adjustments to the code and apply them.

## Debugging Tools

1. **Server-side**: 
  * `console.log()` outputs to the terminal.
  * The IDE debugger: To be explained in the next section.

2. **Client-side**: 
  * `console.log()` will output to the browser console.
  * Add the `debugger` keyword in the Javascript code and open DevTools. Once the code reaches the keyword it will break. 
  * Use DevTools to set breakpoints and step through the code. 

3. **API testing**: Any REST client (like Postman) allows us to test our API directly. CORS is only an issue in the browser.


#### Use the interactive debugger in your IDE

After having isolated the code you should have a suspicion of where the bug might occur. 

You now have an idea of where to step through the code whiling observing variable states and their changes.

> Note: Be aware that asynchronous behavior or scoping issues can lead to unpredictable or inconsistent effects on variables, complicating the debugging process.

### Take breaks

Still stuck? Take a break, go for a walk or sleep on it. 

From my own experiences, knowing when to step back works. Solutions have magically come to me after a good night's sleep.
 
Keep your chin up and remember, embracing challenges is what we do as programmers.
