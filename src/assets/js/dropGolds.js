import createTagElement from './creatElement.js'
import { gameStats } from './constants.js'

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
  if (gameStats.currLevel > 75) {
    gameStats.gold += Math.ceil(gameStats.health / 15 * Math.pow(1.025, gameStats.currLevel - 75));
  } else {
    gameStats.gold += Math.ceil(gameStats.health / 15);
  }
  console.log(gameStats.gold)
}

export { dropGoldAnimation, setGoldDropped }
