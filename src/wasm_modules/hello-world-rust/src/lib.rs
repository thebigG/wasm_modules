mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, hello-world-rust!");
    print!("Print in rust!");
    using_web_sys();
}


fn using_web_sys() {
    use web_sys::console;

    console::log_1(&"Hello using web-sys".into());

    // let js: JsValue = 4.into();
    // console::log_2(&"Logging arbitrary values looks like".into(), &js);
}
