import createTagElement from './creatElement.js'
import { gameStats, numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { sumNumbers } from './sumNumbers.js'
import { heroesData } from './heroesData.js'

const wrapperGolds = document.querySelector('.wrapper-gold')

async function dropGoldAnimation(goldDropped) {
  let numberCoins = 5
  if (goldDropped.number < 5) {
    numberCoins = goldDropped.number
  }
  let costCoins = goldDropped.number / numberCoins
  for (let i = 1; i <= numberCoins; i++) {
    const gold = createTagElement('div', `gold g${i}`, '', wrapperGolds)
    const numberGold = createTagElement('div', `goldNumber gN${i}`, `${costCoins}${goldDropped.abbreviation}`, wrapperGolds)
    gold.addEventListener('animationend', function() {
      gold.parentNode.removeChild(gold)
    })
    numberGold.addEventListener('animationend', function() {
      numberGold.parentNode.removeChild(numberGold)
    })
  }
}

function setGoldDropped() {
  let dropGolds
  let dropGoldsPowerOfTen
  let goldDroppedTotalCoefficient = calculationTotalGoldDroppedCoefficient()
  if (gameStats.currLevel > 75) {
    let coefficientPerLvl = convertingNumbers(Math.pow(1.025, gameStats.currLevel - 75))
    dropGolds = convertingNumbers(Math.ceil(gameStats.health.number / 15 * coefficientPerLvl.number) * goldDroppedTotalCoefficient)
    dropGolds.powerOfTen += coefficientPerLvl.powerOfTen + gameStats.health.powerOfTen
  } else {
    dropGolds = convertingNumbers(Math.ceil(gameStats.health.number / 15) * goldDroppedTotalCoefficient)
    dropGolds.powerOfTen += gameStats.health.powerOfTen
  }
  let dropGoldAbbreviation = abbreviationBigNumber[`${dropGolds.powerOfTen}`]

  let sumGold = sumNumbers(gameStats.gold, dropGolds)
  let newNumberGolds = convertingNumbers(sumGold.number)
  newNumberGolds.powerOfTen += sumGold.powerOfTen
  gameStats.gold.number = Math.trunc(newNumberGolds.number)
  gameStats.gold.powerOfTen = newNumberGolds.powerOfTen
  gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]
  return {
    number: dropGolds.number,
    powerOfTen: dropGoldsPowerOfTen,
    abbreviation: dropGoldAbbreviation
  }
}

function calculationTotalGoldDroppedCoefficient() {
  let totalGoldDroppedCoefficient = 1
  for (let numberHero = 1; numberHero < numberHeroes; numberHero++) {
    let heroAbilities = heroesData[numberHero].abilities
    for (let numberCoefficientAbility = 0; numberCoefficientAbility < heroAbilities.length; numberCoefficientAbility++) {
      let abilityEffect = heroAbilities[numberCoefficientAbility].effect.match(/Increases all gold found by/)
      if (abilityEffect && heroAbilities[numberCoefficientAbility].isPurchased) {
        totalGoldDroppedCoefficient *= heroAbilities[numberCoefficientAbility].coefficient + 1
      }
    }
  }
  return totalGoldDroppedCoefficient
}

export { dropGoldAnimation, setGoldDropped }
