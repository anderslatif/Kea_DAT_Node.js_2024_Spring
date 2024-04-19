# How to install Svelte Navigator 

If you get the following error:

```bash
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: eclipse_movies-client@0.0.0
npm ERR! Found: svelte@4.2.15
npm ERR! node_modules/svelte
npm ERR!   dev svelte@"^4.2.12" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
```


```bash
$ npm i svelte-navigator --force
```


## Install `is-ci` and `husky`

If you get the following errors:

```bash
npm ERR! command sh -c is-ci || husky install
npm ERR! sh: is-ci: command not found
npm ERR! sh: husky: command not found
```

Then install the packages locally:

```bash
$ npm install husky is-ci
```

Then run the following command:

```bash
```