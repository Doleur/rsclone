import createTagElement from './creatElement.js'
import { gameStats } from './constants.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'

const wrapperGolds = document.querySelector('.wrapper-gold')

async function dropGoldAnimation() {
  for (let i = 1; i < 6; i++) {
    const gold = createTagElement('div', `gold g${i}`, '', wrapperGolds)
    const numberGold = createTagElement('div', `goldNumber gN${i}`, '10g', wrapperGolds)
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
    dropGolds = convertingNumbers(gameStats.gold.number + Math.ceil(gameStats.health / 15 * coefficientPerLvl.number))
    dropGoldsPowerOfTen = coefficientPerLvl.powerOfTen + dropGolds.powerOfTen + gameStats.gold.powerOfTen
  } else {
    dropGolds = convertingNumbers(gameStats.gold.number + Math.ceil(gameStats.health / 15))
    dropGoldsPowerOfTen = dropGolds.powerOfTen + gameStats.gold.powerOfTen
  }
  gameStats.gold.number = Math.trunc(dropGolds.number)
  gameStats.gold.powerOfTen = dropGoldsPowerOfTen
  gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]
}

export { dropGoldAnimation, setGoldDropped }
