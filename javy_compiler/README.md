# To build javy_compiler:
`rustup target add wasm32-wasi`  
`sudo apt-get install cmake`  
`cd javy && make download-wasi-sdk`  
`cd javy && make && cargo install --path crates/cli`  
`rustup install stable && rustup default stable`      
`cargo install wasmtime-cli`   
`cargo install cargo-wasi`  
`cargo install wizer --all-features`  
`cargo +stable install cargo-hack --locked`  
`cd javy && make && cargo install --path crates/cli`