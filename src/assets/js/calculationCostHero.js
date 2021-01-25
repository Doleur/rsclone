import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { heroesData } from './heroesData.js'

export function calculationCostHero(numberHero) {
  let heroLvl = heroesData[numberHero].lvl
  let convertBaseCost
  if (!+numberHero) {
    if (heroLvl <= 15) {
      if (!heroLvl) {
        heroesData[numberHero].cost.number = 5
        heroesData[numberHero].cost.powerOfTen = 0
        heroesData[numberHero].cost.abbreviation = ''
      } else {
        heroesData[numberHero].cost.number = Math.trunc((5 + heroLvl) * (1.07 ** (heroLvl - 1)))
        heroesData[numberHero].cost.powerOfTen = 0
        heroesData[numberHero].cost.abbreviation = ''
      }
      return
    }
    convertBaseCost = { number: 20, powerOfTen: 0 }
  } else {
    convertBaseCost = convertingNumbers(heroesData[numberHero].baseCost)
  }

  let numberBaseCost = convertBaseCost.number
  let coefficientPerGold = convertingNumbers(1.07 ** (heroLvl - 1))
  let numberCoefficientPerGold = coefficientPerGold.number
  let resultCostHero = convertingNumbers(numberBaseCost * numberCoefficientPerGold)
  let resultPowerOfTen = convertBaseCost.powerOfTen + coefficientPerGold.powerOfTen + resultCostHero.powerOfTen
  let resultNumberCostHero = resultCostHero.number
  if (resultNumberCostHero < 100 && resultPowerOfTen > 0) {
    resultNumberCostHero *= 1000
    resultPowerOfTen -= 3
  }

  heroesData[numberHero].cost.number = Math.trunc(resultNumberCostHero)
  heroesData[numberHero].cost.powerOfTen = resultPowerOfTen
  heroesData[numberHero].cost.abbreviation = abbreviationBigNumber[`${resultPowerOfTen}`]
}
