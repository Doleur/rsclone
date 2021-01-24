import { shopWrapper, gameStats, monsters, countInput, hero, currentLevelNumOnPage, healthBar, currentHealthNumOnPage, totalHealthNumOnPage, currentMonsterNumOnPage, wrapperDmgPopup, swiperWrapper, monstersPerLevel } from './constants.js';
import { dropGoldAnimation, setGoldDropped } from './dropGolds.js'
import { setCount } from './save-game.js'
import createTagElement from './creatElement.js'
import { randomMonster } from './random.js'
import { newItemArrSlides } from './swiper.js'
import { shopGeneration, updateShop } from './shopGeneration.js';
import { heroesData } from './heroesData.js'
import { calculationTotalDamage } from './calculationDamage.js'

shopGeneration()

let isBoss = gameStats.isBoss
let currHealth = gameStats.health
let damage = calculationTotalDamage();
let autoDPS = damage.DPS;
const monstr = randomMonster(monsters)
let arrLevel = [1]


function innerValue() {
  countInput.textContent = gameStats.gold
  currentHealthNumOnPage.innerText = gameStats.health.toFixed(0)
  totalHealthNumOnPage.innerText = gameStats.health.toFixed(0)
  currentMonsterNumOnPage.innerText = gameStats.currMonster
  currentLevelNumOnPage.innerText = gameStats.currLevel
  arrLevel.forEach((e) => {
    const swiperSlide = createTagElement('div', 'swiper-slide', '', swiperWrapper, ['level', e])
    swiperSlide.textContent = `Level ${e}`
  })
}

hero.innerHTML = `<img src="assets/img/monsters/${monstr[0]}.png" alt=""></img>`

function setMonsterHealth() {
  if (gameStats.currLevel % 5 === 0) {
    isBoss = 1;
  } else {
    isBoss = 0.1;
  }
  if (gameStats.currLevel < 141) {
    gameStats.health = Math.ceil(10 * (gameStats.currLevel - 1 + Math.pow(1.55, gameStats.currLevel - 1)) * (isBoss * 10));
  } else if (gameStats.currLevel < 501) {
    gameStats.health = Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, gameStats.currLevel - 140)) * (isBoss * 10));
  } else if (gameStats.currLevel < 200001) {
    gameStats.health = Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, 360) * Math.PI * (1.145 + 0.001 * Math.floor((501 - 1) / 500))) * (isBoss * 10));
  } else {
    gameStats.health = Math.ceil((Math.pow(1.545, gameStats.currLevel - 200001) * 1.24 * Math.pow(10, 25409)) + ((gameStats.currLevel - 1) * 10));
  }
  currHealth = gameStats.health;
}

function setDamage(dmg) {
  currHealth = currHealth - dmg;
  checkIfDead();
  currentLevelNumOnPage.innerText = gameStats.currLevel;
  healthBar.style.width = `${currHealth / gameStats.health * 100}%`;
  currentHealthNumOnPage.innerText = currHealth.toFixed(0);
  totalHealthNumOnPage.innerText = gameStats.health.toFixed(0);
  currentMonsterNumOnPage.innerText = gameStats.currMonster;
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
    dropGoldAnimation();
    setCount();
    hero.innerHTML = `<img src="assets/img/monsters/${monstr[gameStats.currMonster]}.png" alt=""></img>`;
    if (gameStats.currMonster === monstersPerLevel) {
      gameStats.currMonster = 1
      gameStats.currLevel += 1
      console.log(gameStats.currLevel)
      newItemArrSlides()
    } else {
      gameStats.currMonster += 1
    }
    setMonsterHealth();
    countInput.textContent = gameStats.gold;
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
  if (gameStats.gold < heroesData[hero].baseCost) return
  gameStats.gold -= heroesData[hero].baseCost
  heroesData[hero].lvl += 1
  countInput.textContent = gameStats.gold
  updateShop(hero)
  damage = calculationTotalDamage()
  autoDPS = damage.DPS
});

function getCount() {
  if (localStorage.getItem('saveItems') !== null) {
    const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
    gameStats.gold = returnSaveItems.gold
    autoDPS = returnSaveItems.autoDPS
    damage = returnSaveItems.damage
    gameStats.currLevel = returnSaveItems.currLevel
    gameStats.health = returnSaveItems.health
    gameStats.currMonster = returnSaveItems.currMonster
    arrLevel = returnSaveItems.arrLevel
  }
}

swiperWrapper.addEventListener('click', (e) => {
  gameStats.currLevel = +e.target.dataset.level
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

export { autoDPS, damage, arrLevel, swiperWrapper }
