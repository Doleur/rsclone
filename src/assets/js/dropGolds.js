import createTagElement from './creatElement.js'
import { gameStats, numberHeroes } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { sumNumbers } from './sumNumbers.js'
import { heroesData } from './heroesData.js'

const wrapperGolds = document.querySelector('.wrapper-gold')

async function dropGoldAnimation (goldDropped) {
  let numberCoins = 5
  if (goldDropped.number < 5) {
    numberCoins = goldDropped.number
  }
  const costCoins = goldDropped.number / numberCoins
  for (let i = 1; i <= numberCoins; i++) {
    let numberCostCoins
    if (numberCoins === 5) {
      numberCostCoins = costCoins.toFixed(1)
    } else {
      numberCostCoins = costCoins
    }
    const gold = createTagElement('div', `gold g${i}`, '', wrapperGolds)
    const numberGold = createTagElement('div', `goldNumber gN${i}`, `${numberCostCoins}${goldDropped.abbreviation}`, wrapperGolds)
    gold.addEventListener('animationend', function () {
      gold.parentNode.removeChild(gold)
    })
    numberGold.addEventListener('animationend', function () {
      numberGold.parentNode.removeChild(numberGold)
    })
  }
}

function setGoldDropped () {
  let dropGolds
  const goldDroppedTotalCoefficient = calculationTotalGoldDroppedCoefficient()
  if (gameStats.currLevel > 75) {
    const coefficientPerLvl = convertingNumbers(Math.pow(1.025, gameStats.currLevel - 75))
    dropGolds = convertingNumbers(Math.ceil(gameStats.health.number / 15 * coefficientPerLvl.number) * goldDroppedTotalCoefficient)
    dropGolds.powerOfTen += coefficientPerLvl.powerOfTen + gameStats.health.powerOfTen
  } else {
    dropGolds = convertingNumbers(Math.ceil(gameStats.health.number / 15) * goldDroppedTotalCoefficient)
    dropGolds.powerOfTen += gameStats.health.powerOfTen
  }
  const dropGoldAbbreviation = abbreviationBigNumber[`${dropGolds.powerOfTen}`]

  const sumGold = sumNumbers(gameStats.gold, dropGolds)
  const newNumberGolds = convertingNumbers(sumGold.number)
  newNumberGolds.powerOfTen += sumGold.powerOfTen
  gameStats.gold.number = newNumberGolds.number
  gameStats.gold.powerOfTen = newNumberGolds.powerOfTen
  gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]

  return {
    number: dropGolds.number,
    powerOfTen: dropGolds.powerOfTen,
    abbreviation: dropGoldAbbreviation
  }
}

function calculationTotalGoldDroppedCoefficient () {
  let totalGoldDroppedCoefficient = 1
  for (let numberHero = 1; numberHero < numberHeroes; numberHero++) {
    const heroAbilities = heroesData[numberHero].abilities
    for (let numberCoefficientAbility = 0; numberCoefficientAbility < heroAbilities.length; numberCoefficientAbility++) {
      const abilityEffect = heroAbilities[numberCoefficientAbility].effect.match(/Increases all gold found by/)
      if (abilityEffect && heroAbilities[numberCoefficientAbility].isPurchased) {
        totalGoldDroppedCoefficient *= heroAbilities[numberCoefficientAbility].coefficient + 1
      }
    }
  }
  return totalGoldDroppedCoefficient
}

export { dropGoldAnimation, setGoldDropped }
