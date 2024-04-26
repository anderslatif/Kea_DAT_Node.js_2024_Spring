# How to define environment variables with Vite

Install dotenv:

```bash
$ npm install dotenv
```

Create a `.env` file in the root of your project and create a variable:

```text
VITE_BASE_URL=http://localhost:8080
```

All environment variables **must** start with `VITE_`.

You can now access the variables through `import.meta.env`:

```javascript
console.log(import.meta.env.VITE_BASE_URL)
```

No need for running dot env config anywhere. 

