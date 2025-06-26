import { getCurrentTemperature } from './weather/weather.js'
import Calculator from './calculator/calculator.js'

const calculator = new Calculator()
console.log(
  calculator.add(1, 2, 2).add(5, 5, 5).subtract(10).multiply(10, 10).divide(10, 10).result()
)
;(async () => {
  try {
    const temperature = await getCurrentTemperature(28.61, 77.21)
    console.log('Current temperature in Delhi is:', temperature, '°C')
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error fetching temperature', error.message)
    } else {
      console.log('Error fetching temperature', error)
    }
  }
})()
