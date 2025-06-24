# node-jest-using-ts-jest-template

## About

A template for **Node environment** having following features

1. **ES Modules:** To interpret Javascript Files having `.js` extension as ES Modules
2. **Typescript:** To adds Typescript support for both source and unit test code
3. **Jest**: To add Jest framework for unit testing

### 1. ES Modules

This template interprets Javascript files as ES Modules.

Adding `"type": "module"` in **package.json** enables [Node.js to interpret JS files as ES Modules](https://nodejs.org/api/esm.html#enabling).

There is no need to add `.mjs` extension for JS files because by default files with `.js` extension would be treated as ES Modules.

> Inversly, adding `"type": "commonjs"` in **package.json** enables [Node.js to interpret JS files as CommonJS Modules](https://nodejs.org/api/esm.html#enabling). This is NOT what we want for this template.

### 2. Typescript

This template

- Uses `"typescript": "^5.8.3"` for the typescript compiler to compile TS files to JS files
- Which further tells you to rename `.js` to `.ts` files if you add types into the JS files
- Adds a **tsconfig.json** to include typescript for files in **src** directory but exclude test files as per below configuration
  ```
    "include": ["src/**/*"],
    "exclude": ["**/*.test.*", "**/*.spec.*"]
  ```

### 3. Jest

#### 3.1. Add ES Modules Support

Jest doesn't support ES Modules out of the box but [it supports as per the steps mentioned in ECMAScript Modules article](https://jestjs.io/docs/ecmascript-modules).

As per this, Jest needs to be executed like this:

```
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

**Note:** AFAIK, for Typescript support, this is required only when running jest with **babel-jest** and NOT when running with **ts-jest**.

#### 3.2. Add Typescript Support

Typescript support in Jest comes in 2 flavors:

- Using [babel-jest](https://www.npmjs.com/package/babel-jest)
- Using [ts-jest](https://github.com/kulshekhar/ts-jest)

This template uses ts-jest flavor for the typescript.

##### How to decide between babel-jest and ts-jest?

Please note that **babel-jest** gets installed along with **jest** and it will transform the files if babel configuration file e.g. **babel.config.js** is present.

When you use **ts-jest** (as in this template), babel configuration is not required and in turn **babel-jest** would not transform the files even though it is installed.

Typescript support with Babel (**babel-jest**) is purely transpilation i.e. it strips types and transpiles and will not type-check your test files.

##### Do you need Transpilation Only or Both Transpilation and Type-Checking?

Before providing the files to the Jest to run them:

**ts-jest** will

1. strip types,
2. transpile, and
3. type-check the test files

whereas

**babel-jest** will

1. strip types, and
2. transpile only

## Scripts

1. Execute
   `npm run build` to compile the typescript files into the **dist** directory.
2. Execute `npm run test` to run test cases using Jest

---

That's all folks!
