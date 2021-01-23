import { numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { decimalSystemExponent } from './decimalSystemExponent.js'
import { heroesData } from './heroesData.js'

export function calculationHeroDamage(baseDPS, lvl) {
  let convertBaseDPS = convertingNumbers(baseDPS)
  let numberBaseDPS = convertBaseDPS.number
  let resultHeroDamage = convertingNumbers(numberBaseDPS * (1.07 * lvl))
  let exponentOfTen = convertBaseDPS.exponent + resultHeroDamage.exponent
  return {
    number: Math.trunc(resultHeroDamage.number),
    exponent: exponentOfTen,
    numberName: decimalSystemExponent[`${exponentOfTen}`]
  }
}


export function calculationTotalDamage() {
  let totalClickDamage = heroesData[0].damage()
  let totalDPS = 0

  for (let hero = 1; hero < numberHeroes; hero++) {
    let heroDamage = heroesData[hero].damage()
    let numberHeroDamage = heroDamage.number
    let exponentOfTen = heroDamage.exponent
    totalDPS += numberHeroDamage * (10 ** exponentOfTen)
    console.log(totalDPS)
  }

  return {
    clickDamage: totalClickDamage.number,
    DPS: totalDPS
  }
}
