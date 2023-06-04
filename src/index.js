
// Modified version of "release.js" that is generated by asc(AssemblyScript Compiler)--For some reason the auto-generated code
// uses a variable called "await", which is illegal since await is a keyword.
// This is the problem that "initWASM" solves. Not a long-term solution, but will do for now.
// I suspect this might have to do with parcel making some assumptions
// since if I move the code to html and do not use parcel, I don't have this problem.


async function instantiate(module, imports = {}) {
    const adaptedImports = {
      env: Object.assign(Object.create(globalThis), imports.env || {}, {
        "console.log"(text) {
          // ~lib/bindings/dom/console.log(~lib/string/String) => void
          text = __liftString(text >>> 0);
          console.log(text);
        },
        abort(message, fileName, lineNumber, columnNumber) {
          // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
          message = __liftString(message >>> 0);
          fileName = __liftString(fileName >>> 0);
          lineNumber = lineNumber >>> 0;
          columnNumber = columnNumber >>> 0;
          (() => {
            // @external.js
            throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
          })();
        },
      }),
    };
    const { exports } = await WebAssembly.instantiate(module, adaptedImports);
    const memory = exports.memory || imports.env.memory;
    function __liftString(pointer) {
      if (!pointer) return null;
      const
        end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
        memoryU16 = new Uint16Array(memory.buffer);
      let
        start = pointer >>> 1,
        string = "";
      while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
      return string + String.fromCharCode(...memoryU16.subarray(start, end));
    }
    return exports;
  }
  async function initWASM(){
    const {
        memory,
        add,
        hello_world,
      } = await (async url => instantiate(
        await (async () => {
          try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
          catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
        })(), {
        }
      ))(new URL("release.wasm", import.meta.url));
      hello_world();
  }

  initWASM();


// import { add, hello_world } from "./wasm_modules/hello_world_js/build/release.js";
// document.body.innerText = add(1, 2).toString();
let iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
document.body.appendChild(iDiv);

let test_el = document.createElement("h8");
test_el.innerHTML = "Hello World!";
document.body.appendChild(test_el);