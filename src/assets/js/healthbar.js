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
import { bosses } from './boss.js'
<<<<<<< HEAD

=======
import { newItemArrSlides } from './swiper.js'
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee

const countInput = document.querySelector('.count')
const hero = document.querySelector('.hero')
const units = countInput.textContent.replace(/\d/g, '')
<<<<<<< HEAD
=======
const buy = document.querySelector('.up-lvl')
const buy1 = document.querySelector('.up-lvl1')
const buy2 = document.querySelector('.up-lvl2')
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee
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
const time = document.querySelector('.time')

<<<<<<< HEAD
shopGeneration()
=======
const swiperWrapper = document.querySelector('.swiper-wrapper')
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee

const monstersPerLevel = 10
let currLevel = 1
let health = 20
let isBoss = null;
let currHealth = health
let currMonster = 1
<<<<<<< HEAD
let damage = calculationTotalDamage();
let autoDPS = damage.DPS;
let gold = 1000
const monstr = randomMonster(monsters)
let arrLevel = [1]


function innerValue() {
=======
let damage = 1
let autoDPS = 0
let gold = 1000
const monstr = randomMonster(monsters)
let arrLevel = [1]

randomMonster(monsters)

function innerValue () {
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee
  countInput.textContent = gold + units
  currentHealthNumOnPage.innerText = health.toFixed(0)
  totalHealthNumOnPage.innerText = health.toFixed(0)
  currentMonsterNumOnPage.innerText = currMonster
  currentLevelNumOnPage.innerText = currLevel
  arrLevel.forEach((e) => {
    const swiperSlide = createTagElement('div', 'swiper-slide', '', swiperWrapper, ['level', e])
    swiperSlide.textContent = `Level ${e}`
  })
  hero.innerHTML = `<img src="${monsters[currMonster - 1].img}" alt=""></img>`
  arrLevel.forEach((e) => {
    const swiperSlide = createTagElement('div', 'swiper-slide', '', swiperWrapper, ['level', e])
    swiperSlide.textContent = `Level ${e}`
  })
}


function setMonsterHealth() {
  if (currLevel % 5 === 0) {
<<<<<<< HEAD
    isBoss = 1;
=======
    isBoss = 1
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee
    timerStart()
    randomMonster(bosses)
    hero.innerHTML = `<img src="${bosses[currMonster].img}" alt=""></img>`
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

function setGoldDropped() {
  if (currLevel > 75) {
    gold = gold + Math.ceil(health / 15 * Math.pow(1.025, currLevel - 75)) ;
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
<<<<<<< HEAD
    hero.innerHTML = `<img src="assets/img/monsters/${monstr[currMonster]}.png" alt=""></img>`;
=======
    hero.innerHTML = `<img src="${monsters[currMonster].img}" alt=""></img>`
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee
    if (isBoss == 1) {
      time.classList.add = 'on'
      hero.innerHTML = `<img src="${bosses[currMonster].img}" alt=""></img>`
      if (currHealth <= 0) {
        currLevel += 1;
        setMonsterHealth()
        countdownInit()
hero.innerHTML = `<img src="${monsters[currMonster].img}" alt=""></img>`
      }
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

<<<<<<< HEAD
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
=======
hero.addEventListener('click', e => {
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
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee

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
let countdown = new setCountdown(time, 30);

<<<<<<< HEAD
swiperWrapper.addEventListener('click', (e) => {
  currLevel = +e.target.dataset.level
  const activeLevel = document.querySelector('.swiper-slide-active')
  activeLevel.classList.remove('swiper-slide-active')
  const isLevel = e.target.closest('.swiper-slide')
  isLevel.classList.add('swiper-slide-active')
  setCount()
  setMonsterHealth();
})

let countdown = new setCountdown(time, 30);

=======
>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee
function setCountdown(elem, seconds) {
  var that = {};

  that.elem = elem;
  that.seconds = seconds;
  that.totalTime = seconds * 100;
  that.usedTime = 0;
  that.startTime = +new Date();
  that.timer = null;

  that.count = function() {
    that.usedTime = Math.floor((+new Date() - that.startTime) / 10);

    var tt = that.totalTime - that.usedTime;
    if (tt <= 0) {
      that.elem.innerHTML = '';
      clearInterval(that.timer);
      currLevel -=1
      setMonsterHealth()
hero.innerHTML = `<img src="${monsters[currMonster].img}" alt=""></img>`
    } else {
      var mi = Math.floor(tt / (60 * 100));
      var ss = Math.floor((tt - mi * 60 * 100) / 100);
      var ms = tt - Math.floor(tt / 100) * 100;

      that.elem.innerHTML = `${that.fillZero(ss)}.${that.fillZero(ms)}`;
    }
  };

  that.init = function() {
    if(that.timer){
      clearInterval(that.timer);
      that.elem.innerHTML = '';
      that.totalTime = seconds * 100;
      that.usedTime = 0;
      that.startTime = +new Date();
      that.timer = null;
    }
  };

  that.start = function() {
    if(!that.timer){
       that.timer = setInterval(that.count, 10);
    }
  };

  that.stop = function() {
    console.log('usedTime = ' + countdown.usedTime);
    if (that.timer) clearInterval(that.timer);
  };

  that.fillZero = function(num) {
    return num < 10 ? '0' + num : num;
  };

  return that;
}

function timerStart(){
  countdown.start();
};

function countdownInit(){
  countdown.init();
};

getCount()
innerValue()

swiperWrapper.addEventListener('click', (e) => {
  currLevel = +e.target.dataset.level
  const activeLevel = document.querySelector('.swiper-slide-active')
  activeLevel.classList.remove('swiper-slide-active')
  const isLevel = e.target.closest('.swiper-slide')
  isLevel.classList.add('swiper-slide-active')
  setCount()
  setMonsterHealth();
})

<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', setMonsterHealth);

=======
getCount()
innerValue()

>>>>>>> e3175c0377b23005f1ff9f69c77c4effe37848ee
export { gold, autoDPS, damage, currLevel, health, currMonster, arrLevel, swiperWrapper }
