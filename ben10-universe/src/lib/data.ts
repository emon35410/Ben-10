// ============================================================================
// BEN 10 CHARACTER UNIVERSE - CANONICAL DATA STORE
// Strictly includes: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
// Real cartoon renders and broadcast assets from Cartoon Network / Fandom archive
// ============================================================================

import { Series, Species, Character, ResearchJob, ContentRevision } from '@/types';

export const CANONICAL_SERIES: Series[] = [
  {
    id: 'series-01',
    name: 'Ben 10 (2005)',
    slug: 'ben-10-2005',
    continuity: 'Prime Timeline',
    releaseYear: 2005,
    tagline: 'The Summer Vacation That Changed the Galaxy',
    description: 'During a cross-country summer road trip with his cousin Gwen and grandfather Max, 10-year-old Ben Tennyson discovers the mysterious alien watch known as the Omnitrix. The pod clamped onto his wrist grants him the DNA transformations of 10 distinct alien species, kicking off a series of battles against interstellar threats and mutant villains.',
    bannerUrl: '/images/series/ben-10-2005.png',
    characterCount: 14
  },
  {
    id: 'series-02',
    name: 'Ben 10: Alien Force',
    slug: 'ben-10-alien-force',
    continuity: 'Prime Timeline',
    releaseYear: 2008,
    tagline: 'Five Years Later. New Threats. Greater Responsibility.',
    description: 'Five years after removing the Omnitrix, 15-year-old Ben must put it back on when Grandpa Max mysteriously disappears while investigating a subterranean invasion. Joined by Gwen and former rival Kevin Levin, Ben unlocks a recalibrated playlist of ten new alien forms to stop the xenophobic Highbreed and their DNAlien minions.',
    bannerUrl: '/images/series/ben-10-alien-force.png',
    characterCount: 14
  },
  {
    id: 'series-03',
    name: 'Ben 10: Ultimate Alien',
    slug: 'ben-10-ultimate-alien',
    continuity: 'Prime Timeline',
    releaseYear: 2010,
    tagline: 'Identity Revealed. Alien Power Evolved.',
    description: 'Following the dramatic self-destruction of the Omnitrix, 16-year-old Ben wields the Ultimatrix: a gauntlet engineered by Albedo and modified by Azmuth. Now an international celebrity after his secret identity is publicly leaked, Ben battles the ruthless Osmosian warlord Aggregor and ancient cosmic terrors using hyper-evolved "Ultimate" alien forms.',
    bannerUrl: '/images/series/ben-10-ultimate-alien.png',
    characterCount: 12
  }
];

export const CANONICAL_SPECIES: Species[] = [
  {
    id: 'sp-01',
    name: 'Pyronite',
    homeworld: 'Pyros',
    description: 'A magma-based species from the burning star-planet Pyros. Their outer crust of red-brown volcanic rock shelters pure solar plasma, enabling controlled pyrokinesis, thermal absorption, and self-levitation.'
  },
  {
    id: 'sp-02',
    name: 'Petrosapien',
    homeworld: 'Petropia',
    description: 'Silicon-based crystalline humanoids whose diamond-hard bodies resist physical and energy harm, capable of projecting lethal razor-edged shards and reshaping crystalline terrain.'
  },
  {
    id: 'sp-03',
    name: 'Kineceleran',
    homeworld: 'Kinet',
    description: 'Sleek bipedal raptors from the turbulent planet Kinet. Born on roller-like spheres on their feet, they manipulate friction to achieve hyper-acceleration up to 500 mph.'
  },
  {
    id: 'sp-04',
    name: 'Tetramand',
    homeworld: 'Khoros',
    description: 'Four-armed, red-skinned titans hailing from the arid wastelands of Khoros. Known for colossal upper-body strength, shockwave claps, and high kinetic tolerance.'
  },
  {
    id: 'sp-05',
    name: 'Galvanic Mechamorph',
    homeworld: 'Galvan B',
    description: 'Synthetic organisms created accidentally by the Galvans. Composed of nanite fluid, they bond with and upgrade external technological systems beyond modern engineering limits.'
  },
  {
    id: 'sp-06',
    name: 'Methanosian',
    homeworld: 'Methanos',
    description: 'Plant-methane humanoid beings possessing rapid cellular regeneration, root manipulation, and ignition nodes that fire pressurized combustible gases.'
  },
  {
    id: 'sp-07',
    name: 'Vaxasaurian',
    homeworld: 'Terradino',
    description: 'Giant sauropod bipeds from the primeval planet Terradino. Capable of expanding their biological mass and skeletal density up to 60 feet tall for raw destructive power.'
  },
  {
    id: 'sp-08',
    name: 'Necrofriggian',
    homeworld: 'Kilmamy',
    description: 'Moth-like phantom organisms from the sub-zero planet Kilmamy. They can drop their body density to drift through solid walls and radiate cryogenic freeze breath.'
  },
  {
    id: 'sp-09',
    name: 'Sonorosian',
    homeworld: 'Sonorosia',
    description: 'Living sound waves contained inside flexible silicone containment suits. They harness amplified acoustic frequencies to shatter objects and can self-replicate indefinitely.'
  },
  {
    id: 'sp-10',
    name: 'Celestialsapien',
    homeworld: 'Forge of Creation',
    description: 'God-like cosmic entities whose bodies contain the starfield of space. Capable of rewriting reality and time, but immobilized until dual conflicting personalities reach internal consensus.'
  },
  {
    id: 'sp-11',
    name: 'Arburian Pelarota',
    homeworld: 'Arburia (Pre-destruction)',
    description: 'Armored, spherical mammals with heavy yellow back plates. They curl into a motorized sphere capable of bouncing, crushing debris, and deflecting laser fire.'
  },
  {
    id: 'sp-12',
    name: 'Chimera Sui Generis',
    homeworld: 'Vilgaxia (formerly Murray)',
    description: 'Cephalopod-featured humanoids with reinforced cartilage, tremendous physical prowess, and profound resistance to harsh interstellar environments.'
  },
  {
    id: 'sp-13',
    name: 'Osmosian',
    homeworld: 'Earth / Osmos V (Genetic Lineage)',
    description: 'Rare genetic strain capable of absorbing solid matter, energy currents, or foreign DNA matrices through skin contact to alter cellular composition.'
  },
  {
    id: 'sp-14',
    name: 'Anodite Hybrid',
    homeworld: 'Earth / Anodyne',
    description: 'Beings with latent spark of Anodite ancestry capable of tapping directly into Mana: the underlying radiant life energy of the cosmos.'
  }
];

export const CANONICAL_CHARACTERS: Character[] = [
  {
    id: 'char-heatblast',
    name: 'Heatblast',
    slug: 'heatblast',
    aliases: ['Pyronite Transformation', 'The Living Torch', 'First Alien'],
    speciesId: 'sp-01',
    speciesName: 'Pyronite',
    homeworld: 'Pyros',
    summary: 'Heatblast is the very first alien transformation Ben Tennyson unlocked from the Omnitrix in the 2005 pilot episode. A magma-based Pyronite, Heatblast commands intense fire projection, thermal absorption, and volcanic flight.',
    role: 'alien',
    status: 'published',
    playlist: 'original_10',
    primaryImage: {
      id: 'img-hb-01',
      characterId: 'char-heatblast',
      imageUrl: '/images/characters/heatblast.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Heatblast_(Classic)',
      creatorOrRightsHolder: 'Dave Johnson / Man of Action / Cartoon Network',
      license: 'Official Cartoon Animation Model Sheet',
      licenseEvidenceUrl: 'https://en.wikipedia.org/wiki/Ben_10_(2005_TV_series)',
      attributionText: 'Official Cartoon Network series production model sheet by Dave Johnson',
      reviewStatus: 'approved',
      altText: 'Heatblast original animated series render',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-hb-02',
        characterId: 'char-heatblast',
        imageUrl: '/images/characters/test_hb.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Heatblast',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Cartoon Network broadcast model archive',
        reviewStatus: 'approved',
        altText: 'Heatblast standing full pose',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-hb-01',
        characterId: 'char-heatblast',
        type: 'power',
        name: 'Pyrokinesis & Plasma Generation',
        description: 'Projects sustained streams of fire, fireballs, and localized heat bursts capable of melting solid steel within seconds.'
      },
      {
        id: 'ab-hb-02',
        characterId: 'char-heatblast',
        type: 'power',
        name: 'Fire Surfing / Propulsion Flight',
        description: 'Levitates chunks of rock or solid magma and shoots continuous fire thrusts beneath them to travel through the air at high speeds.'
      },
      {
        id: 'ab-hb-03',
        characterId: 'char-heatblast',
        type: 'power',
        name: 'Thermal & Flame Absorption',
        description: 'Can absorb ambient fire back into his body to instantly extinguish uncontrolled blazes.'
      },
      {
        id: 'ab-hb-04',
        characterId: 'char-heatblast',
        type: 'weakness',
        name: 'Water Extinguishment Shock',
        description: 'Sudden submersion in large volumes of cold water or fire suppressant foam extinguishes his outer crust, temporarily knocking him unconscious or disabling flame output.',
        limitations: 'Can reignite if sufficient internal thermal energy remains.'
      },
      {
        id: 'ab-hb-05',
        characterId: 'char-heatblast',
        type: 'limitation',
        name: 'Cold Illness Cryo-Inversion',
        description: 'When Ben contracts a human common cold virus, Heatblast\'s biological core inverts to produce sub-zero cryogenic ice flames instead of fire.',
        limitations: 'Documented exclusively in Season 1 Episode 12 ("Side Effects").'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'Original Series Form',
        description: 'The first transformation selected when Ben found the Omnitrix. Omnitrix symbol is located centered on his upper chest.',
        firstAppearanceEpisode: 'S01E01 - "And Then There Were 10"',
        isSignatureAlien: true
      },
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimatrix Restored Form',
        description: 'Re-unlocked via Ultimatrix scanning code. Wears the metallic Ultimatrix emblem with a slightly updated fiery collar.',
        firstAppearanceEpisode: 'S01E13 - "Viktor: The Spoils"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [
      {
        targetCharacterId: 'char-ben',
        targetCharacterName: 'Ben Tennyson',
        targetCharacterSlug: 'ben-tennyson',
        relationshipType: 'genetic-donor',
        notes: 'Pyronite DNA sample stored in the Codon Stream accessed by Ben.'
      },
      {
        targetCharacterId: 'char-swampfire',
        targetCharacterName: 'Swampfire',
        targetCharacterSlug: 'swampfire',
        relationshipType: 'counterpart',
        notes: 'Successor fire-based alien introduced in the Alien Force recalibrated roster.'
      }
    ],
    factSources: [
      {
        id: 'fs-01',
        entityType: 'character',
        entityId: 'char-heatblast',
        factKey: 'pilot_first_transformation',
        sourceTitle: 'Ben 10 Series Premiere Episode 1',
        sourceUrl: 'https://en.wikipedia.org/wiki/And_Then_There_Were_10',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben Tennyson discovers the Omnitrix in a fallen meteorite pod; upon contact, he inadvertently triggers Heatblast and creates a forest fire.',
        confidence: 1.0,
        verifiedDate: '2005-12-27'
      }
    ],
    stats: {
      strength: 65,
      speed: 70,
      durability: 75,
      intelligence: 55,
      energyOutput: 95,
      versatility: 80
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-diamondhead',
    name: 'Diamondhead',
    slug: 'diamondhead',
    aliases: ['Petrosapien Transformation', 'Crystal Shield'],
    speciesId: 'sp-02',
    speciesName: 'Petrosapien',
    homeworld: 'Petropia',
    summary: 'A crystalline titan composed of pale turquoise organic crystal that is harder than industrial diamond. Diamondhead can deflect energy rays, project crystal shards, and regenerate fractured limbs.',
    role: 'alien',
    status: 'published',
    playlist: 'original_10',
    primaryImage: {
      id: 'img-dh-01',
      characterId: 'char-diamondhead',
      imageUrl: '/images/characters/diamondhead.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Diamondhead_(Classic)',
      creatorOrRightsHolder: 'Dave Johnson / Man of Action / Cartoon Network',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Original Cartoon Network character model by Dave Johnson',
      reviewStatus: 'approved',
      altText: 'Diamondhead original animated series transparent render',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-dh-02',
        characterId: 'char-diamondhead',
        imageUrl: '/images/characters/af5.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Vengeance_of_Vilgax:_Part_2',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Broadcast Still',
        attributionText: 'Alien Force broadcast still: Diamondhead defeats Vilgax',
        reviewStatus: 'approved',
        altText: 'Diamondhead towering over Vilgax in Alien Force',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-dh-01',
        characterId: 'char-diamondhead',
        type: 'power',
        name: 'Crystalline Crystallokinesis',
        description: 'Constructs crystal walls, spires, ramps, and barriers out of the ground at will.'
      },
      {
        id: 'ab-dh-02',
        characterId: 'char-diamondhead',
        type: 'power',
        name: 'Laser & Energy Refraction',
        description: 'Prismatic crystal flesh naturally deflects and splits directed laser beams and energy blasts without taking damage.'
      },
      {
        id: 'ab-dh-03',
        characterId: 'char-diamondhead',
        type: 'weakness',
        name: 'Sonic Acoustic Resonance',
        description: 'High-frequency acoustic vibrations and sonic blasts cause his crystalline molecular structure to crack and shatter violently.',
        limitations: 'Highly vulnerable to Sonorosians (Echo Echo) and sonic weaponry.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'Original Series Form',
        description: 'First used in the premiere to battle Vilgax\'s giant attack drone in the forest.',
        firstAppearanceEpisode: 'S01E01 - "And Then There Were 10"',
        isSignatureAlien: true
      },
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Recalibrated Chromastone Hybrid',
        description: 'Re-emerged spontaneously when Vilgax shattered Chromastone into crystal shards.',
        firstAppearanceEpisode: 'S03E01 - "Vengeance of Vilgax: Part 2"',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [
      {
        targetCharacterId: 'char-vilgax',
        targetCharacterName: 'Vilgax',
        targetCharacterSlug: 'vilgax',
        relationshipType: 'arch-nemesis',
        notes: 'Diamondhead defeated Vilgax in Alien Force Season 3 using shard combos.'
      }
    ],
    factSources: [
      {
        id: 'fs-dh-01',
        entityType: 'character',
        entityId: 'char-diamondhead',
        factKey: 'vilgax_defeat_af',
        sourceTitle: 'Alien Force S03E02 "Vengeance of Vilgax: Part 2"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Alien_Force_(season_3)',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben utters "You\'re in trouble, Vilgax. I\'ve had a lot of practice with this one!" and defeats Vilgax on Earth.',
        confidence: 1.0,
        verifiedDate: '2009-09-11'
      }
    ],
    stats: {
      strength: 82,
      speed: 50,
      durability: 96,
      intelligence: 60,
      energyOutput: 78,
      versatility: 85
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-fourarms',
    name: 'Four Arms',
    slug: 'four-arms',
    aliases: ['Tetramand Titan', 'Red Brawler'],
    speciesId: 'sp-04',
    speciesName: 'Tetramand',
    homeworld: 'Khoros',
    summary: 'A 12-foot-tall red-skinned powerhouse from the desert world Khoros. Four Arms possesses titanic physical strength, thick armored skin, and the power to generate shockwaves by clapping all four hands together.',
    role: 'alien',
    status: 'published',
    playlist: 'original_10',
    primaryImage: {
      id: 'img-fa-01',
      characterId: 'char-fourarms',
      imageUrl: '/images/characters/fourarms.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Four_Arms_(Classic)',
      creatorOrRightsHolder: 'Dave Johnson / Man of Action / Cartoon Network',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Four Arms original animated series render by Dave Johnson',
      reviewStatus: 'approved',
      altText: 'Four Arms ready to strike with four fists in black and white suit',
      position: 1,
      isPrimary: true
    },
    gallery: [],
    abilities: [
      {
        id: 'ab-fa-01',
        characterId: 'char-fourarms',
        type: 'power',
        name: 'Colossal Superhuman Strength',
        description: 'Can lift and hurl heavy construction equipment, battle tanks, and punch through stone barriers.'
      },
      {
        id: 'ab-fa-02',
        characterId: 'char-fourarms',
        type: 'power',
        name: 'Sonic Shockwave Clap',
        description: 'Slams his four palms together to create a concussive shockwave that repels projectiles and knocks enemies backwards.'
      },
      {
        id: 'ab-fa-03',
        characterId: 'char-fourarms',
        type: 'weakness',
        name: 'Bulky Silhouette & Restricted Agility',
        description: 'His broad stature makes him an easy target for fast, small adversaries and sniper energy fire.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'Original Series Form',
        description: 'Ben\'s most frequently used heavy-hitter alien during the summer trip.',
        firstAppearanceEpisode: 'S01E02 - "Washington B.C."',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-fa-01',
        entityType: 'character',
        entityId: 'char-fourarms',
        factKey: 'first_appearance',
        sourceTitle: 'Ben 10 S01E02 "Washington B.C."',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10_(2005_TV_series)',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben transforms into Four Arms at the Washington National Museum to fight Dr. Animo\'s giant mutant mammoth.',
        confidence: 1.0,
        verifiedDate: '2006-01-13'
      }
    ],
    stats: {
      strength: 95,
      speed: 45,
      durability: 88,
      intelligence: 45,
      energyOutput: 20,
      versatility: 60
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-xlr8',
    name: 'XLR8',
    slug: 'xlr8',
    aliases: ['Kineceleran Transformation', 'Speed Demon'],
    speciesId: 'sp-03',
    speciesName: 'Kineceleran',
    homeworld: 'Kinet',
    summary: 'A semi-armored velociraptor-like alien capable of manipulating friction to reach speeds exceeding 500 mph. XLR8 can run across vertical surfaces, water, and react in microsecond fractions.',
    role: 'alien',
    status: 'published',
    playlist: 'original_10',
    primaryImage: {
      id: 'img-xlr8-01',
      characterId: 'char-xlr8',
      imageUrl: '/images/characters/xlr8.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/XLR8_(Classic)',
      creatorOrRightsHolder: 'Dave Johnson / Man of Action / Cartoon Network',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'XLR8 official series model sheet by Dave Johnson',
      reviewStatus: 'approved',
      altText: 'XLR8 sprinting with friction helmet and tail',
      position: 1,
      isPrimary: true
    },
    gallery: [],
    abilities: [
      {
        id: 'ab-xl-01',
        characterId: 'char-xlr8',
        type: 'power',
        name: 'Hyper-Acceleration & Friction Control',
        description: 'Can reach over 500 mph within seconds, create sonic tornadoes, and perceive time slowed down.'
      },
      {
        id: 'ab-xl-02',
        characterId: 'char-xlr8',
        type: 'weakness',
        name: 'Adhesive & High Friction Traps',
        description: 'Substances like industrial adhesives, tar, or mud that prevent his foot-spheres from rolling neutralize his mobility.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'Original Series Form',
        description: 'First used in the premiere to get revenge on school bullies Cash and J.T. and stop Vilgax robot scouts.',
        firstAppearanceEpisode: 'S01E01 - "And Then There Were 10"',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-xl-01',
        entityType: 'character',
        entityId: 'char-xlr8',
        factKey: 'speed_record',
        sourceTitle: 'Ben 10 Pop-Up Edition Trivia Track',
        sourceUrl: 'https://archive.org/details/ben10-pop-up-trivia',
        publisher: 'Cartoon Network',
        sourceType: 'pop_up_edition',
        supportingExcerpt: 'Kinecelerans can accelerate up to 500 mph in a fraction of a second and run up sheer 90 degree skyscraper walls.',
        confidence: 0.99,
        verifiedDate: '2007-03-02'
      }
    ],
    stats: {
      strength: 40,
      speed: 100,
      durability: 50,
      intelligence: 65,
      energyOutput: 30,
      versatility: 75
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-cannonbolt',
    name: 'Cannonbolt',
    slug: 'cannonbolt',
    aliases: ['Arburian Pelarota', 'The Armored Sphere'],
    speciesId: 'sp-11',
    speciesName: 'Arburian Pelarota',
    homeworld: 'Arburia (Pre-destruction)',
    summary: 'A massive, armored mammal that can tuck his body into a motorized sphere. Cannonbolt ricochets off solid surfaces at hypersonic speeds, crushing enemy armor while resisting extreme heat and laser blasts.',
    role: 'alien',
    status: 'published',
    playlist: 'additional_os',
    primaryImage: {
      id: 'img-cb-01',
      characterId: 'char-cannonbolt',
      imageUrl: '/images/characters/cannonbolt.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Cannonbolt_(Classic)',
      creatorOrRightsHolder: 'Cartoon Network Studios',
      license: 'Official Cartoon Animation Asset',
      attributionText: 'Cannonbolt original animated series render',
      reviewStatus: 'approved',
      altText: 'Cannonbolt standing with heavy yellow armored plates',
      position: 1,
      isPrimary: true
    },
    gallery: [],
    abilities: [
      {
        id: 'ab-cb-01',
        characterId: 'char-cannonbolt',
        type: 'power',
        name: 'Kinetic Ball Rolling & Ricochet',
        description: 'Tucks into a resilient armored sphere that accelerates to high speeds, ricocheting between enemies.'
      },
      {
        id: 'ab-cb-02',
        characterId: 'char-cannonbolt',
        type: 'power',
        name: 'Armor Plate Invulnerability',
        description: 'Plates on his back are capable of deflecting high-powered lasers and surviving re-entry heat.'
      },
      {
        id: 'ab-cb-03',
        characterId: 'char-cannonbolt',
        type: 'weakness',
        name: 'Top-Heavy Stumble',
        description: 'When walking in bipedal stance, his massive bulk and small feet make him prone to tumbling over.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'First Additional Alien Unlocked',
        description: 'The first new alien Ben accidentally unlocked beyond the starting 10.',
        firstAppearanceEpisode: 'S02E02 - "The Big Tick"',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-cb-01',
        entityType: 'character',
        entityId: 'char-cannonbolt',
        factKey: 'first_unlock',
        sourceTitle: 'Ben 10 S02E02 "The Big Tick"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10_(2005_TV_series)',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben unlocks Cannonbolt by accident on the Omnitrix dial and defeats the Great One planetary parasite.',
        confidence: 1.0,
        verifiedDate: '2006-05-30'
      }
    ],
    stats: {
      strength: 84,
      speed: 78,
      durability: 98,
      intelligence: 45,
      energyOutput: 15,
      versatility: 70
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-swampfire',
    name: 'Swampfire',
    slug: 'swampfire',
    aliases: ['Methanosian Form', 'Plant-Flame Hybrid'],
    speciesId: 'sp-06',
    speciesName: 'Methanosian',
    homeworld: 'Methanos',
    summary: 'A methane-emitting plant humanoid unlocked upon the recalibration of the Omnitrix in Alien Force. Swampfire uniquely combines explosive methane-fueled pyrokinesis with vegetative regeneration and chlorokinesis.',
    role: 'alien',
    status: 'published',
    playlist: 'alien_force_10',
    primaryImage: {
      id: 'img-sf-01',
      characterId: 'char-swampfire',
      imageUrl: '/images/characters/swampfire.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Swampfire_(Classic)',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Character design by Glen Murakami (2008 Cartoon Network)',
      reviewStatus: 'approved',
      altText: 'Swampfire original animated series render from Alien Force',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-sf-02',
        characterId: 'char-swampfire',
        imageUrl: '/images/characters/ultimate_swampfire.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Ultimate_Swampfire',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Ultimate Swampfire evolved form from Ultimate Alien',
        reviewStatus: 'approved',
        altText: 'Ultimate Swampfire evolved tree titan form',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-sf-01',
        characterId: 'char-swampfire',
        type: 'power',
        name: 'Methane Blast Pyrokinesis',
        description: 'Ignites concentrated methane gas expelled from organic palm valves, creating intense fire blasts and flamethrower jets.'
      },
      {
        id: 'ab-sf-02',
        characterId: 'char-swampfire',
        type: 'power',
        name: 'Extreme Cellular Regeneration',
        description: 'Can reform from being sliced in half, crushed, decapitated, or splattered by quickly regrowing plant tissue.'
      },
      {
        id: 'ab-sf-03',
        characterId: 'char-swampfire',
        type: 'power',
        name: 'Chlorokinesis & Vine Control',
        description: 'Throws seeds that erupt into rapidly expanding constricting vines capable of entangling giant Highbreed spacecraft.'
      },
      {
        id: 'ab-sf-04',
        characterId: 'char-swampfire',
        type: 'limitation',
        name: 'Potent Swamp Odor',
        description: 'Constantly emanates a foul stench of rotting vegetation and methane gas, making stealth approaches impossible.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Recalibrated Omnitrix Form',
        description: 'First transformation of the 15-year-old Ben in Alien Force premiere, taking down DNAliens.',
        firstAppearanceEpisode: 'S01E01 - "Ben 10 Returns: Part 1"',
        isSignatureAlien: true
      },
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimatrix Base Form',
        description: 'Used frequently, also serves as the base for Ultimate Swampfire evolutionary activation.',
        firstAppearanceEpisode: 'S01E01 - "Fame"',
        isSignatureAlien: false
      }
    ],
    forms: [
      {
        relatedCharacterId: 'char-ultimate-swampfire',
        relatedCharacterName: 'Ultimate Swampfire',
        relatedCharacterSlug: 'ultimate-swampfire',
        formType: 'ultimate',
        notes: 'Hyper-evolved war simulation form activated via the Ultimatrix dial press.'
      }
    ],
    relationships: [],
    factSources: [
      {
        id: 'fs-sf-01',
        entityType: 'character',
        entityId: 'char-swampfire',
        factKey: 'af_premiere_regeneration',
        sourceTitle: 'Alien Force S01E01 "Ben 10 Returns"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Alien_Force_(season_1)',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Swampfire is shot in the head by a DNAlien ray, reconstituting his face from leafy vines within 2 seconds.',
        confidence: 1.0,
        verifiedDate: '2008-04-18'
      }
    ],
    stats: {
      strength: 78,
      speed: 58,
      durability: 92,
      intelligence: 65,
      energyOutput: 88,
      versatility: 90
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-humungousaur',
    name: 'Humungousaur',
    slug: 'humungousaur',
    aliases: ['Vaxasaurian Titan', 'Dino Bruiser'],
    speciesId: 'sp-07',
    speciesName: 'Vaxasaurian',
    homeworld: 'Terradino',
    summary: 'A 12-foot-tall dinosaur-like biped from Terradino. Humungousaur possesses immense physical brute force and can dynamically expand his muscle and bone density up to 60 feet tall, growing stegosaur-like armor plates on his back.',
    role: 'alien',
    status: 'published',
    playlist: 'alien_force_10',
    primaryImage: {
      id: 'img-hm-01',
      characterId: 'char-humungousaur',
      imageUrl: '/images/characters/humungousaur.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Humungousaur_(Classic)',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Official Alien Force character sheet by Glen Murakami (2008)',
      reviewStatus: 'approved',
      altText: 'Humungousaur full standing animated cartoon model render',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-hm-02',
        characterId: 'char-humungousaur',
        imageUrl: '/images/characters/ultimate_humungousaur.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Ultimate_Humungousaur',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Still',
        attributionText: 'Ultimate Humungousaur battle still from Ultimate Alien',
        reviewStatus: 'approved',
        altText: 'Ultimate Humungousaur with gatling knuckle missiles',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-hm-01',
        characterId: 'char-humungousaur',
        type: 'power',
        name: 'Size Alteration (Up to 60 Feet)',
        description: 'Expands body mass and bone structure to five times his standard height, multiplying his physical strength.'
      },
      {
        id: 'ab-hm-02',
        characterId: 'char-humungousaur',
        type: 'power',
        name: 'Armored Plate Growth',
        description: 'Growing in size triggers the emergence of thick dorsal crests and tail spikes that resist explosive artillery.'
      },
      {
        id: 'ab-hm-03',
        characterId: 'char-humungousaur',
        type: 'weakness',
        name: 'Mass Inertia & Vulnerability to Electricity',
        description: 'His colossal weight reduces turning speed, and high-voltage electrical shocks can stun his nervous system.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Alien Force 10 Roster',
        description: 'Ben\'s primary heavy bruiser across Alien Force.',
        firstAppearanceEpisode: 'S01E02 - "Ben 10 Returns: Part 2"',
        isSignatureAlien: true
      },
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimatrix Form',
        description: 'Used frequently, and evolves into Ultimate Humungousaur.',
        firstAppearanceEpisode: 'S01E01 - "Fame"',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-hm-01',
        entityType: 'character',
        entityId: 'char-humungousaur',
        factKey: 'debut_af',
        sourceTitle: 'Alien Force S01E02 "Ben 10 Returns: Part 2"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Alien_Force',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben transforms into Humungousaur to break into the Highbreed railway depot alongside Kevin and Gwen.',
        confidence: 1.0,
        verifiedDate: '2008-04-18'
      }
    ],
    stats: {
      strength: 96,
      speed: 48,
      durability: 94,
      intelligence: 50,
      energyOutput: 20,
      versatility: 65
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-big-chill',
    name: 'Big Chill',
    slug: 'big-chill',
    aliases: ['Necrofriggian Phantom', 'Cryo Moth'],
    speciesId: 'sp-08',
    speciesName: 'Necrofriggian',
    homeworld: 'Kilmamy',
    summary: 'A ghostly moth-like phantom from the freezing world Kilmamy. Big Chill can fold his four wings into a hooded cloak, drift through solid steel using intangibility, and exhale cryogenic blasts that freeze objects down to absolute zero.',
    role: 'alien',
    status: 'published',
    playlist: 'alien_force_10',
    primaryImage: {
      id: 'img-bc-01',
      characterId: 'char-big-chill',
      imageUrl: '/images/characters/big_chill.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Big_Chill_(Classic)',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Big Chill official Alien Force hooded model render',
      reviewStatus: 'approved',
      altText: 'Big Chill in cloaked hooded phantom stance from Alien Force',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-bc-02',
        characterId: 'char-big-chill',
        imageUrl: '/images/characters/ultimate_big_chill.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Ultimate_Big_Chill',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Ultimate Big Chill fire-ice evolved render',
        reviewStatus: 'approved',
        altText: 'Ultimate Big Chill evolved form from Ultimate Alien',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-bc-01',
        characterId: 'char-big-chill',
        type: 'power',
        name: 'Intangibility & Phase Freezing',
        description: 'Phases harmlessly through solid matter; phasing through living opponents flash-freezes their internal core.'
      },
      {
        id: 'ab-bc-02',
        characterId: 'char-big-chill',
        type: 'power',
        name: 'Cryogenic Freeze Exhalation',
        description: 'Exhales dense sub-zero vapor that coats enemies in thick indestructible crystalline ice sheets.'
      },
      {
        id: 'ab-bc-03',
        characterId: 'char-big-chill',
        type: 'weakness',
        name: 'Hypnotic Necrofriggian Reproductive Cycle',
        description: 'Every 80 years, Necrofriggians are compelled by biological instinct to feed compulsively on metal to lay eggs in solitary shrines.',
        limitations: 'Documented in Alien Force Episode "Save the Last Dance".'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Alien Force 10 Roster',
        description: 'Key stealth and freezing alien used to sabotage Highbreed warp gates.',
        firstAppearanceEpisode: 'S01E04 - "Kevin\'s Big Score"',
        isSignatureAlien: true
      },
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimatrix Form',
        description: 'Frequently accessed and evolves into Ultimate Big Chill (Ice so cold it burns).',
        firstAppearanceEpisode: 'S01E01 - "Fame"',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-bc-01',
        entityType: 'character',
        entityId: 'char-big-chill',
        factKey: 'freeze_phase',
        sourceTitle: 'Alien Force S01E04 "Kevin\'s Big Score"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Alien_Force',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Big Chill phases through Vulkanus\' subterranean mining rig, freezing the thermal gears solid.',
        confidence: 1.0,
        verifiedDate: '2008-05-02'
      }
    ],
    stats: {
      strength: 62,
      speed: 82,
      durability: 80,
      intelligence: 75,
      energyOutput: 88,
      versatility: 92
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-ultimate-echo-echo',
    name: 'Ultimate Echo Echo',
    slug: 'ultimate-echo-echo',
    aliases: ['Evolved Sonorosian', 'Sonic Disk Master'],
    speciesId: 'sp-09',
    speciesName: 'Evolved Sonorosian',
    homeworld: 'Sonorosia (Simulated Millennia of Warfare)',
    summary: 'The hyper-evolved form of Echo Echo created by the Ultimatrix evolutionary matrix. Ultimate Echo Echo trades bio-duplication for mechanical flight and independent levitating sonic disks capable of immense localized sonic devastation.',
    role: 'alien',
    status: 'published',
    playlist: 'ultimate_forms',
    primaryImage: {
      id: 'img-uee-01',
      characterId: 'char-ultimate-echo-echo',
      imageUrl: '/images/characters/ultimate_echo_echo.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Ultimate_Echo_Echo',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Ultimate Alien official character model sheet by Glen Murakami (2010)',
      reviewStatus: 'approved',
      altText: 'Ultimate Echo Echo full standing blue chassis render',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-uee-02',
        characterId: 'char-ultimate-echo-echo',
        imageUrl: '/images/characters/echo_echo.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Echo_Echo',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Base Echo Echo non-evolved cartoon model',
        reviewStatus: 'approved',
        altText: 'Echo Echo standard silicone containment suit',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-uee-01',
        characterId: 'char-ultimate-echo-echo',
        type: 'power',
        name: 'Autonomous Sonic Disks',
        description: 'Ejects dozens of magnetic sound emitters from his shoulders and legs that duplicate in mid-air and surround the target with coordinated sound waves.'
      },
      {
        id: 'ab-uee-02',
        characterId: 'char-ultimate-echo-echo',
        type: 'power',
        name: 'Acoustic Forcefield Dome',
        description: 'Disks converge to project solid walls of high-frequency sound capable of crushing tank armor or neutralizing nuclear radiation.'
      },
      {
        id: 'ab-uee-03',
        characterId: 'char-ultimate-echo-echo',
        type: 'weakness',
        name: 'Destruction of Sonic Disks',
        description: 'If his launched disks are smashed or absorbed before returning, his acoustic output is severely diminished.'
      },
      {
        id: 'ab-uee-04',
        characterId: 'char-ultimate-echo-echo',
        type: 'limitation',
        name: 'Loss of Bio-Duplication',
        description: 'Unlike standard Echo Echo, Ultimate Echo Echo cannot clone his main physical body, leaving his singular chassis vulnerable if attacked directly.',
        limitations: 'Documented fact: evolution sacrificed physical reproduction for remote weaponization.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimatrix Evolution',
        description: 'First evolved in "Too Hot to Handle" against Pandor, later famously defeating an insane Ultimate Kevin in "Absolute Power".',
        firstAppearanceEpisode: 'S01E06 - "Too Hot to Handle"',
        isSignatureAlien: true
      }
    ],
    forms: [
      {
        relatedCharacterId: 'char-echo-echo',
        relatedCharacterName: 'Echo Echo',
        relatedCharacterSlug: 'echo-echo',
        formType: 'evolution',
        notes: 'Base non-evolved Sonorosian form from Alien Force.'
      }
    ],
    relationships: [],
    factSources: [
      {
        id: 'fs-uee-01',
        entityType: 'character',
        entityId: 'char-ultimate-echo-echo',
        factKey: 'absolute_power_battle',
        sourceTitle: 'Ultimate Alien S02E10 "Absolute Power: Part 2"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Ultimate_Alien',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben uses Ultimate Echo Echo\'s "Sonic Doom" formation to incapacitate Kevin long enough for Gwen and Cooper to reverse the mutation.',
        confidence: 1.0,
        verifiedDate: '2010-12-10'
      }
    ],
    stats: {
      strength: 75,
      speed: 84,
      durability: 82,
      intelligence: 75,
      energyOutput: 96,
      versatility: 92
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-ultimate-swampfire',
    name: 'Ultimate Swampfire',
    slug: 'ultimate-swampfire',
    aliases: ['Evolved Methanosian', 'Blue Flame Tree Titan'],
    speciesId: 'sp-06',
    speciesName: 'Evolved Methanosian',
    homeworld: 'Methanos (Evolutionary Simulation)',
    summary: 'The Ultimatrix evolution of Swampfire. His biological matter has hardened into petrified wooden armor resembling a walking tree, and his fire burns with scorching blue napalm pods capable of underwater combustion.',
    role: 'alien',
    status: 'published',
    playlist: 'ultimate_forms',
    primaryImage: {
      id: 'img-usf-01',
      characterId: 'char-ultimate-swampfire',
      imageUrl: '/images/characters/ultimate_swampfire.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Ultimate_Swampfire',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Ultimate Alien series character archives by Glen Murakami',
      reviewStatus: 'approved',
      altText: 'Ultimate Swampfire blue fire tree titan cartoon model render',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-usf-02',
        characterId: 'char-ultimate-swampfire',
        imageUrl: '/images/characters/swampfire.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Swampfire',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Base Swampfire character render',
        reviewStatus: 'approved',
        altText: 'Base Swampfire from Alien Force',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-usf-01',
        characterId: 'char-ultimate-swampfire',
        type: 'power',
        name: 'Blue Napalm Pyrokinesis',
        description: 'Fires high-temperature blue plasma streams that cling to targets and burn up to three times hotter than standard red fire.'
      },
      {
        id: 'ab-usf-02',
        characterId: 'char-ultimate-swampfire',
        type: 'power',
        name: 'Petrified Wooden Shell Armor',
        description: 'Thick fireproof timber exterior shrugs off heavy ordinance and physical strikes.'
      },
      {
        id: 'ab-usf-03',
        characterId: 'char-ultimate-swampfire',
        type: 'limitation',
        name: 'Reduced Elasticity',
        description: 'More rigid body frame than standard Swampfire; cannot squirm through microscopic cracks as easily.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Ultimatrix Debut (Season Finale)',
        description: 'First revealed in the AF finale battle when Ben commandeered the Ultimatrix from Albedo.',
        firstAppearanceEpisode: 'S03E20 - "The Final Battle: Part 2"',
        isSignatureAlien: true
      },
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimatrix Roster',
        description: 'Regular heavy transformation against Vilgax, DNAlien stragglers, and Aggregor.',
        firstAppearanceEpisode: 'S01E01 - "Fame"',
        isSignatureAlien: true
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-usf-01',
        entityType: 'character',
        entityId: 'char-ultimate-swampfire',
        factKey: 'blue_flame_lore',
        sourceTitle: 'Alien Force Finale "The Final Battle"',
        sourceUrl: 'https://en.wikipedia.org/wiki/The_Final_Battle_(Ben_10:_Alien_Force)',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben slaps the Ultimatrix dial as Swampfire, evolving into Ultimate Swampfire and incinerating Vilgax\'s bio-drones with blue fire.',
        confidence: 1.0,
        verifiedDate: '2010-03-26'
      }
    ],
    stats: {
      strength: 86,
      speed: 62,
      durability: 94,
      intelligence: 68,
      energyOutput: 94,
      versatility: 85
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-alien-x',
    name: 'Alien X',
    slug: 'alien-x',
    aliases: ['Celestialsapien Transformation', 'The Cosmic Decider'],
    speciesId: 'sp-10',
    speciesName: 'Celestialsapien',
    homeworld: 'Forge of Creation',
    summary: 'A Celestialsapien possessing near-omnipotent reality warping, time reversal, and cosmic manipulation. However, Alien X is locked in internal paralysis until its two internal personalities—Bellicus (rage) and Serena (compassion)—agree with Ben.',
    role: 'alien',
    status: 'published',
    playlist: 'alien_force_10',
    primaryImage: {
      id: 'img-ax-01',
      characterId: 'char-alien-x',
      imageUrl: '/images/characters/alienx.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Alien_X_(Classic)',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Alien X starfield silhouette by Glen Murakami / Cartoon Network',
      reviewStatus: 'approved',
      altText: 'Alien X cosmic humanoid body filled with stars from Alien Force',
      position: 1,
      isPrimary: true
    },
    gallery: [],
    abilities: [
      {
        id: 'ab-ax-01',
        characterId: 'char-alien-x',
        type: 'power',
        name: 'Omnipotent Reality Warping',
        description: 'Can alter physical laws, reverse the flow of time, reconstruct destroyed planets, and materialize objects out of nothingness.'
      },
      {
        id: 'ab-ax-02',
        characterId: 'char-alien-x',
        type: 'weakness',
        name: 'Tripartite Personality Paralysis',
        description: 'Cannot move, defend itself, or take any action until Bellicus (Voice of Anger) and Serena (Voice of Love) reach a unanimous vote with Ben.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'First Transformation',
        description: 'Transforms to stop a dam breach and reverse the floodwaters, leaving Ben trapped inside the internal mind plane.',
        firstAppearanceEpisode: 'S01E13 - "X = Ben + 2"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-ax-01',
        entityType: 'character',
        entityId: 'char-alien-x',
        factKey: 'personality_mechanic',
        sourceTitle: 'Alien Force S01E13 "X = Ben + 2"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Alien_Force',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Ben learns that every Celestialsapien action requires a 2-out-of-3 majority between Ben, Bellicus, and Serena, leaving his physical shell motionless.',
        confidence: 1.0,
        verifiedDate: '2008-08-31'
      }
    ],
    stats: {
      strength: 100,
      speed: 100,
      durability: 100,
      intelligence: 100,
      energyOutput: 100,
      versatility: 100
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-vilgax',
    name: 'Vilgax',
    slug: 'vilgax',
    aliases: ['Conqueror of 10 Worlds', 'The Warlord of Vilgaxia', 'Master of the Omnitrix'],
    speciesId: 'sp-12',
    speciesName: 'Chimera Sui Generis',
    homeworld: 'Vilgaxia (formerly Murray)',
    summary: 'The arch-nemesis of Ben Tennyson across all three canonical series. A ruthless intergalactic warlord who conquered ten distinct planetary champions to absorb their powers, Vilgax stops at nothing to seize the Omnitrix for galactic domination.',
    role: 'villain',
    status: 'published',
    playlist: 'villains',
    primaryImage: {
      id: 'img-vx-01',
      characterId: 'char-vilgax',
      imageUrl: '/images/characters/vilgax.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Vilgax_(Classic)',
      creatorOrRightsHolder: 'Alex Soto / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Vilgax cybernetic warrior model sheet by Alex Soto / Cartoon Network',
      reviewStatus: 'approved',
      altText: 'Vilgax cybernetic armor stance from original series',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-vx-02',
        characterId: 'char-vilgax',
        imageUrl: '/images/characters/af5.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Vengeance_of_Vilgax:_Part_2',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Broadcast Still',
        attributionText: 'Vilgax vs Diamondhead broadcast battle sequence',
        reviewStatus: 'approved',
        altText: 'Vilgax defeated by Diamondhead on Earth in Alien Force',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-vx-01',
        characterId: 'char-vilgax',
        type: 'power',
        name: 'Cybernetic & Genetic Super-Strength',
        description: 'Infused with cybernetic muscle boosters and the extracted biological might of 10 conquered planetary champions.'
      },
      {
        id: 'ab-vx-02',
        characterId: 'char-vilgax',
        type: 'power',
        name: 'Ruby Ray of Ulo & Shield of Ziegel',
        description: 'Fires high-intensity thermal red eye beams and projects an impenetrable golden energy shield from his gauntlet.'
      },
      {
        id: 'ab-vx-03',
        characterId: 'char-vilgax',
        type: 'weakness',
        name: 'Overwhelming Hubris & Megalomania',
        description: 'Consistently underestimates young Ben\'s tactical creativity and adaptability with alien combinations.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'Cybernetic Rebuilt Warlord',
        description: 'Main overarching antagonist, hunting Ben from his dreadnought the Chimerian Hammer.',
        firstAppearanceEpisode: 'S01E01 - "And Then There Were 10"',
        isSignatureAlien: false
      },
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Conqueror of 10 Worlds',
        description: 'Returns in Season 3 wielding the stolen weapons and powers of ten conquered alien warriors.',
        firstAppearanceEpisode: 'S03E01 - "Vengeance of Vilgax: Part 1"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [
      {
        targetCharacterId: 'char-ben',
        targetCharacterName: 'Ben Tennyson',
        targetCharacterSlug: 'ben-tennyson',
        relationshipType: 'arch-nemesis',
        notes: 'Decade-long bitter blood rivalry for control of the Omnitrix and the fate of the cosmos.'
      }
    ],
    factSources: [
      {
        id: 'fs-vx-01',
        entityType: 'character',
        entityId: 'char-vilgax',
        factKey: 'conqueror_of_10_worlds',
        sourceTitle: 'Alien Force S03E01 "Vengeance of Vilgax"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Vilgax',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Vilgax invokes the Galactic Code of Conduct, defeating the strongest warriors of ten planets and absorbing their gifts into his body.',
        confidence: 1.0,
        verifiedDate: '2009-09-11'
      }
    ],
    stats: {
      strength: 98,
      speed: 68,
      durability: 96,
      intelligence: 90,
      energyOutput: 88,
      versatility: 85
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-kevin',
    name: 'Kevin Levin',
    slug: 'kevin-levin',
    aliases: ['Kevin 11', 'Osmosian Hero', 'Matter Absorber'],
    speciesId: 'sp-13',
    speciesName: 'Osmosian',
    homeworld: 'Earth / Osmos V',
    summary: 'Starting as a troubled delinquent with energy absorption abilities in the 2005 series, Kevin later matures into a reliable ally and technical genius in Alien Force and Ultimate Alien, mastering solid matter absorption to armor his body in steel and taydenite.',
    role: 'hero',
    status: 'published',
    playlist: 'allies',
    primaryImage: {
      id: 'img-kl-01',
      characterId: 'char-kevin',
      imageUrl: '/images/characters/kevin_af.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Kevin_Levin_(Classic)',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Kevin Levin character sheet by Glen Murakami / Cartoon Network',
      reviewStatus: 'approved',
      altText: 'Kevin Levin standing in black shirt from Alien Force',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-kl-02',
        characterId: 'char-kevin',
        imageUrl: '/images/characters/kevin_os.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Kevin_11_(Classic)',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Young Kevin Levin original 2005 series render',
        reviewStatus: 'approved',
        altText: 'Young 11-year-old Kevin Levin from original series',
        position: 2
      },
      {
        id: 'img-kl-03',
        characterId: 'char-kevin',
        imageUrl: '/images/characters/ua3.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/The_Forge_of_Creation',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Broadcast Still',
        attributionText: 'Ultimate Kevin absorbing Aggregor in the Forge of Creation',
        reviewStatus: 'approved',
        altText: 'Ultimate Kevin vs Aggregor in Forge of Creation',
        position: 3
      }
    ],
    abilities: [
      {
        id: 'ab-kl-01',
        characterId: 'char-kevin',
        type: 'power',
        name: 'Matter Absorption & Armoring',
        description: 'Absorbs the elemental density of any solid substance he touches (metal, stone, wood, taydenite) across his skin.'
      },
      {
        id: 'ab-kl-02',
        characterId: 'char-kevin',
        type: 'power',
        name: 'Limb Weapon Shaping',
        description: 'Morphs matter-armored arms into heavy maces, blades, hammers, and shields.'
      },
      {
        id: 'ab-kl-03',
        characterId: 'char-kevin',
        type: 'weakness',
        name: 'Energy Absorption Psychosis',
        description: 'Absorbing living energy or Omnitrix DNA directly damages the Osmosian neurological balance, inducing severe megalomania and rage.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: 'Kevin 11 / Mutant Rogue',
        description: 'Runaway rogue kid who absorbed the Omnitrix and mutated into an amalgam alien.',
        firstAppearanceEpisode: 'S01E07 - "Kevin 11"',
        isSignatureAlien: false
      },
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: 'Plumbers\' Ally & Mechanic',
        description: 'Reformed smuggler turning hero to help Ben and Gwen find Grandpa Max.',
        firstAppearanceEpisode: 'S01E01 - "Ben 10 Returns: Part 1"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [
      {
        targetCharacterId: 'char-ben',
        targetCharacterName: 'Ben Tennyson',
        targetCharacterSlug: 'ben-tennyson',
        relationshipType: 'ally',
        notes: 'Close best friend and partner across Alien Force and Ultimate Alien.'
      }
    ],
    factSources: [
      {
        id: 'fs-kl-01',
        entityType: 'character',
        entityId: 'char-kevin',
        factKey: 'osmosian_nature',
        sourceTitle: 'Alien Force S02E01 "Darkstar Rising"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Kevin_Levin',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Kevin explains his Osmosian genetic inheritance and why absorbing raw energy corrupts his mental stability.',
        confidence: 0.98,
        verifiedDate: '2008-09-27'
      }
    ],
    stats: {
      strength: 88,
      speed: 60,
      durability: 90,
      intelligence: 78,
      energyOutput: 70,
      versatility: 85
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-gwen',
    name: 'Gwen Tennyson',
    slug: 'gwen-tennyson',
    aliases: ['Lucky Girl', 'Anodite Sorceress', 'Gwendolyn'],
    speciesId: 'sp-14',
    speciesName: 'Anodite / Human Hybrid',
    homeworld: 'Earth / Anodyne',
    summary: 'Ben\'s brilliant and resourceful cousin. Discovering a spellbook in the original series, Gwen unlocked her maternal grandmother Verdona\'s Anodite heritage in Alien Force, becoming a master manipulator of pure pink Mana energy constructs, forcefields, and mystical spells.',
    role: 'hero',
    status: 'published',
    playlist: 'allies',
    primaryImage: {
      id: 'img-gt-01',
      characterId: 'char-gwen',
      imageUrl: '/images/characters/gwen_ua.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Gwen_Tennyson_(Classic)',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Gwen Tennyson animated series render with mana spheres by Cartoon Network',
      reviewStatus: 'approved',
      altText: 'Gwen Tennyson holding pink mana energy spheres from Ultimate Alien',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-gt-02',
        characterId: 'char-gwen',
        imageUrl: '/images/characters/gwen_os_pose.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Gwen_Tennyson_(Classic)',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: 'Original 10-year-old Gwen Tennyson from 2005 series',
        reviewStatus: 'approved',
        altText: '10-year-old Gwen Tennyson in blue cat t-shirt from 2005 series',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-gt-01',
        characterId: 'char-gwen',
        type: 'power',
        name: 'Mana Manipulation & Energy Constructs',
        description: 'Shapes shimmering magenta life-energy into hard-light stepping platforms, crushing spheres, and impenetrable defensive shields.'
      },
      {
        id: 'ab-gt-02',
        characterId: 'char-gwen',
        type: 'power',
        name: 'Spells of Ledgerdomain & Hex Magic',
        description: 'Recites mystical incantations to track life signatures, dispel dark sorcery, and manipulate physical matter.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: '10-Year-Old Prodigy / Lucky Girl',
        description: 'Travels with Ben and Max, discovering Charms of Bezel and learning spellcraft.',
        firstAppearanceEpisode: 'S01E01 - "And Then There Were 10"',
        isSignatureAlien: false
      },
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: '15-Year-Old Anodite Awakened',
        description: 'Key strategist and defense backbone of the Alien Force trio.',
        firstAppearanceEpisode: 'S01E01 - "Ben 10 Returns: Part 1"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-gt-01',
        entityType: 'character',
        entityId: 'char-gwen',
        factKey: 'anodite_heritage',
        sourceTitle: 'Alien Force S01E08 "What Are Little Girls Made Of?"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Gwen_Tennyson',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Grandmother Verdona appears and reveals that Gwen inherited the rare Anodite "spark" of pure life energy.',
        confidence: 1.0,
        verifiedDate: '2008-06-14'
      }
    ],
    stats: {
      strength: 55,
      speed: 68,
      durability: 82,
      intelligence: 95,
      energyOutput: 94,
      versatility: 95
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-ben',
    name: 'Ben Tennyson',
    slug: 'ben-tennyson',
    aliases: ['Wielder of the Omnitrix', 'Hero of Heroes', 'Benjamin Kirby Tennyson'],
    speciesId: 'sp-14',
    speciesName: 'Human',
    homeworld: 'Earth (Bellwood)',
    summary: 'The primary protagonist of the franchise. From an impulsive 10-year-old finding the Omnitrix in a forest to a mature 16-year-old wielder of the Ultimatrix whose identity is celebrated across the cosmos, Ben balances everyday youth with saving the galaxy.',
    role: 'hero',
    status: 'published',
    playlist: 'allies',
    primaryImage: {
      id: 'img-bt-01',
      characterId: 'char-ben',
      imageUrl: '/images/characters/ben_os.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Ben_Tennyson_(Classic)',
      creatorOrRightsHolder: 'Man of Action / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Original 10-year-old Ben Tennyson by Man of Action / Cartoon Network',
      reviewStatus: 'approved',
      altText: '10-year-old Ben Tennyson with Omnitrix from 2005 series',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-bt-02',
        characterId: 'char-ben',
        imageUrl: '/images/characters/ben_af.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Ben_Tennyson_(Classic)',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Asset',
        attributionText: '15-year-old Ben Tennyson in green jacket from Alien Force',
        reviewStatus: 'approved',
        altText: '15-year-old Ben Tennyson in green jacket',
        position: 2
      },
      {
        id: 'img-bt-03',
        characterId: 'char-ben',
        imageUrl: '/images/characters/ua1.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/Ultimate_Alien',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Still',
        attributionText: '16-year-old Ben raising the Ultimatrix gauntlet',
        reviewStatus: 'approved',
        altText: 'Ben Tennyson raising the Ultimatrix',
        position: 3
      }
    ],
    abilities: [
      {
        id: 'ab-bt-01',
        characterId: 'char-ben',
        type: 'power',
        name: 'Omnitrix / Ultimatrix Mastery',
        description: 'Instantaneous cellular transformation into dozens of alien species with specialized biological powers and evolutionary forms.'
      },
      {
        id: 'ab-bt-02',
        characterId: 'char-ben',
        type: 'power',
        name: 'Tactical Combat Intuition',
        description: 'Exceptional improvisational combat thinking under pressure, utilizing environmental hazards and alien synergies.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-01',
        seriesSlug: 'ben-10-2005',
        seriesName: 'Ben 10 (2005)',
        versionName: '10-Year-Old Original Wielder',
        description: 'Wears his signature white tee with vertical black stripe; wields the prototype Omnitrix.',
        firstAppearanceEpisode: 'S01E01 - "And Then There Were 10"',
        isSignatureAlien: false
      },
      {
        seriesId: 'series-02',
        seriesSlug: 'ben-10-alien-force',
        seriesName: 'Ben 10: Alien Force',
        versionName: '15-Year-Old Team Leader',
        description: 'Wears the iconic green jacket with white \'10\' badge; wields the recalibrated Omnitrix.',
        firstAppearanceEpisode: 'S01E01 - "Ben 10 Returns: Part 1"',
        isSignatureAlien: false
      },
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: '16-Year-Old Ultimatrix Wielder',
        description: 'Wields the gauntlet-style Ultimatrix; faces public celebrity and international media.',
        firstAppearanceEpisode: 'S01E01 - "Fame"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-bt-01',
        entityType: 'character',
        entityId: 'char-ben',
        factKey: 'fame_leak',
        sourceTitle: 'Ultimate Alien S01E01 "Fame"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Ultimate_Alien',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Young fan Jimmy Jones posts video online exposing Ben Tennyson as the hero behind the alien sightings to the entire planet.',
        confidence: 1.0,
        verifiedDate: '2010-04-23'
      }
    ],
    stats: {
      strength: 50,
      speed: 60,
      durability: 55,
      intelligence: 85,
      energyOutput: 100,
      versatility: 100
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  },
  {
    id: 'char-aggregor',
    name: 'Aggregor',
    slug: 'aggregor',
    aliases: ['Ultimate Aggregor', 'Osmosian Warlord'],
    speciesId: 'sp-13',
    speciesName: 'Osmosian',
    homeworld: 'Osmos V',
    summary: 'The ruthless Osmosian warlord and primary antagonist of Ben 10: Ultimate Alien Season 1. Aggregor kidnapped five powerful aliens from the Andromeda Galaxy to absorb 100% of their powers and claim the Map of Infinity to reach the Forge of Creation.',
    role: 'villain',
    status: 'published',
    playlist: 'villains',
    primaryImage: {
      id: 'img-ag-01',
      characterId: 'char-aggregor',
      imageUrl: '/images/characters/aggregor.png',
      sourceUrl: 'https://ben10.fandom.com/wiki/Aggregor',
      creatorOrRightsHolder: 'Glen Murakami / Cartoon Network Studios',
      license: 'Official Cartoon Animation Model Sheet',
      attributionText: 'Aggregor official character artwork by Glen Murakami / Cartoon Network',
      reviewStatus: 'approved',
      altText: 'Aggregor standing with horns and brown cloak from Ultimate Alien',
      position: 1,
      isPrimary: true
    },
    gallery: [
      {
        id: 'img-ag-02',
        characterId: 'char-aggregor',
        imageUrl: '/images/characters/ua3.png',
        sourceUrl: 'https://ben10.fandom.com/wiki/The_Forge_of_Creation',
        creatorOrRightsHolder: 'Cartoon Network Studios',
        license: 'Official Cartoon Animation Still',
        attributionText: 'Ultimate Aggregor defeated in the Forge of Creation',
        reviewStatus: 'approved',
        altText: 'Aggregor confronted by Kevin in Forge of Creation',
        position: 2
      }
    ],
    abilities: [
      {
        id: 'ab-ag-01',
        characterId: 'char-aggregor',
        type: 'power',
        name: 'Complete Genetic Absorption',
        description: 'Using specialized containment chambers, Aggregor absorbs the full genetic matrix and power of five Andromeda aliens without mental degradation.'
      },
      {
        id: 'ab-ag-02',
        characterId: 'char-aggregor',
        type: 'power',
        name: 'Composite Andromeda Powers',
        description: 'Combines Bivalvan\'s hydro-cannons, Galapagus\' wind vortexes, P\'andor\'s nuclear radiation, Andreas\' seismic drills, and Ra\'ad\'s electricity.'
      }
    ],
    seriesAppearances: [
      {
        seriesId: 'series-03',
        seriesSlug: 'ben-10-ultimate-alien',
        seriesName: 'Ben 10: Ultimate Alien',
        versionName: 'Ultimate Alien Season 1 Main Antagonist',
        description: 'Central threat seeking the pieces of the Map of Infinity across the cosmos.',
        firstAppearanceEpisode: 'S01E05 - "Escape from Aggregor"',
        isSignatureAlien: false
      }
    ],
    forms: [],
    relationships: [],
    factSources: [
      {
        id: 'fs-ag-01',
        entityType: 'character',
        entityId: 'char-aggregor',
        factKey: 'andromeda_absorption',
        sourceTitle: 'Ultimate Alien S01E10 "Fused"',
        sourceUrl: 'https://en.wikipedia.org/wiki/Ben_10:_Ultimate_Alien',
        publisher: 'Cartoon Network',
        sourceType: 'tv_episode',
        supportingExcerpt: 'Aggregor successfully activates the machine on his ship, transforming into Ultimate Aggregor with all 5 Andromeda abilities.',
        confidence: 1.0,
        verifiedDate: '2010-06-18'
      }
    ],
    stats: {
      strength: 95,
      speed: 80,
      durability: 94,
      intelligence: 88,
      energyOutput: 96,
      versatility: 95
    },
    createdAt: '2026-10-23T00:00:00Z',
    updatedAt: '2026-10-23T00:00:00Z'
  }
];

export const MOCK_RESEARCH_JOBS: ResearchJob[] = [
  {
    id: 'job-01',
    entityName: 'Cannonbolt',
    seriesSlug: 'ben-10-2005',
    status: 'approved',
    attempts: 1,
    factsFound: 6,
    imagesFound: 4,
    confidenceAverage: 0.98,
    startedAt: '2026-10-22T22:30:00Z',
    finishedAt: '2026-10-22T22:31:12Z',
    findings: {
      suggestedRole: 'alien',
      suggestedSpecies: 'Arburian Pelarota',
      homeworld: 'Arburia (Destroyed by Great One)',
      powers: ['Sphere Invulnerability', 'Kinetic Ricochet', 'High Speed Rolling'],
      weaknesses: ['Top-Heavy Stumble', 'Cannot Grip When Rolling'],
      sourceCount: 3
    }
  },
  {
    id: 'job-02',
    entityName: 'Vilgax',
    seriesSlug: 'ben-10-2005',
    status: 'approved',
    attempts: 1,
    factsFound: 9,
    imagesFound: 3,
    confidenceAverage: 1.00,
    startedAt: '2026-10-23T00:45:00Z',
    findings: {
      suggestedRole: 'villain',
      suggestedSpecies: 'Chimera Sui Generis',
      homeworld: 'Vilgaxia',
      powers: ['Cybernetic Implants', 'Ruby Ray of Ulo', 'Shield of Ziegel'],
      weaknesses: ['Extreme Arrogance', 'Vulnerable to Energy Inversion'],
      sourceCount: 5
    }
  }
];

export const MOCK_CONTENT_REVISIONS: ContentRevision[] = [
  {
    id: 'rev-01',
    entityType: 'character',
    entityId: 'char-heatblast',
    entityName: 'Heatblast',
    changeType: 'published',
    changedBy: 'Curator Admin (Omnitrix Council)',
    timestamp: '2026-10-23T01:50:00Z',
    details: 'Verified pilot episode citations and validated image rights under Fair Use Editorial.'
  }
];

// Helper query functions
export function getAllCharacters(): Character[] {
  return CANONICAL_CHARACTERS;
}

export function getCharacterBySlug(slug: string): Character | undefined {
  return CANONICAL_CHARACTERS.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getCharactersBySeries(seriesSlug: string): Character[] {
  return CANONICAL_CHARACTERS.filter(c => 
    c.seriesAppearances.some(app => app.seriesSlug === seriesSlug)
  );
}

export function getCharactersByRole(role: string): Character[] {
  return CANONICAL_CHARACTERS.filter(c => c.role === role);
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return CANONICAL_SERIES.find(s => s.slug === slug);
}
