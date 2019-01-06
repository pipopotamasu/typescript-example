class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = '20';
console.log(simpleMath.calculate())