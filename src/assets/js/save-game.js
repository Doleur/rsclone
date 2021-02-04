import { gameStats } from './constants.js'
import { heroesData } from './heroesData.js'
import { statistics } from './stats.js'
import { achievementsArr } from './achievements.js'

function setCount() {
  const serialSaveItems = JSON.stringify(gameStats)
  localStorage.setItem('saveItems', serialSaveItems)
}

function setLevelHeroes() {
  const saveLvl = heroesData.map((item) => {
    return item.lvl
  })
  const serialSaveLvl = JSON.stringify(saveLvl)
  localStorage.setItem('saveLvl', serialSaveLvl)
}

function setPurchasedAbilityHeroes() {
  const savePurchasedAbility = heroesData.map((item) => {
    return item.abilities.map((ability) => {
      return ability.isPurchased
    })
  })
  const serialSavePurchasedAbility = JSON.stringify(savePurchasedAbility)
  localStorage.setItem('savePurchasedAbility', serialSavePurchasedAbility)
}

function saveStats() {
  const serialSaveStats = JSON.stringify(statistics)
  localStorage.setItem('statsSaved', serialSaveStats)
}

function saveAchievements() {
  const serialSaveAchievements = JSON.stringify(achievementsArr)
  localStorage.setItem('achievsSaved', serialSaveAchievements)
}

export { setCount, setLevelHeroes, saveStats, saveAchievements, setPurchasedAbilityHeroes }