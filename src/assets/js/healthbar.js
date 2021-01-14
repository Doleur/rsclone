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
const totalMonstersNumOnPage = document.querySelector('.total-monsters');
const playField = document.querySelector('.field-play');

const monstersPerLevel = 10;
let currLevel = 1;
let health = 20;
let currHealth = health;
let currMonster = 1;
let damage = 1;

// currentHealthNumOnPage.innerText = health;
// totalHealthNumOnPage.innerText = health;

hero.addEventListener('click', () => {
  console.log(damage);
  currHealth = currHealth - damage;
  if (currHealth <= 0) {
    if (currMonster === monstersPerLevel) {
      currMonster = 1;
      currLevel += 1;
      health = health + Math.random() * 100 * currLevel;
    } else {
      currMonster += 1;
    }
    currHealth = health;
    playField.classList.toggle('__new-monster');
  }
  currentLevelNumOnPage.innerText = currLevel;
  healthBar.style.width = `${currHealth / health * 100}%`;
  currentHealthNumOnPage.innerText = currHealth.toFixed(0);
  totalHealthNumOnPage.innerText = health.toFixed(0);
  currentMonsterNumOnPage.innerText = currMonster;
});

buy.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 20) {
    damage += 1;
  }
});

buy1.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 30) {
    damage += 2;
  }
});

buy2.addEventListener('click', () => {
  if (parseInt(countInput.value) >= 50) {
    damage += 3;
  }
});
