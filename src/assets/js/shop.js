import createTagElement from './creatElement.js'
import { shopWrapper, numberHeroes, gameStats } from './constants.js'
import { heroesData } from './heroesData.js'

import { abbreviationBigNumber } from './abbreviationBigNumber.js'
import { displayDamage } from './calculationDamage.js'
import { calculationCostHero } from './calculationCostHero.js'
import { convertingNumbers } from './convertingNumbers.js'

export function shopGeneration () {
  let countNumberIcon = 1
  for (let hero = 0; hero < numberHeroes; hero++) {
    const shopHero = createTagElement('div', `shop_hero hero${hero}`, '', shopWrapper)

    calculationCostHero(hero)

    createTagElement('div', `buyButton hero${hero}`, [
      createTagElement('div', 'buyButton__header', 'LVL UP', ''),
      createTagElement('div', 'wrapper-buyButton__cost', [
        createTagElement('img', 'buyButton__imgGold', '', '', ['src', 'assets/img/Gold.png']),
        createTagElement('div', `buyButton__cost hero${hero}`, `${Math.trunc(heroesData[hero].cost.number)}${heroesData[hero].cost.abbreviation}`, '')
      ], '')
    ], shopHero)

    const arrAbilitiesElements = []
    const abilitiesHero = heroesData[hero].abilities
    for (let ability = 0; ability < abilitiesHero.length; ability++) {
      let abilityContainer
      if (abilitiesHero[ability].isPurchased) {
        abilityContainer = createTagElement('div', `icon_abilities_${countNumberIcon} hero_${hero}_ability_${ability} ability abilities_active`, '', '')
      } else {
        abilityContainer = createTagElement('div', `icon_abilities_${countNumberIcon} hero_${hero}_ability_${ability} ability abilities_disabled`, '', '')
      }
      createTagElement('div', 'tooltip', [
        createTagElement('h2', 'tooltip_name', `${abilitiesHero[ability].name}`, ''),
        createTagElement('h3', 'tooltip_cost', `Cost ${abilitiesHero[ability].abilityCost.number}${abilitiesHero[ability].abilityCost.abbreviation}`, ''),
        createTagElement('p', 'tooltip_requires', `Requires hero level: ${abilitiesHero[ability].requiresLvl}`, ''),
        createTagElement('p', 'tooltip_effect', `${abilitiesHero[ability].effect}`, ''),
        createTagElement('p', 'tooltip_description', `${abilitiesHero[ability].description}`, '')
      ], abilityContainer)

      arrAbilitiesElements.push(abilityContainer)
      countNumberIcon++
    }
    if (hero === 9) { countNumberIcon += 2 }
    if (hero === 12) { countNumberIcon++ }
    if (hero === 16) { countNumberIcon++ }
    if (hero === 19) { countNumberIcon++ }

    createTagElement('div', 'hero_info', [
      createTagElement('div', `hero_name hero${hero} text_theme`, `${heroesData[hero].name}`, ''),
      createTagElement('div', 'hero_stats', [
        createTagElement('span', `hero_stats__damage hero${hero} text_theme`, `${Math.trunc(heroesData[hero].damage.number)}${heroesData[hero].damage.abbreviation}`, ''),
        createTagElement('div', 'abilities_wrapper', arrAbilitiesElements, ''),
        createTagElement('span', `hero_stats__lvl hero${hero} text_theme`, `lvl ${heroesData[hero].lvl}`, '')
      ], '')
    ], shopHero)

    createTagElement('div', `hero_img hero${hero}`, '', shopHero, ['style', `background-image: url("${heroesData[hero].image}");`])

    if (hero && !heroesData[hero].lvl && !heroesData[hero - 1].lvl) {
      shopHero.classList.add('disabled')
    }
  }
  toggleBuyButtonDisabled()
  toggleAbilityDisabled()
  displayDamage()
}

export function updateShop (numberHero) {
  const costHero = document.querySelector(`.buyButton__cost.hero${numberHero}`)
  const heroDamage = document.querySelector(`.hero_stats__damage.hero${numberHero}`)
  const heroLvl = document.querySelector(`.hero_stats__lvl.hero${numberHero}`)
  const nextHero = document.querySelector(`.shop_hero.hero${+numberHero + 1}`)

  costHero.innerHTML = `${Math.trunc(heroesData[numberHero].cost.number)}${heroesData[numberHero].cost.abbreviation}`
  heroDamage.innerHTML = `${Math.trunc(heroesData[numberHero].damage.number)}${heroesData[numberHero].damage.abbreviation}`
  heroLvl.innerHTML = 'lvl ' + heroesData[numberHero].lvl
  if (nextHero) {
    nextHero.classList.remove('disabled')
  }
  toggleBuyButtonDisabled()
  toggleAbilityDisabled()
}

export function toggleAbilityDisabled () {
  for (let numberHero = 0; numberHero < numberHeroes; numberHero++) {
    const abilitiesHero = heroesData[numberHero].abilities
    for (let numberAbility = 0; numberAbility < abilitiesHero.length; numberAbility++) {
      if (abilitiesHero[numberAbility].isPurchased) continue
      const abilityButton = document.querySelector(`.hero_${numberHero}_ability_${numberAbility}`)
      const isEnoughGold = checkingSufficientGold(abilitiesHero[numberAbility].abilityCost)
      const currentHeroLvl = heroesData[numberHero].lvl
      const requiresHeroLvl = abilitiesHero[numberAbility].requiresLvl
      if (isEnoughGold && currentHeroLvl >= requiresHeroLvl) {
        abilityButton.classList.remove('abilities_disabled')
      } else {
        abilityButton.classList.add('abilities_disabled')
      }
    }
  }
}

export function toggleBuyButtonDisabled () {
  for (let numberHero = 0; numberHero < numberHeroes; numberHero++) {
    const buyButton = document.querySelector(`.buyButton.hero${numberHero}`)

    if (checkingSufficientGold(heroesData[numberHero].cost)) {
      buyButton.classList.remove('buyButtonDisabled')
    } else {
      buyButton.classList.add('buyButtonDisabled')
    }
  }
}

function checkingSufficientGold (cost) {
  const differenceCost = gameStats.gold.number - cost.number
  const differencePowerOfTen = gameStats.gold.powerOfTen - cost.powerOfTen
  if (differencePowerOfTen < 0) return false
  if (!differencePowerOfTen && differenceCost < 0) return false
  return true
}

export function buy (numberHero, numberAbility = -1) {
  let purchaseCost
  if (numberAbility === -1) {
    purchaseCost = heroesData[numberHero].cost
  } else {
    purchaseCost = heroesData[numberHero].abilities[numberAbility].abilityCost
  }
  if (!checkingSufficientGold(purchaseCost)) return false
  const differencePowerOfTen = gameStats.gold.powerOfTen - purchaseCost.powerOfTen
  const newGoldsNumber = convertingNumbers(gameStats.gold.number * (10 ** differencePowerOfTen) - purchaseCost.number)
  gameStats.gold.powerOfTen = purchaseCost.powerOfTen + newGoldsNumber.powerOfTen
  if (newGoldsNumber.number < 100 && gameStats.gold.powerOfTen) {
    gameStats.gold.number = newGoldsNumber.number * 1000
    gameStats.gold.powerOfTen -= 3
  } else {
    gameStats.gold.number = newGoldsNumber.number
  }
  gameStats.gold.abbreviation = abbreviationBigNumber[`${gameStats.gold.powerOfTen}`]
  return true
}
