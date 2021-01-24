import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'

export function calculationCostHero(baseCost, lvl) {
  let convertBaseCost = convertingNumbers(baseCost)
  let numberBaseCost = convertBaseCost.number
  let coefficientPerGold = convertingNumbers(1.07 ** (lvl - 1))
  let numberCoefficientPerGold = coefficientPerGold.number
  let resultCostHero = convertingNumbers(numberBaseCost * numberCoefficientPerGold)
  let resultPowerOfTen = `${convertBaseCost.powerOfTen + coefficientPerGold.powerOfTen + resultCostHero.powerOfTen}`
  let resultNumberCostHero = resultCostHero.number
  if (resultNumberCostHero < 1 && resultPowerOfTen > 0) {
    resultNumberCostHero *= 1000
    resultPowerOfTen -= 3
  }
  return `${Math.trunc(resultNumberCostHero)}${abbreviationBigNumber[resultPowerOfTen]}`
}
