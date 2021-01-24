import createTagElement from './creatElement.js'
import { shopWrapper, numberHeroes } from './constants.js'
import { heroesData } from './heroesData.js'
import { gameStats } from './constants.js'
import { abbreviationBigNumber } from './abbreviationBigNumber.js'


export function shopGeneration() {
  for (let hero = 0; hero < numberHeroes; hero++) {
    let shopHero = createTagElement('div', `shop_hero hero${hero}`, '', shopWrapper)

    let costHero = heroesData[hero].cost()
    let damageHero = heroesData[hero].damage()



    createTagElement('div', `buyButton hero${hero}`, [
      createTagElement('div', `buyButton__header`, 'LVL UP', ''),
      createTagElement('div', `wrapper-buyButton__cost`, [
        createTagElement('img', `buyButton__imgGold`, '', '', ['src', `assets/img/Gold.png`]),
        createTagElement('div', `buyButton__cost hero${hero}`, `${costHero.number}${costHero.abbreviation}`, '')
      ], '')
    ], shopHero)

    createTagElement('div', `hero_info`, [
      createTagElement('div', `hero_name hero${hero}`, `${heroesData[hero].name}`, ''),
      createTagElement('div', `hero_stats`, [
        createTagElement('span', `hero_stats__damage hero${hero}`, `${damageHero.number}${damageHero.abbreviation}`, ''),
        createTagElement('span', `hero_stats__lvl hero${hero}`, `lvl ${heroesData[hero].lvl}`, '')
      ], '')
    ], shopHero)

    createTagElement('div', `hero_img hero${hero}`, '', shopHero, ['style', `background-image: url("${heroesData[hero].image}");`])
  }
}

export function updateShop(number) {
  const costHero = document.querySelector(`.buyButton__cost.hero${number}`)
  const heroDamage = document.querySelector(`.hero_stats__damage.hero${number}`)
  const heroLvl = document.querySelector(`.hero_stats__lvl.hero${number}`)
  let newDamageHero = heroesData[number].damage()
  let newCostHero = heroesData[number].cost()

  costHero.innerHTML = `${newCostHero.number}${newCostHero.abbreviation}`
  heroDamage.innerHTML = `${newDamageHero.number}${newDamageHero.abbreviation}`
  heroLvl.innerHTML = 'lvl ' + heroesData[number].lvl
}

export function buyHero(numberHero) {
  let costHero = heroesData[numberHero].cost()
  let differenceCost = gameStats.gold.number - costHero.number
  let differencePowerOfTen = gameStats.gold.powerOfTen - costHero.powerOfTen
  if (differencePowerOfTen < 0) return false
  if (!differencePowerOfTen && differenceCost < 0) return false
  if (differenceCost < 100 && gameStats.gold.powerOfTen) {
    gameStats.gold.number = differenceCost * 1000
    gameStats.gold.powerOfTen -= 3
    gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]
  } else {
    gameStats.gold.number = differenceCost
  }
  return true
}
