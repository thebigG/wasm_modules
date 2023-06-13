mod utils;

use std::time::SystemTime;
use wasm_bindgen::prelude::*;
use js_sys::Date;
use js_sys::Math;
use seeded_random::Random;
use web_sys::console;
use crate::utils::set_panic_hook;

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
pub fn get_benchmark_result() -> JsValue {
    set_panic_hook();
    benchmark_rust()
}

fn multiply_matrix_rust(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>){
    // let mut before = js_sys::Date::now();
    let mut c: Vec<Vec<i32>> = Vec::with_capacity(a.len());
    c.reserve(a.len());
    let  a_len = a.len();
    let mut i  = 0;

    while i < a_len {
            c.push(Vec::with_capacity(a_len));
            let mut k  = 0;
            while k < a_len {
                c[i].push(0);
                k += 1;
            }
        i += 1;
    }
    // let mut after = js_sys::Date::now();
    // let mut  elapsed = JsValue::from(after - before);
    // console::log_1(&"time in Rust for push:".into());
    // console::log_1(&elapsed);
    // console.log("time in Rust for push:"+ (after - before).toString());
    i = 0;
    // before = js_sys::Date::now();
    let mut j  = 0;
    let mut k = 0;
    let mut result = 0.0;
    let rng = Random::new();
    let new_seed = rng.seed();
    let rng2 = Random::from_seed(new_seed);
    while i < a_len {
         j  = 0;
        // c.push(Vec::with_capacity(a_len));
        while j < a_len {
            k = 0;
            while k < a_len {
                 // let before = js_sys::Date::now();
                // c[i][j] += (a[i][k]*b[k][j]);
                //   c[i][j] = 0 + a[i][k];;
                //   c[i][j] = 2;
                  result = rng2.i32() as f32 * 5.0;
                 // let after = js_sys::Date::now();
                k += 1;
            }
            j += 1;
        }
        i += 1;
    }

    // after = js_sys::Date::now();
    // elapsed = JsValue::from(after - before);
    // console::log_1(&"time in Rust for push:".into());
    // console::log_1(&elapsed);


}

fn new_matrix_i32(size: usize) -> Vec<Vec<i32>>{
    let mut matrix: Vec<Vec<i32>> = Vec::with_capacity(size);
    // let mut matrix: Vec<Vec<i32>> = Vec::new();
    // matrix.reserve(size);
    let  a_len = matrix.capacity();
    let mut i  = 0;
    let a_len_js = JsValue::from(a_len);
    // console::log_1(&a_len_js);
    while i < a_len {
        let mut j = 0;
        // matrix[i]  = Vec::with_capacity(size );
        // matrix[i]  = Vec::with_capacity(size );
        matrix.push(Vec::with_capacity(size));
        // matrix[i].reserve(a_len);
        while j < a_len{
            matrix[i].push(2);
            // matrix[i][j] = 2;
            j += 1;
        }
        i += 1;
    }
    matrix
}

fn benchmark_rust() -> JsValue {

    let number_of_runs: f64 = 50.0;
    let mut avg_execution_time: f64 = 0.0;
    for _i in 0..number_of_runs as i32{
        let a = new_matrix_i32(32);
        let b = new_matrix_i32(32);
        let before = js_sys::Date::now();
        multiply_matrix_rust(&a, &b);
        let after = js_sys::Date::now();
        avg_execution_time += after - before;
    }
    let elapsed = avg_execution_time / number_of_runs;
    JsValue::from(elapsed)
}
