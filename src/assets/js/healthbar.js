import { dropGold } from './gold.js';
import { setCount } from './save-game.js';
import createTagElement from './creatElement.js';
import { randomMonster } from './random.js';
import { monsters } from './monster.js';

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
const wrapperDmgPopup = document.querySelector('.wrapper-damage-popup');


const monstersPerLevel = 10;
let currLevel = 1;
let health = 10;
let isBoss = null;
let currHealth = health;
let currMonster = 1;
let damage = 50;
let autoDPS = 0;
let gold = 1000;
const monstr = randomMonster(monsters);

function innerValue () {
  countInput.value = gold + units;
  currentHealthNumOnPage.innerText = health.toFixed(0);
  totalHealthNumOnPage.innerText = health.toFixed(0);
  currentMonsterNumOnPage.innerText = currMonster;
  currentLevelNumOnPage.innerText = currLevel;
}

let timer = null;
let damagePopupTimer = null;
let monstr = randomMonster(monsters)
console.log(randomMonster(monsters))
// currentHealthNumOnPage.innerText = health;
// totalHealthNumOnPage.innerText = health;

function setMonstr(){
 if(currMonster==2){
    hero.innerHTML = `<img src="${monstr[currMonster-1].img}" alt=""></img>`
    console.log(`${monstr[currMonster-1].name}`)
 }else{
hero.innerHTML = `<img src="${monstr[currMonster].img}" alt=""></img>`
 }
}
setMonstr(monstr)

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

function checkIfDead () {
  if (currHealth <= 0) {
    dropGold();
    setCount();
    setMonstr(monstr)
    // hero.innerHTML = `<img src="${monstr[currMonster].img}" alt=""></img>`
    if (currMonster === monstersPerLevel) {
      currMonster = 1;
      currLevel += 1;
    } else {
      currMonster += 1
    }
    setMonsterHealth();
    gold = gold + currLevel * 10;
    countInput.value = gold + units;
  }
}

function createDamagePopup(e) {
  const damagePopup = createTagElement('div', `damage-popup`, '', wrapperDmgPopup);
  const damagePopupNumOnPage = createTagElement('div', `damage-popup-number`, '', damagePopup);
  damagePopupNumOnPage.innerText = '-' + damage;
  wrapperDmgPopup.append(damagePopup);
}

function removeDamagePopup () {
  setTimeout(() => {
    const damagePopup = document.querySelector('.damage-popup')
    wrapperDmgPopup.removeChild(damagePopup)
  }, 1000)
}

hero.addEventListener('click', (e) => {
  setDamage(damage);
  createDamagePopup(e);
  removeDamagePopup();
});

buy.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 20) {
    damage += 1
    gold = gold - 20
    countInput.value = gold + units
  } else {
    alert('У вас нету денег!')
  }
});

buy1.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 30) {
    damage += 2
    gold = gold - 30
    countInput.value = gold + units
  } else {
    alert('У вас нету денег!')
  }
});

buy2.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 50) {
    damage += 3
    gold = gold - 50
    countInput.value = gold + units
  } else {
    alert('У вас нету денег!')
  }
});

autoDamage.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 5) {
    autoDPS += 1
    gold = gold - 5
    countInput.value = gold + units
  } else {
    alert('У вас нету денег!')
  }
});

function getCount () {
  if (localStorage.getItem('saveItems') !== null) {
    const returnSaveItems = JSON.parse(localStorage.getItem('saveItems'))
    gold = returnSaveItems.gold
    autoDPS = returnSaveItems.autoDPS
    damage = returnSaveItems.damage
    currLevel = returnSaveItems.currLevel
    health = returnSaveItems.health
    currMonster = returnSaveItems.currMonster
  }
}

getCount();
innerValue();

document.addEventListener('DOMContentLoaded', setMonsterHealth);

export { gold, autoDPS, damage, currLevel, health, currMonster }
