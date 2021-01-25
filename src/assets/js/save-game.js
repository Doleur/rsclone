import { gameStats } from './constants.js'
import { arrLevel } from './healthbar.js'

function setCount() {
  const saveItems = {
    gold: gameStats.gold.number,
    autoDPS: gameStats.DPS.number,
    damage: gameStats.clickDamage.number,
    currLevel: gameStats.currLevel,
    health: gameStats.health,
    currMonster: gameStats.currMonster,
    arrLevel
  }
  const serialSaveItems = JSON.stringify(saveItems)
  localStorage.setItem('saveItems', serialSaveItems)
}

export { setCount }
