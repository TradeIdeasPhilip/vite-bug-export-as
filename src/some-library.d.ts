
// I added an interesting return type just to prove that we are using this .d.ts file, not just the original .js file.
export declare function runMe() : 5 | "hello world";

export { runMe as runMeAlias }

// The original problem came when I tried to call
// import { TextBufferGeometry } from "three/examples/jsm/geometries/TextGeometry";
// after using npm to install threejs.

// This file is a small test case.
// I think I've reproduced the relevant parts of the problem here.
