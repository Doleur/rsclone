import { shopWrapper, gameStats, countInput, hero, currentLevelNumOnPage, healthBar, currentHealthNumOnPage, totalHealthNumOnPage, currentMonsterNumOnPage, wrapperDmgPopup, swiperWrapper, monstersPerLevel } from './constants.js';
import { dropGoldAnimation, setGoldDropped } from './dropGolds.js'
import { setCount } from './save-game.js'
import createTagElement from './creatElement.js'
import { randomMonster } from './random.js'
import { newItemArrSlides } from './swiper.js'
import { shopGeneration, updateShop, buyHero } from './shopGeneration.js';
import { heroesData } from './heroesData.js'
import { calculationHeroDamage, calculationTotalDamage, displayDamage } from './calculationDamage.js'
import { calculationCostHero } from './calculationCostHero.js'
import { monsters } from './monsterData.js'
import { bosses } from './boss.js'


shopGeneration()

let isBoss = gameStats.isBoss
let currHealth = gameStats.health
let arrLevel = [1]
var countdown = new setCountdown(time, 30);

function innerValue() {
  countInput.textContent = `${gameStats.gold.number}${gameStats.gold.abbreviation}`
  currentHealthNumOnPage.innerText = gameStats.health.toFixed(0)
  totalHealthNumOnPage.innerText = gameStats.health.toFixed(0)
  currentMonsterNumOnPage.innerText = gameStats.currMonster
  currentLevelNumOnPage.innerText = gameStats.currLevel
  arrLevel.forEach((e) => {
    const swiperSlide = createTagElement('div', 'swiper-slide', '', swiperWrapper, ['level', e])
    swiperSlide.textContent = `Level ${e}`
  })
}

hero.innerHTML = `<img src="${monsters[gameStats.currMonster - 1].img}" alt=""></img>`

function setMonsterHealth() {
  if (gameStats.currLevel % 5 === 0) {
    isBoss = 1;
    randomMonster(bosses)
    hero.innerHTML = `<img src="${bosses[gameStats.currMonster].img}" alt=""></img>`
    countdownStart()
  } else {
    isBoss = 0.1;
    countdownStop()
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
    setDamage(gameStats.DPS.number);
  }, 1000);
}
setAutoDamage()

function checkIfDead() {
  if (currHealth <= 0) {
    let goldDropped = setGoldDropped();
    dropGoldAnimation(goldDropped);
    setCount();
    hero.innerHTML = `<img src="${monsters[gameStats.currMonster].img}" alt=""></img>`
    if (gameStats.currLevel % 5 === 0) {
      if (currHealth <= 0) {
        gameStats.currLevel += 1
        newItemArrSlides()
      }
    }
    if (gameStats.currMonster === monstersPerLevel) {
      gameStats.currMonster = 1
      gameStats.currLevel += 1
      newItemArrSlides()
    } else {
      gameStats.currMonster += 1
    }
    setMonsterHealth();
    countInput.textContent = `${gameStats.gold.number}${gameStats.gold.abbreviation}`;
  }
}

function createDamagePopup(e) {
  const damagePopup = createTagElement('div', `damage-popup`, '', wrapperDmgPopup);
  const damagePopupNumOnPage = createTagElement('div', `damage-popup-number`, '', damagePopup);
  damagePopupNumOnPage.innerText = '-' + gameStats.clickDamage.number;
  wrapperDmgPopup.append(damagePopup);
}

function removeDamagePopup() {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup')
    wrapperDmgPopup.removeChild(damagePopup)
  }, 1000)
}

hero.addEventListener('click', (e) => {
  setDamage(gameStats.clickDamage.number);
  createDamagePopup(e);
  removeDamagePopup();
});

shopWrapper.addEventListener('click', ({ target }) => {
  let isBuyButton = target.closest('.buyButton')
  if (!isBuyButton) return
  let hero = isBuyButton.classList[1].replace(/hero/, '')
  let ifPurchaseMade = buyHero(hero)
  if (!ifPurchaseMade) return
  heroesData[hero].lvl += 1
  countInput.textContent = `${gameStats.gold.number}${gameStats.gold.abbreviation}`
  calculationHeroDamage(hero)
  calculationCostHero(hero)
  updateShop(hero)
  calculationTotalDamage()
  displayDamage()
});

function getCount() {
  if (localStorage.getItem('saveItems') !== null) {
    const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
    gameStats.gold.number = returnSaveItems.gold
    gameStats.DPS.number = returnSaveItems.autoDPS
    gameStats.clickDamage.number = returnSaveItems.damage
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
  if (gameStats.currLevel % 5 == 0) {
    countdownStart()
  } else {
    hero.innerHTML = `<img src="${monsters[gameStats.currMonster].img}" alt=""></img>`

  }
})

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
      gameStats.currLevel -= 1
      setMonsterHealth()
      hero.innerHTML = `<img src="${monsters[gameStats.currMonster].img}" alt=""></img>`
    } else {
      var mi = Math.floor(tt / (60 * 100));
      var ss = Math.floor((tt - mi * 60 * 100) / 100);
      var ms = tt - Math.floor(tt / 100) * 100;

      that.elem.innerHTML = `${that.fillZero(ss)}.${that.fillZero(ms)}`;
    }
  };

  that.init = function() {
    if (that.timer) {
      clearInterval(that.timer);
      that.elem.innerHTML = '';
      that.totalTime = seconds * 100;
      that.usedTime = 0;
      that.startTime = +new Date();
      that.timer = null;
    }
  };

  that.start = function() {
    if (!that.timer) {
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

function countdownStart() {
  countdownStop()
  countdown.init();
  countdown.start();
  time.classList.add('active')
};

function countdownInit() {
  countdown.init();
};

function countdownStop() {
  countdown.stop();
  time.classList.remove('active')
};

getCount()
innerValue()



document.addEventListener('DOMContentLoaded', setMonsterHealth);

export { arrLevel, swiperWrapper }
