// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function hello_world(): void {
  // return "";
  console.log("Hello world from WASM!");
}

// In order to access the dom from WASM:https://github.com/lume/asdom
// export function hello_world_dom(): void{
//   let test_el = document.createElement("h8");
//   test_el.innerHTML = "Hello World from WASM!";
//   document.body.appendChild(test_el);
// }

