import { gameStats, displayClickDamage, displayDPS, numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { heroesData } from './heroesData.js'
import { sumNumbers } from './sumNumbers.js'

export function calculationHeroDamage(numberHero) {
  if (!heroesData[numberHero].lvl) return
  calculationHeroCoefficient(numberHero)
  let convertBaseDPS = convertingNumbers(heroesData[numberHero].baseDPS)
  let numberBaseDPS = convertBaseDPS.number
  let resultHeroDamage = convertingNumbers(numberBaseDPS * (1.07 * heroesData[numberHero].lvl) * heroesData[numberHero].totalCoefficient)
  let resultPowerOfTen = convertBaseDPS.powerOfTen + resultHeroDamage.powerOfTen

  heroesData[numberHero].damage.number = resultHeroDamage.number
  heroesData[numberHero].damage.powerOfTen = resultPowerOfTen
  heroesData[numberHero].damage.abbreviation = abbreviationBigNumber[`${resultPowerOfTen}`]
}

function calculationHeroCoefficient(numberHero) {
  heroesData[numberHero].totalCoefficient = 1
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
  let sumAllDPS = {
    number: 0,
    powerOfTen: 0
  }
  let sumDPS
  for (let numberHero = 1; numberHero < numberHeroes; numberHero++) {
    sumDPS = sumNumbers(heroesData[numberHero].damage, sumAllDPS)
    let convertSumDPS = convertingNumbers(sumDPS.number)
    sumAllDPS.number = convertSumDPS.number
    sumAllDPS.powerOfTen = sumDPS.powerOfTen + convertSumDPS.powerOfTen
  }
  let dpsTotalCoefficient = calculationTotalDPSCoefficient()
  let totalDPS = convertingNumbers(sumAllDPS.number * dpsTotalCoefficient)
  gameStats.DPS.number = totalDPS.number
  gameStats.DPS.powerOfTen = sumAllDPS.powerOfTen + totalDPS.powerOfTen
  gameStats.DPS.abbreviation = abbreviationBigNumber[`${gameStats.DPS.powerOfTen}`]


  let clickDamageCoefficient = calculationTotalClickDamageCoefficient()
  let bonusClickDamage = {
    number: gameStats.DPS.number * clickDamageCoefficient,
    powerOfTen: gameStats.DPS.powerOfTen
  }
  let totalClickDamage = sumNumbers(heroesData[0].damage, bonusClickDamage)
  let convertTotalClickDamage = convertingNumbers(totalClickDamage.number)
  convertTotalClickDamage.powerOfTen += convertTotalClickDamage.powerOfTen
  if (convertTotalClickDamage.number < 100 && convertTotalClickDamage.powerOfTen > 0) {
    convertTotalClickDamage.number *= 1000
    convertTotalClickDamage.powerOfTen -= 3
  }
  gameStats.clickDamage.number = convertTotalClickDamage.number + 1
  gameStats.clickDamage.powerOfTen = convertTotalClickDamage.powerOfTen
  gameStats.clickDamage.abbreviation = abbreviationBigNumber[`${gameStats.clickDamage.powerOfTen}`]
}

export function displayDamage() {
  displayClickDamage.innerHTML = `${Math.trunc(gameStats.clickDamage.number)}${gameStats.clickDamage.abbreviation} Click Damage`
  displayDPS.innerHTML = `${Math.trunc(gameStats.DPS.number)}${gameStats.DPS.abbreviation} DPS`
}