import Calculator from './calculator.ts'

describe('Calculator', () => {
  let calculator: Calculator

  beforeAll(() => {
    calculator = new Calculator()
  })

  beforeEach(() => {
    calculator.reset()
  })

  describe('add method', () => {
    // afterEach(() => {
    //   calculator.reset()
    // })

    it('adds a single number', () => {
      const result = calculator.add(1).result()

      expect(result).toBe(1)
    })

    it('adds a multiple numbers', () => {
      const result = calculator.add(1, 9).result()

      expect(result).toBe(10)
    })
  })

  describe('subtract method', () => {
    it('subtracts a single number', () => {
      const result = calculator.subtract(1).result()

      expect(result).toBe(-1)
    })

    it('subtracts a multiple numbers', () => {
      const result = calculator.subtract(1, 9).result()

      expect(result).toBe(-10)
    })
  })

  describe('multiply method', () => {
    it('multiplies a single number', () => {
      const result = calculator.add(1).multiply(10).result()

      expect(result).toBe(10)
    })

    it('multiplies multiple numbers', () => {
      const result = calculator.add(1).multiply(10, 10).result()

      expect(result).toBe(100)
    })
  })

  describe('divide method', () => {
    it('divides a single number', () => {
      const result = calculator.add(100).divide(10).result()

      expect(result).toBe(10)
    })

    it('divides multiple numbers', () => {
      const result = calculator.add(100).divide(10, 10).result()

      expect(result).toBe(1)
    })

    it('throws an error when divided by zero', () => {
      const callWithZeroDivision = () => calculator.add(100).divide(0).result()

      expect(callWithZeroDivision).toThrow('Cannot divide by zero')
    })
  })
})
