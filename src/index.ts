

import wasmPath from "./wasm_modules/hello-world-rust/pkg/hello_world_rust_bg.wasm";
import init, * as wasmModule from "./wasm_modules/hello-world-rust/pkg/hello_world_rust";
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

function createBenchTable()
{
    //  Create table
    let table = document.createElement("table");
    table.setAttribute("class", "table");
    table.setAttribute("id", "bench_table");
 
   //  Create table header
    let head = document.createElement("thead");
 
    let tr = document.createElement("tr");
 
    let table_column = document.createElement("th");
    table_column.innerHTML = "Col_1";
    
    let table_column2 = document.createElement("th");
    table_column2.innerHTML = "Col_2";
    tr.appendChild(table_column);
    tr.appendChild(table_column2);
    head.appendChild(tr);
    
    table.appendChild(head);




    //  Create table body
    let body = document.createElement("tbody");

    let body_tr = document.createElement("tr");

    let table_row_header = document.createElement("th");
    table_row_header.innerHTML = "Col_header";
    body_tr.appendChild(table_row_header);

    let table_row_item = document.createElement("td");
    table_row_item.innerHTML = "ItemContent";
    body_tr.appendChild(table_row_header);
    body_tr.appendChild(table_row_item);

    body.appendChild(body_tr);
    
    table.appendChild(body);

    
    document.body.appendChild(table);
}

export async function initialize() {
  await initializeWasm();
   console.log("Bechmark in from JS in WASM:" + wasmModule.get_benchmark_result());
   createBenchTable();
   
}

initialize();

