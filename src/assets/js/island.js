import { gameStats, hero } from './constants.js'

let island;

export function initIsland () {
  island = Math.trunc((+gameStats.currLevel - 1) / 5)
  hero.style.backgroundImage = `url('./assets/img/islands/${island}.png')`;
}

// export function changeIsland() {
//   island <= 13 ? island += 1 : island = 1;

// }
