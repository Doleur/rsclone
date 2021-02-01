import { gameStats, displayClickDamage, displayDPS, numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { heroesData } from './heroesData.js'

export function calculationHeroDamage(numberHero) {
  if (!heroesData[numberHero].lvl) return
  calculationHeroCoefficient(numberHero)
  let convertBaseDPS = convertingNumbers(heroesData[numberHero].baseDPS)
  let numberBaseDPS = convertBaseDPS.number

  let resultHeroDamage = convertingNumbers(numberBaseDPS * (1.07 * heroesData[numberHero].lvl) * heroesData[numberHero].totalCoefficient)
  let resultPowerOfTen = convertBaseDPS.powerOfTen + resultHeroDamage.powerOfTen


  heroesData[numberHero].damage.number = Math.trunc(resultHeroDamage.number)
  heroesData[numberHero].damage.powerOfTen = resultPowerOfTen
  heroesData[numberHero].damage.abbreviation = abbreviationBigNumber[`${resultPowerOfTen}`]
}

function calculationHeroCoefficient(numberHero) {
  let heroAbilities = heroesData[numberHero].abilities
  for (let numberCoefficientAbility = 0; numberCoefficientAbility < heroAbilities.length; numberCoefficientAbility++) {
    if (heroAbilities[numberCoefficientAbility].isSelfDPS && heroAbilities[numberCoefficientAbility].isPurchased) {

      heroesData[numberHero].totalCoefficient *= heroAbilities[numberCoefficientAbility].coefficient + 1
    }
  }
}

function calculationTotalDPSCoefficient() {
  let totalDPSCoefficient = 1
  for (let numberHero = 1; numberHero < numberHeroes; numberHero++) {
    let heroAbilities = heroesData[numberHero].abilities
    for (let numberCoefficientAbility = 0; numberCoefficientAbility < heroAbilities.length; numberCoefficientAbility++) {
      let abilityEffect = heroAbilities[numberCoefficientAbility].effect.match(/Increases DPS of all heroes by/)
      if (abilityEffect && heroAbilities[numberCoefficientAbility].isPurchased) {
        totalDPSCoefficient *= heroAbilities[numberCoefficientAbility].coefficient + 1
      }
    }
  }
  return totalDPSCoefficient
}

function calculationTotalClickDamageCoefficient() {
  let totalClickDamageCoefficient = 0
  for (let numberHero = 1; numberHero < numberHeroes; numberHero++) {
    let heroAbilities = heroesData[numberHero].abilities
    for (let numberCoefficientAbility = 0; numberCoefficientAbility < heroAbilities.length; numberCoefficientAbility++) {
      let abilityEffect = heroAbilities[numberCoefficientAbility].effect.match(/Increases your Click Damage by/)
      if (abilityEffect && heroAbilities[numberCoefficientAbility].isPurchased) {
        totalClickDamageCoefficient += heroAbilities[numberCoefficientAbility].coefficient
      }
    }
  }
  return totalClickDamageCoefficient
}

export function calculationTotalDamage() {
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
  let dpsTotalCoefficient = calculationTotalDPSCoefficient()
  totalDPS = convertingNumbers(totalDPS + totalDPS * dpsTotalCoefficient)
  gameStats.DPS.number = Math.trunc(totalDPS.number)
  gameStats.DPS.powerOfTen = totalPowerOfTen + totalDPS.powerOfTen
  gameStats.DPS.abbreviation = abbreviationBigNumber[`${gameStats.DPS.powerOfTen}`]

  let clickDamageCoefficient = calculationTotalClickDamageCoefficient()
  let totalClickDamage = convertingNumbers(heroesData[0].damage.number + gameStats.DPS.number * clickDamageCoefficient)
  let convertTotalClickDamage = totalClickDamage.number
  let totalClickDamagePowerOfTen = totalClickDamage.powerOfTen + gameStats.DPS.powerOfTen
  if (convertTotalClickDamage < 100 && totalClickDamagePowerOfTen > 0) {
    convertTotalClickDamage *= 1000
    totalClickDamagePowerOfTen -= 3
  }
  gameStats.clickDamage.number = convertTotalClickDamage + 1
  gameStats.clickDamage.powerOfTen = totalClickDamagePowerOfTen
  gameStats.clickDamage.abbreviation = abbreviationBigNumber[`${gameStats.clickDamage.powerOfTen}`]
}

export function displayDamage() {
  displayClickDamage.innerHTML = `${gameStats.clickDamage.number}${gameStats.clickDamage.abbreviation} Click Damage`
  displayDPS.innerHTML = `${gameStats.DPS.number}${gameStats.DPS.abbreviation} DPS`
}
