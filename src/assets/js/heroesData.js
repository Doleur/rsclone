export const heroesData = [{
    name: `Cid, the Helpful Adventurer`,
    baseCost: 5,
    baseDPS: 1,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 20900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Big Clicks',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Cid, the Helpful Adventurer's Click Damage by 100%`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Cid has the unique ability to strengthen your clicks. Upgrade her to make your clicks more powerful.',
        abilityCost: {
          number: 100,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Huge Clicks',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Cid, the Helpful Adventurer's Click Damage by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I was surprised too, but it turns out we can upgrade these even further," Cid says. "I suspect you've gotten tired of clicks, though. Maybe you don't need this one?"`,
        abilityCost: {
          number: 1000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Massive Clicks',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Cid, the Helpful Adventurer's Click Damage by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"We make a great team," Cid says. "Let's get this upgrade and we'll be an even better team."`,
        abilityCost: {
          number: 8000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Titanic Clicks',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Cid, the Helpful Adventurer's Click Damage by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'Cid looks off into the distance and wonders, "What could be bigger than Titanic?"',
        abilityCost: {
          number: 80000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Colossal Clicks',
        requiresLvl: 125,
        isPurchased: false,
        effect: `Increases Cid, the Helpful Adventurer's Click Damage by 200%.`,
        coefficient: 2,
        isSelfDPS: true,
        description: `"Colossal clicks are bigger than Titanic clicks. We should get this one. I don't think there could be anything bigger," Cid says.`,
        abilityCost: {
          number: 400,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Monumental Clicks',
        requiresLvl: 150,
        isPurchased: false,
        effect: `Increases Cid, the Helpful Adventurer's Click Damage by 250%.`,
        coefficient: 2.5,
        isSelfDPS: true,
        description: `"The final upgrade. These clicks are so big that every time you click, they build a monument to commemorate it."`,
        abilityCost: {
          number: 4000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      }
    ],
    image: 'assets/img/heroes/Cid-Summer.png'
  },
  {
    name: `Treebeast`,
    baseCost: 50,
    baseDPS: 5,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Fertilizer',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Treebeast's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Treebeast grunts with approval as you consider this upgrade. It will make him grow stronger.',
        abilityCost: {
          number: 500,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Thorns',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Treebeast's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Sharp points on Treebeast's weapon that help cut up enemies.`,
        abilityCost: {
          number: 1250,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Megastick',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Treebeast's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'A really big stick for Treebeast.',
        abilityCost: {
          number: 5000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Ultrastick',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Treebeast's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'The biggest stick in the forest.',
        abilityCost: {
          number: 40000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Lacquer',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases your Click Damage by 0.5% of your total DPS.`,
        coefficient: 0.005,
        isSelfDPS: false,
        description: 'Apply to a big stick for durability and strength.',
        abilityCost: {
          number: 400,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      }
    ],
    image: 'assets/img/heroes/treebeast.png'
  },
  {
    name: `Ivan, the Drunken Brawler`,
    baseCost: 250,
    baseDPS: 22,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Hard Cider',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Ivan, the Drunken Brawler's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'An appetizer for a long night of drinking.',
        abilityCost: {
          number: 2500,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Pint of Ale',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Ivan, the Drunken Brawler's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Ivan likes a pint, to take the edge off his edge.',
        abilityCost: {
          number: 6250,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Pitcher',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Ivan, the Drunken Brawler's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Ivan throws his inhibitions to the wind and his fists into the faces.',
        abilityCost: {
          number: 25000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Embalming Fluid',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases your Click Damage by 0.5% of your total DPS.`,
        coefficient: 0.005,
        isSelfDPS: false,
        description: 'Having drunk the town dry, Ivan must now resort to embalming fluid to prevent the shakes.',
        abilityCost: {
          number: 2000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: `Pint of Pig's Whiskey`,
        requiresLvl: 125,
        isPurchased: false,
        effect: `Increases Ivan, the Drunken Brawler's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `It's so strong that it would put chest hairs on your great Aunt Sally, if she didn't already have them.`,
        abilityCost: {
          number: 10000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      }
    ],
    image: 'assets/img/heroes/ivan.png'
  },
  {
    name: `Brittany, Beach Princess`,
    baseCost: 1000,
    baseDPS: 74,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Combat Makeup',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Brittany, Beach Princess's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `You doubt she'll use it for camouflage like she's supposed to. In fact, she probably doesn't even know what "camouflage" means.`,
        abilityCost: {
          number: 10000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Brand Name Equipment',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Brittany, Beach Princess's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I'm not like other girls. I would never, like, take you for granite", she says.`,
        abilityCost: {
          number: 25000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Elixir of Deditzification',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Brittany, Beach Princess's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `The effect of this elixir may be too mild to notice at first glance, but Brittany's combat prowess will improve significantly.`,
        abilityCost: {
          isSelfDPS: true,
          number: 100,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Vegan Meat',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Brittany, Beach Princess's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'With the help of the Great Forest Seer, he performs a "blessing" on your cooked meats to make them vegetarian, so Brittany can eat them.',
        abilityCost: {
          number: 800,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      }
    ],
    image: 'assets/img/heroes/Brittany_nogild.png'
  },
  {
    name: `The Wandering Fisherman`,
    baseCost: 4000,
    baseDPS: 245,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 700,
      globalDPS: 25,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Spear Training',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases The Wandering Fisherman's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I've only ever used this spear for fishing. I need to learn how to use it better in combat."`,
        abilityCost: {
          number: 40000,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: 'Crab Net',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases The Wandering Fisherman's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I'll have a way to get food with very little effort." Your team will be grateful for this...`,
        abilityCost: {
          number: 100,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Whetstone',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases The Wandering Fisherman's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'I used to have one of these. No idea what happened to it." If he can sharpen his spear, he will do more damage.',
        abilityCost: {
          number: 400,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Fish Cooking',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases DPS of all heroes by 25%.`,
        coefficient: 0.25,
        isSelfDPS: false,
        description: `"Betty's been teaching me. We'll be able to cook fish for the team!"`,
        abilityCost: {
          number: 3200,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'State of the Art Fishing Gear',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases your Click Damage by 0.5% of your total DPS.`,
        coefficient: 0.005,
        isSelfDPS: false,
        description: `"We should be able to buy all this spiffy new gear because we've been selling off all the extra fish we didn't need. Now we can haul in a bigger load!"`,
        abilityCost: {
          number: 32000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      }
    ],
    image: 'assets/img/heroes/fisherman.png'
  },
  {
    name: `Betty Clicker`,
    baseCost: 20000,
    baseDPS: 976,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: null,
      globalDPS: 107.36,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Wilderburr Dumplings',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases DPS of all heroes by 20%.`,
        coefficient: 0.2,
        isSelfDPS: false,
        description: '"Delicate and oh so delicious, these delightful morsels make you very vigorous."',
        abilityCost: {
          number: 200,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Braised Flamingogo Casserole',
        requiresLvl: 25,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 20%.',
        coefficient: 0.2,
        isSelfDPS: false,
        description: '"You know what they say. An army runs on good homemade Casseroles."',
        abilityCost: {
          number: 500,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Truffled Trollgre with Bloop Reduction',
        requiresLvl: 50,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 20%.',
        coefficient: 0.2,
        isSelfDPS: false,
        description: `"A new dish I came up with. It's exquisite."`,
        abilityCost: {
          number: 2000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Foomgus Risotto',
        requiresLvl: 75,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 20%.',
        coefficient: 0.2,
        isSelfDPS: false,
        description: `"One bite and you won't have to eat for days. It has something to do with the magical qualities of the Foomgus."`,
        abilityCost: {
          number: 16000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'World Famous Cookbook',
        requiresLvl: 100,
        isPurchased: false,
        effect: 'Increases your Click Damage by 0.5% of your total DPS.',
        coefficient: 0.005,
        isSelfDPS: false,
        description: `"One bite and you won't have to eat for days. It has something to do with the magical qualities of the Foomgus."`,
        abilityCost: {
          number: 160,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      }
    ],
    image: 'assets/img/heroes/betty.png'
  },
  {
    name: `The Masked Samurai`,
    baseCost: 1.000e5,
    baseDPS: 3725,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Jutsu I',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases The Masked Samurai's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The Masked Samurai says he knows the greatest swordfighting teacher in the world. This training will greatly benefit his abilities.',
        abilityCost: {
          number: 1000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Jutsu II',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases The Masked Samurai's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `You've never seen him train with this "Great Teacher" he always refers to. But his combat skills have improved, so what do you have to complain about?`,
        abilityCost: {
          number: 2500,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Jutsu III',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases The Masked Samurai's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `What if he's lying? What if he's just holding back his DPS for money, and doing a bit extra each time you pay for his "training"?`,
        abilityCost: {
          number: 10000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Jutsu IV',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases The Masked Samurai's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `He's probably making everything up. Roman numerals don't even belong with Japanese words! Ah, well, what can you do? The added damage would be useful.`,
        abilityCost: {
          number: 80000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
    ],
    image: 'assets/img/heroes/samurai.png'
  },
  {
    name: `Leon`,
    baseCost: 4.000e5,
    baseDPS: 10859,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 700,
      globalDPS: 25,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Courage Tonic',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Leon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `He's pretty strong, but fearful of things. This tonic will help him overcome his fears. It smells like paint thinner.`,
        abilityCost: {
          number: 4000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Stronger Claws',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Leon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `A more powerful replacement for Leon's current claws.`,
        abilityCost: {
          number: 10000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Lionheart Potion',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Leon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'A magic concoction that allows Leon to truly believe in himself.',
        abilityCost: {
          number: 40000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: `Lion's Roar`,
        requiresLvl: 75,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: 'With his tonics and potions, Leon is finally capable of roaring like a real lion. This provides a boost to your entire team.',
        abilityCost: {
          number: 320,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
    ],
    image: 'assets/img/heroes/leon.png'
  },
  {
    name: `The Great Forest Seer`,
    baseCost: 2.500e6,
    baseDPS: 47143,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Forest Creatures',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases The Great Forest Seer's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The Seer can call upon the forest creatures to do his bidding. Enraged rabbits, squirrels and birds will launch themselves at your opponents.',
        abilityCost: {
          number: 25000,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Insight',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases The Great Forest Seer's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"Leon is not a real lion", he says. "And Brittany is vain." These, and other important insights only the Seer can know, will help your entire team.',
        abilityCost: {
          number: 62500,
          powerOfTen: 3,
          abbreviation: 'K'
        }
      },
      {
        name: 'Dark Lore',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases The Great Forest Seer's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"I must not shy away from the world of darkness", he tells you. This upgrade will grant him greater power, and the capability for terrifying upgrades in the future.',
        abilityCost: {
          number: 250,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Swarm',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases The Great Forest Seer's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'The Seer can control the arthropods with this grotesque power. Spiders, millipedes, and other bugs weave in and out of his clothing, and will swarm your enemies at his command.',
        abilityCost: {
          number: 2000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
    ],
    image: 'assets/img/heroes/forestseer.png'
  },
  {
    name: `Alexa, Assassin`,
    baseCost: 1.500e7,
    baseDPS: 1.869e5,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 406.25,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Clairvoyance',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Alexa, Assassin's DPS by 125%.`,
        coefficient: 1.25,
        isSelfDPS: true,
        description: 'An improvement to her ability to see surroundings without her eyes, increasing her combat prowess.',
        abilityCost: {
          number: 375,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Poisoned Blades',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Alexa, Assassin's DPS by 125%.`,
        coefficient: 1.25,
        isSelfDPS: true,
        description: `"Don't use these as steak knives", she warns.`,
        abilityCost: {
          number: 1500,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      }
    ],
    image: 'assets/img/heroes/Alexa-Summer.png'
  },
  {
    name: `Natalia, Ice Apprentice`,
    baseCost: 1.000e8,
    baseDPS: 7.820e5,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Magic 101',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Natalia, Ice Apprentice's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'This book is standard reading at any Mage university. It would be cruel to keep her from studying it.',
        abilityCost: {
          number: 1000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Below Zero',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Natalia, Ice Apprentice's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Canonical undergraduate Ice reading. She needs it to become a successful Ice Mage.',
        abilityCost: {
          number: 2500,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Frozen Warfare',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Natalia, Ice Apprentice's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'A graduate-level book on using Ice Magic for combat purposes. Personally recommended by Jerator.',
        abilityCost: {
          number: 10000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'The Book of Frost',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Natalia, Ice Apprentice's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `A frigid mist billows out of this rare book, owned only by the greatest Ice Wizards. Natalia's eyes are wide with desire.`,
        abilityCost: {
          number: 80000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
    ],
    image: 'assets/img/heroes/10natalia.png'
  },
  {
    name: `Mercedes, Duchess of Blades`,
    baseCost: 8.000e8,
    baseDPS: 3.721e6,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Mithril Edge',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Mercedes, Duchess of Blades's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'By reinforcing the edge of her blade with Mithril, she can cut through much more difficult materials.',
        abilityCost: {
          number: 8000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Enchanted Blade',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Mercedes, Duchess of Blades's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `With the research and help of some of your more magic-inclined friends, Mercedes' blade can be empowered with magic.`,
        abilityCost: {
          number: 20000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Quickblade',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Mercedes, Duchess of Blades's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Another upgrade to her sword, giving her a much faster swing. "Nobody's head will be safe from me."`,
        abilityCost: {
          number: 80000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Blessed Sword',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Mercedes, Duchess of Blades's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `"My sword, she's already historic. If she receives a blessing from the gods, I'll have to give her a name..."`,
        abilityCost: {
          number: 640,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Art of Swordfighting',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases your Click Damage by 0.5% of your total DPS.`,
        coefficient: 0.005,
        isSelfDPS: false,
        description: `This rare book was co-authored by three ancient sword masters. 'I know it's expensive, but I think it's well worth it.`,
        abilityCost: {
          number: 6400,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      }
    ],
    image: 'assets/img/heroes/11mercedes.png'
  },
  {
    name: `Bobby, Bounty Hunter`,
    baseCost: 6.500e9,
    baseDPS: 1.701e7,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Impressive Moves',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Bobby, Bounty Hunter's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'You get the impression these moves are not really optimized for battle damage, but for looks.',
        abilityCost: {
          number: 65000,
          powerOfTen: 6,
          abbreviation: 'M'
        }
      },
      {
        name: 'Acrobatic Jetpack',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Bobby, Bounty Hunter's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I need this upgrade so I can move in and out of combat more efficiently", Bobby says. But through your experienced eyes, you know he's up to something else.`,
        abilityCost: {
          number: 162.5,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Jetpack Dance',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Bobby, Bounty Hunter's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"It's like she doesn't even know I exist", you hear him mutter to himself. This upgrade allows Bobby to perform sideflips through the air with minor combat bonus.`,
        abilityCost: {
          number: 650,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Whirling Skyblade',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Bobby, Bounty Hunter's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `"It's Natalia", he admits. "She only cares about her books." How can you not feel pity for the poor guy? Buy him this upgrade. At least he'll do more DPS.`,
        abilityCost: {
          number: 5200,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      }
    ],
    image: 'assets/img/heroes/12bobby.png'
  },
  {
    name: `Broyle Lindeoven, Fire Mage`,
    baseCost: 5.000e10,
    baseDPS: 6.948e7,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 900,
      globalDPS: 25,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Roast Monsters',
        requiresLvl: 10,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: 'Betty Clicker and Lindeoven pair up to produce delicious food for the team.',
        abilityCost: {
          number: 500,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Combustible Air',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Broyle Lindeoven, Fire Mage's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'This magic seems extremely dangerous. Once the spell is cast, the air can burst into flames with a single spark.',
        abilityCost: {
          number: 1250,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Inner Fire',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Broyle Lindeoven, Fire Mage's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"With this magic, I can concentrate large amounts of heat on very specific, small locations in space. I will effectively set fire to the insides of our enemies."',
        abisSelfDPS: true,
        abilityCost: {
          number: 5000,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'The Floor is Lava',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Broyle Lindeoven, Fire Mage's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: '"I used to play this game as a child. I can turn it into a reality for our enemies with this spell", he says.',
        abilityCost: {
          number: 40000,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
    ],
    image: 'assets/img/heroes/13broyle.png'
  },
  {
    name: `Sir George II, King's Guard`,
    baseCost: 4.500e11,
    baseDPS: 4.607e8,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Abandoned Regret',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Sir George II, King's Guard's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Though he swore to uphold his vows to protect his King, the guard must move on with his life. "It will take some effort", he says.',
        abilityCost: {
          number: 4500,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Offensive Strategies',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Sir George II, King's Guard's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"I no longer protect my King. He has lost his way, and I am in your service now." He is willing to learn new fighting strategies.',
        abilityCost: {
          number: 11250,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Combat Strategy',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Sir George II, King's Guard's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `As of late, the mood of Sir George II has improved significantly. This upgrade provides a massive improvement to George's DPS.`,
        abilityCost: {
          number: 45000,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Burning Blade',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Sir George II, King's Guard's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `Lindeoven can enchant George's weapon with fire.`,
        abilityCost: {
          number: 360,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: `King's Pardon`,
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases your Click Damage by 0.5% of your total DPS.`,
        coefficient: 0.005,
        isSelfDPS: false,
        description: `"Even though he lost his way, my King was still mine to protect and I felt much regret leaving his side. This pardon has lifted a great weight off my shoulders."`,
        abilityCost: {
          number: 3600,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      }
    ],
    image: 'assets/img/heroes/14sirgeorge.png'
  },
  {
    name: `King Midas`,
    baseCost: 4.000e12,
    baseDPS: 3.017e9,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Bag of Holding',
        requiresLvl: 10,
        isPurchased: false,
        effect: 'Increases all gold found by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: `This space-bending bag can store things much bigger than itself. Get Midas one of these so he doesn't have to haul his fortune around with him in the midst of battle.`,
        abilityCost: {
          number: 40000,
          powerOfTen: 9,
          abbreviation: 'B'
        }
      },
      {
        name: 'Heart of Gold',
        requiresLvl: 25,
        isPurchased: false,
        effect: 'Increases all gold found by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: `Midas can find more gold from your enemies. Where it comes from, you're not really sure. "These are riches beyond belief!" he says. "How can I thank Sir George?"`,
        abilityCost: {
          number: 100,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Touch of Gold',
        requiresLvl: 50,
        isPurchased: false,
        effect: 'Increases all gold found by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: 'This upgrade gives Midas the power to turn things (and enemies!) into gold by touching them. He promises to share the wealth with you.',
        abilityCost: {
          number: 400,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Golden Dimension',
        requiresLvl: 75,
        isPurchased: false,
        effect: 'Increases all gold found by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: '"I can open rifts to the Planes of Gold," he says, with madness in his eyes. The rift can only open after killing a monster, and heavy golden furniture falls through.',
        abilityCost: {
          number: 3200,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Gold Blade',
        requiresLvl: 75,
        isPurchased: false,
        effect: 'Increases all gold found by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: 'Forged from riches of his fallen foes, the golden blade is the most expensive sword ever made.',
        abilityCost: {
          number: 160,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      }
    ],
    image: 'assets/img/heroes/15kingmidas.png'
  },
  {
    name: `Referi Jerator, Ice Wizard`,
    baseCost: 3.600e13,
    baseDPS: 2.000e10,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Defrosting',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Referi Jerator, Ice Wizard's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'This upgrade will allow Jerator to cast his spells more effectively because he can see clearly.',
        abilityCost: {
          isSelfDPS: true,
          number: 360,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Headbashing',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Referi Jerator, Ice Wizard's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'While his magic is paramount, this upgrade will allow Jerator to smash his enemies in head-to-head combat.',
        abilityCost: {
          number: 900,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Iceberg Rain',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Referi Jerator, Ice Wizard's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Icebergs rain down from the sky, smashing your enemies.',
        abilityCost: {
          number: 3600,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Glacierstorm',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Referi Jerator, Ice Wizard's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'A hurricane of massive glaciers forms in the sky. They fall on your enemies.',
        abilityCost: {
          number: 28800,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      }
    ],
    image: 'assets/img/heroes/16referi.png'
  },
  {
    name: `Abaddon`,
    baseCost: 3.200e14,
    baseDPS: 1.310e11,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1039.0625,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Rise of the Dead',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Abaddon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Abaddon can raise the corpses of the fallen, to fight by your side.',
        abilityCost: {
          number: 3200,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Curse of the Dark God',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Abaddon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"To call this a 'Curse' is a misnomer, mortal. This power is a blessing."`,
        abilityCost: {
          number: 8000,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Epidemic Evil',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Abaddon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"The powers of darkness breed more powers," he says. Abaddon is kind of scary.',
        abilityCost: {
          number: 32000,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'The Dark Ritual',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Abaddon's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The ground beneath Abaddon glows with runes. He beckons for you to help him with his final ritual.',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/17abbadon.png'
  },
  {
    name: `Ma Zhu`,
    baseCost: 2.700e15,
    baseDPS: 8.147e11,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: `Heaven's Hand`,
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Ma Zhu's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `The eastern gods bless Ma Zhu with a portion of their holy might increasing Ma Zhu's damage.`,
        abilityCost: {
          number: 27000,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Plasma Arc',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Ma Zhu's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Ma Zhu sparks and crackles with electricity. The heat from a focused arc can inflict incredible damage.',
        abilityCost: {
          number: 67500,
          powerOfTen: 12,
          abbreviation: 'T'
        }
      },
      {
        name: 'Ancient Wrath',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Ma Zhu's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"I fear you may not be balancing the powers of the Gods," Ma Zhu tells you, hinting at this upgrade. "Abaddon is a dangerous one."',
        abilityCost: {
          number: 270,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: 'Pet Dragon',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Ma Zhu's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: '"I can go get my dragon, if you like. His name is Bashe, and he eats elephants", Ma Zhu says.',
        abilityCost: {
          number: 2160,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
    ],
    image: 'assets/img/heroes/18mazhu.png'
  },
  {
    name: `Amenhotep`,
    baseCost: 2.400e16,
    baseDPS: 5.335e12,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 100,
      globalDPS: 44,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Smite',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Amenhotep's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"I am here to help you, mortal. Grant me this power and you will be rewarded with the loot of many corpses."',
        abilityCost: {
          number: 240,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: 'Genesis Research',
        requiresLvl: 25,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 20%.',
        coefficient: 0.2,
        isSelfDPS: false,
        description: '"Foolish mortal! You have let Abaddon grow too powerful," he scolds you. "We must undo what has been done! It will take time. Do not let Abaddon know."',
        abilityCost: {
          number: 600,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: 'Prepare the Rebeginning',
        requiresLvl: 50,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 20%.',
        coefficient: 0.2,
        isSelfDPS: false,
        description: 'With a terrifying rumble, the ground and the skies ripple. Amenhotep glows brilliantly with power as he prepares the final act.',
        abilityCost: {
          number: 2400,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      }
    ],
    image: 'assets/img/heroes/19amenhotep.png'
  },
  {
    name: `Beastlord`,
    baseCost: 3.000e17,
    baseDPS: 4.914e13,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 700,
      globalDPS: 10,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Eye In The Sky',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Beastlord's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The birds in the sky can spot when our enemies are their most vulnerable.',
        abilityCost: {
          number: 3000,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: 'Critters',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Beastlord's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'They are small, but they make up for it in numbers and ferocity.',
        abilityCost: {
          number: 7500,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: 'Beastmode',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Beastlord's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The beastmaster murmurs an incantation. Fur sprouts from his skin, quills shoot from his back. He bears his claws and teeth, which bear resemblances to a bear.',
        abilityCost: {
          number: 30000,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: `Sacrificial Lamb's Blood`,
        requiresLvl: 75,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 10%.',
        coefficient: 0.1,
        isSelfDPS: false,
        description: 'Bath our heroes with the blood of the sacrificed to increase their strength and stamina.',
        abilityCost: {
          number: 240,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
    ],
    image: 'assets/img/heroes/20beastlord.png'
  },
  {
    name: `Athena, Goddess of War`,
    baseCost: 9.000e18,
    baseDPS: 1.086e15,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1500,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Hand-to-Head Combat',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Athena, Goddess of War's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"Fresh Skulls for the taking, one of my favorite pastimes."',
        abilityCost: {
          number: 90000,
          powerOfTen: 15,
          abbreviation: 'q'
        }
      },
      {
        name: 'Warscream',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Athena, Goddess of War's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Athena takes a deep breath and lets out a hellish scream that reverberates miles across land and sea. Monsters tremble in its wake.',
        abilityCost: {
          number: 225,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
      {
        name: 'Bloodlust',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Athena, Goddess of War's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Taste for blood thickens as enemies fall to Athena's feet. Her hunger drives her DPS through the roof.`,
        abilityCost: {
          number: 900,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
      {
        name: 'Boiling Blood',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Athena, Goddess of War's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Angering the Goddess of War will totally ruin someone's day.`,
        abilityCost: {
          number: 7200,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
    ],
    image: 'assets/img/heroes/Athena_nogild.png'
  },
  {
    name: `Aphrodite, Goddess of Love`,
    baseCost: 3.500e20,
    baseDPS: 3.112e16,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1500,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Lasso of Love',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Aphrodite, Goddess of Love's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"Anyone trapped in my lasso falls head over heels in love with me."',
        abilityCost: {
          number: 3500,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
      {
        name: 'Love Potion',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Aphrodite, Goddess of Love's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `One little taste and enemies practically kill each other for Aphrodite's affection.`,
        abilityCost: {
          number: 8750,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
      {
        name: 'Love Hurts',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Aphrodite, Goddess of Love's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"All is destroyed in love and war," says Aphrodite.',
        abilityCost: {
          number: 35000,
          powerOfTen: 18,
          abbreviation: 'Q'
        }
      },
      {
        name: 'Kiss of Death',
        requiresLvl: 125,
        isPurchased: false,
        effect: `Increases Aphrodite, Goddess of Love's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Pucker up sweetheart, today's your unlucky day."`,
        abilityCost: {
          number: 2799,
          powerOfTen: 21,
          abbreviation: 's'
        }
      },
    ],
    image: 'assets/img/heroes/22aphrodite.png'
  },
  {
    name: `Shinatobe, Wind Deity`,
    baseCost: 1.400e22,
    baseDPS: 9.173e17,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 700,
      globalDPS: 10,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Dancing Blades',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Shinatobe, Wind Deity's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Swords dance in the wind, dicing and chopping enemies into bits and pieces.',
        abilityCost: {
          number: 139.9,
          powerOfTen: 21,
          abbreviation: 's'
        }
      },
      {
        name: 'Annoying Winds',
        requiresLvl: 25,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 10%.',
        coefficient: 0.1,
        isSelfDPS: false,
        description: 'Strong gusts of wind break down enemy morale.',
        abilityCost: {
          number: 349.9,
          powerOfTen: 21,
          abbreviation: 's'
        }
      },
      {
        name: 'Bladestorm',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Shinatobe, Wind Deity's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Amass any and all weapons and throw them into this tornado I've conjured," says Shinatobe. Pieces of sharp metal twirl violently at the edges of the tornado.`,
        abilityCost: {
          number: 1399,
          powerOfTen: 21,
          abbreviation: 's'
        }
      },
      {
        name: 'Eye of the Storm',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Shinatobe, Wind Deity's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'A storm of epic proportions, perhaps the biggest storm in history, to constantly ravage your enemies.',
        abilityCost: {
          number: 11200,
          powerOfTen: 21,
          abbreviation: 's'
        }
      },
    ],
    image: 'assets/img/heroes/Shinatobe..png'
  },
  {
    name: `Grant, the General`,
    baseCost: 4.200e24,
    baseDPS: 2.027e20,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 300,
      globalDPS: 56.25,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Red Whip',
        requiresLvl: 10,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: '"I pride myself as a great General because I keep my troops in line." Grant whips his army into shape to prepare for battle.',
        abilityCost: {
          number: 41990,
          powerOfTen: 21,
          abbreviation: 's'
        }
      },
      {
        name: 'Art of War',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Grant, The General's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"I pride myself as a great General because I continue to increase my knowledge in warfare," says Grant.',
        abilityCost: {
          number: 105,
          powerOfTen: 24,
          abbreviation: 'S'
        }
      },
      {
        name: 'Battle Plan',
        requiresLvl: 50,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: '"I pride myself as a great general because I devise plans to destroy my enemies," he says.',
        abilityCost: {
          number: 420,
          powerOfTen: 24,
          abbreviation: 'S'
        }
      },
      {
        name: 'Top of the Line Gear',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Grant, The General's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I changed my mind about why I'm such a great General. I pride myself as a great General because I buy my troops the best equipment," says Grant.`,
        abilityCost: {
          number: 3359,
          powerOfTen: 24,
          abbreviation: 'S'
        }
      },
    ],
    image: 'assets/img/heroes/Grant.png'
  },
  {
    name: `Frostleaf`,
    baseCost: 2.100e27,
    baseDPS: 7.469e22,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 300,
      globalDPS: 25,
      clickDmgFromDPS: 0.5,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Ice Age',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Frostleaf's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Decreases temperature of the world by 15 degrees.',
        abilityCost: {
          number: 21000,
          powerOfTen: 24,
          abbreviation: 'S'
        }
      },
      {
        name: 'Book of Winter',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Frostleaf's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"It's a really cold book. Don't touch it, because it will freeze your hand off," Frostleaf explains.`,
        abilityCost: {
          number: 52490,
          powerOfTen: 24,
          abbreviation: 'S'
        }
      },
      {
        name: 'Frozen Stare',
        requiresLvl: 50,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 25%.',
        coefficient: 0.25,
        isSelfDPS: false,
        description: 'Frostleaf penetrates deep into the souls of his enemies, freezing them in place for eternity.',
        abilityCost: {
          number: 210,
          powerOfTen: 27,
          abbreviation: 'O'
        }
      },
      {
        name: 'Frigid Enchant',
        requiresLvl: 75,
        isPurchased: false,
        effect: 'Increases your Click Damage by 0.5% of your total DPS.',
        coefficient: 0.005,
        isSelfDPS: false,
        description: `Frostleaf enchants everyone's weapons with icy energy that decreases enemy armor tremendously.`,
        abilityCost: {
          number: 1679,
          powerOfTen: 27,
          abbreviation: 'O'
        }
      },
    ],
    image: 'assets/img/heroes/Frostleaf_nogild.png'
  },
  {
    name: `Dread Knight`,
    baseCost: 1.000e40,
    baseDPS: 1.310e32,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Lost Soul',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Dread Knight's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Shhhhh... don't tell him he's part of your group. A man with nothing to lose is most dangerous and thats how he should stay.`,
        abilityCost: {
          number: 100,
          powerOfTen: 39,
          abbreviation: 'D'
        }
      },
      {
        name: 'Soul Catcher',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Dread Knight's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"Fetch me my souls!."',
        abilityCost: {
          number: 250,
          powerOfTen: 39,
          abbreviation: 'D'
        }
      },
      {
        name: 'Raging Bull',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Dread Knight's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'This upgrade will send him over the edge. Anger may cloud his judgement, but his strength will increase.',
        abilityCost: {
          number: 1000,
          powerOfTen: 39,
          abbreviation: 'D'
        }
      },
      {
        name: 'Dark Soul',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Dread Knight's DPS by 150%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"AHHHh UUghh...I can't keep it inside any longer! I'm afraid it's too late, there's no stopping it now."`,
        abilityCost: {
          number: 8000,
          powerOfTen: 39,
          abbreviation: 'D'
        }
      }
    ],
    image: 'assets/img/heroes/Dread_Knight-2.png'
  },
  {
    name: `Atlas`,
    baseCost: 1.000e55,
    baseDPS: 9.655e44,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Resurrection',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Atlas's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Breathes new life into heroes with lost hope.',
        abilityCost: {
          number: 100,
          powerOfTen: 54,
          abbreviation: '%'
        }
      },
      {
        name: 'Band of Brothers',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Atlas's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Stand by one another. There's strength in numbers."`,
        abilityCost: {
          number: 250,
          powerOfTen: 54,
          abbreviation: '%'
        }
      },
      {
        name: 'Medic',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Atlas's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `With all the fighting going on, its a wonder how there's no medical staff on board.`,
        abilityCost: {
          number: 1000,
          powerOfTen: 54,
          abbreviation: '%'
        }
      },
      {
        name: 'Fully Charged',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Atlas's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: '"One speech is all it takes to put a fire under their asses."',
        abilityCost: {
          number: 8000,
          powerOfTen: 54,
          abbreviation: '%'
        }
      },
    ],
    image: 'assets/img/heroes/Atlas2.png'
  },
  {
    name: `Terra`,
    baseCost: 1.000e70,
    baseDPS: 7.113e57,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Inteference',
        requiresLvl: 10,
        isPurchased: false,
        isPurchased: false,
        effect: `Incre
        ases Terra's DPS by 100%.`,
        isSelfDPS: true,
        coefficient: 1,
        description: `It's part of the job description.`,
        abilityCost: {
          number: 100,
          powerOfTen: 69,
          abbreviation: 'Y'
        }
      },
      {
        name: 'Surveillance',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Terra's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"There's nothing that goes on around here without me knowing so NO funny business."`,
        abilityCost: {
          number: 250,
          powerOfTen: 69,
          abbreviation: 'Y'
        }
      },
      {
        name: 'Camouflage',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Terra's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"Good news is if I have to go to the bathroom I can use part of my disguise."',
        abilityCost: {
          number: 1000,
          powerOfTen: 69,
          abbreviation: 'Y'
        }
      },
      {
        name: 'Revive',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Terra's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'Brings the dead back to life.',
        abilityCost: {
          number: 8000,
          powerOfTen: 69,
          abbreviation: 'Y'
        }
      },
    ],
    image: 'assets/img/heroes/Terra.png'
  },
  {
    name: `Phthalo`,
    baseCost: 1.000e85,
    baseDPS: 5.241e70,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Pesticide',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Phthalo's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Masks on! Lets not let what happened to Ruben happen to anyone else. I don't want anybody throwing up all over my sandwich again or you're fired just like Ruben."`,
        abilityCost: {
          number: 100,
          powerOfTen: 84,
          abbreviation: 'w'
        }
      },
      {
        name: 'Rejuvenating Seeds',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Phthalo's DPS by 100%`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'A food source for every creature walking this earth.',
        abilityCost: {
          number: 250,
          powerOfTen: 84,
          abbreviation: 'w'
        }
      },
      {
        name: 'Green Scroll',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Phthalo's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'requires secrets of the green ring.',
        abilityCost: {
          number: 1000,
          powerOfTen: 84,
          abbreviation: 'w'
        }
      },
      {
        name: 'Split Earth',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Phthalo's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'Great for planting seeds and burying bodies.',
        abilityCost: {
          number: 8000,
          powerOfTen: 84,
          abbreviation: 'w'
        }
      },
    ],
    image: 'assets/img/heroes/Phthalo2-0.png'
  },
  {
    name: `Orntchya Gladeye, Didensy Banana`,
    baseCost: 1.000e100,
    baseDPS: 3.861e83,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Travel Supplies',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Orntchya Gladeye, Didensy Banana's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Equipped with everything you need. Includes flashlight, sleeping gear, and lets not forget Bloop mace.',
        abilityCost: {
          number: 100,
          powerOfTen: 99,
          abbreviation: 'R'
        }
      },
      {
        name: 'Portal',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Orntchya Gladeye, Didensy Banana's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Watch your step unless you're my mother-in-law. Just kidding, I sent her through one of those last Wednesday."`,
        abilityCost: {
          number: 250,
          powerOfTen: 99,
          abbreviation: 'R'
        }
      },
      {
        name: 'Travel Potion',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Orntchya Gladeye, Didensy Banana's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Bottoms up. You don't want travel sickness do you? It's much like sea sickness, but the effects come out the other end."`,
        abilityCost: {
          isSelfDPS: true,
          number: 1000,
          powerOfTen: 99,
          abbreviation: 'R'
        }
      },
      {
        name: 'Traveling Sword',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Orntchya Gladeye, Didensy Banana's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `"To protect against bandits of course. Don't worry, I have a license for this."`,
        abilityCost: {
          number: 8000,
          powerOfTen: 99,
          abbreviation: 'R'
        }
      },
    ],
    image: 'assets/img/heroes/Didensy.png'
  },
  {
    name: `Lilin`,
    baseCost: 1.000e115,
    baseDPS: 2.845e96,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Heart Juice',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Lilin's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Can't start the day without a hearty breakfast. Eggs, toast, bacon and some heart juice to wash it all down."`,
        abilityCost: {
          number: 100,
          powerOfTen: 114,
          abbreviation: 'h'
        }
      },
      {
        name: 'Luscious Lips',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Lilin's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Once you lay your eyes on them, you won't be able to look away.`,
        abilityCost: {
          number: 250,
          powerOfTen: 114,
          abbreviation: 'h'
        }
      },
      {
        name: `Lover's Quarrel`,
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Lilin's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"I'm one lucky gal. With a hoard of young tough men to do my fighting for me, I don't have to lift a finger."`,
        abilityCost: {
          number: 1000,
          powerOfTen: 114,
          abbreviation: 'h'
        }
      },
      {
        name: 'Love at First Sight',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Lilin's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `"Don't hate me because I'm beautiful. Love me because I'm powerful." Aphrodite glares at her.`,
        abilityCost: {
          number: 8000,
          powerOfTen: 114,
          abbreviation: 'h'
        }
      },
    ],
    image: 'assets/img/heroes/Lilin.png'
  },
  {
    name: `Cadmia`,
    baseCost: 1.000e130,
    baseDPS: 2.096e109,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Fighting for Dummies',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Cadmia's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'A how-to on becoming the ultimate fighter.',
        abilityCost: {
          number: 100,
          powerOfTen: 129,
          abbreviation: 'L'
        }
      },
      {
        name: 'Warrior Spirit',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Cadmia's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"War is my middle name."',
        abilityCost: {
          number: 250,
          powerOfTen: 129,
          abbreviation: 'L'
        }
      },
      {
        name: 'Red Sword',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Cadmia's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"My trusty companion. There's no one I'd rather go into battle with."`,
        abilityCost: {
          number: 1000,
          powerOfTen: 129,
          abbreviation: 'L'
        }
      },
      {
        name: 'Flaming Red Sword',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Cadmia's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: '"Thanks for the DPS boost, Broyle. I owe you one."',
        abilityCost: {
          number: 8000,
          powerOfTen: 129,
          abbreviation: 'L'
        }
      },
    ],
    image: 'assets/img/heroes/Cadmia.png'
  },
  {
    name: `Alabaster`,
    baseCost: 1.000e145,
    baseDPS: 1.544e122,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Meditation',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Alabaster's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"The burden of protecting everyone in all the worlds can be stressful. Sometimes I just need some time to myself."',
        abilityCost: {
          number: 100,
          powerOfTen: 144,
          abbreviation: 'z'
        }
      },
      {
        name: 'Travel Boots',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Alabaster's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"You should probably get these for me. My boots are falling apart and I won't be able to travel across worlds without them."`,
        abilityCost: {
          number: 250,
          powerOfTen: 144,
          abbreviation: 'z'
        }
      },
      {
        name: 'Peacekeeper',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Alabaster's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'It is said that the Peacekeeper never needs sharpening.',
        abilityCost: {
          number: 1000,
          powerOfTen: 144,
          abbreviation: 'z'
        }
      },
      {
        name: 'Blinding Light',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Alabaster's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: 'The light at the end of the tunnel. The tunnel of life.',
        abilityCost: {
          number: 8000,
          powerOfTen: 144,
          abbreviation: 'z'
        }
      },
    ],
    image: 'assets/img/heroes/Alabaster.png'
  },
  {
    name: `Astraea`,
    baseCost: 1.000e160,
    baseDPS: 1.138e135,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Pro-Aging',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Astraea's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Speed up a monster's internal clock. One second for us will become a year for them.`,
        abilityCost: {
          number: 100,
          powerOfTen: 159,
          abbreviation: '*B'
        }
      },
      {
        name: 'Slice and Dice',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Astraea's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The Yellow Dimensional Ranger is the fastest blade slinger in the west. This training will further increase her speed.',
        abilityCost: {
          number: 250,
          powerOfTen: 159,
          abbreviation: '*B'
        }
      },
      {
        name: 'Time Travel',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Astraea's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: '"I can kill you before you get born!" she yells.',
        abilityCost: {
          number: 1000,
          powerOfTen: 159,
          abbreviation: '*B'
        }
      },
      {
        name: 'Alter Time',
        requiresLvl: 75,
        isPurchased: false,
        effect: `Increases Astraea's DPS by 150%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `"Let's just slow everything down shall we? There, that's better. Who says time is never on our side?"`,
        abilityCost: {
          number: 8000,
          powerOfTen: 159,
          abbreviation: '*B'
        }
      },
    ],
    image: 'assets/img/heroes/Astraea.png'
  },
  {
    name: `Chiron`,
    baseCost: 1.000e175,
    baseDPS: 8.386e147,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Diamond Arrowheads',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Chiron's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `You don't think twice when Chiron requests expensive arrowheads. You heard somewhere that diamonds are strong, so it seems reasonable.`,
        abilityCost: {
          number: 100,
          powerOfTen: 174,
          abbreviation: '*S'
        }
      },
      {
        name: 'Diamond Bow',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Chiron's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `You're pretty certain diamond does not have the ideal tensile characteristics for a bow, but Chiron seems to know what he's doing.`,
        abilityCost: {
          number: 250,
          powerOfTen: 174,
          abbreviation: '*S'
        }
      },
      {
        name: 'Diamond Horseshoes',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Chiron's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `There's no way this is going to help his archery, but every time you give him what he wants he performs better. No reason to stop now.`,
        abilityCost: {
          number: 1000,
          powerOfTen: 174,
          abbreviation: '*S'
        }
      },
      {
        name: 'Huge Bag of Diamonds',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Chiron's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `Chiron has given up all pretext of a pragmatic motivation for his love of diamonds. He hands you an empty sack with the word 'shinies' and a crude drawing of a happy centaur on it.`,
        abilityCost: {
          number: 8000,
          powerOfTen: 174,
          abbreviation: '*S'
        }
      },
    ],
    image: 'assets/img/heroes/Chiron.png'
  },
  {
    name: `Moloch`,
    baseCost: 1.000e190,
    baseDPS: 6.178e160,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Charging Exercises',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Moloch's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Putting in the time every morning to do a set of charging drills and strength building exercises can go a long way toward improving minotaur combat performance. Moloch knows not to skip leg day.',
        abilityCost: {
          number: 100,
          powerOfTen: 189,
          abbreviation: '*D'
        }
      },
      {
        name: 'Horn Sharpening',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Moloch's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Regular maintenance is required for optimal monster penetration.',
        abilityCost: {
          number: 250,
          powerOfTen: 189,
          abbreviation: '*D'
        }
      },
      {
        name: 'Diamond Bullshoes',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Moloch's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: `Moloch has been eyeing Chiron's flashy new hoofwear and threatens to go on strike if he is not similarly compensated.`,
        abilityCost: {
          number: 1000,
          powerOfTen: 189,
          abbreviation: '*D'
        }
      },
      {
        name: 'Labyrinthium Axe',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Moloch's DPS by 150%.`,
        coefficient: 1.5,
        isSelfDPS: true,
        description: `Forged from an ore found in the ancient labyrinths known only to his people, Moloch's most prized possession is as much a symbol of pride for him as it is a sign of doom for his enemies.`,
        abilityCost: {
          number: 8000,
          powerOfTen: 189,
          abbreviation: '*D'
        }
      },
    ],
    image: 'assets/img/heroes/Moloch.png'
  },
  {
    name: `Bomber Max`,
    baseCost: 1.000e205,
    baseDPS: 4.552e173,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1300,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Blacker Powder',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Bomber Max's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Bomber Max is the sole proprietor of a nearby micro-boomery, where he crafts artisanal explosives using only the finest quality of locally sourced fuels and oxidizers.',
        abilityCost: {
          number: 100,
          powerOfTen: 204,
          abbreviation: '*%'
        }
      },
      {
        name: 'Shorter Fuses',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Bomber Max's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'The shorter the fuse, the sooner he throws the bomb. The sooner he throws the bomb, the sooner he is picking up another bomb and lighting the fuse.',
        abilityCost: {
          number: 250,
          powerOfTen: 204,
          abbreviation: '*%'
        }
      },
      {
        name: 'Goggle Cleaning Solution',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Bomber Max's DPS by 250%.`,
        coefficient: 2.5,
        isSelfDPS: true,
        description: 'Imagine how much more dangerous he will be when he can actually see what he is doing.',
        abilityCost: {
          number: 1000,
          powerOfTen: 204,
          abbreviation: '*%'
        }
      },
      {
        name: 'MTR Gold Mining',
        requiresLvl: 100,
        isPurchased: false,
        effect: 'Increases all gold found by 50%.',
        coefficient: 0.5,
        isSelfDPS: false,
        description: 'Bomber Max assures you that Monstertop Removal is the latest in gold mining technologies, but he quickly changes the subject when anyone brings up a concern for the environmental impact.',
        abilityCost: {
          number: 8000,
          powerOfTen: 204,
          abbreviation: '*%'
        }
      },
    ],
    image: 'assets/img/heroes/Bomber_Max.png'
  },
  {
    name: `Gog`,
    baseCost: 1.000e220,
    baseDPS: 3.354e186,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1300,
      globalDPS: 50,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Quad-Wielding',
        requiresLvl: 10,
        isPurchased: false,
        effect: `Increases Gog's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Being able to wield four weapons at once allows Gog to threaten his enemies from several directions simultaneously.',
        abilityCost: {
          number: 100,
          powerOfTen: 219,
          abbreviation: '*Y'
        }
      },
      {
        name: 'Four-Wielding',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Gog's DPS by 100%.`,
        coefficient: 1,
        isSelfDPS: true,
        description: 'Frequent biambidexterity exercises allow Gog to hold four weapons while many others struggle with two.',
        abilityCost: {
          number: 250,
          powerOfTen: 219,
          abbreviation: '*Y'
        }
      },
      {
        name: '4-Wielding',
        requiresLvl: 50,
        isPurchased: false,
        effect: `Increases Gog's DPS by 250%.`,
        coefficient: 2.5,
        isSelfDPS: true,
        description: 'With this upgrade, Gog can wield more than three (but fewer than five) weapons.',
        abilityCost: {
          number: 100,
          powerOfTen: 219,
          abbreviation: '*Y'
        }
      },
      {
        name: 'Multi-Weapon Training',
        requiresLvl: 1000,
        isPurchased: false,
        effect: 'Increases DPS of all heroes by 50%.',
        coefficient: 0.5,
        isSelfDPS: false,
        description: `Gog tries desperately to teach each hero how to wield four weapons. He can never quite figure out why they don't seem to get it, but they all get stronger in the process.`,
        abilityCost: {
          number: 8000,
          powerOfTen: 219,
          abbreviation: '*Y'
        }
      },
    ],
    image: 'assets/img/heroes/Gog.png'
  },
  {
    name: `Wepwawet`,
    baseCost: 1.000e235,
    baseDPS: 2.471e199,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 950,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: 'Patience',
        requiresLvl: 25,
        isPurchased: false,
        effect: `Increases Wepwawet's DPS by 200%.`,
        coefficient: 2,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 100,
          powerOfTen: 234,
          abbreviation: '*w'
        }
      },
      {
        name: 'Silence',
        requiresLvl: 100,
        isPurchased: false,
        effect: `Increases Wepwawet's DPS by 250%.`,
        coefficient: 2.5,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 250,
          powerOfTen: 234,
          abbreviation: '*w'
        }
      },
      {
        name: 'Way of the Chef',
        requiresLvl: 1500,
        isPurchased: false,
        effect: `Increases Betty Clicker's DPS by 500,000,000%.`,
        coefficient: 5000000,
        isSelfDPS: false,
        description: '',
        abilityCost: {
          number: 1000,
          powerOfTen: 234,
          abbreviation: '*w'
        }
      },
      {
        name: 'Way of Kings',
        requiresLvl: 2000,
        isPurchased: false,
        effect: `Increases King Midas's DPS by 10,000,000,000%.`,
        coefficient: 100000000,
        isSelfDPS: false,
        description: '',
        abilityCost: {
          number: 8000,
          powerOfTen: 234,
          abbreviation: '*w'
        }
      },
    ],
    image: 'assets/img/heroes/Wepwawet.png'
  },
  {
    name: `Tsuchi`,
    baseCost: 1.000e500,
    baseDPS: 1.820e425,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1300,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Tsuchi.png'
  },
  {
    name: `Skogur`,
    baseCost: 1.000e1000,
    baseDPS: 1.341e846,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1900,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Skogur.png'
  },
  {
    name: `Moeru`,
    baseCost: 1.000e2000,
    baseDPS: 9.885e1678,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1400,
      globalDPS: 50,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Moeru.png'
  },
  {
    name: `Zilar`,
    baseCost: 1.000e4000,
    baseDPS: 7.283e3333,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1000,
      globalDPS: 134.375,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Zilar.png'
  },
  {
    name: `Madzi`,
    baseCost: 1.000e8000,
    baseDPS: 5.366e6630,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 5150,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Madzi.png'
  },
  {
    name: `Xavira`,
    baseCost: 1.000e14000,
    baseDPS: 3.954e11681,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e3667,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Xavira.png'
  },
  {
    name: `Cadu, Tomb Guardian`,
    baseCost: 1.000e25500,
    baseDPS: 2.913e26444,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Cadu.png'
  },
  {
    name: `Ceus, Tomb Guardian`,
    baseCost: 1.000e25500,
    baseDPS: 2.146e26444,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: null,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Ceus.png'
  },
  {
    name: `The Maw`,
    baseCost: 1.000e45500,
    baseDPS: 1.581e61730,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e13490,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/The_Maw.png'
  },
  {
    name: `Yachiyl, The Primordial Soul`,
    baseCost: 1.000e72000,
    baseDPS: 1.165e98692,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e18290,
      globalDPS: 11,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Yachiyl.png'
  },
  {
    name: `Ace Scout Rose`,
    baseCost: 1.000e108000,
    baseDPS: 8.586e148592,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Ace_Scout_Rose.png'
  },
  {
    name: `Ace Scout Sophia`,
    baseCost: 1.000e114500,
    baseDPS: 6.326e158831,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Ace_Scout_Sophia.png'
  },
  {
    name: `Ace Scout Blanche`,
    baseCost: 1.000e127500,
    baseDPS: 4.661e178104,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Ace_Scout_Blanche.png'
  },
  {
    name: `Ace Scout Dorothy`,
    baseCost: 1.000e142200,
    baseDPS: 3.434e199738,
    lvl: 0,
    cost: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    damage: {
      number: 0,
      powerOfTen: 0,
      abbreviation: ''
    },
    bonuses: {
      personalDamage: 1e28992,
      globalDPS: null,
      clickDmgFromDPS: null,
    },
    totalCoefficient: 1,
    abilities: [{
        name: '',
        requiresLvl: 10,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 25,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 50,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
      {
        name: '',
        requiresLvl: 75,
        isPurchased: false,
        effect: '',
        coefficient: 1,
        isSelfDPS: true,
        description: '',
        abilityCost: {
          number: 0,
          powerOfTen: 0,
          abbreviation: ''
        }
      },
    ],
    image: 'assets/img/heroes/Ace_Scout_Dorothy.png'
  },
];
