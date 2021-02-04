import {
  gameStats,
  countInput,
  hero,
  monstersPerLevel
} from './constants.js'
import { dropGoldAnimation, setGoldDropped } from './dropGolds.js'
import { setCount } from './save-game.js'
import { newItemArrSlides } from './swiper.js'
import {
  toggleBuyButtonDisabled,
  toggleAbilityDisabled
} from './shop.js'
import { monsters } from './monsterData.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { statistics } from './stats.js'
import { initIsland } from './island.js'
import { sumNumbers } from './sumNumbers.js'
import { audioPlay } from './setAudio.js'
import { setMonsterHealth } from './app.js'

export function checkIfDead () {
  if (gameStats.currHealth.number <= 0) {
    if (gameStats.currLevel % 5 === 0) {
      statistics.bossesKilled += 1
    } else {
      statistics.monstersKilled += 1
    }
    const goldDropped = setGoldDropped()
    statistics.monstersKilled += 1
    const sumGolds = sumNumbers(statistics.totalGold, goldDropped)
    const convertSumGold = convertingNumbers(sumGolds.number)
    statistics.totalGold.number = convertSumGold.number
    statistics.totalGold.powerOfTen = sumGolds.powerOfTen + convertSumGold.powerOfTen
    statistics.totalGold.abbreviation = abbreviationBigNumber[`${statistics.totalGold.powerOfTen}`]
    dropGoldAnimation(goldDropped)
    setCount()
    hero.innerHTML = `<div class="hero-img">
                      <img src="${
                        monsters[gameStats.currMonster].img
                      }" alt="${
                        monsters[gameStats.currMonster].name
                      }" draggable="false"></img>
                      </div>`
    audioPlay('assets/audio/coin_1.mp3')
    if (gameStats.currMonster === monstersPerLevel) {
      gameStats.currMonster = 1
      gameStats.currLevel += 1
      newItemArrSlides()
      initIsland()
    } else {
      gameStats.currMonster += 1
      audioPlay('assets/audio/angry-potato-die.mp3')
    }
    setMonsterHealth()
    countInput.textContent = `${Math.trunc(gameStats.gold.number)}${gameStats.gold.abbreviation}`
    toggleBuyButtonDisabled()
    toggleAbilityDisabled()
  }
}
