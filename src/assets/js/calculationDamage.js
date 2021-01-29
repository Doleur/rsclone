import { gameStats, displayClickDamage, displayDPS, numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { heroesData } from './heroesData.js'

export function calculationHeroDamage(numberHero) {
  if (!heroesData[numberHero].lvl) return
  let convertBaseDPS = convertingNumbers(heroesData[numberHero].baseDPS)
  let numberBaseDPS = convertBaseDPS.number
  let resultHeroDamage = convertingNumbers(numberBaseDPS * (1.07 * heroesData[numberHero].lvl))
  let resultPowerOfTen = convertBaseDPS.powerOfTen + resultHeroDamage.powerOfTen


  heroesData[numberHero].damage.number = Math.trunc(resultHeroDamage.number)
  heroesData[numberHero].damage.powerOfTen = resultPowerOfTen
  heroesData[numberHero].damage.abbreviation = abbreviationBigNumber[`${resultPowerOfTen}`]
}


export function calculationTotalDamage() {
  gameStats.clickDamage.number = heroesData[0].damage.number + 1
  gameStats.clickDamage.powerOfTen = heroesData[0].damage.powerOfTen
  gameStats.clickDamage.abbreviation = heroesData[0].damage.abbreviation

  let totalDPS = 0
  let totalPowerOfTen = 0
  let sumDPS
  for (let numberHero = 1; numberHero < numberHeroes; numberHero++) {
    let numberHeroDamage = heroesData[numberHero].damage.number
    let powerOfTenHeroDamage = heroesData[numberHero].damage.powerOfTen
    let differencePowerOfTen = totalPowerOfTen - powerOfTenHeroDamage
    if (differencePowerOfTen < 0) {
      differencePowerOfTen *= -1
      sumDPS = numberHeroDamage * 10 ** differencePowerOfTen + totalDPS
    } else {
      sumDPS = numberHeroDamage + totalDPS * 10 ** differencePowerOfTen
    }
    let convertSumDPS = convertingNumbers(sumDPS)
    totalDPS = convertSumDPS.number
    totalPowerOfTen = differencePowerOfTen + convertSumDPS.powerOfTen
  }
  gameStats.DPS.number = Math.trunc(totalDPS)
  gameStats.DPS.powerOfTen = totalPowerOfTen
  gameStats.DPS.abbreviation = abbreviationBigNumber[`${gameStats.DPS.powerOfTen}`]
}

export function displayDamage() {
  displayClickDamage.innerHTML = `${gameStats.clickDamage.number}${gameStats.clickDamage.abbreviation} Click Damage`
  displayDPS.innerHTML = `${gameStats.DPS.number}${gameStats.DPS.abbreviation} DPS`
}
