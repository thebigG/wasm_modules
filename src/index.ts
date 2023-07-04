

//@ts-ignore 
import wasmPath from "./wasm_modules/hello-world-rust/pkg/hello_world_rust_bg.wasm";
import init, * as wasmModule from "./wasm_modules/hello-world-rust/pkg/hello_world_rust";
// TODO: https://github.com/AssemblyScript/assemblyscript/issues/2301
// import {benchmarkWASM } from "./wasm_modules/hello_world_js/build/release.js";
require('./bulma_styles.scss');

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

function newRowItemHeader(cellContent: string): HTMLElement
{
   let table_row_item = document.createElement("th");
   table_row_item.innerHTML = cellContent;

  return table_row_item;
}

function newRowItem(cellContent: string): HTMLElement
{
  let table_row_header = document.createElement("td");
  table_row_header.innerHTML = cellContent;

  return table_row_header;
}

class Benchmark
{
  language: string;
  executionTime: number; // in milliseconds

  constructor(language: string, executionTime: number)
  {
    this.language = language;
    this.executionTime = executionTime;
  }
}

function createBenchTable(benchmarks: Array<Benchmark>)
{
  //  Create table
  let table = document.createElement("table");
  table.setAttribute("class", "table");
  table.setAttribute("id", "bench_table");

  //  Create table header
  let head = document.createElement("thead");

  let tr = document.createElement("tr");

  let table_column_header = newColumn("Operation/Algorithm");
  tr.appendChild(table_column_header);

  //  Create table body
  let body = document.createElement("tbody");

  let body_tr = document.createElement("tr");
  
  
  body_tr.appendChild(newRowItemHeader("Matrix Multiplication"));
  for( let b of benchmarks)
  {
    let benchHeader = newColumn(b.language);
    tr.appendChild(benchHeader);
    body_tr.appendChild(newRowItem(b.executionTime.toString() + " Mills"));
  }
    
    head.appendChild(tr);
    table.appendChild(head);

    body.appendChild(body_tr);
    
    table.appendChild(body);

    document.body.appendChild(table);
}

function newColumn(colName: string): HTMLElement {
  let table_column2 = document.createElement("th");
  table_column2.innerHTML = colName;
  return table_column2;
}

export async function initialize() {
  await initializeWasm();
   
  benchmarkWASM();
   
   let becnhmarks = new Array<Benchmark>();
   becnhmarks.push(new Benchmark("RUST/WASM", wasmModule.get_benchmark_result()));
   createBenchTable(becnhmarks);
}

initialize();

