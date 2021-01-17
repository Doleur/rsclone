const countInput = document.querySelector('.count');
const hero = document.querySelector('.hero');
const units = countInput.value.replace(/\d/g, '');
const buy = document.querySelector('.up-lvl');
const buy1 = document.querySelector('.up-lvl1');
const buy2 = document.querySelector('.up-lvl2');
const currentLevelNumOnPage = document.querySelector('.current-level');
const healthBar = document.querySelector('.healthbar');
const currentHealthNumOnPage = document.querySelector('.current-health');
const totalHealthNumOnPage = document.querySelector('.total-health');
const currentMonsterNumOnPage = document.querySelector('.current-monster');
// const totalMonstersNumOnPage = document.querySelector('.total-monsters');
const playField = document.querySelector('.field-play');
const autoDamage = document.querySelector('.dps');

const monstersPerLevel = 10;
let currLevel = 1;
let health = 5;
let currHealth = health;
let currMonster = 1;
let damage = 1;
let autoDPS = 0;
let gold = 0;
let timer = null;
let damagePopupTimer = null;

function innerValue () {
  countInput.value = gold + units
  currentHealthNumOnPage.innerText = health.toFixed(0);
  totalHealthNumOnPage.innerText = health.toFixed(0);
  currentMonsterNumOnPage.innerText = currMonster;
  currentLevelNumOnPage.innerText = currLevel;
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

function checkIfDead() {
  if (currHealth <= 0) {
    setCount()
    if (currMonster === monstersPerLevel) {
      currMonster = 1;
      currLevel += 1;
      health = health + Math.random() * 100 * currLevel;
    } else {
      currMonster += 1;
    }
    gold = gold + currLevel * 10;
    countInput.value = gold + units;
    currHealth = health;
    playField.classList.toggle('__new-monster');
  }
}

function createDamagePopup(e) {
  const damagePopup = document.createElement('div');
  const damagePopupNumOnPage = document.createElement('div');
  damagePopup.classList.add('damage-popup');
  damagePopupNumOnPage.classList.add('damage-popup-number');
  damagePopup.append(damagePopupNumOnPage);
  damagePopupNumOnPage.innerText = '-' + damage;
  damagePopup.style.top = e.clientY + 'px';
  damagePopup.style.left = e.clientX + 'px';
  document.body.append(damagePopup);
  console.log(e);
}

function removeDamagePopup() {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup');
    document.body.removeChild(damagePopup);
  }, 500);
}

hero.addEventListener('click', (e) => {
  console.log(damage);
  setDamage(damage);
  createDamagePopup(e);
  removeDamagePopup();
});

buy.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 20) {
    damage += 1;
    gold = gold - 20;
    countInput.value = gold + units;
  } else {
    alert('У вас нету денег!');
  }
});

buy1.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 30) {
    damage += 2;
    gold = gold - 30;
    countInput.value = gold + units;
  } else {
    alert('У вас нету денег!');
  }
});

buy2.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 50) {
    damage += 3;
    gold = gold - 50;
    countInput.value = gold + units;
  } else {
    alert('У вас нету денег!');
  }
});

autoDamage.addEventListener('click', () => {
  clearInterval(timer);
  if (parseInt(countInput.value) >= 5) {
    autoDPS += 1;
    gold = gold - 5;
    countInput.value = gold + units;
    timer = setInterval(() => {
      setDamage(autoDPS);
    }, 1000);
  } else {
    alert('У вас нету денег!');
  }
});

function getCount () {
  if (localStorage.getItem('saveItems') !== null) {
    const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
    gold = returnSaveItems.gold
    autoDPS = returnSaveItems.autoDPS
    // timer()
    damage = returnSaveItems.damage
    currLevel = returnSaveItems.currLevel
    health = returnSaveItems.health
    currMonster = returnSaveItems.currMonster
    }
}

function setCount () {
  const saveItems = { gold,
    autoDPS,
    damage,
    currLevel,
    health,
    currMonster,
  }
  const serialSaveItems = JSON.stringify(saveItems)
  localStorage.setItem('saveItems', serialSaveItems)
}

getCount()
innerValue()
export { countInput, hero, gold, autoDPS, damage, currLevel, health }
