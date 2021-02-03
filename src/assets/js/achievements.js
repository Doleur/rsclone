import createTagElement from './creatElement.js';
import { gameStats, achievementsWrapper } from './constants.js';
import { statistics } from './stats.js';
import { saveAchievements } from './save-game.js';
import { convertingNumbers } from './convertingNumbers.js'

export const achievementsArr = [{
    initWord: 'Achieve',
    goalName: 'level',
    currentValue: gameStats.currLevel - 1,
    goalsArr: [5, 25, 100, 250, 500, 750, 1000, 1200, 1400, 1600, 1800, 2000],
    goalIndex: 0,
  },
  {
    initWord: 'Make',
    goalName: 'clicks',
    currentValue: statistics.clicksMade,
    goalsArr: [1000, 5000, 20000, 50000, 100000, 250000, 500000],
    goalIndex: 0,
  },
  {
    initWord: 'Achieve',
    goalName: 'click damage',
    currentValue: statistics.currentClickDamage,
    goalsArr: [100, 1000, 5000, 10000, 50000, 100000, 250000, 500000],
    goalIndex: 0,
  },
  {
    initWord: 'Achieve',
    goalName: 'DPS',
    currentValue: statistics.currentDPS,
    goalsArr: [100, 1000, 5000, 25000, 100000, 250000, 500000, 1000000],
    goalIndex: 0,
  },
  {
    initWord: 'Kill',
    goalName: 'monsters',
    currentValue: statistics.monstersKilled,
    goalsArr: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
    goalIndex: 0,
  },
  {
    initWord: 'Kill',
    goalName: 'bosses',
    currentValue: statistics.bossesKilled,
    goalsArr: [5, 20, 50, 100, 250, 500, 1000, 2000, 5000],
    goalIndex: 0,
  },
  {
    initWord: 'Collect',
    goalName: 'gold',
    currentValue: statistics.totalGold,
    goalsArr: [1000, 5000, 20000, 50000, 100000, 250000, 500000, 1000000],
    goalIndex: 0,
  },
];

function updateCurrentValue() {
  achievementsArr[0].currentValue = gameStats.currLevel - 1;
  achievementsArr[1].currentValue = statistics.clicksMade;
  achievementsArr[2].currentValue = statistics.currentClickDamage;
  achievementsArr[3].currentValue = statistics.currentDPS;
  achievementsArr[4].currentValue = statistics.monstersKilled;
  achievementsArr[5].currentValue = statistics.bossesKilled;
  achievementsArr[6].currentValue = statistics.totalGold;
}

export function generateAchievements() {
  for (let x = 0; x < achievementsArr.length; x++) {
    let achievementTab = createTagElement('div', `achievement achievement-${x}`, '', achievementsWrapper);

    createTagElement('div', `achievement_descr`, `${achievementsArr[x].initWord} ${achievementsArr[x].goalsArr[achievementsArr[x].goalIndex]} ${achievementsArr[x].goalName}.`, achievementTab);

    createTagElement('div', `achievement_stars`, [
      createTagElement(
        'div',
        `stars`,
        createStars(achievementsArr[x].goalsArr.length),
        ''
      ),
    ], achievementTab);

    let achievmentBar = null;
    if (typeof(achievementsArr[x].currentValue) === 'object') {
      achievmentBar = createTagElement('div', `achievement_progressbar-wrapper`, [
        createTagElement(
          'div',
          `achievement_progressbar-data`,
          `${Math.trunc(achievementsArr[x].currentValue.number)}${achievementsArr[x].currentValue.abbreviation} / ${achievementsArr[x].goalsArr[achievementsArr[x].goalIndex]}`,
          ''
        ),
      ], achievementTab);
    } else {
      achievmentBar = createTagElement('div', `achievement_progressbar-wrapper`, [
        createTagElement(
          'div',
          `achievement_progressbar-data`,
          `${achievementsArr[x].currentValue} / ${achievementsArr[x].goalsArr[achievementsArr[x].goalIndex]}`,
          ''
        ),
      ], achievementTab);
    }
    createTagElement('div', `progressbar`, ``, achievmentBar);
  }
}

function createStars(length) {
  const starArr = [];
  for (let i = 0; i < length; i++) {
    starArr.push(createTagElement('div', `star`, ``, ''), );
  }
  return starArr;
}

function checkifAchievementDone(num, stars) {
  const current = achievementsArr[num].currentValue;
  const goal = achievementsArr[num].goalsArr[achievementsArr[num].goalIndex];
  let goalConvert = convertingNumbers(goal)
  let currentNumber
  if (typeof(current) === 'object') {
    let differencePowerOfTen = current.powerOfTen - goalConvert.powerOfTen
    if (differencePowerOfTen < 0) return
    currentNumber = current.number
    if (!differencePowerOfTen && currentNumber < +goalConvert.number) return
  } else {
    currentNumber = current
    if (+currentNumber < +goalConvert.number) return
  }
  achievementsArr[num].goalIndex += 1;
  stars.forEach((item, index) => {
    if (index < achievementsArr[num].goalIndex) {
      item.classList.add('star_active');
    }
  });
}

export function updateAchievements() {
  achievementsWrapper.childNodes.forEach(item => {
    const num = item.classList[1].replace(/achievement-/, '');
    const descr = item.querySelector('.achievement_descr');
    const stars = item.querySelectorAll('.star');
    const progress = item.querySelector('.achievement_progressbar-data');
    const progressBar = item.querySelector('.progressbar');
    updateCurrentValue();
    checkifAchievementDone(num, stars);

    descr.innerText = `${achievementsArr[num].initWord} ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]} ${achievementsArr[num].goalName}.`;

    if (typeof(achievementsArr[num].currentValue) === 'object') {
      progress.innerText = `${Math.trunc(achievementsArr[num].currentValue.number)}${achievementsArr[num].currentValue.abbreviation} / ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]}`;
      progressBar.style.width = `${
        (Math.trunc(achievementsArr[num].currentValue.number) / achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]) * 100
      }%`;
    } else {
      progress.innerText = `${achievementsArr[num].currentValue} / ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]}`;
      progressBar.style.width = `${
        (achievementsArr[num].currentValue / achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]) * 100
      }%`;
    }
  });
}

export function checkAchievementsSaved() {
  if (localStorage.getItem('achievsSaved')) {
    const savedAchievements = JSON.parse(localStorage.getItem('achievsSaved'));
    achievementsArr[0].goalIndex = savedAchievements[0].goalIndex;
    achievementsArr[1].goalIndex = savedAchievements[1].goalIndex;
    achievementsArr[2].goalIndex = savedAchievements[2].goalIndex;
    achievementsArr[3].goalIndex = savedAchievements[3].goalIndex;
    achievementsArr[4].goalIndex = savedAchievements[4].goalIndex;
    achievementsArr[5].goalIndex = savedAchievements[5].goalIndex;
    achievementsArr[6].goalIndex = savedAchievements[6].goalIndex;
  }
}

setInterval(saveAchievements, 1000);