import { gameStats } from './constants.js'
import { autoDPS, damage, arrLevel } from './healthbar.js'

function setCount() {
  const saveItems = {
    gold: gameStats.gold,
    autoDPS,
    damage,
    currLevel: gameStats.currLevel,
    health: gameStats.health,
    currMonster: gameStats.currMonster,
    arrLevel
  }
  const serialSaveItems = JSON.stringify(saveItems)
  localStorage.setItem('saveItems', serialSaveItems)
}

export { setCount }
