import { dropGold } from './gold.js'
import { setCount } from './save-game.js'
import createTagElement from './creatElement.js'
import { randomMonster } from './random.js'
import { monsters } from './monster.js'
import { newItemArrSlides } from './swiper.js'

const countInput = document.querySelector('.count')
const hero = document.querySelector('.hero')
const units = countInput.textContent.replace(/\d/g, '')
const buy = document.querySelector('.up-lvl')
const buy1 = document.querySelector('.up-lvl1')
const buy2 = document.querySelector('.up-lvl2')
const currentLevelNumOnPage = document.querySelector('.current-level')
const healthBar = document.querySelector('.healthbar')
const currentHealthNumOnPage = document.querySelector('.current-health')
const totalHealthNumOnPage = document.querySelector('.total-health')
const currentMonsterNumOnPage = document.querySelector('.current-monster')
// const totalMonstersNumOnPage = document.querySelector('.total-monsters');
const playField = document.querySelector('.field-play')
const autoDamage = document.querySelector('.dps')
const wrapperDmgPopup = document.querySelector('.wrapper-damage-popup')
const swiperWrapper = document.querySelector('.swiper-wrapper')

const monstersPerLevel = 10
let currLevel = 1
let health = 20
let currHealth = health
let currMonster = 1
let damage = 1
let autoDPS = 0
let gold = 1000
let timer = null
const damagePopupTimer = null
const monstr = randomMonster(monsters)
let arrLevel = [1]


function innerValue () {
  countInput.textContent = gold + units
  currentHealthNumOnPage.innerText = health.toFixed(0)
  totalHealthNumOnPage.innerText = health.toFixed(0)
  currentMonsterNumOnPage.innerText = currMonster
  currentLevelNumOnPage.innerText = currLevel
  arrLevel.forEach((e) => {
    const swiperSlide = createTagElement('div', 'swiper-slide', '', swiperWrapper, ['level', e])
    swiperSlide.textContent = `Level ${e}`
  })
}

hero.innerHTML = `<img src="assets/img/monsters/${monstr[0]}.png" alt=""></img>`

function setDamage (dmg) {
  currHealth = currHealth - dmg
  checkIfDead()
  currentLevelNumOnPage.innerText = currLevel
  healthBar.style.width = `${currHealth / health * 100}%`
  currentHealthNumOnPage.innerText = currHealth.toFixed(0)
  totalHealthNumOnPage.innerText = health.toFixed(0)
  currentMonsterNumOnPage.innerText = currMonster
}

function setAutoDamage () {
  timer = setInterval(() => {
    setDamage(autoDPS)
  }, 1000)
}
setAutoDamage()

function checkIfDead () {
  if (currHealth <= 0) {
    dropGold()
    setCount()
    hero.innerHTML = `<img src="assets/img/monsters/${monstr[currMonster]}.png" alt=""></img>`
    if (currMonster === monstersPerLevel) {
      currMonster = 1
      currLevel += 1
      newItemArrSlides()
      health = health + Math.random() * 100 * currLevel
    } else {
      currMonster += 1
    }
    gold = gold + currLevel * 10
    countInput.textContent = gold + units
    currHealth = health
    playField.classList.toggle('__new-monster')
  }
}

function createDamagePopup (e) {
  const damagePopup = createTagElement('div', 'damage-popup', '', wrapperDmgPopup)
  const damagePopupNumOnPage = createTagElement('div', 'damage-popup-number', '', damagePopup)
  damagePopupNumOnPage.innerText = '-' + damage
  // damagePopup.style.top = e.clientY + 'px';
  // damagePopup.style.left = e.clientX + 'px';
  wrapperDmgPopup.append(damagePopup)
}

function removeDamagePopup () {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup')
    wrapperDmgPopup.removeChild(damagePopup)
  }, 1000)
}

hero.addEventListener('click', (e) => {
  console.log(damage)
  setDamage(damage)
  createDamagePopup(e)
  removeDamagePopup()
})

buy.addEventListener('click', () => {
  if (parseInt(countInput.textContent) >= 20) {
    damage += 1
    gold = gold - 20
    countInput.textContent = gold + units
  } else {
    alert('У вас нету денег!')
  }
})

buy1.addEventListener('click', () => {
  if (parseInt(countInput.textContent) >= 30) {
    damage += 2
    gold = gold - 30
    countInput.textContent = gold + units
  } else {
    alert('У вас нету денег!')
  }
})

buy2.addEventListener('click', () => {
  if (parseInt(countInput.textContent) >= 50) {
    damage += 3
    gold = gold - 50
    countInput.textContent = gold + units
  } else {
    alert('У вас нету денег!')
  }
})

autoDamage.addEventListener('click', () => {
  if (parseInt(countInput.textContent) >= 5) {
    autoDPS += 1
    gold = gold - 5
    countInput.textContent = gold + units
  } else {
    alert('У вас нету денег!')
  }
})

function getCount () {
  if (localStorage.getItem('saveItems') !== null) {
    const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
    gold = returnSaveItems.gold
    autoDPS = returnSaveItems.autoDPS
    damage = returnSaveItems.damage
    currLevel = returnSaveItems.currLevel
    health = returnSaveItems.health
    currMonster = returnSaveItems.currMonster
    arrLevel = returnSaveItems.arrLevel
  }
}

swiperWrapper.addEventListener('click', (e) => {
  currLevel = +e.target.dataset.level
  const activeLevel = document.querySelector('.swiper-slide-active')
  activeLevel.classList.remove('swiper-slide-active')
  const isLevel = e.target.closest('.swiper-slide')
  isLevel.classList.add('swiper-slide-active')
  setCount()
})

getCount()
innerValue()

export { gold, autoDPS, damage, currLevel, health, currMonster, arrLevel, swiperWrapper }
