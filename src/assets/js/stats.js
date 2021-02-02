import { gameStats, totalClicksStats, currClickDamageStats, totalClickDamageStats, currDPSDamageStats, totalDPSDamageStats, currGoldStats, totalGoldStats, mostersKilledStats, bossesKilledStats, timeInGameStats } from './constants.js';
import { saveStats } from './save-game.js';

export const statistics = {
  clicksMade: 0,
  currentClickDamage: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  totalClicksDamage: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  currentDPS: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  totalDPS: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  currentGold: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  totalGold: {
    number: 0,
    powerOfTen: 0,
    abbreviation: ''
  },
  monstersKilled: 0,
  bossesKilled: 0,
  timeInGame: 0,
  gameStartTime: null
};

export let startTime;

function updateStats() {
  totalClicksStats.innerText = statistics.clicksMade
  statistics.currentClickDamage = gameStats.clickDamage
  currClickDamageStats.innerText = `${Math.trunc(statistics.currentClickDamage.number)}${statistics.currentClickDamage.abbreviation}`
  totalClickDamageStats.innerText = `${Math.trunc(statistics.totalClicksDamage.number)}${statistics.totalClicksDamage.abbreviation}`
  statistics.currentDPS = gameStats.DPS
  currDPSDamageStats.innerText = `${Math.trunc(statistics.currentDPS.number)}${statistics.currentDPS.abbreviation}`
  totalDPSDamageStats.innerText = `${Math.trunc(statistics.totalDPS.number)}${statistics.totalDPS.abbreviation}`
  statistics.currentGold = gameStats.gold
  currGoldStats.innerText = `${Math.trunc(statistics.currentGold.number)}${statistics.currentGold.abbreviation}`
  totalGoldStats.innerText = `${Math.trunc(statistics.totalGold.number)}${statistics.totalGold.abbreviation}`
  mostersKilledStats.innerText = statistics.monstersKilled
  bossesKilledStats.innerText = statistics.bossesKilled
  timeInGameStats.innerText = setTimeFigures()
}

function getCurrentTime() {
  let currTime = null;
  setInterval(() => {
    currTime = Date.now();
    statistics.timeInGame = +(currTime - statistics.gameStartTime);
  }, 1000);
}
getCurrentTime();

function setTimeFigures() {
  const seconds = Math.floor((statistics.timeInGame / 1000) % 60),
    minutes = Math.floor((statistics.timeInGame / 1000 / 60) % 60),
    hours = Math.floor((statistics.timeInGame / (1000 * 60 * 60)) % 24),
    days = Math.floor(statistics.timeInGame / (1000 * 60 * 60 * 24));
  if (statistics.timeInGame / 1000 < 60) {
    return (seconds === 1) ? `${seconds} second` : `${seconds} seconds`;
  } else if (statistics.timeInGame / 1000 < 60 * 60) {
    return (minutes === 1) ? `${minutes} minute` : `${minutes} minutes`;
  } else if (statistics.timeInGame / 1000 < 60 * 60 * 24) {
    return (hours === 1) ? `${hours} hour` : `${hours} hours`;
  } else {
    return (days === 1) ? `${days} day` : `${days} days`;
  }
}

export function checkStats() {
  if (localStorage.getItem('statsSaved')) {
    const savedStats = JSON.parse(localStorage.getItem('statsSaved'));
    statistics.monstersKilled = savedStats.monstersKilled;
    statistics.bossesKilled = savedStats.bossesKilled;
    statistics.clicksMade = savedStats.clicksMade;
    statistics.totalClicksDamage = savedStats.totalClicksDamage;
    statistics.totalDPS = savedStats.totalDPS;
    statistics.totalGold = savedStats.totalGold;
    statistics.timeInGame = savedStats.timeInGame;
  }
}

setInterval(updateStats, 1000);
setInterval(saveStats, 1000);
