import {
  shopWrapper,
  gameStats,
  countInput,
  hero,
  currentLevelNumOnPage,
  currentHealthNumOnPage,
  totalHealthNumOnPage,
  currentMonsterNumOnPage,
  swiperWrapper,
  numberHeroes,
  monstersProgressWrapper
} from './constants.js'
import { setCount, setLevelHeroes, setPurchasedAbilityHeroes } from './save-game.js'
import createTagElement from './creatElement.js'
import { randomMonster } from './random.js'
import { createSlider, clickPrevButton } from './swiper.js'
import {
  shopGeneration,
  updateShop,
  buy
} from './shop.js'
import { heroesData } from './heroesData.js'
import {
  calculationHeroDamage,
  calculationTotalDamage,
  displayDamage
} from './calculationDamage.js'
import { calculationCostHero } from './calculationCostHero.js'
import { monsters } from './monsterData.js'
import { bosses } from './boss.js'
import { convertingNumbers } from './convertingNumbers.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { statistics, checkStats, updateStats } from './stats.js'
import { initIsland } from './island.js'
import { generateAchievements, updateAchievements, checkAchievementsSaved } from './achievements.js'
import { sumNumbers } from './sumNumbers.js'
import { audioPlay } from './setAudio.js'
import { setDamage, createDamagePopup, removeDamagePopup } from './doDamage.js'

let isBoss = gameStats.isBoss
let milliSecondsRemaining
let intervalHandle

function innerValue () {
  countInput.textContent = `${Math.trunc(gameStats.gold.number)}${gameStats.gold.abbreviation}`
  currentHealthNumOnPage.innerText = `${Math.trunc(gameStats.health.number)}${gameStats.health.abbreviation}`
  totalHealthNumOnPage.innerText = `${Math.trunc(gameStats.health.number)}${gameStats.health.abbreviation}`
  currentMonsterNumOnPage.innerText = gameStats.currMonster
  currentLevelNumOnPage.innerText = gameStats.currLevel
  gameStats.arrLevel.forEach(e => {
    const swiperSlide = createTagElement(
      'div',
      'swiper-slide',
      '',
      swiperWrapper, ['level', e]
    )
    const swiperSlideContainer = createTagElement(
      'div',
      'swiper-slide-container',
      '',
      swiperSlide
    )
    const swiperSlideText = createTagElement(
      'span',
      'swiper-slide-text',
      '',
      swiperSlideContainer
    )
    swiperSlideText.textContent = `Level ${e}`
  })
  initIsland()
}

function setMonsterHealth () {
  if (gameStats.currLevel % 5 === 0) {
    isBoss = 1
    randomMonster(bosses)
    hero.innerHTML = `<div class="hero-img">
                      <img src="${
                        bosses[gameStats.currMonster].img
                      }" alt="${
                        bosses[gameStats.currMonster].name
                      }" draggable="false"></img>
                      </div>`
    gameStats.currMonster = 10
    monstersProgressWrapper.classList.add('disabled')
    startCountdown()
  } else {
    isBoss = 0.1
    randomMonster(monsters)
    stopCountdown()
    monstersProgressWrapper.classList.remove('disabled')
    hero.innerHTML = `<div class="hero-img">
                  <img src="${
                    monsters[gameStats.currMonster - 1].img
                  }" alt="${
                    monsters[gameStats.currMonster].name
                  }" draggable="false"></img>
                  </div>`
  }
  if (gameStats.currLevel < 141) {
    const newHealth = convertingNumbers(
      Math.ceil(
        10 *
        (gameStats.currLevel - 1 + Math.pow(1.55, gameStats.currLevel - 1)) *
        (isBoss * 10)
      )
    )
    gameStats.health.number = newHealth.number
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  } else if (gameStats.currLevel < 501) {
    const newHealth = convertingNumbers(
      Math.ceil(
        10 *
        (139 +
          Math.pow(1.55, 139) * Math.pow(1.145, gameStats.currLevel - 140)) *
        (isBoss * 10)
      )
    )
    gameStats.health.number = newHealth.number
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  } else if (gameStats.currLevel < 200001) {
    const newHealth = convertingNumbers(
      Math.ceil(
        10 *
        (139 +
          Math.pow(1.55, 139) *
          Math.pow(1.145, 360) *
          Math.PI *
          (1.145 + 0.001 * Math.floor((501 - 1) / 500))) *
        (isBoss * 10)
      )
    )
    gameStats.health.number = newHealth.number
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  } else {
    const newHealth = convertingNumbers(
      Math.ceil(
        Math.pow(1.545, gameStats.currLevel - 200001) *
        1.24 *
        Math.pow(10, 25409) +
        (gameStats.currLevel - 1) * 10
      )
    )
    gameStats.health.number = newHealth.number
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  }
  gameStats.currHealth = { ...gameStats.health }
}

hero.addEventListener('click', e => {
  statistics.clicksMade += 1

  const sumClickDamage = sumNumbers(statistics.totalClicksDamage, gameStats.clickDamage)
  const convertSumClickDamage = convertingNumbers(sumClickDamage.number)
  statistics.totalClicksDamage.number = convertSumClickDamage.number
  statistics.totalClicksDamage.powerOfTen = sumClickDamage.powerOfTen + convertSumClickDamage.powerOfTen
  statistics.totalClicksDamage.abbreviation = abbreviationBigNumber[`${statistics.totalClicksDamage.powerOfTen}`]

  setDamage(gameStats.clickDamage)
  createDamagePopup(e)
  removeDamagePopup()
  updateStats()
  updateAchievements()
  audioPlay('assets/audio/hit_1.mp3')
})

shopWrapper.addEventListener('click', ({ target }) => {
  const isDisabledHero = target.closest('.disabled')
  if (isDisabledHero) return
  let isPurchaseMade
  let hero
  const targetClassName = target.classList[1]
  const isAbility = /hero_[\d]+_ability/.test(targetClassName)

  if (isAbility) {
    const numberHeroAndAbility = targetClassName.match(/\d/g)
    hero = numberHeroAndAbility[0]
    const numberAbility = numberHeroAndAbility[1]
    const isAbilityDisabled = target.closest('.abilities_disabled')
    if (isAbilityDisabled) return
    if (heroesData[hero].abilities[numberAbility].isPurchased) return
    isPurchaseMade = buy(hero, numberAbility)
    if (!isPurchaseMade) return
    heroesData[hero].abilities[numberAbility].isPurchased = true
    target.classList.add('abilities_active')
  } else {
    const isBuyButton = target.closest('.buyButton')
    if (!isBuyButton) return
    hero = isBuyButton.classList[1].replace(/hero/, '')
    isPurchaseMade = buy(hero)
    if (!isPurchaseMade) return
    heroesData[hero].lvl += 1
  }

  countInput.textContent = `${Math.trunc(gameStats.gold.number)}${gameStats.gold.abbreviation}`
  calculationHeroDamage(hero)
  calculationCostHero(hero)
  updateShop(hero)
  calculationTotalDamage()
  displayDamage()
  setLevelHeroes()
  setPurchasedAbilityHeroes()
  audioPlay('assets/audio/click_1.mp3')
})

function getCount () {
  const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
  if (returnSaveItems) {
    gameStats.gold = returnSaveItems.gold
    gameStats.DPS = returnSaveItems.DPS
    gameStats.clickDamage = returnSaveItems.clickDamage
    gameStats.currLevel = returnSaveItems.currLevel
    gameStats.health = returnSaveItems.health
    gameStats.arrLevel = returnSaveItems.arrLevel
    const returnSaveLvl = JSON.parse(localStorage.getItem('saveLvl'))
    const returnPurchasedAbility = JSON.parse(localStorage.getItem('savePurchasedAbility'))
    if (returnSaveLvl) {
      heroesData.forEach((item, index) => {
        item.lvl = returnSaveLvl[index]
        item.abilities.forEach((ability, index2) => {
          ability.isPurchased = returnPurchasedAbility[index][index2]
        })
      })
    }
    for (let numberHero = 0; numberHero < numberHeroes; numberHero++) {
      calculationHeroDamage(numberHero)
      calculationCostHero(numberHero)
      calculationTotalDamage()
    }
  }
  createSlider()
}

swiperWrapper.addEventListener('click', e => {
  const levelData = e.target.closest('.swiper-slide')
  if (gameStats.currLevel === +levelData.dataset.level) return
  gameStats.currLevel = +levelData.dataset.level
  gameStats.currMonster = 1
  const activeLevel = document.querySelector('.swiper-slide-active')
  activeLevel.classList.remove('swiper-slide-active')
  const isLevel = e.target.closest('.swiper-slide')
  isLevel.classList.add('swiper-slide-active')
  setMonsterHealth()
  setCount()
  initIsland()
})

function tick () {
  const min = Math.floor(milliSecondsRemaining / (60 * 100))
  const ss = Math.floor((milliSecondsRemaining - min * 60 * 100) / 100)
  let ms = milliSecondsRemaining - Math.floor(milliSecondsRemaining / 100) * 100

  if (ms < 10) {
    ms = '0' + ms
  }

  time.innerHTML = `${ss}:${ms}`

  if (milliSecondsRemaining === 0) {
    stopCountdown()
    clickPrevButton()
    gameStats.currLevel -= 1
    gameStats.currMonster = 1
    setMonsterHealth()
  }
  milliSecondsRemaining--
}

function startCountdown () {
  time.classList.add('active')
  const seconds = 30
  milliSecondsRemaining = seconds * 100
  intervalHandle = setInterval(tick, 10)
}

function stopCountdown () {
  clearInterval(intervalHandle)
  time.classList.remove('active')
}

getCount()
innerValue()
shopGeneration()
generateAchievements()

document.addEventListener('DOMContentLoaded', () => {
  setMonsterHealth()
  checkStats()
  checkAchievementsSaved()
  const savedStats = JSON.parse(localStorage.getItem('statsSaved'))
  localStorage.getItem('statsSaved')
    ? (statistics.gameStartTime = savedStats.gameStartTime)
    : (statistics.gameStartTime = Date.parse(new Date()))
})

export { setMonsterHealth }
