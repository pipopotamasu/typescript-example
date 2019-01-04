function betterEcho<T> (data: T): T {
  return data;
}

console.log(betterEcho<string>('Max').length);
// console.log(betterEcho<number>(27).length);
// console.log(betterEcho<{name: string, age: number}>({ name: 'Max', age: 27 }).length)