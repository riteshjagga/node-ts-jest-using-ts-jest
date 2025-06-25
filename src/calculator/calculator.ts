export default class Calculator {
  private value: number;

  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  add(...numbers: number[]) {
    for (const number of numbers) {
      this.value += number;
    }

    return this;
  }

  subtract(...numbers: number[]) {
    for (const number of numbers) {
      this.value -= number;
    }

    return this;
  }

  multiply(...numbers: number[]) {
    for (const number of numbers) {
      this.value *= number;
    }

    return this;
  }

  divide(...numbers: number[]) {
    for (const number of numbers) {
      if (number === 0) {
        throw new Error('Cannot divide by zero');
      }

      this.value /= number;
    }

    return this;
  }

  reset(): this {
    this.value = 0;

    return this;
  }

  result(): number {
    return this.value;
  }
}
