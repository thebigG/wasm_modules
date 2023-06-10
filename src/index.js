

import wasmPath from "./wasm_modules/hello-world-rust/pkg/hello_world_rust_bg.wasm";
import init, * as wasmModule from "./wasm_modules/hello-world-rust/pkg/hello_world_rust";


// let parser: ReplayParser | null = null;
// export type ParseInput = File | string;

function getParser() {
  if (parser == null) {
    throw new Error("assumed parser is defined");
  }
  return parser;
}

// let wasmInitialized: Promise<wasmModule.InitOutput> | undefined = undefined;
let wasmInitialized = undefined;
async function initializeWasm() {
  if (wasmInitialized === undefined) {
    await init(wasmPath).then( (out) => {
      return out;
    }

    );
    // wasmInitialized = timeit(() => init(wasmPath)).then(([out, elapsedMs]) => {
    //   console.log(`initialized wasm: ${formatFloat(elapsedMs)}ms`);
    //   return out;
    // });
  }
  await wasmInitialized;
}

export async function initialize() {
  await initializeWasm();
  wasmModule.greet();
  // return (parser = new ReplayParser(wasmModule));
}


console.log("Hello from JS!");
initialize();

// import { greet } from "./wasm_modules/hello-world-rust/pkg/hello_world_rust.wasm";
// const rust = import('./wasm_modules/hello-world-rust/pkg');


// rust
//   .then(m => m.greet('World!'))
//   .catch(console.error);














// import init from "./wasm_modules/hello-world-rust/pkg/hello_world_rust.js";

// (async () => {

//   const { greet, myFunction2 } = await import('./wasm_modules/hello-world-rust/pkg/hello_world_rust.js');

//   greet();
//   // myFunction2();

// })();

console.log("Hello23");
// greet();
// import { add, hello_world } from "./wasm_modules/hello_world_js/build/release.js";
// document.body.innerText = add(1, 2).toString();
// let iDiv = document.createElement('div');
// iDiv.id = 'block';
// iDiv.className = 'block';
// document.body.appendChild(iDiv);

// let test_el = document.createElement("h8");
// test_el.innerHTML = "Hello World!";
// document.body.appendChild(test_el);