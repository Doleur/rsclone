import createTagElement from './creatElement.js';
import { gameStats, achievementsWrapper } from './constants.js';
import { statistics } from './stats.js';

let achievementsArr = [];

function updateArr() {
  achievementsArr = [
    { initWord: 'Achieve',
      goalName: 'level',
      currentValue: gameStats.currLevel - 1,
      goalsArr: [1, 2, 3, 4, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000],
      goalIndex: 0,
    },
    { initWord: 'Make',
      goalName: 'clicks',
      currentValue: statistics.clicksMade,
      goalsArr: [1000, 5000, 10000, 50000, 100000, 250000, 500000],
      goalIndex: setIndex(),
    },
    { initWord: 'Achieve',
      goalName: 'click damage',
      currentValue: statistics.currentClickDamage,
      goalsArr: [100, 1000, 5000, 10000, 50000, 100000, 250000, 500000],
      goalIndex: setIndex(),
    },
    { initWord: 'Kill',
      goalName: 'monsters',
      currentValue: statistics.monstersKilled,
      goalsArr: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000],
      goalIndex: setIndex(),
    },
    { initWord: 'Kill',
      goalName: 'bosses',
      currentValue: statistics.bossesKilled,
      goalsArr: [5, 10, 20, 50, 100, 200, 500, 1000],
      goalIndex: console.log(setIndex()),
    },
    { initWord: 'Collect',
      goalName: 'gold',
      currentValue: statistics.totalGold,
      goalsArr: [1000, 5000, 10000, 50000, 100000, 250000, 500000, 1000000],
      goalIndex: 0 || setIndex(),
    },
  ];
}

export function generateAchievements() {
  updateArr();
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

function setIndex() {
  if (achievementsArr.length) {
    achievementsArr.forEach(item => {
      for (let z = 0; z < item.goalsArr.length; z++) {
        console.log(z);
        if (item.currentValue >= item.goalsArr[z]) {
          return z += 1;
        } else {
          return z;
        }
      }
    });
  }
}

// function checkifAchievementDone(num) {
//   // const current = achievementsArr[num].currentValue;
//   // const goal = achievementsArr[num].goalsArr;

//   if (+achievementsArr[num].currentValue >= +achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]) {
//     achievementsArr[num].goalIndex += 1;
//   }
// }

export function updateAchievements() {
  updateArr();
  console.log(achievementsArr);
  achievementsWrapper.childNodes.forEach(item => {
    const num = item.classList[1].replace(/achievement-/, '');
    const descr = item.querySelector('.achievement_descr');
    const progress = item.querySelector('.achievement_progressbar-data');
    const progressBar = item.querySelector('.progressbar');

    // checkifAchievementDone(num);

    descr.innerText = `${achievementsArr[num].initWord} ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]} ${achievementsArr[num].goalName}.`;

    progress.innerText = `${achievementsArr[num].currentValue} / ${achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]}`;
    progressBar.style.width = `${
      (achievementsArr[num].currentValue / achievementsArr[num].goalsArr[achievementsArr[num].goalIndex]) * 100
    }%`;
  });
}
