# `export as` in *.d.ts vs Vite

This project shows off [a problem in Vite](https://github.com/vitejs/vite/issues/7964).

I originally found the problem when I tried to `import { TextBufferGeometry } from "three/examples/jsm/geometries/TextGeometry.js"`.
My program worked perfectly when I was using `TextGeometry` instead of `TextBufferGeometry`.

After digging around some, the problem appears to be in Vite.
Vite fails when a *.d.ts file uses `export as`.  

When I write a file in TypeScript I can use `export as` just fine.
The problem appears when there is a *.js file and a corresponding *.d.ts file. 

I get the same results when trying to access a file in ./src as I do for a file in an npm import.

I created this project is a minimum way to reproduce the problem.

According to `tsc` and VS Code, there are no errors in this project.

When I run `npm run dev`, that command shows no errors.  However, when I try to run the program in a browser, I see the following error in the JavaScript console and my code will not execute.  `Uncaught SyntaxError: The requested module '/src/some-library.js' does not provide an export named 'runMeAlias' (at main.ts:4:1)`

When I try to build this project for production I immediately see an error message:

```
philipsmolen@Philips-Air export-as-test % npm run build

> export-as-test@0.0.0 build
> tsc && vite build

vite v2.9.6 building for production...
✓ 6 modules transformed.
'runMeAlias' is not exported by src/some-library.js, imported by src/main.ts
file: /Users/philipsmolen/Documents/fun-git/export-as-test/src/main.ts:4:0
2: 
3: import { goodStuff, reallyGoodStuff } from './local-lib'
4: import {runMeAlias, runMe} from "./some-library"
   ^
5: 
6: const app = document.querySelector<HTMLDivElement>('#app')!
error during build:
Error: 'runMeAlias' is not exported by src/some-library.js, imported by src/main.ts
    at error (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:198:30)
    at Module.error (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:12521:16)
    at Module.traceVariable (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:12879:29)
    at ModuleScope.findVariable (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:11509:39)
    at Identifier.bind (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:7768:40)
    at CallExpression.bind (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:5342:23)
    at CallExpression.bind (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:8950:15)
    at VariableDeclarator.bind (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:5342:23)
    at VariableDeclaration.bind (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:5338:31)
    at Program.bind (/Users/philipsmolen/Documents/fun-git/export-as-test/node_modules/rollup/dist/shared/rollup.js:5338:31)
philipsmolen@Philips-Air export-as-test % 
```