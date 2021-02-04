import { gameStats, hero } from './constants.js'

let island

const backgroundArray = [0, 1, 0, 3, 2, 5, 4, 7, 4, 8, 6, 2, 8, 3, 7, 5, 4, 1, 6]
export function initIsland () {
  const bodyBack = document.querySelector('body')
  island = Math.trunc(((+gameStats.currLevel - 1) % 19) / 5)

  hero.style.backgroundImage = `url('./assets/img/islands/${island}.png')`
  bodyBack.style.backgroundImage = `url('./assets/img/background/${backgroundArray[island]}.jpg')`
  bodyBack.style.backgroundSize = 'cover'
}

// export function changeIsland() {
//   island <= 13 ? island += 1 : island = 1;

// }
