function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Type is number
let result2 = subtract(5, 3); // Type is number

// Explicit type assertion (use with caution)
//let result3: number = <number>"5"; //this is wrong
// let result3: number = Number("5"); this is ok

console.log(result1); // 8
console.log(result2); // 2