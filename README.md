# To Build
```
npm install
npx webpack --mode development
npx webpack serve --mode development --config webpack.config.js

```


Load wasm modules.


# Rust to WASM

`cargo install cargo-generate`  
`cargo generate --git https://github.com/rustwasm/wasm-pack-template`
`curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`  
` wasm-pack build -t web`
