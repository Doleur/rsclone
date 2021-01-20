const heroes = [
  {
    name: `Cid, the Helpful Adventurer`,
    baseCost: 5,
    baseDPS: null,
    bonuses: {
      personalDamage: 20900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Treebeast`,
    baseCost: 50,
    baseDPS: 5,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `Ivan, the Drunken Brawler`,
    baseCost: 250,
    baseDPS: 22,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `Brittany, Beach Princess`,
    baseCost: 1000,
    baseDPS: 74,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `The Wandering Fisherman`,
    baseCost: 4000,
    baseDPS: 245,
    bonuses: {
      personalDamage: 700,
      globalDPS: 25,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `Betty Clicker`,
    baseCost: 20000,
    baseDPS: 976,
    bonuses: {
      personalDamage: null,
      globalDPS: 107.36,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `The Masked Samurai`,
    baseCost: 1.000e5,
    baseDPS: 3725,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Leon`,
    baseCost: 4.000e5,
    baseDPS: 10859,
    bonuses: {
      personalDamage: 700,
      globalDPS: 25,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `The Great Forest Seer`,
    baseCost: 2.500e6,
    baseDPS: 47143,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Alexa, Assassin`,
    baseCost: 1.500e7,
    baseDPS: 1.869e5,
    bonuses: {
      personalDamage: 406.25,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Natalia, Ice Apprentice`,
    baseCost: 1.000e8,
    baseDPS: 7.820e5,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Mercedes, Duchess of Blades`,
    baseCost: 8.000e8,
    baseDPS: 3.721e6,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `Bobby, Bounty Hunter`,
    baseCost: 6.500e9,
    baseDPS: 1.701e7,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Broyle Lindeoven, Fire Mage`,
    baseCost: 5.000e10,
    baseDPS: 6.948e7,
    bonuses: {
      personalDamage: 900,
      globalDPS: 25,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Sir George II, King's Guard`,
    baseCost: 4.500e11,
    baseDPS: 4.607e8,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `King Midas`,
    baseCost: 4.000e12,
    baseDPS: 3.017e9,
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Referi Jerator, Ice Wizard`,
    baseCost: 3.600e13,
    baseDPS: 2.000e10,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Abaddon`,
    baseCost: 3.200e14,
    baseDPS: 1.310e11,
    bonuses: {
      personalDamage: 1039.0625,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Ma Zhu`,
    baseCost: 2.700e15,
    baseDPS: 8.147e11,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Amenhotep`,
    baseCost: 2.400e16,
    baseDPS: 5.335e12,
    bonuses: {
      personalDamage: 100,
      globalDPS: 44,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Beastlord`,
    baseCost: 3.000e17,
    baseDPS: 4.914e13,
    bonuses: {
      personalDamage: 700,
      globalDPS: 10,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Athena, Goddess of War`,
    baseCost: 9.000e18,
    baseDPS: 1.086e15,
    bonuses: {
      personalDamage: 1500,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Aphrodite, Goddess of Love`,
    baseCost: 3.500e20,
    baseDPS: 3.112e16,
    bonuses: {
      personalDamage: 1500,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Shinatobe, Wind Deity`,
    baseCost: 1.400e22,
    baseDPS: 9.173e17,
    bonuses: {
      personalDamage: 700,
      globalDPS: 10,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Grant, the General`,
    baseCost: 4.200e24,
    baseDPS: 2.027e20,
    bonuses: {
      personalDamage: 300,
      globalDPS: 56.25,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Frostleaf`,
    baseCost: 2.100e27,
    baseDPS: 7.469e22,
    bonuses: {
      personalDamage: 300,
      globalDPS: 25,
      clickDmgFromDPS: 0.5,
    },
  },
  {
    name: `Dread Knight`,
    baseCost: 1.000e40,
    baseDPS: 1.310e32,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Atlas`,
    baseCost: 1.000e55,
    baseDPS: 9.655e44,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Terra`,
    baseCost: 1.000e70,
    baseDPS: 7.113e57,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Phthalo`,
    baseCost: 1.000e85,
    baseDPS: 5.241e70,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Orntchya Gladeye, Didensy Banana`,
    baseCost: 1.000e100,
    baseDPS: 3.861e83,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Lilin`,
    baseCost: 1.000e115,
    baseDPS: 2.845e96,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Cadmia`,
    baseCost: 1.000e130,
    baseDPS: 2.096e109,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Alabaster`,
    baseCost: 1.000e145,
    baseDPS: 1.544e122,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Astraea`,
    baseCost: 1.000e160,
    baseDPS: 1.138e135,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Chiron`,
    baseCost: 1.000e175,
    baseDPS: 8.386e147,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Moloch`,
    baseCost: 1.000e190,
    baseDPS: 6.178e160,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Bomber Max`,
    baseCost: 1.000e205,
    baseDPS: 4.552e173,
    bonuses: {
      personalDamage: 1300,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Gog`,
    baseCost: 1.000e220,
    baseDPS: 3.354e186,
    bonuses: {
      personalDamage: 1300,
      globalDPS: 50,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Wepwawet`,
    baseCost: 1.000e235,
    baseDPS: 2.471e199,
    bonuses: {
      personalDamage: 950,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Tsuchi`,
    baseCost: 1.000e500,
    baseDPS: 1.820e425,
    bonuses: {
      personalDamage: 1300,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Skogur`,
    baseCost: 1.000e1000,
    baseDPS: 1.341e846,
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Moeru`,
    baseCost: 1.000e2000,
    baseDPS: 9.885e1678,
    bonuses: {
      personalDamage: 1400,
      globalDPS: 50,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Zilar`,
    baseCost: 1.000e4000,
    baseDPS: 7.283e3333,
    bonuses: {
      personalDamage: 1000,
      globalDPS: 134.375,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Madzi`,
    baseCost: 1.000e8000,
    baseDPS: 5.366e6630,
    bonuses: {
      personalDamage: 5150,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Xavira`,
    baseCost: 1.000e14000,
    baseDPS: 3.954e11681,
    bonuses: {
      personalDamage: 1e3667,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Cadu, Tomb Guardian`,
    baseCost: 1.000e25500,
    baseDPS: 2.913e26444,
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Ceus, Tomb Guardian`,
    baseCost: 1.000e25500,
    baseDPS: 2.146e26444,
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `The Maw`,
    baseCost: 1.000e45500,
    baseDPS: 1.581e61730,
    bonuses: {
      personalDamage: 1e13490,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Yachiyl, The Primordial Soul`,
    baseCost: 1.000e72000,
    baseDPS: 1.165e98692,
    bonuses: {
      personalDamage: 1e18290,
      globalDPS: 11,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Ace Scout Rose`,
    baseCost: 1.000e108000,
    baseDPS: 8.586e148592,
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Ace Scout Sophia`,
    baseCost: 1.000e114500,
    baseDPS: 6.326e158831,
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Ace Scout Blanche`,
    baseCost: 1.000e127500	,
    baseDPS: 4.661e178104,
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
  {
    name: `Ace Scout Dorothy`,
    baseCost: 1.000e142200,
    baseDPS: 3.434e199738,
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
  },
];