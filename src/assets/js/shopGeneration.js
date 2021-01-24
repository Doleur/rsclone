import createTagElement from './creatElement.js'
import { shopWrapper, numberHeroes } from './constants.js'
import { heroesData } from './heroesData.js'


export function shopGeneration() {
  for (let hero = 0; hero < numberHeroes; hero++) {
    let shopHero = createTagElement('div', `shop_hero hero${hero}`, '', shopWrapper)

    let costHero = heroesData[hero].cost()
    let damageHero = heroesData[hero].damage()



    createTagElement('div', `buyButton hero${hero}`, [
      createTagElement('div', `buyButton__header`, 'LVL UP', ''),
      createTagElement('div', `wrapper-buyButton__cost`, [
        createTagElement('img', `buyButton__imgGold`, '', '', ['src', `assets/img/Gold.png`]),
        createTagElement('div', `buyButton__cost hero${hero}`, `${costHero}`, '')
      ], '')
    ], shopHero)

    createTagElement('div', `hero_info`, [
      createTagElement('div', `hero_name hero${hero}`, `${heroesData[hero].name}`, ''),
      createTagElement('div', `hero_stats`, [
        createTagElement('span', `hero_stats__damage hero${hero}`, `${damageHero.number}${damageHero.numberName}`, ''),
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
  let damageHero = heroesData[number].damage()

  costHero.innerHTML = heroesData[number].cost()
  heroDamage.innerHTML = `${damageHero.number}${damageHero.numberName}`
  heroLvl.innerHTML = 'lvl ' + heroesData[number].lvl
}
