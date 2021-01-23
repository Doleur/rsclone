import { shopWrapper } from './constants.js';
import { dropGold } from './dropGolds.js'
import { setCount } from './save-game.js'
import createTagElement from './creatElement.js'
import { randomMonster } from './random.js'
import { monsters } from './monster.js'
import { newItemArrSlides } from './swiper.js'
import { shopGeneration, updateShop } from './shopGeneration.js';
import { heroesData } from './heroesData.js'
import { calculationTotalDamage } from './calculationDamage.js'


const countInput = document.querySelector('.count')
const hero = document.querySelector('.hero')
const units = countInput.textContent.replace(/\d/g, '')
const currentLevelNumOnPage = document.querySelector('.current-level')
const healthBar = document.querySelector('.healthbar')
const currentHealthNumOnPage = document.querySelector('.current-health')
const totalHealthNumOnPage = document.querySelector('.total-health')
const currentMonsterNumOnPage = document.querySelector('.current-monster')
  // const totalMonstersNumOnPage = document.querySelector('.total-monsters');
const playField = document.querySelector('.field-play')
  // const autoDamage = document.querySelector('.dps')
const wrapperDmgPopup = document.querySelector('.wrapper-damage-popup')
const swiperWrapper = document.querySelector('.swiper-wrapper')

shopGeneration()

const monstersPerLevel = 10
let currLevel = 1
let health = 20
let isBoss = null;
let currHealth = health
let currMonster = 1
let damage = calculationTotalDamage();
let autoDPS = damage.DPS;
let gold = 1000
const monstr = randomMonster(monsters)
let arrLevel = [1]


function innerValue() {
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

function setMonsterHealth() {
  if (currLevel % 5 === 0) {
    isBoss = 1;
  } else {
    isBoss = 0.1;
  }
  if (currLevel < 141) {
    health = Math.ceil(10 * (currLevel - 1 + Math.pow(1.55, currLevel - 1)) * (isBoss * 10));
  } else if (currLevel < 501) {
    health = Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, currLevel - 140)) * (isBoss * 10));
  } else if (currLevel < 200001) {
    health = Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, 360) * Math.PI * (1.145 + 0.001 * Math.floor((501 - 1) / 500))) * (isBoss * 10));
  } else {
    health = Math.ceil((Math.pow(1.545, currLevel - 200001) * 1.24 * Math.pow(10, 25409)) + ((currLevel - 1) * 10));
  }
  currHealth = health;
}

function setGoldDropped() {
  if (currLevel > 75) {
    gold = gold + Math.ceil(health / 15 * Math.pow(1.025, currLevel - 75));
  }
  gold = gold + Math.ceil(health / 15);
  console.log(gold)
}

function setDamage(dmg) {
  currHealth = currHealth - dmg;
  checkIfDead();
  currentLevelNumOnPage.innerText = currLevel;
  healthBar.style.width = `${currHealth / health * 100}%`;
  currentHealthNumOnPage.innerText = currHealth.toFixed(0);
  totalHealthNumOnPage.innerText = health.toFixed(0);
  currentMonsterNumOnPage.innerText = currMonster;
}

function setAutoDamage() {
  setInterval(() => {
    setDamage(autoDPS);
  }, 1000);
}
setAutoDamage()

function checkIfDead() {
  if (currHealth <= 0) {
    setGoldDropped();
    dropGold();
    setCount();
    hero.innerHTML = `<img src="assets/img/monsters/${monstr[currMonster]}.png" alt=""></img>`;
    if (currMonster === monstersPerLevel) {
      currMonster = 1
      currLevel += 1
      newItemArrSlides()
    } else {
      currMonster += 1
    }
    setMonsterHealth();
    countInput.textContent = gold + units;
  }
}

function createDamagePopup(e) {
  const damagePopup = createTagElement('div', `damage-popup`, '', wrapperDmgPopup);
  const damagePopupNumOnPage = createTagElement('div', `damage-popup-number`, '', damagePopup);
  damagePopupNumOnPage.innerText = '-' + damage.clickDamage;
  wrapperDmgPopup.append(damagePopup);
}

function removeDamagePopup() {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup')
    wrapperDmgPopup.removeChild(damagePopup)
  }, 1000)
}

hero.addEventListener('click', (e) => {
  setDamage(damage.clickDamage);
  createDamagePopup(e);
  removeDamagePopup();
});

shopWrapper.addEventListener('click', ({ target }) => {
  let isBuyButton = target.closest('.buyButton')
  if (!isBuyButton) return
  let hero = isBuyButton.classList[1].replace(/hero/, '')
  if (gold < heroesData[hero].baseCost) return
  gold -= heroesData[hero].baseCost
  heroesData[hero].lvl += 1
  updateShop(hero)
  damage = calculationTotalDamage()
  autoDPS = damage.DPS
  console.log(autoDPS)
});

function getCount() {
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
  setMonsterHealth();
})

getCount()
innerValue()



document.addEventListener('DOMContentLoaded', setMonsterHealth);

export { gold, autoDPS, damage, currLevel, health, currMonster, arrLevel, swiperWrapper }
