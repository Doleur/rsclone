import { calculationHeroDamage } from './calculationDamage.js'
import { calculationCostHero } from './calculationCostHero.js'

export const heroesData = [{
    name: `Cid, the Helpful Adventurer`,
    baseCost: 5,
    baseDPS: null,
    lvl: 0,
    cost() {
      if (this.lvl <= 15) return Math.trunc((5 + this.lvl) * (1.07 ** (this.lvl - 1)))
      return calculationCostHero(20, this.lvl)
    },
    damage() { return calculationHeroDamage(1, this.lvl) },
    bonuses: {
      personalDamage: 20900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Cid-Summer.png'
  },
  {
    name: `Treebeast`,
    baseCost: 50,
    baseDPS: 5,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/treebeast.png'
  },
  {
    name: `Ivan, the Drunken Brawler`,
    baseCost: 250,
    baseDPS: 22,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/ivan.png'
  },
  {
    name: `Brittany, Beach Princess`,
    baseCost: 1000,
    baseDPS: 74,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Brittany_nogild.png'
  },
  {
    name: `The Wandering Fisherman`,
    baseCost: 4000,
    baseDPS: 245,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 700,
      globalDPS: 25,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/fisherman.png'
  },
  {
    name: `Betty Clicker`,
    baseCost: 20000,
    baseDPS: 976,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: null,
      globalDPS: 107.36,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/betty.png'
  },
  {
    name: `The Masked Samurai`,
    baseCost: 1.000e5,
    baseDPS: 3725,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/samurai.png'
  },
  {
    name: `Leon`,
    baseCost: 4.000e5,
    baseDPS: 10859,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 700,
      globalDPS: 25,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/leon.png'
  },
  {
    name: `The Great Forest Seer`,
    baseCost: 2.500e6,
    baseDPS: 47143,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/forestseer.png'
  },
  {
    name: `Alexa, Assassin`,
    baseCost: 1.500e7,
    baseDPS: 1.869e5,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 406.25,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Alexa-Summer.png'
  },
  {
    name: `Natalia, Ice Apprentice`,
    baseCost: 1.000e8,
    baseDPS: 7.820e5,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/10natalia.png'
  },
  {
    name: `Mercedes, Duchess of Blades`,
    baseCost: 8.000e8,
    baseDPS: 3.721e6,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/11mercedes.png'
  },
  {
    name: `Bobby, Bounty Hunter`,
    baseCost: 6.500e9,
    baseDPS: 1.701e7,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/12bobby.png'
  },
  {
    name: `Broyle Lindeoven, Fire Mage`,
    baseCost: 5.000e10,
    baseDPS: 6.948e7,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 900,
      globalDPS: 25,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/13broyle.png'
  },
  {
    name: `Sir George II, King's Guard`,
    baseCost: 4.500e11,
    baseDPS: 4.607e8,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/14sirgeorge.png'
  },
  {
    name: `King Midas`,
    baseCost: 4.000e12,
    baseDPS: 3.017e9,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/15kingmidas.png'
  },
  {
    name: `Referi Jerator, Ice Wizard`,
    baseCost: 3.600e13,
    baseDPS: 2.000e10,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/16referi.png'
  },
  {
    name: `Abaddon`,
    baseCost: 3.200e14,
    baseDPS: 1.310e11,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1039.0625,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/17abbadon.png'
  },
  {
    name: `Ma Zhu`,
    baseCost: 2.700e15,
    baseDPS: 8.147e11,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/18mazhu.png'
  },
  {
    name: `Amenhotep`,
    baseCost: 2.400e16,
    baseDPS: 5.335e12,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 100,
      globalDPS: 44,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/19amenhotep.png'
  },
  {
    name: `Beastlord`,
    baseCost: 3.000e17,
    baseDPS: 4.914e13,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 700,
      globalDPS: 10,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/20beastlord.png'
  },
  {
    name: `Athena, Goddess of War`,
    baseCost: 9.000e18,
    baseDPS: 1.086e15,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1500,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Athena_nogild.png'
  },
  {
    name: `Aphrodite, Goddess of Love`,
    baseCost: 3.500e20,
    baseDPS: 3.112e16,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1500,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/22aphrodite.png'
  },
  {
    name: `Shinatobe, Wind Deity`,
    baseCost: 1.400e22,
    baseDPS: 9.173e17,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 700,
      globalDPS: 10,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Shinatobe..png'
  },
  {
    name: `Grant, the General`,
    baseCost: 4.200e24,
    baseDPS: 2.027e20,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 300,
      globalDPS: 56.25,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Grant.png'
  },
  {
    name: `Frostleaf`,
    baseCost: 2.100e27,
    baseDPS: 7.469e22,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 300,
      globalDPS: 25,
      clickDmgFromDPS: 0.5,
    },
    image: 'assets/img/heroes/Frostleaf_nogild.png'
  },
  {
    name: `Dread Knight`,
    baseCost: 1.000e40,
    baseDPS: 1.310e32,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Dread_Knight-2.png'
  },
  {
    name: `Atlas`,
    baseCost: 1.000e55,
    baseDPS: 9.655e44,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Atlas2.png'
  },
  {
    name: `Terra`,
    baseCost: 1.000e70,
    baseDPS: 7.113e57,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Terra.png'
  },
  {
    name: `Phthalo`,
    baseCost: 1.000e85,
    baseDPS: 5.241e70,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Phthalo2-0.png'
  },
  {
    name: `Orntchya Gladeye, Didensy Banana`,
    baseCost: 1.000e100,
    baseDPS: 3.861e83,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Didensy.png'
  },
  {
    name: `Lilin`,
    baseCost: 1.000e115,
    baseDPS: 2.845e96,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Lilin.png'
  },
  {
    name: `Cadmia`,
    baseCost: 1.000e130,
    baseDPS: 2.096e109,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Cadmia.png'
  },
  {
    name: `Alabaster`,
    baseCost: 1.000e145,
    baseDPS: 1.544e122,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Alabaster.png'
  },
  {
    name: `Astraea`,
    baseCost: 1.000e160,
    baseDPS: 1.138e135,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Astraea.png'
  },
  {
    name: `Chiron`,
    baseCost: 1.000e175,
    baseDPS: 8.386e147,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Chiron.png'
  },
  {
    name: `Moloch`,
    baseCost: 1.000e190,
    baseDPS: 6.178e160,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Moloch.png'
  },
  {
    name: `Bomber Max`,
    baseCost: 1.000e205,
    baseDPS: 4.552e173,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1300,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Bomber_Max.png'
  },
  {
    name: `Gog`,
    baseCost: 1.000e220,
    baseDPS: 3.354e186,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1300,
      globalDPS: 50,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Gog.png'
  },
  {
    name: `Wepwawet`,
    baseCost: 1.000e235,
    baseDPS: 2.471e199,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 950,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Wepwawet.png'
  },
  {
    name: `Tsuchi`,
    baseCost: 1.000e500,
    baseDPS: 1.820e425,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1300,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Tsuchi.png'
  },
  {
    name: `Skogur`,
    baseCost: 1.000e1000,
    baseDPS: 1.341e846,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Skogur.png'
  },
  {
    name: `Moeru`,
    baseCost: 1.000e2000,
    baseDPS: 9.885e1678,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1400,
      globalDPS: 50,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Moeru.png'
  },
  {
    name: `Zilar`,
    baseCost: 1.000e4000,
    baseDPS: 7.283e3333,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1000,
      globalDPS: 134.375,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Zilar.png'
  },
  {
    name: `Madzi`,
    baseCost: 1.000e8000,
    baseDPS: 5.366e6630,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 5150,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Madzi.png'
  },
  {
    name: `Xavira`,
    baseCost: 1.000e14000,
    baseDPS: 3.954e11681,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e3667,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Xavira.png'
  },
  {
    name: `Cadu, Tomb Guardian`,
    baseCost: 1.000e25500,
    baseDPS: 2.913e26444,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Cadu.png'
  },
  {
    name: `Ceus, Tomb Guardian`,
    baseCost: 1.000e25500,
    baseDPS: 2.146e26444,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Ceus.png'
  },
  {
    name: `The Maw`,
    baseCost: 1.000e45500,
    baseDPS: 1.581e61730,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e13490,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/The_Maw.png'
  },
  {
    name: `Yachiyl, The Primordial Soul`,
    baseCost: 1.000e72000,
    baseDPS: 1.165e98692,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e18290,
      globalDPS: 11,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Yachiyl.png'
  },
  {
    name: `Ace Scout Rose`,
    baseCost: 1.000e108000,
    baseDPS: 8.586e148592,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Ace_Scout_Rose.png'
  },
  {
    name: `Ace Scout Sophia`,
    baseCost: 1.000e114500,
    baseDPS: 6.326e158831,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Ace_Scout_Sophia.png'
  },
  {
    name: `Ace Scout Blanche`,
    baseCost: 1.000e127500,
    baseDPS: 4.661e178104,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Ace_Scout_Blanche.png'
  },
  {
    name: `Ace Scout Dorothy`,
    baseCost: 1.000e142200,
    baseDPS: 3.434e199738,
    lvl: 0,
    cost() { return calculationCostHero(this.baseCost, this.lvl) },
    damage() { return calculationHeroDamage(this.baseDPS, this.lvl) },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    image: 'assets/img/heroes/Ace_Scout_Dorothy.png'
  },
];
