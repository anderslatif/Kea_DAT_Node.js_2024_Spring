# Linting Overview

In this course it is a requirement for your exam project to adhere to clean code style guides. But how how you achieve this is up to you. 

Consider setting up a linter early in the semester to get used to its suggestions.

**Definition**: A linter is a tool that can analyze code for errors, stylistic isses and deviations from coding standards. 

**Limitation**: A linter only does static analysis, meaning that it doesn't run to code.

**Motivation**: Linters are heavily used in companies now to ensure that the code looks presentable and uniform. 


## Types of linters

Each major programming language comes with its own linter(s). 

For Javascript there are multiple:

1. ESLint: The industry standard. Highly configurable and comes with pre-defined style guides. 

2. Prettier: Opinionated code formatter. Can be combined with a linter such as ESLint. 

3. Others: Standard, JSHint, JSLint and TSLint for TypeScript, 


### [ESLint](https://eslint.org/)


How to get started: https://eslint.org/docs/latest/use/getting-started.

Consider whether you want to set it up globally or locally.

It is [not recommended](https://eslint.org/docs/latest/use/getting-started#global-install) to set it up globally, but the downside of setting it up locally is that you will have to do it every time for each new project. 


### [Prettier](https://prettier.io/)

Prettier is an opinionated code-formatter, so consider whether this is the right choice for you. 

If you are using VSCode you can install it through the Prettier extension. 

It can be combined with other linters such as ESLint: https://prettier.io/docs/en/integrating-with-linters.html.


### [Standard](https://www.npmjs.com/package/standard)

Though I recommend EsLint this will help you get a taste of what linters do. 

In a Node.js project run the following command:

```bash
$ npx standard
```
This will lint all the Javascript files and output information about the errors it found. 

You can add the `--fix` flag to the above command if you want `standard` to make changes in the files. 

