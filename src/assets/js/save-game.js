import { gold, autoDPS, damage, currLevel, health, currMonster, arrLevel } from './healthbar.js'

function setCount () {
  const saveItems = {
    gold,
    autoDPS,
    damage,
    currLevel,
    health,
    currMonster,
    arrLevel
  }
  const serialSaveItems = JSON.stringify(saveItems)
  localStorage.setItem('saveItems', serialSaveItems)
}

export { setCount }
