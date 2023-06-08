/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * assembly/index/multiplyMatrixWASM
 * @param A `~lib/array/Array<~lib/array/Array<i32>>`
 * @param B `~lib/array/Array<~lib/array/Array<i32>>`
 */
export declare function multiplyMatrixWASM(A: Array<Array<number>>, B: Array<Array<number>>): void;
/**
 * assembly/index/benchmarkWASM
 */
export declare function benchmarkWASM(): void;
