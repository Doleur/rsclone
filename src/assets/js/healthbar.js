const countInput = document.querySelector('.count');
const mob = document.querySelector('.mob');
const units = countInput.value.replace(/\d/g, '');
const buy = document.querySelector('.up-lvl');
const buy1 = document.querySelector('.up-lvl1');
const buy2 = document.querySelector('.up-lvl2');
const healthBar = document.querySelector('.healthbar');

let health = 100;
let damage = 1;

mob.addEventListener('click', () => {
  health = health - damage;

  console.log(damage);

  if (health <= 0) {
    health = 100;
    mob.classList.toggle('mob__active');
  }
  healthBar.style.width = `${health}%`;
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
