# node-ts-jest-using-ts-jest template

## About

A template for **Node environment** adding **ES Modules + Typescript** support to both **source and test code**.

**Jest** framework has been used to unit test the source code.

## Source Code

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

## Test Code

### 1. ES Modules

Jest doesn't support ES Modules out of the box but [it supports as per the steps mentioned in ECMAScript Modules article](https://jestjs.io/docs/ecmascript-modules).

As per this, Jest needs to be executed like this:

```
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

**Note:** AFAIK, for Typescript support, this is required only when running jest with **babel-jest** and NOT when running with **ts-jest**.

### 2. Typescript

Typescript support in Jest can be achieved by either [babel-jest](https://www.npmjs.com/package/babel-jest) or [ts-jest](https://github.com/kulshekhar/ts-jest).

> You may read **Typescript support in Jest** section below to understand the difference.

This template uses **ts-jest** and

- Resolves to the same Typescript and its compiler added in **package.json**.
- Which further tells you to rename `.js` to `.ts` files if you add types into the JS files
- Adds a **tsconfig.test.json** to include typescript only for the test files in the **src** directory as per the below configuration

  ```
  "include": ["src/**/*.test.*", "src/**/*.spec.*"],
  ```

  > Please note that Typescript support to the test files uses a different tsconfig file i.e. **tsconfig.test.json**.

## Typescript support in Jest

Typescript support in Jest comes in 2 flavors:

- Using [babel-jest](https://www.npmjs.com/package/babel-jest)
- Using [ts-jest](https://github.com/kulshekhar/ts-jest)

This template uses **ts-jest** flavor for the typescript.

### 1. babel-jest

Please note that **babel-jest** gets installed along with **jest** and it will transform the files if babel configuration file e.g. **babel.config.js** is present.

When you use **ts-jest** (as in this template), babel configuration is not required and in turn **babel-jest** would not transform the files even though it is installed.

Typescript support with Babel (**babel-jest**) is purely transpilation and does not type-check the test files.

#### ts-jest vs babel-jest

Before providing the files to the Jest to run them:

**ts-jest** will

1. strip types,
2. transpile, and
3. type-check the test files

whereas **babel-jest** will

1. strip types, and
2. transpile only

You may choose based on this difference.

## Scripts

### 1. Source Code

1. Execute
   `npm run dev` to compile the typescript files into the **dist** directory in watch mode. It starts a process which detects changes in files and keeps compiling to the **dist** directory upon file changes.
1. Execute
   `npm run build` to compile the typescript files into the **dist** directory
1. Execute
   `npm run format` to fix formatting issues using prettier
1. Execute
   `npm run lint` to report eslint issues
1. Execute
   `npm run lint:fix` to report eslint issues and fix auto-fixable issues

### 2. Test Code

1. Execute `npm run test` to run test cases using Jest
1. Execute `npm run test-tc` to type check the test files

---

That's all folks!
