// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function multiplyMatrixWASM(A: Array<i32[] >, B: Array<i32[]>): void{
  let C = new Array<i32[]>(A.length);
  for(let i = 0;i<A.length;i++){
    C[i] = new Array<i32>(A.length);
    for(let j = 0;j<A.length;j++){
      C[i][j] = C[i][j] + A[i][j]*B[i][j]
    }
  }
}


export function benchmarkWASM(): void {
  let before = Date.now();
  // console.log("Hello world from WASM!");
  // let A = new Array<Array<number>>(100);
  const MATRIX_SIZE = 10000;
  const A = new Array<i32[] >(MATRIX_SIZE);
  for(let i = 0;i< A.length;i++){
    A[i] = new Array<i32>(MATRIX_SIZE);
  }
  let B = new Array<i32[]>(MATRIX_SIZE);
  for(let i = 0;i< B.length;i++){
    B[i] = new Array<i32>(MATRIX_SIZE);
  }
  multiplyMatrixWASM(A, B);
  let after = Date.now();
  console.log("time in WASM:"+ (after - before).toString());
}

// In order to access the dom from WASM:https://github.com/lume/asdom
// export function hello_world_dom(): void{
//   let test_el = document.createElement("h8");
//   test_el.innerHTML = "Hello World from WASM!";
//   document.body.appendChild(test_el);
// }

