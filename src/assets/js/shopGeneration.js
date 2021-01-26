import createTagElement from './creatElement.js'
import { shopWrapper, numberHeroes } from './constants.js'
import { heroesData } from './heroesData.js'
import { gameStats } from './constants.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { displayDamage } from './calculationDamage.js'
import { calculationCostHero } from './calculationCostHero.js'
import { convertingNumbers } from './convertingNumbers.js'

export function shopGeneration() {
  for (let hero = 0; hero < numberHeroes; hero++) {
    let shopHero = createTagElement('div', `shop_hero hero${hero}`, '', shopWrapper)

    calculationCostHero(hero)

    createTagElement('div', `buyButton hero${hero}`, [
      createTagElement('div', `buyButton__header`, 'LVL UP', ''),
      createTagElement('div', `wrapper-buyButton__cost`, [
        createTagElement('img', `buyButton__imgGold`, '', '', ['src', `assets/img/Gold.png`]),
        createTagElement('div', `buyButton__cost hero${hero}`, `${heroesData[hero].cost.number}${heroesData[hero].cost.abbreviation}`, '')
      ], '')
    ], shopHero)

    createTagElement('div', `hero_info`, [
      createTagElement('div', `hero_name hero${hero}`, `${heroesData[hero].name}`, ''),
      createTagElement('div', `hero_stats`, [
        createTagElement('span', `hero_stats__damage hero${hero}`, `${heroesData[hero].damage.number}${heroesData[hero].damage.abbreviation}`, ''),
        createTagElement('span', `hero_stats__lvl hero${hero}`, `lvl ${heroesData[hero].lvl}`, '')
      ], '')
    ], shopHero)

    createTagElement('div', `hero_img hero${hero}`, '', shopHero, ['style', `background-image: url("${heroesData[hero].image}");`])
  }
  displayDamage();
}

export function updateShop(numberHero) {
  const costHero = document.querySelector(`.buyButton__cost.hero${numberHero}`)
  const heroDamage = document.querySelector(`.hero_stats__damage.hero${numberHero}`)
  const heroLvl = document.querySelector(`.hero_stats__lvl.hero${numberHero}`)

  costHero.innerHTML = `${heroesData[numberHero].cost.number}${heroesData[numberHero].cost.abbreviation}`
  heroDamage.innerHTML = `${heroesData[numberHero].damage.number}${heroesData[numberHero].damage.abbreviation}`
  heroLvl.innerHTML = 'lvl ' + heroesData[numberHero].lvl
}


export function buyHero(numberHero) {
  let costHero = heroesData[numberHero].cost
  let differenceCost = gameStats.gold.number - costHero.number
  let differencePowerOfTen = gameStats.gold.powerOfTen - costHero.powerOfTen
  if (differencePowerOfTen < 0) return false
  if (!differencePowerOfTen && differenceCost < 0) return false
  let newGoldsNumber = convertingNumbers(gameStats.gold.number * (10 ** differencePowerOfTen) - costHero.number)
  gameStats.gold.powerOfTen = costHero.powerOfTen + newGoldsNumber.powerOfTen
  if (newGoldsNumber.number < 100 && gameStats.gold.powerOfTen) {
    gameStats.gold.number = Math.trunc(newGoldsNumber.number) * 1000
    gameStats.gold.powerOfTen -= 3
  } else {
    gameStats.gold.number = Math.trunc(newGoldsNumber.number)
  }
  gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]
  return true
}
