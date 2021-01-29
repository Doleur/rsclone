export const shopWrapper = document.querySelector('.shop_wrapper')
export const numberHeroes = 40
export const gameStats = {
  gold: {
    number: 1000,
    powerOfTen: 0,
    abbreviation: ''
  },
  clickDamage: {
    number: 1,
    powerOfTen: 0,
    abbreviation: ''
  },
  DPS: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  currLevel: 1,
  health: {
    number: 20,
    powerOfTen: 0,
    abbreviation: ''
  },
  isBoss: null,
  currMonster: 1,
};
export const monstersPerLevel = 10;
export const countInput = document.querySelector('.count');
export const hero = document.querySelector('.hero');
export const currentLevelNumOnPage = document.querySelector('.current-level');
export const healthBar = document.querySelector('.healthbar');
export const currentHealthNumOnPage = document.querySelector('.current-health');
export const totalHealthNumOnPage = document.querySelector('.total-health');
export const currentMonsterNumOnPage = document.querySelector('.current-monster');
export const playField = document.querySelector('.field-play');
export const wrapperDmgPopup = document.querySelector('.wrapper-damage-popup');
export const swiperWrapper = document.querySelector('.swiper-wrapper');
export const displayClickDamage = document.querySelector('.display_click_damage');
export const displayDPS = document.querySelector('.display_DPS');
export const totalClicksStats = document.querySelector('.total_clicks-stats');
export const currClickDamageStats = document.querySelector('.curr_click_dmg-stats');
export const totalClickDamageStats = document.querySelector('.total_click_dmg-stats');
export const currDPSDamageStats = document.querySelector('.curr_dps_dmg-stats');
export const totalDPSDamageStats = document.querySelector('.total_dps_dmg-stats');
export const currGoldStats = document.querySelector('.curr_gold-stats');
export const totalGoldStats = document.querySelector('.total_gold-stats');
export const mostersKilledStats = document.querySelector('.mosters_killed-stats');
export const bossesKilledStats = document.querySelector('.bosses_killed-stats');
export const timeInGameStats = document.querySelector('.total_time-stats');
