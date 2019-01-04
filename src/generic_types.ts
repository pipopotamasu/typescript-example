function echo (data) {
  return data;
}

// console.log(echo(27).length);

const echo2: <T>(data: T) => T = echo;

// console.log(echo2(27).length);
console.log(echo2<number>(27));