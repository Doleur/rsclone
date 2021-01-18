import { gold, autoDPS, damage, currLevel, health, currMonster } from './healthbar.js'

function setCount () {
  const saveItems = {
    gold,
    autoDPS,
    damage,
    currLevel,
    health,
    currMonster
  }
  const serialSaveItems = JSON.stringify(saveItems)
  localStorage.setItem('saveItems', serialSaveItems)
}

export { setCount }
