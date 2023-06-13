

import wasmPath from "./wasm_modules/hello-world-rust/pkg/hello_world_rust_bg.wasm";
import init, * as wasmModule from "./wasm_modules/hello-world-rust/pkg/hello_world_rust";

let wasmInitialized = undefined;
async function initializeWasm() {
  if (wasmInitialized === undefined) {
    await init(wasmPath).then( (out) => {
      return out;
    }

    );

  }
  await wasmInitialized;
}

export async function initialize() {
  await initializeWasm();
   console.log("Bechmark in from JS in WASM:" + wasmModule.get_benchmark_result());
}


console.log("Hello from JS!");
initialize();