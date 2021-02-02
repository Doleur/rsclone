import {
  shopWrapper,
  gameStats,
  countInput,
  hero,
  currentLevelNumOnPage,
  healthBar,
  currentHealthNumOnPage,
  totalHealthNumOnPage,
  currentMonsterNumOnPage,
  wrapperDmgPopup,
  swiperWrapper,
  monstersPerLevel,
  numberHeroes,
  monstersProgressWrapper
} from './constants.js'
import { dropGoldAnimation, setGoldDropped } from './dropGolds.js'
import { setCount, setLevelHeroes, setPurchasedAbilityHeroes } from './save-game.js'
import createTagElement from './creatElement.js'
import { randomMonster } from './random.js'
import { createSlider, newItemArrSlides, clickPrevButton } from './swiper.js'
import {
  shopGeneration,
  updateShop,
  buy,
  toggleBuyButtonDisabled,
  toggleAbilityDisabled
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
import { statistics, checkStats } from './stats.js'
import { initIsland } from './island.js'
import { sumNumbers } from './sumNumbers.js'

let isBoss = gameStats.isBoss
let currHealth = {...gameStats.health }
let milliSecondsRemaining
let intervalHandle

function innerValue() {
  countInput.textContent = `${gameStats.gold.number}${gameStats.gold.abbreviation}`
  currentHealthNumOnPage.innerText = `${gameStats.health.number}${gameStats.health.abbreviation}`
  totalHealthNumOnPage.innerText = `${gameStats.health.number}${gameStats.health.abbreviation}`
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

function setMonsterHealth() {
  if (gameStats.currLevel % 5 === 0) {
    isBoss = 1
    randomMonster(bosses)
    hero.innerHTML = `<div class="hero-img">
                      <img src="${
                        bosses[gameStats.currMonster].img
                      }" alt=""></img>
                      </div>`
    gameStats.currMonster = 10
    monstersProgressWrapper.classList.add('disabled')
    startCountdown()
  } else {
    isBoss = 0.1
    stopCountdown()
    monstersProgressWrapper.classList.remove('disabled')
    hero.innerHTML = `<div class="hero-img">
                  <img src="${
                    monsters[gameStats.currMonster - 1].img
                  }" alt=""></img>
                  </div>`
  }
  if (gameStats.currLevel < 141) {
    let newHealth = convertingNumbers(
      Math.ceil(
        10 *
        (gameStats.currLevel - 1 + Math.pow(1.55, gameStats.currLevel - 1)) *
        (isBoss * 10)
      )
    )
    gameStats.health.number = Math.trunc(newHealth.number)
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  } else if (gameStats.currLevel < 501) {
    let newHealth = convertingNumbers(
      Math.ceil(
        10 *
        (139 +
          Math.pow(1.55, 139) * Math.pow(1.145, gameStats.currLevel - 140)) *
        (isBoss * 10)
      )
    )
    gameStats.health.number = Math.trunc(newHealth.number)
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  } else if (gameStats.currLevel < 200001) {
    let newHealth = convertingNumbers(
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
    gameStats.health.number = Math.trunc(newHealth.number)
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  } else {
    let newHealth = convertingNumbers(
      Math.ceil(
        Math.pow(1.545, gameStats.currLevel - 200001) *
        1.24 *
        Math.pow(10, 25409) +
        (gameStats.currLevel - 1) * 10
      )
    )
    gameStats.health.number = Math.trunc(newHealth.number)
    gameStats.health.powerOfTen = newHealth.powerOfTen
    gameStats.health.abbreviation =
      abbreviationBigNumber[`${gameStats.health.powerOfTen}`]
  }
  currHealth = {...gameStats.health }
}

function setDamage(damage) {
  let differencePowerOfTen = currHealth.powerOfTen - damage.powerOfTen
  let newCurrHealth = convertingNumbers(
    currHealth.number * 10 ** differencePowerOfTen - damage.number
  )
  currHealth.number = newCurrHealth.number
  currHealth.powerOfTen = damage.powerOfTen + newCurrHealth.powerOfTen
  currHealth.abbreviation = abbreviationBigNumber[`${currHealth.powerOfTen}`]
  checkIfDead()
  currentLevelNumOnPage.innerText = gameStats.currLevel
  healthBar.style.width = `${
    (currHealth.number / gameStats.health.number) * 100
  }%`
  currentHealthNumOnPage.innerText = `${Math.trunc(currHealth.number)}${
    currHealth.abbreviation
  }`
  totalHealthNumOnPage.innerText = `${gameStats.health.number}${gameStats.health.abbreviation}`
  currentMonsterNumOnPage.innerText = gameStats.currMonster
}

function setAutoDamage() {
  setInterval(() => {
    setDamage(gameStats.DPS)

    let sumDPS = sumNumbers(statistics.totalDPS, gameStats.DPS)
    let convertSumDPS = convertingNumbers(sumDPS.number)
    statistics.totalDPS.number = convertSumDPS.number + convertSumDPS.powerOfTen
    statistics.totalDPS.powerOfTen = sumDPS.powerOfTen
    statistics.totalDPS.abbreviation = abbreviationBigNumber[`${statistics.totalDPS.powerOfTen}`]
  }, 1000)
}
setAutoDamage()

function checkIfDead() {
  if (currHealth.number <= 0) {
    // if (gameStats.currLevel % 5 === 0) {
    //   changeIsland()
    //   saveIsland()
    // }
    statistics.monstersKilled += 1
    let goldDropped = setGoldDropped()
    let sumGolds = sumNumbers(statistics.totalGold, goldDropped)
    let convertSumGold = convertingNumbers(sumGolds.number)
    statistics.totalGold.number = convertSumGold.number
    statistics.totalGold.powerOfTen = sumGolds.powerOfTen + convertSumGold.powerOfTen
    statistics.totalGold.abbreviation = abbreviationBigNumber[`${statistics.totalGold.powerOfTen}`]
    dropGoldAnimation(goldDropped)
    setCount()
    hero.innerHTML = `<div class="hero-img">
                      <img src="${
                        monsters[gameStats.currMonster].img
                      }" alt=""></img>
                      </div>`
    if (gameStats.currMonster === monstersPerLevel) {
      gameStats.currMonster = 1
      gameStats.currLevel += 1
      newItemArrSlides()
      initIsland()
        // changeIsland()
    } else {
      gameStats.currMonster += 1
    }
    setMonsterHealth()
    countInput.textContent = `${gameStats.gold.number}${gameStats.gold.abbreviation}`
    toggleBuyButtonDisabled()
    toggleAbilityDisabled()
  }
}

function createDamagePopup() {
  const damagePopup = createTagElement(
    'div',
    `damage-popup`,
    '',
    wrapperDmgPopup
  )
  const damagePopupNumOnPage = createTagElement(
    'div',
    `damage-popup-number`,
    '',
    damagePopup
  )
  damagePopupNumOnPage.innerText =
    '-' + gameStats.clickDamage.number + gameStats.clickDamage.abbreviation
  wrapperDmgPopup.append(damagePopup)
}

function removeDamagePopup() {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup')
    wrapperDmgPopup.removeChild(damagePopup)
  }, 1000)
}

hero.addEventListener('click', e => {
  statistics.clicksMade += 1

  let sumClickDamage = sumNumbers(statistics.totalClicksDamage, gameStats.clickDamage)
  let convertSumClickDamage = convertingNumbers(sumClickDamage.number)
  statistics.totalClicksDamage.number = convertSumClickDamage.number
  statistics.totalClicksDamage.powerOfTen = sumClickDamage.powerOfTen + convertSumClickDamage.powerOfTen
  statistics.totalClicksDamage.abbreviation = abbreviationBigNumber[`${statistics.totalClicksDamage.powerOfTen}`]

  setDamage(gameStats.clickDamage)
  createDamagePopup(e)
  removeDamagePopup()
})

shopWrapper.addEventListener('click', ({ target }) => {
  let isDisabledHero = target.closest('.disabled')
  if (isDisabledHero) return
  let isPurchaseMade
  let hero
  let targetClassName = target.classList[1]
  let isAbility = /hero_[\d]_ability/.test(targetClassName)

  if (isAbility) {
    let numberHeroAndAbility = targetClassName.match(/\d/g)
    hero = numberHeroAndAbility[0]
    let numberAbility = numberHeroAndAbility[1]
    let isAbilityDisabled = target.closest('.abilities_disabled')
    if (isAbilityDisabled) return
    if (heroesData[hero].abilities[numberAbility].isPurchased) return
    isPurchaseMade = buy(hero, numberAbility)
    if (!isPurchaseMade) return
    heroesData[hero].abilities[numberAbility].isPurchased = true
    target.classList.add('abilities_active')
  } else {
    let isBuyButton = target.closest('.buyButton')
    if (!isBuyButton) return
    hero = isBuyButton.classList[1].replace(/hero/, '')
    isPurchaseMade = buy(hero)
    if (!isPurchaseMade) return
    heroesData[hero].lvl += 1
  }

  countInput.textContent = `${gameStats.gold.number}${gameStats.gold.abbreviation}`
  calculationHeroDamage(hero)
  calculationCostHero(hero)
  updateShop(hero)
  calculationTotalDamage()
  displayDamage()
  setLevelHeroes()
  setPurchasedAbilityHeroes()
})

function getCount() {
  if (localStorage.getItem('saveItems') !== null) {
    const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
    gameStats.gold = returnSaveItems.gold
    gameStats.DPS = returnSaveItems.DPS
    gameStats.clickDamage = returnSaveItems.clickDamage
    gameStats.currLevel = returnSaveItems.currLevel
    gameStats.health = returnSaveItems.health
    gameStats.arrLevel = returnSaveItems.arrLevel
    const returnSaveLvl = JSON.parse(localStorage.getItem('saveLvl'))
    const returnPurchasedAbility = JSON.parse(localStorage.getItem('savePurchasedAbility'))
    heroesData.forEach((item, index) => {
      item.lvl = returnSaveLvl[index]
      item.abilities.forEach((ability, index2) => {
        ability.isPurchased = returnPurchasedAbility[index][index2]
      })
    })
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

function tick() {
  let min = Math.floor(milliSecondsRemaining / 60)
  let ms = milliSecondsRemaining - min * 60

  if (ms < 10) {
    ms = '0' + ms
  }

  time.innerHTML = `${min}:${ms}`

  if (milliSecondsRemaining === 0) {
    stopCountdown()
    clickPrevButton()
    gameStats.currLevel -= 1
    gameStats.currMonster = 1
    setMonsterHealth()
  }
  milliSecondsRemaining--
}

function startCountdown() {
  time.classList.add('active')
  let seconds = 30
  milliSecondsRemaining = seconds * 60
  intervalHandle = setInterval(tick, 10)
}

function stopCountdown() {
  clearInterval(intervalHandle)
  time.classList.remove('active')
}

getCount()
innerValue()
shopGeneration()

document.addEventListener('DOMContentLoaded', () => {
  setMonsterHealth()
  checkStats()
  const savedStats = JSON.parse(localStorage.getItem('statsSaved'))
  localStorage.getItem('statsSaved') ?
    (statistics.gameStartTime = savedStats.gameStartTime) :
    (statistics.gameStartTime = Date.parse(new Date()))
  console.log(statistics.gameStartTime)
})

export { swiperWrapper }
