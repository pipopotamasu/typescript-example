function sayHello(): void {
  console.log("Hello!")
}

function multiply(value1: number, value2: number): number {
  return value1 * value2
}

let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; error example
// myMultiply(); error example
myMultiply = multiply;
console.log(myMultiply(5,2))