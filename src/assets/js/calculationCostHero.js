import { convertingNumbers } from './convertingNumbers.js'
import { decimalSystemExponent } from './decimalSystemExponent.js'

export function calculationCostHero(baseCost, lvl) {
  let convertBaseCost = convertingNumbers(baseCost)
  let numberBaseCost = convertBaseCost.number
    // let baseExponentOfTen = `${convertBaseCost.exponent}`
    // if (lvl === 0) return `${Math.trunc(numberBaseCost)}${decimalSystemExponent[baseExponentOfTen]}`
  let coefficientPerGold = convertingNumbers(1.07 ** (lvl - 1))
  let numberCoefficientPerGold = coefficientPerGold.number
  let resultCostHero = convertingNumbers(numberBaseCost * numberCoefficientPerGold)
  let exponentOfTen = `${convertBaseCost.exponent + coefficientPerGold.exponent + resultCostHero.exponent}`
  let resultNumberCostHero = resultCostHero.number
  if (resultNumberCostHero < 1 && exponentOfTen > 0) {
    resultNumberCostHero *= 1000
    exponentOfTen -= 3
  }
  return `${Math.trunc(resultNumberCostHero)}${decimalSystemExponent[exponentOfTen]}`
}
