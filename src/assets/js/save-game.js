import { gameStats } from './constants.js'
import { heroesData } from './heroesData.js'

function setCount() {
  const serialSaveItems = JSON.stringify(gameStats)
  localStorage.setItem('saveItems', serialSaveItems)
}

function setLevelHeros() {
  const saveLvl = heroesData.map((item) => {
    return item.lvl
  })
  const serialSaveLvl = JSON.stringify(saveLvl)
  localStorage.setItem('saveLvl', serialSaveLvl)
}

export { setCount, setLevelHeros }
