import { gameStats } from './constants.js'
import { heroesData } from './heroesData.js'
import { statistics } from './stats.js'
import { island } from './island.js'

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

function saveStats() {
  const serialSaveStats = JSON.stringify(statistics);
  localStorage.setItem('statsSaved', serialSaveStats);
}

// function saveIsland() {
//   const serialSaveIsland = JSON.stringify(island);
//   localStorage.setItem('islandSaved', serialSaveIsland);
// }

export { setCount, setLevelHeros, saveStats }
