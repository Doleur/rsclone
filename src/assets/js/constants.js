export const shopWrapper = document.querySelector('.shop_wrapper');
export const numberHeroes = 40;
export const gameStats = {
  gold: {
    number: 0,
    powerOfTen: 0,
    abbreviation: '',
  },
  currLevel: 1,
  health: 20,
  isBoss: null,
  currMonster: 1
};
export const monsters = [
  'Angry_Potato',
  'Catra',
  'Catra-defeat',
  'Finky',
  'Flower_Bloop',
  'Gerbeel',
  'Gerbeelpillar',
  'Gloop',
  'Impossumble',
  'Loggernaut',
  'Sasquish',
  'Mushroom_Bloop',
  'Spit_Flower',
  'Treasure_Chest-hit',
  'Tyrantula'
]
export const monstersPerLevel = 10
export const countInput = document.querySelector('.count')
export const hero = document.querySelector('.hero')
export const currentLevelNumOnPage = document.querySelector('.current-level')
export const healthBar = document.querySelector('.healthbar')
export const currentHealthNumOnPage = document.querySelector('.current-health')
export const totalHealthNumOnPage = document.querySelector('.total-health')
export const currentMonsterNumOnPage = document.querySelector('.current-monster')
export const playField = document.querySelector('.field-play')
export const wrapperDmgPopup = document.querySelector('.wrapper-damage-popup')
export const swiperWrapper = document.querySelector('.swiper-wrapper')
