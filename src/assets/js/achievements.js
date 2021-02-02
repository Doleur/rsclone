import createTagElement from './creatElement.js';
import { gameStats, achievementsWrapper } from './constants.js';
import { statistics } from './stats.js';
import { saveAchievements } from './save-game.js';

export const achievementsArr = [{
    initWord: 'Achieve',
    goalName: 'level',
    currentValue: gameStats.currLevel - 1,
    goalsArr: [1, 2, 3, 4, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000],
    goalIndex: 0,
  },
  {
    initWord: 'Make',
    goalName: 'clicks',
    currentValue: statistics.clicksMade,
    goalsArr: [1000, 5000, 10000, 50000, 100000, 250000, 500000],
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
    goalsArr: [5, 10, 20, 50, 100, 200, 500, 1000],
    goalIndex: 0,
  },
  {
    initWord: 'Collect',
    goalName: 'gold',
    currentValue: statistics.totalGold,
    goalsArr: [1000, 5000, 10000, 50000, 100000, 250000, 500000, 1000000],
    goalIndex: 0,
  },
];

function updateCurrentValue() {
  achievementsArr[0].currentValue = gameStats.currLevel - 1;
  achievementsArr[1].currentValue = statistics.clicksMade;
  achievementsArr[2].currentValue = statistics.currentClickDamage;
  achievementsArr[3].currentValue = statistics.monstersKilled;
  achievementsArr[4].currentValue = statistics.bossesKilled;
  achievementsArr[5].currentValue = statistics.totalGold;
}

export function generateAchievements() {
  for (let x = 0; x < achievementsArr.length; x++) {
    let achievementTab = createTagElement('div', `achievement achievement-${x}`, '', achievementsWrapper);

    createTagElement('div', `achievement_descr`, `${achievementsArr[x].initWord} ${achievementsArr[x].goalsArr[achievementsArr[x].goalIndex]} ${achievementsArr[x].goalName}.`, achievementTab);

    createTagElement('div', `achievement_stars`, ``, achievementTab);

    createTagElement('div', `achievement_progressbar-wrapper`, [
      createTagElement(
        'div',
        `achievement_progressbar-data`,
        `${achievementsArr[x].currentValue} / ${achievementsArr[x].goalsArr[achievementsArr[x].goalIndex]}`,
        ''
      ),
      createTagElement(
        'div',
        `progressbar`,
        ``,
        ''
      ),
    ], achievementTab);
  }
}

function checkifAchievementDone(num) {
  const current = achievementsArr[num].currentValue;
  const goal = achievementsArr[num].goalsArr;
  if (+current >= +goal[achievementsArr[num].goalIndex]) {
    achievementsArr[num].goalIndex += 1;
  } else {
    achievementsArr[num].goalIndex = achievementsArr[num].goalIndex;
  }
}

export function updateAchievements() {
  achievementsWrapper.childNodes.forEach(item => {
    const num = item.classList[1].replace(/achievement-/, '');
    const descr = item.querySelector('.achievement_descr');
    const progress = item.querySelector('.achievement_progressbar-data');
    const progressBar = item.querySelector('.progressbar');
    updateCurrentValue();
    checkifAchievementDone(num);

    descr.innerText = `${achievementsArr[num].initWord} ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]} ${achievementsArr[num].goalName}.`;

    progress.innerText = `${achievementsArr[num].currentValue} / ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]}`;
    progressBar.style.width = `${
      (achievementsArr[num].currentValue / achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]) * 100
    }%`;
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
  }
}

setInterval(saveAchievements, 1000);
