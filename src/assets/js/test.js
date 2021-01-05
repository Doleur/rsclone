const countInput = document.querySelector('.count');
const mob = document.querySelector('.mob');
const units = countInput.value.replace(/\d/g, '');
const buy = document.querySelector('.up-lvl');
const buy1 = document.querySelector('.up-lvl1');
const buy2 = document.querySelector('.up-lvl2');

mob.onclick = function() {
  countInput.value = parseInt(countInput.value) + 1 + units;
};

buy.onclick = function() {
  if (parseInt(countInput.value) < 20) {
    alert('У вас нету денег!');
  }
  if (parseInt(countInput.value) >= 20) {
    countInput.value = parseInt(countInput.value) - 20 + units;
    plus.onclick = function() {
      countInput.value = parseInt(countInput.value) + 2 + units;
    }
  };
};
buy1.onclick = function() {
  if (parseInt(countInput.value) < 30) {
    alert('У вас нету денег!');
  }
  if (parseInt(countInput.value) >= 30) {
    countInput.value = parseInt(countInput.value) - 30 + units;
    plus.onclick = function() {
      countInput.value = parseInt(countInput.value) + 3 + units;
    }
  };
};
buy2.onclick = function() {
  if (parseInt(countInput.value) < 50) {
    alert('У вас нету денег!');
  }
  if (parseInt(countInput.value) >= 50) {
    countInput.value = parseInt(countInput.value) - 50 + units;
    plus.onclick = function() {
      countInput.value = parseInt(countInput.value) + 4 + units;
    }
  };
};