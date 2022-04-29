import './style.css'

import { goodStuff, reallyGoodStuff } from './local-lib'
import {runMeAlias, runMe} from "./some-library"

const app = document.querySelector<HTMLDivElement>('#app')!

// These three lines work perfectly.
goodStuff();
reallyGoodStuff();
const thisWorks = runMe();

// This should work, but it doesn't.
const thisFails = runMeAlias();

// Get rid of some messages about unused variables.
console.log({thisWorks, thisFails});

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
