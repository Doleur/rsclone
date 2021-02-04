export function sumNumbers (number1, number2) {
  let sum
  let sumPowerOfTen
  let differencePowerOfTen = number1.powerOfTen - number2.powerOfTen
  if (differencePowerOfTen < 0) {
    differencePowerOfTen *= -1
    sum = +number1.number + number2.number * 10 ** differencePowerOfTen
    sumPowerOfTen = number1.powerOfTen
  } else {
    sum = number1.number * 10 ** differencePowerOfTen + +number2.number
    sumPowerOfTen = number2.powerOfTen
  }
  return {
    number: sum,
    powerOfTen: sumPowerOfTen
  }
}
