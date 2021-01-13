const countInput = document.querySelector('.count');
const mob = document.querySelector('.mob');
const units = countInput.value.replace(/\d/g, '');
const buy = document.querySelector('.up-lvl');
const buy1 = document.querySelector('.up-lvl1');
const buy2 = document.querySelector('.up-lvl2');

let gold = 1;

mob.addEventListener('click', () => {
  countInput.value = parseInt(countInput.value) + gold + units;
});

buy.addEventListener('click', () => {
  if (parseInt(countInput.value) < 20) {
    alert('У вас нету денег!');
  }
  if (parseInt(countInput.value) >= 20) {
    gold += 1;
    countInput.value = parseInt(countInput.value) - 20 + units;
  }
});

buy1.addEventListener('click', () => {
  if (parseInt(countInput.value) < 30) {
    alert('У вас нету денег!');
  }
  if (parseInt(countInput.value) >= 30) {
    gold += 2;
    countInput.value = parseInt(countInput.value) - 30 + units;
  }
});

buy2.addEventListener('click', () => {
  if (parseInt(countInput.value) < 50) {
    alert('У вас нету денег!');
  }
  if (parseInt(countInput.value) >= 50) {
    gold += 3;
    countInput.value = parseInt(countInput.value) - 50 + units;
  }
});
