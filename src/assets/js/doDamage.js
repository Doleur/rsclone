import createTagElement from './creatElement.js'
import { checkIfDead } from './checkIsDead.js'
import { convertingNumbers } from './convertingNumbers.js'
import { sumNumbers } from './sumNumbers.js'
import {
  gameStats,
  currentLevelNumOnPage,
  healthBar,
  currentHealthNumOnPage,
  totalHealthNumOnPage,
  currentMonsterNumOnPage,
  wrapperDmgPopup
} from './constants.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { statistics } from './stats.js'

gameStats.currHealth = { ...gameStats.health }

export function setDamage (damage) {
  const differencePowerOfTen = gameStats.currHealth.powerOfTen - damage.powerOfTen
  const newCurrHealth = convertingNumbers(
    gameStats.currHealth.number * 10 ** differencePowerOfTen - damage.number
  )
  gameStats.currHealth.number = newCurrHealth.number
  gameStats.currHealth.powerOfTen = damage.powerOfTen + newCurrHealth.powerOfTen
  gameStats.currHealth.abbreviation = abbreviationBigNumber[`${gameStats.currHealth.powerOfTen}`]
  checkIfDead()
  currentLevelNumOnPage.innerText = gameStats.currLevel
  const remainingHealth = (gameStats.currHealth.number / (gameStats.health.number * 10 ** (gameStats.health.powerOfTen - gameStats.currHealth.powerOfTen))) * 100
  healthBar.style.width = `${remainingHealth}%`
  currentHealthNumOnPage.innerText = `${Math.trunc(gameStats.currHealth.number)}${
    gameStats.currHealth.abbreviation
  }`
  totalHealthNumOnPage.innerText = `${Math.trunc(gameStats.health.number)}${gameStats.health.abbreviation}`
  currentMonsterNumOnPage.innerText = gameStats.currMonster
}

function setAutoDamage () {
  setInterval(() => {
    setDamage(gameStats.DPS)

    const sumDPS = sumNumbers(statistics.totalDPS, gameStats.DPS)
    const convertSumDPS = convertingNumbers(sumDPS.number)
    statistics.totalDPS.number = convertSumDPS.number
    statistics.totalDPS.powerOfTen = sumDPS.powerOfTen + convertSumDPS.powerOfTen
    statistics.totalDPS.abbreviation = abbreviationBigNumber[`${statistics.totalDPS.powerOfTen}`]
  }, 1000)
}
setAutoDamage()

export function createDamagePopup () {
  const damagePopup = createTagElement(
    'div',
    'damage-popup',
    '',
    wrapperDmgPopup
  )
  const damagePopupNumOnPage = createTagElement(
    'div',
    'damage-popup-number',
    '',
    damagePopup
  )
  damagePopupNumOnPage.innerText =
    '-' + Math.trunc(gameStats.clickDamage.number) + gameStats.clickDamage.abbreviation
  wrapperDmgPopup.append(damagePopup)
}

export function removeDamagePopup () {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup')
    wrapperDmgPopup.removeChild(damagePopup)
  }, 1000)
}
