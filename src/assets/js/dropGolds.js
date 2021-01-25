import createTagElement from './creatElement.js'
import { gameStats } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'

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

  if (gameStats.currLevel > 75) {
    let coefficientPerLvl = convertingNumbers(Math.pow(1.025, gameStats.currLevel - 75))
    dropGolds = convertingNumbers(Math.ceil(gameStats.health.number / 15 * coefficientPerLvl.number))
    dropGoldsPowerOfTen = coefficientPerLvl.powerOfTen + dropGolds.powerOfTen + gameStats.health.powerOfTen
  } else {
    dropGolds = convertingNumbers(Math.ceil(gameStats.health.number / 15))
    dropGoldsPowerOfTen = dropGolds.powerOfTen + gameStats.health.powerOfTen
  }
  let dropGoldAbbreviation = abbreviationBigNumber[`${dropGoldsPowerOfTen}`]
  let newNumberGolds = convertingNumbers(gameStats.gold.number + +dropGolds.number)
  let newGoldsPowerOfTen = dropGoldsPowerOfTen + newNumberGolds.powerOfTen + gameStats.gold.powerOfTen

  gameStats.gold.number = Math.trunc(newNumberGolds.number)
  gameStats.gold.powerOfTen = newGoldsPowerOfTen
  gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]
  return {
    number: dropGolds.number,
    powerOfTen: dropGoldsPowerOfTen,
    abbreviation: dropGoldAbbreviation
  }
}

export { dropGoldAnimation, setGoldDropped }
