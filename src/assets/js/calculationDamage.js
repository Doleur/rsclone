import { numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { heroesData } from './heroesData.js'

export function calculationHeroDamage(baseDPS, lvl) {
  let convertBaseDPS = convertingNumbers(baseDPS)
  let numberBaseDPS = convertBaseDPS.number
  let resultHeroDamage = convertingNumbers(numberBaseDPS * (1.07 * lvl))
  let resultPowerOfTen = convertBaseDPS.powerOfTen + resultHeroDamage.powerOfTen
  return {
    number: Math.trunc(resultHeroDamage.number),
    powerOfTen: resultPowerOfTen,
    abbreviation: abbreviationBigNumber[`${resultPowerOfTen}`]
  }
}


export function calculationTotalDamage() {
  let totalClickDamage = heroesData[0].damage()
  let totalDPS = 0

  for (let hero = 1; hero < numberHeroes; hero++) {
    let heroDamage = heroesData[hero].damage()
    let numberHeroDamage = heroDamage.number
    let powerOfTenHeroDamage = heroDamage.powerOfTen
    totalDPS += numberHeroDamage * (10 ** powerOfTenHeroDamage)
  }

  return {
    clickDamage: totalClickDamage.number,
    DPS: totalDPS
  }
}
