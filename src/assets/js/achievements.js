import { gameStats } from './constants.js';
import { statistics, checkStats } from './stats.js';

const achievementsWrapper = document.querySelector('.achievs_wrapper');

const achievement = {
  level: {
    levelsArr: [5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000],

  },
  click: {
    clickArr: [1000, 5000, 10000, 50000, 100000, 200000, 500000, 1000000],
  }
};

export function renewAchievments() {
  achievementsWrapper.firstElementChild.childNodes.forEach((item) => {
    if (item.classList) {
      const progressGoal = item.querySelectorAll('.goal_progress');
      const currentProgress = item.querySelector('.current_progress');
      const progressbar = item.querySelector('.progressbar');
      if (item.classList.contains('achievement-level')) {
        progressGoal.forEach(item => {
          item.innerText = achievement.level.levelsArr[0];
        });
        currentProgress.innerText = gameStats.currLevel;
        progressbar.style.width = `${
          (statistics.clicksMade / achievement.level.levelsArr[0]) * 100
        }%`;
      } else if (item.classList.contains('achievement-click')) {
        progressGoal.forEach(item => {
          item.innerText = achievement.click.clickArr[0];
        });
        currentProgress.innerText = statistics.clicksMade;
        progressbar.style.width = `${
          (statistics.clicksMade / achievement.click.clickArr[0]) * 100
        }%`;
      }
    }
  });
}
