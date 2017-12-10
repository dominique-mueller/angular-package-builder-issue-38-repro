# angular-package-builder-issue-38-repro

Reproduction of **[angular-package-builder issue #38](https://github.com/dominique-mueller/angular-package-builder/issues/38)**.

<br>

## Description

- `my-lib` contains the library
  - One simple component plus module and barrel (written from scratch, aligned with provided example)
  - Basic library setup (Angular 5.x, TypeScript 2.4.x, angular-package-builder)
- `my-app` contains the application
  - Created with Angular CLI 1.6 (no further cleanup)
  - Basic integration of library (package.json, module import, component usage in template)

<br>

## Prepare (library and application)

```
cd my-lib
npm install
npm run build
cd ../my-app
npm install
```

## Reproduction

- Running `npm run start` (serving with default options) leads to the error (in the browser console)
- Running `npm run start:aot` (serving with AoT enabled) does not lead to the error though
- Running `npm run start:symlinks` (serving with symlinks being preserved enabled) does also not lead to the error

If copying over the library into the `node_modules` folder (instead of locally installing and thus linking it), the issue also seems to go
away.

## Solution

Enable AoT in watch mode / preserve symlinks if library is used via local install
