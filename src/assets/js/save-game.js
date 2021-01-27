import { gameStats } from './constants.js'
import { arrLevel } from './healthbar.js'
import { heroesData } from './heroesData.js'

function setCount() {
  const saveItems = {
    gold: gameStats.gold.number,
    autoDPS: gameStats.DPS.number,
    damage: gameStats.clickDamage.number,
    currLevel: gameStats.currLevel,
    health: gameStats.health.number,
    arrLevel
  }
  const serialSaveItems = JSON.stringify(saveItems)
  localStorage.setItem('saveItems', serialSaveItems)
}

function setLevelHeros () {
  const saveLvl = heroesData.map((item) => {
    return item.lvl
  })
  const serialSaveLvl = JSON.stringify(saveLvl)
  localStorage.setItem('saveLvl', serialSaveLvl)
}

export { setCount, setLevelHeros }
