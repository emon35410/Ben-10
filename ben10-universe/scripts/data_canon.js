const { createAlien } = require('./character_helper');

const canonCharacters = [
  // Vilgax
  createAlien({
    id: 'char-vilgax',
    name: 'Vilgax',
    slug: 'vilgax',
    aliases: ['Conqueror of 10 Worlds', 'Warlord of Vilgaxia'],
    speciesId: 'sp-12',
    speciesName: 'Chimera Sui Generis',
    homeworld: 'Vilgaxia',
    summary: 'The ruthless intergalactic warlord who seeks the Omnitrix to build an unstoppable army of drone warriors. Across all three canonical series, Vilgax endures severe cybernetic enhancements, claims the powers of 10 champion heroes, and merges with Dagon.',
    role: 'villain',
    playlist: 'villains',
    primaryImage: '/images/characters/vilgax.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Vilgax commanded the Chimeran war cruiser that intercepted the Omnitrix transport pod.',
    abilities: [
      { type: 'power', name: 'Cybernetic Superhuman Strength', description: 'Crushes mountainsides and overpowers Four Arms with cybernetic muscle implants.' },
      { type: 'power', name: 'Ruby Ray of Ulo & Shield of Ziegel', description: 'Wields cosmic weapons stolen from defeated planetary champions.' },
      { type: 'weakness', name: 'Pride & Hubris', description: 'Underestimates Ben Tennyson\'s unpredictable adaptability with the Omnitrix.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'The overarching arch-nemesis of the original series.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-alien-force', description: 'Returned in Season 3 as the Conqueror of 10 Worlds.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Allied with the Flame Keepers Circle and merged with Dagon.' }
    ],
    stats: { strength: 96, speed: 70, durability: 95, intelligence: 88, energyOutput: 90, versatility: 85 }
  }),

  // Kevin Levin
  createAlien({
    id: 'char-kevin',
    name: 'Kevin Levin',
    slug: 'kevin-levin',
    aliases: ['Kevin 11', 'Osmosian Hero'],
    speciesId: 'sp-13',
    speciesName: 'Osmosian',
    homeworld: 'Earth',
    summary: 'An Osmosian who began as a troubled runaway absorbing Omnitrix energy in the 2005 series, causing genetic mutations. Reforming five years later, Kevin becomes Ben\'s steadfast best friend and Gwen\'s love interest, absorbing solid matter like Taydenite and steel.',
    role: 'hero',
    playlist: 'allies',
    primaryImage: '/images/characters/kevin_af.png',
    firstEpisode: 'S01E07 - "Kevin 11"',
    factExcerpt: 'Kevin began as a mutant antagonist who absorbed the powers of all original 10 aliens.',
    abilities: [
      { type: 'power', name: 'Matter & Solid Material Absorption', description: 'Coats his skin and bones in steel, stone, wood, or Taydenite for extreme armor and strength.' },
      { type: 'power', name: 'Morphic Matter Weapons', description: 'Shapes his absorbed metallic limbs into hammers, blades, and maces.' },
      { type: 'weakness', name: 'Energy Absorption Psychosis', description: 'Absorbing living energy or DNA causes chemical neurological imbalance, triggering violent madness.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Antagonist who absorbed the Omnitrix and mutated into Kevin 11.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-alien-force', description: 'Reformed ally and core team member with matter-absorption powers.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Sacrificed sanity to absorb the Ultimatrix and defeat Ultimate Aggregor.' }
    ],
    stats: { strength: 85, speed: 70, durability: 90, intelligence: 75, energyOutput: 70, versatility: 88 }
  }),

  // Gwen Tennyson
  createAlien({
    id: 'char-gwen',
    name: 'Gwen Tennyson',
    slug: 'gwen-tennyson',
    aliases: ['Lucky Girl', 'Anodite Sorceress'],
    speciesId: 'sp-14',
    speciesName: 'Anodite Hybrid',
    homeworld: 'Earth / Anodyne',
    summary: 'Ben\'s brilliant cousin whose magical aptitude was first discovered in the original series via the Charms of Bezel. In Alien Force and Ultimate Alien, she unlocks her true Anodite heritage, projecting radiant magenta mana shields, stepping disks, and energy constructs.',
    role: 'hero',
    playlist: 'allies',
    primaryImage: '/images/characters/gwen.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Gwen accompanied Grandpa Max and Ben on the summer road trip, learning magic spells from Charmcaster\'s spellbook.',
    abilities: [
      { type: 'power', name: 'Mana Energy Projection & Shields', description: 'Creates protective magenta forcefields, stepping disks, and binding ropes of pure life energy.' },
      { type: 'power', name: 'True Anodite Energy Avatar Form', description: 'Transforms into pure sparkling magenta energy, unlocking near-limitless mana power.' },
      { type: 'weakness', name: 'Mana Exhaustion & Emotional Strain', description: 'Over-extending mana constructs drains her physical stamina, leaving her vulnerable.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Ben\'s clever 10-year-old cousin who acquired Charmcaster\'s spellbook.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-alien-force', description: 'Unlocked her innate Anodite mana powers alongside Ben and Kevin.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Mastered her Anodite powers to defend Earth against Aggregor and Dagon.' }
    ],
    stats: { strength: 65, speed: 75, durability: 85, intelligence: 95, energyOutput: 96, versatility: 95 }
  }),

  // Ben Tennyson
  createAlien({
    id: 'char-ben',
    name: 'Ben Tennyson',
    slug: 'ben-tennyson',
    aliases: ['Wielder of the Omnitrix', 'Hero of Heroes', 'Benjamin Kirby Tennyson'],
    speciesId: 'sp-13', // Human
    speciesName: 'Human',
    homeworld: 'Earth',
    summary: 'The central hero of the universe. At age 10, he discovered the Omnitrix in a forest clearing. At 15, he recalibrated the device to fight the Highbreed invasion. At 16, he wielded the Ultimatrix and saved the universe from Aggregor and Dagon.',
    role: 'hero',
    playlist: 'allies',
    primaryImage: '/images/characters/ben_os.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Ben found the Omnitrix in a crater while camping with Grandpa Max and Gwen.',
    abilities: [
      { type: 'power', name: 'Omnitrix / Ultimatrix Transformation', description: 'Accesses the genetic Codon Stream to transform into over dozens of alien species at will.' },
      { type: 'power', name: 'Evolutionary Function (Ultimatrix)', description: 'Simulates worst-case evolutionary war to evolve aliens into hyper-powerful Ultimate forms.' },
      { type: 'weakness', name: 'Omnitrix Timeout & Mistransformations', description: 'Device battery drain or genetic failsafes occasionally transform him into unintended aliens.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: '10-year-old Ben on his unforgettable summer vacation road trip.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-alien-force', description: '15-year-old Ben leading the alien force against the Highbreed.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: '16-year-old world-famous hero wielding the Ultimatrix.' }
    ],
    stats: { strength: 55, speed: 60, durability: 60, intelligence: 80, energyOutput: 95, versatility: 100 }
  }),

  // Aggregor
  createAlien({
    id: 'char-aggregor',
    name: 'Aggregor',
    slug: 'aggregor',
    aliases: ['Ultimate Aggregor', 'Osmosian Warlord'],
    speciesId: 'sp-13',
    speciesName: 'Osmosian',
    homeworld: 'Osmos V',
    summary: 'A ruthless Osmosian warlord who kidnapped five alien fugitives from the Andromeda Galaxy. Using his machine, Aggregor absorbed all five aliens at 100% capacity, mutating into Ultimate Aggregor with invulnerable armor, water blasts, hurricanes, nuclear heat, and electrical phasing.',
    role: 'villain',
    playlist: 'villains',
    primaryImage: '/images/characters/aggregor.png',
    firstEpisode: 'S01E05 - "Escape from Aggregor"',
    factExcerpt: 'Aggregor successfully absorbed all five Andromeda aliens to become Ultimate Aggregor.',
    abilities: [
      { type: 'power', name: 'Andromeda 5 Combined Powers', description: 'Possesses the combined powers of Water Hazard, Terraspin, NRG, AmpFibian, and Armodrillo simultaneously.' },
      { type: 'power', name: 'Complete 100% Genetic Absorption', description: 'Absorbs alien DNA permanently without the traditional neurological sanity degradation.' },
      { type: 'weakness', name: 'Vulnerable to Superior Osmosian Drain', description: 'Kevin Levin absorbed his powers back, draining him of his stolen Andromeda matrix.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'The primary main antagonist of the first season of Ultimate Alien.', isSignatureAlien: false }
    ],
    stats: { strength: 95, speed: 80, durability: 94, intelligence: 88, energyOutput: 96, versatility: 95 }
  })
];

module.exports = { canonCharacters };
