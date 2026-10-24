// ============================================================================
// BEN 10 CHARACTER UNIVERSE - CANONICAL DATA STORE
// Strictly includes: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
// Real cartoon renders and broadcast assets from Cartoon Network / Fandom archive
// ============================================================================

import { Series, Species, Character, ResearchJob, ContentRevision } from '@/types';

export const CANONICAL_SERIES: Series[] = [
  {
    "id": "series-01",
    "name": "Ben 10 (2005)",
    "slug": "ben-10-2005",
    "continuity": "Prime Timeline",
    "releaseYear": 2005,
    "tagline": "The Summer Vacation That Changed the Galaxy",
    "description": "During a cross-country summer road trip with his cousin Gwen and grandfather Max, 10-year-old Ben Tennyson discovers the mysterious alien watch known as the Omnitrix. The pod clamped onto his wrist grants him the DNA transformations of 10 distinct alien species, kicking off a series of battles against interstellar threats and mutant villains.",
    "bannerUrl": "/images/series/ben-10-2005.png",
    "characterCount": 26
  },
  {
    "id": "series-02",
    "name": "Ben 10: Alien Force",
    "slug": "ben-10-alien-force",
    "continuity": "Prime Timeline",
    "releaseYear": 2008,
    "tagline": "Five Years Later. New Threats. Greater Responsibility.",
    "description": "Five years after removing the Omnitrix, 15-year-old Ben must put it back on when Grandpa Max mysteriously disappears while investigating a subterranean invasion. Joined by Gwen and former rival Kevin Levin, Ben unlocks a recalibrated playlist of ten new alien forms to stop the xenophobic Highbreed and their DNAlien minions.",
    "bannerUrl": "/images/series/ben-10-alien-force.png",
    "characterCount": 18
  },
  {
    "id": "series-03",
    "name": "Ben 10: Ultimate Alien",
    "slug": "ben-10-ultimate-alien",
    "continuity": "Prime Timeline",
    "releaseYear": 2010,
    "tagline": "Identity Revealed. Alien Power Evolved.",
    "description": "Following the dramatic self-destruction of the Omnitrix, 16-year-old Ben wields the Ultimatrix: a gauntlet engineered by Albedo and modified by Azmuth. Now an international celebrity after his secret identity is publicly leaked, Ben battles the ruthless Osmosian warlord Aggregor and ancient cosmic terrors using hyper-evolved \"Ultimate\" alien forms.",
    "bannerUrl": "/images/series/ben-10-ultimate-alien.png",
    "characterCount": 35
  }
];

export const CANONICAL_SPECIES: Species[] = [
  {
    "id": "sp-01",
    "name": "Pyronite",
    "homeworld": "Pyros",
    "description": "A magma-based species from the burning star-planet Pyros. Their outer crust of red-brown volcanic rock shelters pure solar plasma, enabling controlled pyrokinesis, thermal absorption, and self-levitation."
  },
  {
    "id": "sp-02",
    "name": "Petrosapien",
    "homeworld": "Petropia",
    "description": "Silicon-based crystalline humanoids whose diamond-hard bodies resist physical and energy harm, capable of projecting lethal razor-edged shards and reshaping crystalline terrain."
  },
  {
    "id": "sp-03",
    "name": "Kineceleran",
    "homeworld": "Kinet",
    "description": "Sleek bipedal raptors from the turbulent planet Kinet. Born on roller-like spheres on their feet, they manipulate friction to achieve hyper-acceleration up to 500 mph."
  },
  {
    "id": "sp-04",
    "name": "Tetramand",
    "homeworld": "Khoros",
    "description": "Four-armed, red-skinned titans hailing from the arid wastelands of Khoros. Known for colossal upper-body strength, shockwave claps, and high kinetic tolerance."
  },
  {
    "id": "sp-05",
    "name": "Galvanic Mechamorph",
    "homeworld": "Galvan B",
    "description": "Synthetic organisms created accidentally by the Galvans. Composed of nanite fluid, they bond with and upgrade external technological systems beyond modern engineering limits."
  },
  {
    "id": "sp-06",
    "name": "Methanosian",
    "homeworld": "Methanos",
    "description": "Plant-methane humanoid beings possessing rapid cellular regeneration, root manipulation, and ignition nodes that fire pressurized combustible gases."
  },
  {
    "id": "sp-07",
    "name": "Vaxasaurian",
    "homeworld": "Terradino",
    "description": "Giant sauropod bipeds from the primeval planet Terradino. Capable of expanding their biological mass and skeletal density up to 60 feet tall for raw destructive power."
  },
  {
    "id": "sp-08",
    "name": "Necrofriggian",
    "homeworld": "Kilmamy",
    "description": "Moth-like phantom organisms from the sub-zero planet Kilmamy. They can drop their body density to drift through solid walls and radiate cryogenic freeze breath."
  },
  {
    "id": "sp-09",
    "name": "Sonorosian",
    "homeworld": "Sonorosia",
    "description": "Living sound waves contained inside flexible silicone containment suits. They harness amplified acoustic frequencies to shatter objects and can self-replicate indefinitely."
  },
  {
    "id": "sp-10",
    "name": "Celestialsapien",
    "homeworld": "Forge of Creation",
    "description": "God-like cosmic entities whose bodies contain the starfield of space. Capable of rewriting reality and time, but immobilized until dual conflicting personalities reach internal consensus."
  },
  {
    "id": "sp-11",
    "name": "Arburian Pelarota",
    "homeworld": "Arburia (Pre-destruction)",
    "description": "Armored, spherical mammals with heavy yellow back plates. They curl into a motorized sphere capable of bouncing, crushing debris, and deflecting laser fire."
  },
  {
    "id": "sp-12",
    "name": "Chimera Sui Generis",
    "homeworld": "Vilgaxia (formerly Murray)",
    "description": "Cephalopod-featured humanoids with reinforced cartilage, tremendous physical prowess, and profound resistance to harsh interstellar environments."
  },
  {
    "id": "sp-13",
    "name": "Osmosian",
    "homeworld": "Earth / Osmos V (Genetic Lineage)",
    "description": "Rare genetic strain capable of absorbing solid matter, energy currents, or foreign DNA matrices through skin contact to alter cellular composition."
  },
  {
    "id": "sp-14",
    "name": "Anodite Hybrid",
    "homeworld": "Earth / Anodyne",
    "description": "Beings with latent spark of Anodite ancestry capable of tapping directly into Mana: the underlying radiant life energy of the cosmos."
  },
  {
    "id": "sp-15",
    "name": "Vulpimancer",
    "homeworld": "Vulpin",
    "description": "Eyeless beast predators relying on supersonic thermographic quills and acute olfactory senses to track quarry in zero-visibility environments."
  },
  {
    "id": "sp-16",
    "name": "Galvan",
    "homeworld": "Galvan Prime",
    "description": "Diminutive, hyper-intelligent amphibians possessing an expansive cerebral cortex capable of reverse-engineering and designing complex interstellar technology."
  },
  {
    "id": "sp-17",
    "name": "Lepidopterran",
    "homeworld": "Lepidopterra",
    "description": "Insectoid organisms equipped with four wings for agile 360-degree flight and stalks capable of launching viscous, adhesive, and combustible chemical streams."
  },
  {
    "id": "sp-18",
    "name": "Piscciss Volann",
    "homeworld": "Piscciss",
    "description": "Deep-ocean apex aquatic predators featuring bioluminescent lures, dense scales, and colossal hinged jaws capable of biting through solid steel."
  },
  {
    "id": "sp-19",
    "name": "Ectonurite",
    "homeworld": "Anur Phaetos",
    "description": "Shadowy entities dwelling in the perpetual twilight of the Anur System. Capable of matter intangibility, flight, invisibility, and mental possession."
  },
  {
    "id": "sp-20",
    "name": "Florauna",
    "homeworld": "Flors Verdance",
    "description": "Sentient floral organisms composed of interconnected vines, thorn appendages, and regenerative root networks that fire explosive plant seeds."
  },
  {
    "id": "sp-21",
    "name": "Loboan",
    "homeworld": "Luna Lobo",
    "description": "Canine biped predators of the Anur System wielding quadrupedal sprint speeds and four-part hinged jaws that produce ultrasonic concussive soundwaves."
  },
  {
    "id": "sp-22",
    "name": "Thep Khufan",
    "homeworld": "Anur Khufos",
    "description": "Mummified, bandage-like entities composed of high-tensile wraps resistant to radioactive Corrodium and capable of reshaping their bodies at will."
  },
  {
    "id": "sp-23",
    "name": "Transylian",
    "homeworld": "Anur Transyl",
    "description": "Cybernetic, biomechanical juggernauts equipped with back-mounted electromagnetic conductor pylons channeling massive currents of electricity."
  },
  {
    "id": "sp-24",
    "name": "Gourmand (Perk)",
    "homeworld": "Peptos XI",
    "description": "Green-skinned reptilian Gourmands whose pocket-dimension stomachs can ingest any non-organic substance and spit it out as explosive plasma."
  },
  {
    "id": "sp-25",
    "name": "Gourmand (Murk)",
    "homeworld": "Peptos XI",
    "description": "Dark-skinned, spotted subspecies of the Gourmand race sharing the same omnivorous ingestion powers with slightly denser physical hide."
  },
  {
    "id": "sp-26",
    "name": "Splixson",
    "homeworld": "Hathor",
    "description": "Sprightly humanoid organisms capable of autonomous mitosis duplication, creating independent duplicates that share physical sensory links."
  },
  {
    "id": "sp-27",
    "name": "Opticoid",
    "homeworld": "Sightra",
    "description": "Torso-studded humanoid organisms with 360-degree sensory awareness, capable of channeling energy bursts from multiple ocular nodes into unified elemental blasts."
  },
  {
    "id": "sp-28",
    "name": "To'kustar",
    "homeworld": "Cosmic Storms",
    "description": "Ancient titans standing over a hundred feet tall, gestated inside unpredictable deep-space cosmic storms, wielding sheer planetary brawn and cosmic ray projection."
  },
  {
    "id": "sp-29",
    "name": "Spheroid",
    "homeworld": "Scalpasc",
    "description": "Puffer-bipedal organisms with high-volume internal bladder sacks, capable of pressurizing and spewing continuous streams of corrosive acidic slime."
  },
  {
    "id": "sp-30",
    "name": "Nosedeenian",
    "homeworld": "Nosideen",
    "description": "Miniature beings of living electrical current capable of traveling across power conduits, generating high-voltage discharge, and duplicating on overload."
  },
  {
    "id": "sp-31",
    "name": "Polar Manzardill",
    "homeworld": "X'Nelli",
    "description": "Cold-adapted reptiles capable of exhaling sub-zero vapor clouds that instantly freeze lava, armor, and surrounding moisture into crystalline ice."
  },
  {
    "id": "sp-32",
    "name": "Aerophibian",
    "homeworld": "Aeropela",
    "description": "Air-and-sea manta bipeds engineered for supersonic aerodynamic flight and deep interstellar travel, firing concentrated neuroshock beams."
  },
  {
    "id": "sp-33",
    "name": "Crystalsapien",
    "homeworld": "Petropia",
    "description": "Legendary silicate guardians possessing an internal crystalline matrix that absorbs ambient electromagnetic radiation and releases it as ultraviolet laser bursts."
  },
  {
    "id": "sp-34",
    "name": "Cerebrocrustacean",
    "homeworld": "Encephalonus IV",
    "description": "Hyper-cerebral decapod crustaceans wielding high-level deductive logic and generating neuro-electric energy forcefields from their cranial plates."
  },
  {
    "id": "sp-35",
    "name": "Arachnichimp",
    "homeworld": "Aranhaschimmia",
    "description": "Four-armed primate acrobats equipped with adhesive pads and high-tensile web-spinning tail glands capable of ensnaring heavy adversaries."
  },
  {
    "id": "sp-36",
    "name": "Polymorph",
    "homeworld": "Viscosia",
    "description": "Shapeless, indestructible fluid entities controlled by an anti-gravity hovering projector, altering their molecular density from lubricant to corrosive acid."
  },
  {
    "id": "sp-37",
    "name": "Biosovortian",
    "homeworld": "Attracta",
    "description": "Organisms with floating magnetic components capable of manipulating ferromagnetic metals, creating magnetic pulses, and drawing severed body parts together."
  },
  {
    "id": "sp-38",
    "name": "Appoplexian",
    "homeworld": "Appoplexia",
    "description": "Feline gladiators boasting immense muscular density, retractable bone wrist claws, and an instinctual compulsion to confront any challenge physically."
  },
  {
    "id": "sp-39",
    "name": "Nanochip Hybrid",
    "homeworld": "Hive World / Earth",
    "description": "A cybernetic fusion of microscopic alien nanochips and human DNA, allowing extreme micro-scale shrinking, winged agility, and bio-electric laser darts."
  },
  {
    "id": "sp-40",
    "name": "Orishan",
    "homeworld": "Kiuana (Andromeda Galaxy)",
    "description": "Armored molluscoid humanoids from the Andromeda Galaxy with internal water turbines, projecting pressurized moisture jets from palm nozzles."
  },
  {
    "id": "sp-41",
    "name": "Geochelone Aerio",
    "homeworld": "Aldabra (Andromeda Galaxy)",
    "description": "Ponderous chelonian intellectuals capable of rotating their flipper limbs to produce category-5 gale force winds, naturally immune to mana manipulation."
  },
  {
    "id": "sp-42",
    "name": "Prypiatosian-B",
    "homeworld": "Prypiatos (Andromeda Galaxy)",
    "description": "Pure radioactive beings sealed inside thick lead-lined containment armor, capable of radiating searing nuclear thermal heat that melts through solid stone."
  },
  {
    "id": "sp-43",
    "name": "Amperi",
    "homeworld": "Tesslos (Andromeda Galaxy)",
    "description": "Translucent aquatic-aerial organisms composed of nervous system energy, sensing electric impulses to read thoughts and traveling through electrical circuits."
  },
  {
    "id": "sp-44",
    "name": "Talpaedan",
    "homeworld": "Terraexcava (Andromeda Galaxy)",
    "description": "Mechanical-exoskeleton armadillo humanoids equipped with pneumatic piston jackhammer forearms designed for rapid excavation and seismic shockwaves."
  },
  {
    "id": "sp-45",
    "name": "Merlinisapien",
    "homeworld": "Unknown",
    "description": "Chameleon reptiles with full cellular chromatophore mimicry, rendering them invisible to the naked eye while attacking with barbed tail stingers."
  },
  {
    "id": "sp-46",
    "name": "Citrakayah",
    "homeworld": "Chalybeas",
    "description": "Streamlined feline sprinters possessing dense shock-absorbing muscle tissue that permits sustained sprint speeds exceeding 400 miles per hour."
  },
  {
    "id": "sp-47",
    "name": "Chronosapien",
    "homeworld": "Unknown (Temporal Dimension)",
    "description": "Biomechanical clockwork entities containing chronological gear matrices, able to slow time, accelerate local entropy, and project temporal beams."
  },
  {
    "id": "sp-48",
    "name": "Oryctini",
    "homeworld": "Coleop Terra",
    "description": "Heavily-armored beetle bipeds equipped with high-tensile jaws that devour raw metal and minerals, converting them into focused laser charges launched from a forehead horn."
  }
];

export const CANONICAL_CHARACTERS: Character[] = [
  {
    "id": "char-heatblast",
    "name": "Heatblast",
    "slug": "heatblast",
    "aliases": [
      "Pyronite Transformation",
      "The Living Torch",
      "First Alien"
    ],
    "speciesId": "sp-01",
    "speciesName": "Pyronite",
    "homeworld": "Pyros",
    "summary": "Heatblast is the very first alien transformation Ben Tennyson unlocked from the Omnitrix in the 2005 pilot episode. A magma-based Pyronite, Heatblast commands intense fire projection, thermal absorption, and volcanic flight.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-heatblast-01",
      "characterId": "char-heatblast",
      "imageUrl": "/images/characters/heatblast.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Heatblast",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Heatblast official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-heatblast-02",
        "characterId": "char-heatblast",
        "imageUrl": "/images/characters/heatblast.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Heatblast",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Heatblast alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-heatblast-1",
        "characterId": "char-heatblast",
        "type": "power",
        "name": "Pyrokinesis & Plasma Generation",
        "description": "Projects sustained streams of fire, fireballs, and localized heat bursts capable of melting solid steel."
      },
      {
        "id": "ab-heatblast-2",
        "characterId": "char-heatblast",
        "type": "power",
        "name": "Fire Surfing / Propulsion Flight",
        "description": "Levitates chunks of rock or solid magma and shoots continuous fire thrusts beneath them to travel through the air."
      },
      {
        "id": "ab-heatblast-3",
        "characterId": "char-heatblast",
        "type": "power",
        "name": "Thermal & Flame Absorption",
        "description": "Can absorb ambient fire back into his body to instantly extinguish uncontrolled blazes."
      },
      {
        "id": "ab-heatblast-4",
        "characterId": "char-heatblast",
        "type": "weakness",
        "name": "Water Extinguishment Shock",
        "description": "Sudden submersion in large volumes of cold water or fire suppressant foam extinguishes his outer crust.",
        "limitations": "Can reignite if sufficient internal thermal energy remains."
      },
      {
        "id": "ab-heatblast-5",
        "characterId": "char-heatblast",
        "type": "limitation",
        "name": "Cold Illness Cryo-Inversion",
        "description": "When Ben contracts a human common cold virus, Heatblast's biological core inverts to produce sub-zero cryogenic ice flames."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "The first transformation selected when Ben found the Omnitrix. Omnitrix symbol is located centered on his upper chest.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked via Ultimatrix scanning code. Wears the metallic Ultimatrix emblem with a slightly updated fiery collar.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-heatblast-01",
        "entityType": "character",
        "entityId": "char-heatblast",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben accidentally activates the Omnitrix faceplate and transforms into a fire alien that causes a forest fire.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 70,
      "durability": 75,
      "intelligence": 55,
      "energyOutput": 95,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-wildmutt",
    "name": "Wildmutt",
    "slug": "wildmutt",
    "aliases": [
      "Vulpimancer Form",
      "The Blind Beast"
    ],
    "speciesId": "sp-15",
    "speciesName": "Vulpimancer",
    "homeworld": "Vulpin",
    "summary": "A blind, predatory quadruped Vulpimancer. Wildmutt lacks eyes and navigates entirely using 3D thermographic gill-ports on his neck and hyper-acute senses of smell and hearing, leaping across obstacles with beast-like agility.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-wildmutt-01",
      "characterId": "char-wildmutt",
      "imageUrl": "/images/characters/wildmutt.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Wildmutt",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Wildmutt official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-wildmutt-02",
        "characterId": "char-wildmutt",
        "imageUrl": "/images/characters/wildmutt.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Wildmutt",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Wildmutt alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-wildmutt-1",
        "characterId": "char-wildmutt",
        "type": "power",
        "name": "Thermographic Gill Radar",
        "description": "Perceives heat signatures and acoustic vibrations in complete 360-degree clarity, rendering optical illusions useless."
      },
      {
        "id": "ab-wildmutt-2",
        "characterId": "char-wildmutt",
        "type": "power",
        "name": "Acrobatic Quadrupedal Agility",
        "description": "Scales sheer cliff faces, leaps across building rooftops, and sprints on all fours at intense speed."
      },
      {
        "id": "ab-wildmutt-3",
        "characterId": "char-wildmutt",
        "type": "power",
        "name": "Razor Claws & Pincer Jaws",
        "description": "Armed with razor-sharp claws that dig into armored metal and teeth that shear through stone."
      },
      {
        "id": "ab-wildmutt-4",
        "characterId": "char-wildmutt",
        "type": "weakness",
        "name": "High-Pitch Acoustic Deafening",
        "description": "Overwhelming high-frequency sonic noises or foul odors overwhelm his sensitive sensing gills, blinding his spatial awareness."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "One of Ben's original 10 forms. The Omnitrix emblem is worn on a brace on his left shoulder.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked by 16-year-old Ben in Ultimate Alien, gaining an Ultimatrix chest emblem.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-wildmutt",
        "relatedCharacterName": "Ultimate Wildmutt",
        "relatedCharacterSlug": "ultimate-wildmutt",
        "formType": "ultimate",
        "notes": "Evolves into Ultimate Wildmutt via the Ultimatrix evolutionary function."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-wildmutt-01",
        "entityType": "character",
        "entityId": "char-wildmutt",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Wildmutt is Ben's second transformation, fighting Vilgax's robotic drones in the woods of Yosemite.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 72,
      "speed": 78,
      "durability": 70,
      "intelligence": 30,
      "energyOutput": 15,
      "versatility": 60
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-diamondhead",
    "name": "Diamondhead",
    "slug": "diamondhead",
    "aliases": [
      "Petrosapien Form",
      "Crystal Warrior"
    ],
    "speciesId": "sp-02",
    "speciesName": "Petrosapien",
    "homeworld": "Petropia",
    "summary": "A crystalline titan composed of near-indestructible organic green crystal. Diamondhead can refract energy blasts, morph his hands into blades or clubs, and erupt crystalline spikes from the ground.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-diamondhead-01",
      "characterId": "char-diamondhead",
      "imageUrl": "/images/characters/diamondhead.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Diamondhead",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Diamondhead official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-diamondhead-02",
        "characterId": "char-diamondhead",
        "imageUrl": "/images/characters/diamondhead.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Diamondhead",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Diamondhead alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-diamondhead-1",
        "characterId": "char-diamondhead",
        "type": "power",
        "name": "Crystalline Construct Reshaping",
        "description": "Morphs his crystal limbs into razor-sharp swords, axes, shields, and projects high-velocity crystal shards."
      },
      {
        "id": "ab-diamondhead-2",
        "characterId": "char-diamondhead",
        "type": "power",
        "name": "Energy Refraction & Redirection",
        "description": "His diamond-dense facets refract, reflect, and amplify incoming laser and energy attacks safely back at attackers."
      },
      {
        "id": "ab-diamondhead-3",
        "characterId": "char-diamondhead",
        "type": "power",
        "name": "Near-Invulnerable Hardness",
        "description": "Resists physical impacts, extreme kinetic trauma, and vacuum pressure without cracking."
      },
      {
        "id": "ab-diamondhead-4",
        "characterId": "char-diamondhead",
        "type": "weakness",
        "name": "Acoustic / Sonic Resonance Fracture",
        "description": "Intense high-frequency sound waves cause harmonic vibration across his molecular crystalline lattice, causing fractures."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Original form with white-and-black uniform and chest emblem.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Re-emerged from the shattered remains of Chromastone during the battle against Vilgax in Season 3.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Featured throughout Ultimate Alien with the Ultimatrix emblem on his chest.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-diamondhead-01",
        "entityType": "character",
        "entityId": "char-diamondhead",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Diamondhead defeated the giant Vilgax combat drone in the pilot episode by reflecting its own laser beam back at it.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 82,
      "speed": 60,
      "durability": 95,
      "intelligence": 60,
      "energyOutput": 75,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-xlr8",
    "name": "XLR8",
    "slug": "xlr8",
    "aliases": [
      "Kineceleran Form",
      "Speed Demon"
    ],
    "speciesId": "sp-03",
    "speciesName": "Kineceleran",
    "homeworld": "Kinet",
    "summary": "A hyper-accelerated raptor-like Kineceleran. Operating with wheeled spheres on his feet and a drop-down aerodynamic face shield, XLR8 easily surpasses 500 mph and can run on water and up vertical surfaces.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-xlr8-01",
      "characterId": "char-xlr8",
      "imageUrl": "/images/characters/xlr8.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/XLR8",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "XLR8 official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-xlr8-02",
        "characterId": "char-xlr8",
        "imageUrl": "/images/characters/xlr8.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/XLR8",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "XLR8 alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-xlr8-1",
        "characterId": "char-xlr8",
        "type": "power",
        "name": "Hyper-Acceleration & Friction Control",
        "description": "Runs at speeds exceeding 500 mph, manipulating friction to run across ocean waves and vertical skyscrapers."
      },
      {
        "id": "ab-xlr8-2",
        "characterId": "char-xlr8",
        "type": "power",
        "name": "Centrifugal Vortex Whirlwinds",
        "description": "Sprints in tight circles at supersonic speeds to generate powerful vortex whirlwinds that vacuum-lift enemies."
      },
      {
        "id": "ab-xlr8-3",
        "characterId": "char-xlr8",
        "type": "power",
        "name": "Scissor Blade Claws",
        "description": "Equipped with three razor-sharp dexterity claws on each hand that can cut through steel ropes while running."
      },
      {
        "id": "ab-xlr8-4",
        "characterId": "char-xlr8",
        "type": "weakness",
        "name": "Low Traction Surfaces",
        "description": "Friction-deprived environments such as ice, slick lubricants, or mud severely impede his wheeled feet."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Signature speedster alien of the original series.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked by Ben via Ultimatrix playlist in Ultimate Alien.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-xlr8-01",
        "entityType": "character",
        "entityId": "char-xlr8",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into XLR8 to take revenge on bullies Cash and J.T. and tie them to tree branches in seconds.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 50,
      "speed": 98,
      "durability": 55,
      "intelligence": 60,
      "energyOutput": 30,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-grey-matter",
    "name": "Grey Matter",
    "slug": "grey-matter",
    "aliases": [
      "Galvan Form",
      "Tiny Genius",
      "Greymatter"
    ],
    "speciesId": "sp-16",
    "speciesName": "Galvan",
    "homeworld": "Galvan Prime",
    "summary": "A 5-inch-tall Galvan endowed with colossal intellectual capacity. Grey Matter can calculate complex mathematical equations instantly, deduce technical schematics, and reconfigure machinery.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-grey-matter-01",
      "characterId": "char-grey-matter",
      "imageUrl": "/images/characters/greymatter.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Grey_Matter",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Grey Matter official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-grey-matter-02",
        "characterId": "char-grey-matter",
        "imageUrl": "/images/characters/greymatter.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Grey_Matter",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Grey Matter alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-grey-matter-1",
        "characterId": "char-grey-matter",
        "type": "power",
        "name": "Superhuman Polymath Intellect",
        "description": "Understands advanced alien physics, reverse-engineers technology, and manipulates pressure points with ease."
      },
      {
        "id": "ab-grey-matter-2",
        "characterId": "char-grey-matter",
        "type": "power",
        "name": "Wall Adhesion & Micro Agility",
        "description": "Possesses suction pads on fingers and toes to climb slick vertical glass and squeeze into tight conduits."
      },
      {
        "id": "ab-grey-matter-3",
        "characterId": "char-grey-matter",
        "type": "weakness",
        "name": "Extreme Physical Vulnerability",
        "description": "His miniature size and fragile skeletal structure leave him vulnerable to capture by normal animals or humans."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Ben's primary tactical problem-solving alien in the original series.",
        "firstAppearanceEpisode": "S01E02 - \"Washington B.C.\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Scanned and referenced in the Ultimatrix Galvan database.",
        "firstAppearanceEpisode": "S01E02 - \"Washington B.C.\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-grey-matter-01",
        "entityType": "character",
        "entityId": "char-grey-matter",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Washington B.C.\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transforms into Grey Matter to search inside a Golden Cereal box, accidentally uncovering Dr. Animo's secret lab.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 15,
      "speed": 40,
      "durability": 25,
      "intelligence": 100,
      "energyOutput": 20,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-fourarms",
    "name": "Four Arms",
    "slug": "four-arms",
    "aliases": [
      "Tetramand Form",
      "Red Brawler",
      "Fourarms"
    ],
    "speciesId": "sp-04",
    "speciesName": "Tetramand",
    "homeworld": "Khoros",
    "summary": "A colossal four-armed Tetramand warrior with armored crimson skin. Four Arms possesses astronomical upper-body lifting strength and can create sonic shockwaves by clapping all four hands together.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-four-arms-01",
      "characterId": "char-fourarms",
      "imageUrl": "/images/characters/fourarms.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Four_Arms",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Four Arms official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-four-arms-02",
        "characterId": "char-fourarms",
        "imageUrl": "/images/characters/fourarms.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Four_Arms",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Four Arms alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-four-arms-1",
        "characterId": "char-fourarms",
        "type": "power",
        "name": "Colossal Tetramand Strength",
        "description": "Lifts multi-ton boulders, armored vehicles, and giant alien monstrosities with his four reinforced arms."
      },
      {
        "id": "ab-four-arms-2",
        "characterId": "char-fourarms",
        "type": "power",
        "name": "Sonic Shockwave Clap",
        "description": "Claps his four hands together to generate a destructive concussive shockwave that shatters glass and deflects projectiles."
      },
      {
        "id": "ab-four-arms-3",
        "characterId": "char-fourarms",
        "type": "power",
        "name": "Massive Leaping Stature",
        "description": "His dense leg musculature allows him to leap several city blocks in a single bound."
      },
      {
        "id": "ab-four-arms-4",
        "characterId": "char-fourarms",
        "type": "weakness",
        "name": "Bulky Frame & Cramped Corridors",
        "description": "His enormous 12-foot frame makes him easy to hit in open fire and struggle in narrow human spaces."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Ben's absolute favorite brute-force brawler throughout the original series.",
        "firstAppearanceEpisode": "S01E02 - \"Washington B.C.\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked in Ultimate Alien with golden arm bracelets and the Ultimatrix chest emblem.",
        "firstAppearanceEpisode": "S01E02 - \"Washington B.C.\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-four-arms-01",
        "entityType": "character",
        "entityId": "char-fourarms",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Washington B.C.\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Four Arms defeated Dr. Animo's mutant mammoth inside the Museum of Natural History.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 95,
      "speed": 55,
      "durability": 90,
      "intelligence": 45,
      "energyOutput": 25,
      "versatility": 70
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-stinkfly",
    "name": "Stinkfly",
    "slug": "stinkfly",
    "aliases": [
      "Lepidopterran Form",
      "The Slime Bug"
    ],
    "speciesId": "sp-17",
    "speciesName": "Lepidopterran",
    "homeworld": "Lepidopterra",
    "summary": "An aerial insectoid Lepidopterran with four eye stalks, four translucent wings, and an armored stinger tail. Stinkfly projects foul, flammable, or adhesive chemical slime streams from his mouth and eyes.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-stinkfly-01",
      "characterId": "char-stinkfly",
      "imageUrl": "/images/characters/stinkfly.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Stinkfly",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Stinkfly official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-stinkfly-02",
        "characterId": "char-stinkfly",
        "imageUrl": "/images/characters/stinkfly.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Stinkfly",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Stinkfly alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-stinkfly-1",
        "characterId": "char-stinkfly",
        "type": "power",
        "name": "Agile Quad-Wing Flight",
        "description": "Hovering, backwards flight, and high-speed maneuvers with four independently controlled insectoid wings."
      },
      {
        "id": "ab-stinkfly-2",
        "characterId": "char-stinkfly",
        "type": "power",
        "name": "Chemical Slime Jet Streams",
        "description": "Fires high-pressure streams of foul-smelling slime that can be adhesive, flammable, or fire-extinguishing."
      },
      {
        "id": "ab-stinkfly-3",
        "characterId": "char-stinkfly",
        "type": "power",
        "name": "360-Degree Eye Stalk Vision",
        "description": "Four pedunculated eye stalks provide full panoramic vision to prevent flanking."
      },
      {
        "id": "ab-stinkfly-4",
        "characterId": "char-stinkfly",
        "type": "weakness",
        "name": "Wing Saturation Immobility",
        "description": "Submerging his delicate wings in water or coating them in heavy sludge prevents flight until thoroughly dried."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Ben's go-to aerial flight alien in the 2005 series.",
        "firstAppearanceEpisode": "S01E02 - \"Washington B.C.\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked in Ultimate Alien with the Ultimatrix badge on his chest.",
        "firstAppearanceEpisode": "S01E02 - \"Washington B.C.\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-stinkfly-01",
        "entityType": "character",
        "entityId": "char-stinkfly",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Washington B.C.\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Stinkfly to rescue Gwen and an elevator car suspended high in the air.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 60,
      "speed": 80,
      "durability": 50,
      "intelligence": 55,
      "energyOutput": 65,
      "versatility": 75
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ripjaws",
    "name": "Ripjaws",
    "slug": "ripjaws",
    "aliases": [
      "Piscciss Volann Form",
      "Deep Sea Terror"
    ],
    "speciesId": "sp-18",
    "speciesName": "Piscciss Volann",
    "homeworld": "Piscciss",
    "summary": "An amphibious Piscciss Volann equipped with a bioluminescent head lure, razor claws, and monstrous steel-crushing hinged jaws. He morphs his legs into a single powerful fin tail for deep underwater swimming.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-ripjaws-01",
      "characterId": "char-ripjaws",
      "imageUrl": "/images/characters/ripjaws.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ripjaws",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ripjaws official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ripjaws-02",
        "characterId": "char-ripjaws",
        "imageUrl": "/images/characters/ripjaws.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ripjaws",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ripjaws alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ripjaws-1",
        "characterId": "char-ripjaws",
        "type": "power",
        "name": "Steel-Crushing Hinged Jaws",
        "description": "His jaws expand to clamp through solid submarine hulls, steel grates, and heavy armored shells."
      },
      {
        "id": "ab-ripjaws-2",
        "characterId": "char-ripjaws",
        "type": "power",
        "name": "Aquatic Fin Tail Morphing",
        "description": "Fuses his bipedal legs into a large fish tail for hyper-accelerated aquatic navigation and deep-ocean diving."
      },
      {
        "id": "ab-ripjaws-3",
        "characterId": "char-ripjaws",
        "type": "power",
        "name": "Bioluminescent Esca Lure",
        "description": "Projects bright light from his forehead lure to illuminate pitch-black oceanic depths or blind underwater foes."
      },
      {
        "id": "ab-ripjaws-4",
        "characterId": "char-ripjaws",
        "type": "weakness",
        "name": "Rapid Terrestrial Dehydration",
        "description": "Suffers severe respiratory suffocation and cellular weakness when deprived of water for more than a few minutes."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Ben's dedicated aquatic combat alien in the original series.",
        "firstAppearanceEpisode": "S01E03 - \"The Krakken\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Appeared in Ultimate Alien with a redesigned catfish-style angler appearance.",
        "firstAppearanceEpisode": "S01E03 - \"The Krakken\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ripjaws-01",
        "entityType": "character",
        "entityId": "char-ripjaws",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E03 - \"The Krakken\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ripjaws dove into Lake Verida to battle Jonah Melville and reclaim the Krakken eggs.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 75,
      "speed": 85,
      "durability": 65,
      "intelligence": 50,
      "energyOutput": 20,
      "versatility": 55
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-upgrade",
    "name": "Upgrade",
    "slug": "upgrade",
    "aliases": [
      "Galvanic Mechamorph Form",
      "Techno-Morph"
    ],
    "speciesId": "sp-05",
    "speciesName": "Galvanic Mechamorph",
    "homeworld": "Galvan B",
    "summary": "A Galvanic Mechamorph made of liquid nanite circuitry. Upgrade can meld with any electronic or mechanical technology to enhance and weaponize it far beyond its original factory limits.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-upgrade-01",
      "characterId": "char-upgrade",
      "imageUrl": "/images/characters/upgrade.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Upgrade",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Upgrade official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-upgrade-02",
        "characterId": "char-upgrade",
        "imageUrl": "/images/characters/upgrade.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Upgrade",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Upgrade alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-upgrade-1",
        "characterId": "char-upgrade",
        "type": "power",
        "name": "Technological Possession & Augmentation",
        "description": "Merges with vehicles, weapons, and computer systems, upgrading their horsepower, durability, and firepower."
      },
      {
        "id": "ab-upgrade-2",
        "characterId": "char-upgrade",
        "type": "power",
        "name": "Liquid Nanite Body Elasticity",
        "description": "Molds his malleable metallic body to avoid attacks, stretch limbs, and flow through tight ventilation grates."
      },
      {
        "id": "ab-upgrade-3",
        "characterId": "char-upgrade",
        "type": "power",
        "name": "Optic Plasma Laser Beam",
        "description": "Emits a concentrated optic energy laser from his circular eye node to incinerate targets."
      },
      {
        "id": "ab-upgrade-4",
        "characterId": "char-upgrade",
        "type": "weakness",
        "name": "Electromagnetic Pulse (EMP) & Acid",
        "description": "High-yield EMP blasts disrupt his nanite cohesion, and strong acids dissolve his liquid metallic matrix."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "One of Ben's most creative original 10 forms with the Omnitrix centered on his chest.",
        "firstAppearanceEpisode": "S01E04 - \"Permanent Retirement\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Referenced and accessed in canonical crossovers with Generator Rex: Heroes United.",
        "firstAppearanceEpisode": "S01E04 - \"Permanent Retirement\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-upgrade-01",
        "entityType": "character",
        "entityId": "char-upgrade",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E04 - \"Permanent Retirement\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Upgrade merges with a baseball pitching machine at Aunt Vera's retirement community to defeat the disguised Limax aliens.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 70,
      "durability": 75,
      "intelligence": 80,
      "energyOutput": 82,
      "versatility": 95
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ghostfreak",
    "name": "Ghostfreak",
    "slug": "ghostfreak",
    "aliases": [
      "Ectonurite Form",
      "Shadow Wraith",
      "Zs'Skayr"
    ],
    "speciesId": "sp-19",
    "speciesName": "Ectonurite",
    "homeworld": "Anur Phaetos",
    "summary": "An eerie Ectonurite capable of matter intangibility, invisibility, and body possession. Behind his protective outer protective shroud lies a horrifying tentacled core containing the dormant consciousness of Zs'Skayr.",
    "role": "alien",
    "status": "published",
    "playlist": "original_10",
    "primaryImage": {
      "id": "img-ghostfreak-01",
      "characterId": "char-ghostfreak",
      "imageUrl": "/images/characters/ghostfreak.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ghostfreak",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ghostfreak official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ghostfreak-02",
        "characterId": "char-ghostfreak",
        "imageUrl": "/images/characters/ghostfreak.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ghostfreak",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ghostfreak alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ghostfreak-1",
        "characterId": "char-ghostfreak",
        "type": "power",
        "name": "Matter Intangibility & Phasing",
        "description": "Phases seamlessly through solid matter, forcefields, and enemy attacks at will."
      },
      {
        "id": "ab-ghostfreak-2",
        "characterId": "char-ghostfreak",
        "type": "power",
        "name": "Complete Optical Invisibility",
        "description": "Renders his entire physical and spectral form completely invisible to both eyes and radar."
      },
      {
        "id": "ab-ghostfreak-3",
        "characterId": "char-ghostfreak",
        "type": "power",
        "name": "Entity Body Possession",
        "description": "Enters the physical forms of sentient beings to control their speech and neuromuscular actions."
      },
      {
        "id": "ab-ghostfreak-4",
        "characterId": "char-ghostfreak",
        "type": "weakness",
        "name": "Sunlight Vulnerability (Without Shroud)",
        "description": "Direct unfiltered ultraviolet solar radiation incinerates his true inner Ectonurite flesh without his protective outer shroud."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Original series form until Zs'Skayr became conscious and escaped the Omnitrix in Season 2.",
        "firstAppearanceEpisode": "S01E04 - \"Permanent Retirement\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-acquired and safely controlled in Ultimate Alien under the Ultimatrix interface.",
        "firstAppearanceEpisode": "S01E04 - \"Permanent Retirement\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ghostfreak-01",
        "entityType": "character",
        "entityId": "char-ghostfreak",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E04 - \"Permanent Retirement\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ghostfreak phased through the wall to sneak away and play video games, frightening Aunt Vera.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 60,
      "speed": 75,
      "durability": 60,
      "intelligence": 75,
      "energyOutput": 80,
      "versatility": 90
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-cannonbolt",
    "name": "Cannonbolt",
    "slug": "cannonbolt",
    "aliases": [
      "Arburian Pelarota Form",
      "The Wrecking Ball"
    ],
    "speciesId": "sp-11",
    "speciesName": "Arburian Pelarota",
    "homeworld": "Arburia (Pre-destruction)",
    "summary": "An armored mammalian Arburian Pelarota. Cannonbolt curls into a motorized sphere, bouncing and ricocheting off surfaces with devastating kinetic impact while deflecting lasers and explosives with ease.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-cannonbolt-01",
      "characterId": "char-cannonbolt",
      "imageUrl": "/images/characters/cannonbolt.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Cannonbolt",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Cannonbolt official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-cannonbolt-02",
        "characterId": "char-cannonbolt",
        "imageUrl": "/images/characters/cannonbolt.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Cannonbolt",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Cannonbolt alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-cannonbolt-1",
        "characterId": "char-cannonbolt",
        "type": "power",
        "name": "Kinetic Ricochet Rolling",
        "description": "Curls into a motorized armored sphere that rolls and bounces at high speed, pulverizing obstacles."
      },
      {
        "id": "ab-cannonbolt-2",
        "characterId": "char-cannonbolt",
        "type": "power",
        "name": "Near-Invulnerable Carapace",
        "description": "His thick yellow plates withstand laser fire, atmospheric reentry heat, and colossal crushing pressure."
      },
      {
        "id": "ab-cannonbolt-3",
        "characterId": "char-cannonbolt",
        "type": "weakness",
        "name": "Top-Heavy Center of Gravity",
        "description": "When standing on two feet, Cannonbolt is clumsy and frequently loses balance if shoved."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "The first additional alien unlocked by Ben in Season 2.",
        "firstAppearanceEpisode": "S02E02 - \"The Big Tick\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Re-unlocked by the recalibrated Omnitrix in the War of the Worlds season 2 finale.",
        "firstAppearanceEpisode": "S02E02 - \"The Big Tick\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Frequently utilized by Ben with evolved Ultimate Cannonbolt capability.",
        "firstAppearanceEpisode": "S02E02 - \"The Big Tick\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-cannonbolt",
        "relatedCharacterName": "Ultimate Cannonbolt",
        "relatedCharacterSlug": "ultimate-cannonbolt",
        "formType": "ultimate",
        "notes": "Evolves into spiked metallic Ultimate Cannonbolt via Ultimatrix."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-cannonbolt-01",
        "entityType": "character",
        "entityId": "char-cannonbolt",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E02 - \"The Big Tick\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Cannonbolt was unlocked accidentally when Ben tried to transform to fight The Great One.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 85,
      "speed": 75,
      "durability": 95,
      "intelligence": 50,
      "energyOutput": 20,
      "versatility": 70
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-wildvine",
    "name": "Wildvine",
    "slug": "wildvine",
    "aliases": [
      "Florauna Form",
      "The Living Plant"
    ],
    "speciesId": "sp-20",
    "speciesName": "Florauna",
    "homeworld": "Flors Verdance",
    "summary": "A plant-based Florauna with five vine legs, a blue eye in his chest, and venus flytrap head petals. Wildvine can extend thorny vines across long distances, regenerate severed limbs, and throw explosive seed pods.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-wildvine-01",
      "characterId": "char-wildvine",
      "imageUrl": "/images/characters/wildvine.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Wildvine",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Wildvine official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-wildvine-02",
        "characterId": "char-wildvine",
        "imageUrl": "/images/characters/wildvine.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Wildvine",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Wildvine alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-wildvine-1",
        "characterId": "char-wildvine",
        "type": "power",
        "name": "Elastic Vine Appendages & Thorns",
        "description": "Extends vines hundreds of feet to lasso enemies, scale cliffs, and pierce armor with hardened thorns."
      },
      {
        "id": "ab-wildvine-2",
        "characterId": "char-wildvine",
        "type": "power",
        "name": "Explosive Seed Pods",
        "description": "Generates flammable, smoke, or sleep-inducing explosive seed pods from his back flap."
      },
      {
        "id": "ab-wildvine-3",
        "characterId": "char-wildvine",
        "type": "power",
        "name": "Plant Merging & Burrowing",
        "description": "Merges with surrounding vegetation and burrows silently through soil to emerge behind foes."
      },
      {
        "id": "ab-wildvine-4",
        "characterId": "char-wildvine",
        "type": "weakness",
        "name": "Extreme Heat & Chemical Defoliants",
        "description": "Intense fire and industrial weedkillers cause immediate wilting and inhibit cellular regeneration."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Unlocked in Season 2, playing a pivotal role against Mycelium and Kevin 11.",
        "firstAppearanceEpisode": "S02E07 - \"Camp Fear\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked in Ultimate Alien.",
        "firstAppearanceEpisode": "S02E07 - \"Camp Fear\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-wildvine-01",
        "entityType": "character",
        "entityId": "char-wildvine",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E07 - \"Camp Fear\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Wildvine unlocked during Ben's battle against the mutant spore alien fungi at Camp Sunny Days.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 68,
      "speed": 65,
      "durability": 72,
      "intelligence": 55,
      "energyOutput": 60,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-blitzwolfer",
    "name": "Blitzwolfer",
    "slug": "blitzwolfer",
    "aliases": [
      "Benwolf",
      "Loboan Transformation"
    ],
    "speciesId": "sp-21",
    "speciesName": "Loboan",
    "homeworld": "Luna Lobo",
    "summary": "An alien werewolf Loboan scanned in the New Mexico desert. Blitzwolfer possesses quadrupedal sprinting speed, night vision, and a four-part hinged jaw that splits open to fire concussive ultrasonic howls.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-blitzwolfer-01",
      "characterId": "char-blitzwolfer",
      "imageUrl": "/images/characters/blitzwolfer.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Blitzwolfer",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Blitzwolfer official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-blitzwolfer-02",
        "characterId": "char-blitzwolfer",
        "imageUrl": "/images/characters/blitzwolfer.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Blitzwolfer",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Blitzwolfer alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-blitzwolfer-1",
        "characterId": "char-blitzwolfer",
        "type": "power",
        "name": "Concussive Ultrasonic Howl",
        "description": "Splits his quadruplicate jaw to emit high-frequency sonic shockwaves capable of shattering stone and propelling him backwards."
      },
      {
        "id": "ab-blitzwolfer-2",
        "characterId": "char-blitzwolfer",
        "type": "power",
        "name": "Superhuman Loboan Agility",
        "description": "Sprints on all fours, leaps incredible heights, and strikes with razor-sharp claws."
      },
      {
        "id": "ab-blitzwolfer-3",
        "characterId": "char-blitzwolfer",
        "type": "power",
        "name": "Night Vision & Enhanced Senses",
        "description": "Sees in total pitch black and tracks quarry across miles through scent trails."
      },
      {
        "id": "ab-blitzwolfer-4",
        "characterId": "char-blitzwolfer",
        "type": "weakness",
        "name": "Auditory Feedback Vulnerability",
        "description": "Reflected sonic frequencies or sound dampeners can disorient his delicate auditory canals."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Introduced as Benwolf in Season 3 during the Anur arc.",
        "firstAppearanceEpisode": "S03E05 - \"Benwolf\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Officially renamed Blitzwolfer in canon UAF continuity.",
        "firstAppearanceEpisode": "S03E05 - \"Benwolf\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-blitzwolfer-01",
        "entityType": "character",
        "entityId": "char-blitzwolfer",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E05 - \"Benwolf\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben gained this DNA sample when the Yenaldooshi scratched the Omnitrix, putting it in capture mode.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 74,
      "speed": 82,
      "durability": 70,
      "intelligence": 60,
      "energyOutput": 78,
      "versatility": 72
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-snare-oh",
    "name": "Snare-oh",
    "slug": "snare-oh",
    "aliases": [
      "Benmummy",
      "Thep Khufan Form"
    ],
    "speciesId": "sp-22",
    "speciesName": "Thep Khufan",
    "homeworld": "Anur Khufos",
    "summary": "A mummy-like Thep Khufan composed of resilient bandage wraps and a golden pharaoh crest. Snare-oh can stretch, unravel, and shape his wraps into coils or nets, and is completely immune to toxic Corrodium radiation.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-snare-oh-01",
      "characterId": "char-snare-oh",
      "imageUrl": "/images/characters/snare_oh.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Snare-oh",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Snare-oh official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-snare-oh-02",
        "characterId": "char-snare-oh",
        "imageUrl": "/images/characters/snare_oh.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Snare-oh",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Snare-oh alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-snare-oh-1",
        "characterId": "char-snare-oh",
        "type": "power",
        "name": "Wrap Elasticity & Regeneration",
        "description": "Stretches his bandage wraps across large distances and instantly reforms if severed or crushed."
      },
      {
        "id": "ab-snare-oh-2",
        "characterId": "char-snare-oh",
        "type": "power",
        "name": "Ensnaring Binding Cages",
        "description": "Wraps enemies in mummy bandages, trapping them in high-tensile organic bonds."
      },
      {
        "id": "ab-snare-oh-3",
        "characterId": "char-snare-oh",
        "type": "power",
        "name": "Corrodium Radiation Immunity",
        "description": "Impervious to the mutagenic effects of alien Corrodium mineral crystals."
      },
      {
        "id": "ab-snare-oh-4",
        "characterId": "char-snare-oh",
        "type": "weakness",
        "name": "Tangle / Unraveling Vulnerability",
        "description": "Can get his wraps tangled in fast-moving machinery or incinerated by intense open flames."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Originally introduced as Benmummy during the Anur trilogy in Season 3.",
        "firstAppearanceEpisode": "S03E08 - \"Under Wraps\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Officially renamed Snare-oh in canon continuity.",
        "firstAppearanceEpisode": "S03E08 - \"Under Wraps\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-snare-oh-01",
        "entityType": "character",
        "entityId": "char-snare-oh",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E08 - \"Under Wraps\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben unlocked this transformation after fighting the mummy alien in a farm field.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 70,
      "speed": 68,
      "durability": 65,
      "intelligence": 65,
      "energyOutput": 50,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-frankenstrike",
    "name": "Frankenstrike",
    "slug": "frankenstrike",
    "aliases": [
      "Benvicktor",
      "Transylian Form"
    ],
    "speciesId": "sp-23",
    "speciesName": "Transylian",
    "homeworld": "Anur Transyl",
    "summary": "A massive cybernetic Transylian with twin electromagnetic conductor pylons on his back. Frankenstrike channels colossal currents of lightning, clamps onto magnetic surfaces, and overpowers opponents with immense brawn.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-frankenstrike-01",
      "characterId": "char-frankenstrike",
      "imageUrl": "/images/characters/frankenstrike.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Frankenstrike",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Frankenstrike official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-frankenstrike-02",
        "characterId": "char-frankenstrike",
        "imageUrl": "/images/characters/frankenstrike.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Frankenstrike",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Frankenstrike alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-frankenstrike-1",
        "characterId": "char-frankenstrike",
        "type": "power",
        "name": "Electromagnetic Lightning Projection",
        "description": "Channels gigawatts of bio-electricity through his conductor pylons to fire devastating lightning bolts."
      },
      {
        "id": "ab-frankenstrike-2",
        "characterId": "char-frankenstrike",
        "type": "power",
        "name": "Electromagnetic Surface Clamping",
        "description": "Magnetizes his feet and hands to walk along metal hulls in the vacuum of space."
      },
      {
        "id": "ab-frankenstrike-3",
        "characterId": "char-frankenstrike",
        "type": "power",
        "name": "Superhuman Transylian Brawn",
        "description": "Possesses physical strength nearly rivaling Four Arms, smashing through blast doors."
      },
      {
        "id": "ab-frankenstrike-4",
        "characterId": "char-frankenstrike",
        "type": "weakness",
        "name": "Heavy Mass Mobility Delay",
        "description": "His immense metallic frame makes him slower on foot and vulnerable to agility-based flanking."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Introduced as Benvicktor in the Season 3 space finale.",
        "firstAppearanceEpisode": "S03E11 - \"Be Afraid of the Dark\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Officially renamed Frankenstrike in UAF canon.",
        "firstAppearanceEpisode": "S03E11 - \"Be Afraid of the Dark\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-frankenstrike-01",
        "entityType": "character",
        "entityId": "char-frankenstrike",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E11 - \"Be Afraid of the Dark\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Frankenstrike on the space station to fight Dr. Vicktor and Zs'Skayr.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 90,
      "speed": 45,
      "durability": 88,
      "intelligence": 72,
      "energyOutput": 92,
      "versatility": 75
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-upchuck",
    "name": "Upchuck",
    "slug": "upchuck",
    "aliases": [
      "Perk Upchuck",
      "Gourmand Transformation"
    ],
    "speciesId": "sp-24",
    "speciesName": "Gourmand (Perk)",
    "homeworld": "Peptos XI",
    "summary": "A small green reptilian Perk Gourmand equipped with four prehensile sticky tongues and a stomach connected to a pocket dimension. Upchuck can devour any inorganic substance and spit it out as explosive green plasma.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-upchuck-01",
      "characterId": "char-upchuck",
      "imageUrl": "/images/characters/upchuck_perk.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Upchuck",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Upchuck official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-upchuck-02",
        "characterId": "char-upchuck",
        "imageUrl": "/images/characters/upchuck_perk.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Upchuck",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Upchuck alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-upchuck-1",
        "characterId": "char-upchuck",
        "type": "power",
        "name": "Pocket Dimension Omnivorous Digestion",
        "description": "Ingests lasers, rockets, concrete, and metal into a pocket dimension stomach without gaining weight."
      },
      {
        "id": "ab-upchuck-2",
        "characterId": "char-upchuck",
        "type": "power",
        "name": "Explosive Plasma Spit",
        "description": "Expels digested matter as concentrated emerald plasma orbs that detonate with massive concussive force."
      },
      {
        "id": "ab-upchuck-3",
        "characterId": "char-upchuck",
        "type": "power",
        "name": "Four Adhesive Prehensile Tongues",
        "description": "Shoots four elastic tongues to grapple objects and drag heavy debris directly into his jaws."
      },
      {
        "id": "ab-upchuck-4",
        "characterId": "char-upchuck",
        "type": "weakness",
        "name": "Cannot Digest Organic Earth Food",
        "description": "Standard human food tastes foul and provides zero explosive energy ammunition."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Unlocked in Season 3 by Xylene.",
        "firstAppearanceEpisode": "S03E12 - \"The Visitor\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Featured in Alien Force Season 3 finale.",
        "firstAppearanceEpisode": "S03E12 - \"The Visitor\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Appeared in Ultimate Alien where the distinction between Perk and Murk species was explored.",
        "firstAppearanceEpisode": "S03E12 - \"The Visitor\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-upchuck-01",
        "entityType": "character",
        "entityId": "char-upchuck",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E12 - \"The Visitor\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Upchuck unlocked when Xylene pressed the Omnitrix faceplate to save Ben from Vilgax's mega drone.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 55,
      "speed": 60,
      "durability": 70,
      "intelligence": 60,
      "energyOutput": 90,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ditto",
    "name": "Ditto",
    "slug": "ditto",
    "aliases": [
      "Splixson Form",
      "The Multiplier"
    ],
    "speciesId": "sp-26",
    "speciesName": "Splixson",
    "homeworld": "Hathor",
    "summary": "A small, hyperactive Splixson capable of endless self-duplication. Ditto can split into dozens of identical clones that think and act independently, swarming enemies with synchronized coordination.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-ditto-01",
      "characterId": "char-ditto",
      "imageUrl": "/images/characters/ditto.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ditto",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ditto official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ditto-02",
        "characterId": "char-ditto",
        "imageUrl": "/images/characters/ditto.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ditto",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ditto alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ditto-1",
        "characterId": "char-ditto",
        "type": "power",
        "name": "Infinite Mitosis Self-Duplication",
        "description": "Splits his body into identical clones that operate independently without dividing physical strength."
      },
      {
        "id": "ab-ditto-2",
        "characterId": "char-ditto",
        "type": "power",
        "name": "Agile Acrobatic Swarming",
        "description": "Synchronized teamwork allows clones to distract, flank, and overwhelm larger opponents."
      },
      {
        "id": "ab-ditto-3",
        "characterId": "char-ditto",
        "type": "weakness",
        "name": "Shared Sensory / Pain Link",
        "description": "Pain or physical trauma inflicted on one clone is felt simultaneously across all active clones."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Unlocked in Season 4 of the original series.",
        "firstAppearanceEpisode": "S04E05 - \"Divided We Stand\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked by Ben in Ultimate Alien.",
        "firstAppearanceEpisode": "S04E05 - \"Divided We Stand\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ditto-01",
        "entityType": "character",
        "entityId": "char-ditto",
        "factKey": "canonical_introduction",
        "sourceTitle": "S04E05 - \"Divided We Stand\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Ditto while playing on the beach and discovered he could clone himself endlessly.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 45,
      "speed": 70,
      "durability": 45,
      "intelligence": 65,
      "energyOutput": 30,
      "versatility": 88
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-eye-guy",
    "name": "Eye Guy",
    "slug": "eye-guy",
    "aliases": [
      "Opticoid Form",
      "The All-Seeing Alien"
    ],
    "speciesId": "sp-27",
    "speciesName": "Opticoid",
    "homeworld": "Sightra",
    "summary": "A humanoid Opticoid covered in dozens of blinking green eyes across his torso, shoulders, and arms. Eye Guy can see in every direction simultaneously and fires varied elemental energy beams from each ocular node.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-eye-guy-01",
      "characterId": "char-eye-guy",
      "imageUrl": "/images/characters/eye_guy.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Eye_Guy",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Eye Guy official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-eye-guy-02",
        "characterId": "char-eye-guy",
        "imageUrl": "/images/characters/eye_guy.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Eye_Guy",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Eye Guy alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-eye-guy-1",
        "characterId": "char-eye-guy",
        "type": "power",
        "name": "360-Degree Panoramic Vision",
        "description": "Can observe enemies approaching from any angle with no blindspots."
      },
      {
        "id": "ab-eye-guy-2",
        "characterId": "char-eye-guy",
        "type": "power",
        "name": "Multi-Elemental Optic Lasers",
        "description": "Fires cryogenic freeze beams, searing fire blasts, and concussive electrical bolts from different eyes."
      },
      {
        "id": "ab-eye-guy-3",
        "characterId": "char-eye-guy",
        "type": "power",
        "name": "Chest Eye Ultimate Laser",
        "description": "Merges his smaller ocular nodes into one giant eye on his chest that fires a colossal energy beam."
      },
      {
        "id": "ab-eye-guy-4",
        "characterId": "char-eye-guy",
        "type": "weakness",
        "name": "Sensitive Ocular Irritants",
        "description": "Pepper spray, smoke, or bright flashes disorient multiple eyes simultaneously."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Introduced in Ben 10: Secret of the Omnitrix and Season 4.",
        "firstAppearanceEpisode": "S04E11 - \"Ben 10 vs. The Negative 10\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Re-unlocked in Ultimate Alien.",
        "firstAppearanceEpisode": "S04E11 - \"Ben 10 vs. The Negative 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-eye-guy-01",
        "entityType": "character",
        "entityId": "char-eye-guy",
        "factKey": "canonical_introduction",
        "sourceTitle": "S04E11 - \"Ben 10 vs. The Negative 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Eye Guy debuted in the Season 4 opener / movie prologue, firing freeze and heat lasers at Subliminal.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 70,
      "speed": 65,
      "durability": 68,
      "intelligence": 55,
      "energyOutput": 88,
      "versatility": 82
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-way-big",
    "name": "Way Big",
    "slug": "way-big",
    "aliases": [
      "To'kustar Form",
      "The Cosmic Giant"
    ],
    "speciesId": "sp-28",
    "speciesName": "To'kustar",
    "homeworld": "Cosmic Storms",
    "summary": "A towering To'kustar born from turbulent cosmic storms in deep space. Standing over 100 feet tall, Way Big wields god-like physical power, shrugs off planetary weaponry, and fires a devastating cosmic ray by crossing his arms.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-way-big-01",
      "characterId": "char-way-big",
      "imageUrl": "/images/characters/way_big.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Way_Big",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Way Big official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-way-big-02",
        "characterId": "char-way-big",
        "imageUrl": "/images/characters/way_big.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Way_Big",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Way Big alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-way-big-1",
        "characterId": "char-way-big",
        "type": "power",
        "name": "Colossal 100-Foot Titan Stature",
        "description": "Crushes armies, tosses giant battleships, and generates earthquake shockwaves with footsteps."
      },
      {
        "id": "ab-way-big-2",
        "characterId": "char-way-big",
        "type": "power",
        "name": "Cosmic Ray Crossed-Arm Beam",
        "description": "Crosses his right arm over his left wrist blade to fire a colossal beam of cosmic plasma."
      },
      {
        "id": "ab-way-big-3",
        "characterId": "char-way-big",
        "type": "power",
        "name": "Extreme Kinetic Invulnerability",
        "description": "Standard energy weapons, missiles, and orbital strikes bounce off his armored skin."
      },
      {
        "id": "ab-way-big-4",
        "characterId": "char-way-big",
        "type": "weakness",
        "name": "Head Fin Crest Vulnerability",
        "description": "His head crest fin is connected to sensitive nerve clusters; striking it causes immense disorientation."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "The ultimate trump card alien unlocked by Azmuth in Secret of the Omnitrix.",
        "firstAppearanceEpisode": "Secret of the Omnitrix (2007)",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Unlocked in the War of the Worlds finale, defeating the Highbreed warfleet.",
        "firstAppearanceEpisode": "Secret of the Omnitrix (2007)",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Frequently deployed against titan threats and evolved into Ultimate Way Big against Dagon.",
        "firstAppearanceEpisode": "Secret of the Omnitrix (2007)",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-way-big",
        "relatedCharacterName": "Ultimate Way Big",
        "relatedCharacterSlug": "ultimate-way-big",
        "formType": "ultimate",
        "notes": "Evolves into 250-foot tall Ultimate Way Big via the Ultimatrix."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-way-big-01",
        "entityType": "character",
        "entityId": "char-way-big",
        "factKey": "canonical_introduction",
        "sourceTitle": "Secret of the Omnitrix (2007)",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Azmuth unlocked Way Big to defeat Vilgax and hurl him into deep space at the climax of Secret of the Omnitrix.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 98,
      "speed": 60,
      "durability": 96,
      "intelligence": 55,
      "energyOutput": 95,
      "versatility": 75
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-spitter",
    "name": "Spitter",
    "slug": "spitter",
    "aliases": [
      "Spheroid Form",
      "Slime Spitter"
    ],
    "speciesId": "sp-29",
    "speciesName": "Spheroid",
    "homeworld": "Scalpasc",
    "summary": "A pufferfish-like bipedal Spheroid with four sharp facial tusks. Spitter inflates his internal torso reservoir to unleash pressurized torrents of concentrated, acidic, and conductive slime that wash away enemies.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-spitter-01",
      "characterId": "char-spitter",
      "imageUrl": "/images/characters/spitter.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Spitter",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Spitter official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-spitter-02",
        "characterId": "char-spitter",
        "imageUrl": "/images/characters/spitter.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Spitter",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Spitter alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-spitter-1",
        "characterId": "char-spitter",
        "type": "power",
        "name": "High-Pressure Acidic Slime Torrent",
        "description": "Spews gallons of concentrated acidic, slippery slime that knocks back heavy targets."
      },
      {
        "id": "ab-spitter-2",
        "characterId": "char-spitter",
        "type": "power",
        "name": "Electrical Conductivity Stream",
        "description": "His slime conducts high-voltage electricity, allowing allies to electrocute drenched foes."
      },
      {
        "id": "ab-spitter-3",
        "characterId": "char-spitter",
        "type": "power",
        "name": "Torso Reservoir Expansion",
        "description": "Inflates his body like a pufferfish to store fluid and cushion physical blows."
      },
      {
        "id": "ab-spitter-4",
        "characterId": "char-spitter",
        "type": "weakness",
        "name": "Deflated Physical Sluggishness",
        "description": "After expelling his reservoir, Spitter requires time to rebuild fluid pressure."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Introduced as a future Omnitrix unlock in \"Ben 10,000\".",
        "firstAppearanceEpisode": "S03E01 - \"Ben 10,000\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Part of Ben's active Omnitrix genetic database in canon continuity.",
        "firstAppearanceEpisode": "S03E01 - \"Ben 10,000\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-spitter-01",
        "entityType": "character",
        "entityId": "char-spitter",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E01 - \"Ben 10,000\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Spitter was first revealed when 30-year-old Ben 10,000 deployed him against future Dr. Animo.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 48,
      "durability": 70,
      "intelligence": 50,
      "energyOutput": 82,
      "versatility": 68
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-buzzshock",
    "name": "Buzzshock",
    "slug": "buzzshock",
    "aliases": [
      "Nosedeenian Form",
      "Megawhatt"
    ],
    "speciesId": "sp-30",
    "speciesName": "Nosedeenian",
    "homeworld": "Nosideen",
    "summary": "A battery-shaped Nosedeenian creature of pure living green electricity. Buzzshock travels through electrical wires, controls power grids, discharges high-voltage lightning, and duplicates when overwhelmed.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-buzzshock-01",
      "characterId": "char-buzzshock",
      "imageUrl": "/images/characters/buzzshock.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Buzzshock",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Buzzshock official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-buzzshock-02",
        "characterId": "char-buzzshock",
        "imageUrl": "/images/characters/buzzshock.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Buzzshock",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Buzzshock alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-buzzshock-1",
        "characterId": "char-buzzshock",
        "type": "power",
        "name": "Electrical Traveling & Conduit Phasing",
        "description": "Phases directly into electrical sockets and power lines to move at the speed of current."
      },
      {
        "id": "ab-buzzshock-2",
        "characterId": "char-buzzshock",
        "type": "power",
        "name": "High-Voltage Green Lightning",
        "description": "Discharges crackling green lightning bolts from his hands and battery head."
      },
      {
        "id": "ab-buzzshock-3",
        "characterId": "char-buzzshock",
        "type": "power",
        "name": "Overcharge Duplication",
        "description": "When cut in half or absorbing excess electricity, Buzzshock splits into multiple autonomous copies."
      },
      {
        "id": "ab-buzzshock-4",
        "characterId": "char-buzzshock",
        "type": "weakness",
        "name": "Insulation Trapping",
        "description": "Rubber, glass, and non-conductive insulators completely trap him and nullify his escape."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "First encountered in \"Tourist Trap\", unlocked as an alien in \"Ben 10,000\".",
        "firstAppearanceEpisode": "S01E07 - \"Tourist Trap\" (as wild Nosedeenian) / \"Ben 10,000\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Canonically unlocked and accessible in the Ultimatrix playlist.",
        "firstAppearanceEpisode": "S01E07 - \"Tourist Trap\" (as wild Nosedeenian) / \"Ben 10,000\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-buzzshock-01",
        "entityType": "character",
        "entityId": "char-buzzshock",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E07 - \"Tourist Trap\" (as wild Nosedeenian) / \"Ben 10,000\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben first fought wild Nosedeenians in Sparksville, later unlocking the DNA transformation in his future timeline.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 30,
      "speed": 88,
      "durability": 45,
      "intelligence": 60,
      "energyOutput": 88,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-arctiguana",
    "name": "Arctiguana",
    "slug": "arctiguana",
    "aliases": [
      "Polar Manzardill Form",
      "Sub-Zero Lizard"
    ],
    "speciesId": "sp-31",
    "speciesName": "Polar Manzardill",
    "homeworld": "X'Nelli",
    "summary": "A blue quadrupedal reptile of the Polar Manzardill species. Arctiguana exhales long-range cryogenic freeze vapor that solidifies raging fires, coats terrain in slick ice, and freezes giant adversaries solid in seconds.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-arctiguana-01",
      "characterId": "char-arctiguana",
      "imageUrl": "/images/characters/arctiguana.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Arctiguana",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Arctiguana official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-arctiguana-02",
        "characterId": "char-arctiguana",
        "imageUrl": "/images/characters/arctiguana.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Arctiguana",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Arctiguana alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-arctiguana-1",
        "characterId": "char-arctiguana",
        "type": "power",
        "name": "Sub-Zero Cryogenic Breath",
        "description": "Exhales streams of extreme freezing vapor that encase giant monsters and freeze molten lava."
      },
      {
        "id": "ab-arctiguana-2",
        "characterId": "char-arctiguana",
        "type": "power",
        "name": "Ice Ramp Surfing",
        "description": "Freezes the path beneath him to slide across ice ramps at high speed."
      },
      {
        "id": "ab-arctiguana-3",
        "characterId": "char-arctiguana",
        "type": "power",
        "name": "Quadrupedal Frozen Surface Grip",
        "description": "Spiked claws provide immovable traction on sheer glaciers and frozen cliffs."
      },
      {
        "id": "ab-arctiguana-4",
        "characterId": "char-arctiguana",
        "type": "weakness",
        "name": "Breath Stamina Depletion",
        "description": "Exhaling continuous sub-zero breath exhausts his lung capacity, requiring intervals to recharge."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Featured in \"Ben 10,000\" as one of Ben's future master transformations.",
        "firstAppearanceEpisode": "S03E01 - \"Ben 10,000\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Part of Ben's active canonical DNA transformations in Ultimate Alien.",
        "firstAppearanceEpisode": "S03E01 - \"Ben 10,000\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-arctiguana-01",
        "entityType": "character",
        "entityId": "char-arctiguana",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E01 - \"Ben 10,000\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Arctiguana was deployed by Ben 10,000 to freeze Vilgax inside a solid mountain of ice.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 62,
      "durability": 72,
      "intelligence": 52,
      "energyOutput": 85,
      "versatility": 70
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-swampfire",
    "name": "Swampfire",
    "slug": "swampfire",
    "aliases": [
      "Methanosian Transformation",
      "Plant-Flame Alien"
    ],
    "speciesId": "sp-06",
    "speciesName": "Methanosian",
    "homeworld": "Methanos",
    "summary": "A plant-methane humanoid from the recalibrated Omnitrix in Alien Force. Swampfire combines methane-fueled pyrokinesis with chlorokinetic plant manipulation, throwing fireballs, regenerating severed limbs, and controlling root networks.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-swampfire-01",
      "characterId": "char-swampfire",
      "imageUrl": "/images/characters/swampfire.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Swampfire",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Swampfire official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-swampfire-02",
        "characterId": "char-swampfire",
        "imageUrl": "/images/characters/swampfire.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Swampfire",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Swampfire alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-swampfire-1",
        "characterId": "char-swampfire",
        "type": "power",
        "name": "Methane Pyrokinesis & Ignition",
        "description": "Shoots pressurized ignition blasts from palm nozzles, igniting combustible methane clouds."
      },
      {
        "id": "ab-swampfire-2",
        "characterId": "char-swampfire",
        "type": "power",
        "name": "Rapid Bio-Cellular Regeneration",
        "description": "Reattaches severed limbs instantly and regenerates body parts through solid floorboards."
      },
      {
        "id": "ab-swampfire-3",
        "characterId": "char-swampfire",
        "type": "power",
        "name": "Chlorokinesis & Vine Control",
        "description": "Controls wild plant matter, sprouts climbing vines, and ensnares enemies in root cages."
      },
      {
        "id": "ab-swampfire-4",
        "characterId": "char-swampfire",
        "type": "weakness",
        "name": "Pungent Swamp Odor",
        "description": "Emits a powerful stench of rotting methane and mud, making stealth impossible."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "The premiere flagship alien of Alien Force, worn with the chest Omnitrix badge.",
        "firstAppearanceEpisode": "S01E01 - \"Ben 10 Returns: Part 1\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Regularly deployed and evolved into Ultimate Swampfire via the Ultimatrix.",
        "firstAppearanceEpisode": "S01E01 - \"Ben 10 Returns: Part 1\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-swampfire",
        "relatedCharacterName": "Ultimate Swampfire",
        "relatedCharacterSlug": "ultimate-swampfire",
        "formType": "ultimate",
        "notes": "Evolves into petrified wood Ultimate Swampfire with blue flame bombs."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-swampfire-01",
        "entityType": "character",
        "entityId": "char-swampfire",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"Ben 10 Returns: Part 1\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Swampfire is the very first alien transformed by 15-year-old Ben after recalibrating the Omnitrix.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 78,
      "speed": 65,
      "durability": 85,
      "intelligence": 60,
      "energyOutput": 90,
      "versatility": 92
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-echo-echo",
    "name": "Echo Echo",
    "slug": "echo-echo",
    "aliases": [
      "Sonorosian Transformation",
      "Sonic Cloner"
    ],
    "speciesId": "sp-09",
    "speciesName": "Sonorosian",
    "homeworld": "Sonorosia",
    "summary": "A small Sonorosian living inside a white silicone suit. Echo Echo can duplicate rapidly into an army of copies and unleash ear-splitting acoustic sonic screams capable of shattering concrete and reflecting missiles.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-echo-echo-01",
      "characterId": "char-echo-echo",
      "imageUrl": "/images/characters/echo_echo.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Echo_Echo",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Echo Echo official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-echo-echo-02",
        "characterId": "char-echo-echo",
        "imageUrl": "/images/characters/echo_echo.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Echo_Echo",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Echo Echo alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-echo-echo-1",
        "characterId": "char-echo-echo",
        "type": "power",
        "name": "High-Decibel Sonic Screams",
        "description": "Emits destructive acoustic screams from his mouth that shatter structures and deflect artillery."
      },
      {
        "id": "ab-echo-echo-2",
        "characterId": "char-echo-echo",
        "type": "power",
        "name": "Rapid Autonomous Self-Duplication",
        "description": "Splits effortlessly into dozens of clones, each capable of generating independent sonic attacks."
      },
      {
        "id": "ab-echo-echo-3",
        "characterId": "char-echo-echo",
        "type": "power",
        "name": "Acoustic Levitation & Sound Wall",
        "description": "Surrounds opponents with a circular wall of clones to create an inescapable resonance chamber."
      },
      {
        "id": "ab-echo-echo-4",
        "characterId": "char-echo-echo",
        "type": "weakness",
        "name": "Silicone Suit Vulnerability",
        "description": "The living sound waves require the silicone containment suit; tearing it threatens dispersal."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "One of Ben's foundational Alien Force playlist aliens.",
        "firstAppearanceEpisode": "S01E02 - \"Ben 10 Returns: Part 2\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Frequently deployed and evolved into Ultimate Echo Echo.",
        "firstAppearanceEpisode": "S01E02 - \"Ben 10 Returns: Part 2\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-echo-echo",
        "relatedCharacterName": "Ultimate Echo Echo",
        "relatedCharacterSlug": "ultimate-echo-echo",
        "formType": "ultimate",
        "notes": "Evolves into metallic blue Ultimate Echo Echo with flying sonic disks."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-echo-echo-01",
        "entityType": "character",
        "entityId": "char-echo-echo",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Ben 10 Returns: Part 2\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Echo Echo deployed against the robotic dragon and DNAliens in the train yard.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 45,
      "speed": 65,
      "durability": 55,
      "intelligence": 60,
      "energyOutput": 92,
      "versatility": 90
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-humungousaur",
    "name": "Humungousaur",
    "slug": "humungousaur",
    "aliases": [
      "Vaxasaurian Transformation",
      "Giant Dinosaur Alien"
    ],
    "speciesId": "sp-07",
    "speciesName": "Vaxasaurian",
    "homeworld": "Terradino",
    "summary": "A 12-foot-tall bipedal sauropod Vaxasaurian possessing immense physical strength and armored brown skin. Humungousaur can expand his biological mass and density to grow up to 60 feet tall at will.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-humungousaur-01",
      "characterId": "char-humungousaur",
      "imageUrl": "/images/characters/humungousaur.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Humungousaur",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Humungousaur official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-humungousaur-02",
        "characterId": "char-humungousaur",
        "imageUrl": "/images/characters/humungousaur.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Humungousaur",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Humungousaur alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-humungousaur-1",
        "characterId": "char-humungousaur",
        "type": "power",
        "name": "Size Growth up to 60 Feet",
        "description": "Expands his skeletal frame and biological density to grow from 12 feet to 60 feet, sprouting stegosaurian plates and tail spikes."
      },
      {
        "id": "ab-humungousaur-2",
        "characterId": "char-humungousaur",
        "type": "power",
        "name": "Colossal Physical Might",
        "description": "Lifts entire buildings, spacecraft, and tosses heavy tanks across city streets with ease."
      },
      {
        "id": "ab-humungousaur-3",
        "characterId": "char-humungousaur",
        "type": "power",
        "name": "Armored Sauropod Carapace",
        "description": "Thick leathery hide withstands energy blasts, artillery shells, and blunt physical collisions."
      },
      {
        "id": "ab-humungousaur-4",
        "characterId": "char-humungousaur",
        "type": "weakness",
        "name": "Huge Target Profile & Low Speed",
        "description": "His immense size makes him an unavoidable target for concentrated firepower and electric tasers."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Ben's primary powerhouse alien throughout Alien Force.",
        "firstAppearanceEpisode": "S01E02 - \"Ben 10 Returns: Part 2\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Ben's most frequently selected transformation in Ultimate Alien, with Ultimate form evolution.",
        "firstAppearanceEpisode": "S01E02 - \"Ben 10 Returns: Part 2\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-humungousaur",
        "relatedCharacterName": "Ultimate Humungousaur",
        "relatedCharacterSlug": "ultimate-humungousaur",
        "formType": "ultimate",
        "notes": "Evolves into armored Ultimate Humungousaur with gatling rocket knuckles and spiked tail."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-humungousaur-01",
        "entityType": "character",
        "entityId": "char-humungousaur",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Ben 10 Returns: Part 2\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Humungousaur grew to 60 feet to battle the Highbreed Commander in the warehouse.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 96,
      "speed": 50,
      "durability": 92,
      "intelligence": 50,
      "energyOutput": 20,
      "versatility": 75
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-jetray",
    "name": "Jetray",
    "slug": "jetray",
    "aliases": [
      "Aerophibian Transformation",
      "Hyperspace Flyer"
    ],
    "speciesId": "sp-32",
    "speciesName": "Aerophibian",
    "homeworld": "Aeropela",
    "summary": "An aerodynamic manta-ray humanoid Aerophibian engineered for supersonic flight and hyperspace travel. Jetray fires piercing neuroshock laser beams from his eyes and prehensile tail stinger.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-jetray-01",
      "characterId": "char-jetray",
      "imageUrl": "/images/characters/jetray.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Jetray",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Jetray official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-jetray-02",
        "characterId": "char-jetray",
        "imageUrl": "/images/characters/jetray.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Jetray",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Jetray alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-jetray-1",
        "characterId": "char-jetray",
        "type": "power",
        "name": "Supersonic & Hyperspace Flight",
        "description": "Achieves supersonic speeds in atmosphere and can enter faster-than-light hyperspace travel in the vacuum of space."
      },
      {
        "id": "ab-jetray-2",
        "characterId": "char-jetray",
        "type": "power",
        "name": "Neuroshock Energy Blasts",
        "description": "Shoots high-voltage neuroshock laser blasts from his eyes and tail that temporarily stun nervous systems."
      },
      {
        "id": "ab-jetray-3",
        "characterId": "char-jetray",
        "type": "power",
        "name": "Amphibious High-Speed Swim",
        "description": "Moves with effortless speed underwater as effectively as in the air."
      },
      {
        "id": "ab-jetray-4",
        "characterId": "char-jetray",
        "type": "weakness",
        "name": "Fragile Wing Patagium",
        "description": "His wing flaps can be pinned down or torn by sharp physical clamps, preventing flight takeoff."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Ben's default high-speed aerial pursuit alien across all three seasons.",
        "firstAppearanceEpisode": "S01E03 - \"Everybody Talks About the Weather\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Frequently utilized for atmospheric and space missions in Ultimate Alien.",
        "firstAppearanceEpisode": "S01E03 - \"Everybody Talks About the Weather\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-jetray-01",
        "entityType": "character",
        "entityId": "char-jetray",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E03 - \"Everybody Talks About the Weather\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Jetray flew through the sky at Mach speed to chase down Alan Albright, the Pyronite hybrid.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 98,
      "durability": 65,
      "intelligence": 60,
      "energyOutput": 88,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-big-chill",
    "name": "Big Chill",
    "slug": "big-chill",
    "aliases": [
      "Necrofriggian Transformation",
      "Cryo-Moth Phantom"
    ],
    "speciesId": "sp-08",
    "speciesName": "Necrofriggian",
    "homeworld": "Kilmamy",
    "summary": "A phantom moth-like Necrofriggian who folds his wings into a flowing hooded cloak. Big Chill can lower his molecular density to phase through solid matter while freezing anything he passes through with sub-zero cryo breath.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-big-chill-01",
      "characterId": "char-big-chill",
      "imageUrl": "/images/characters/big_chill.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Big_Chill",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Big Chill official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-big-chill-02",
        "characterId": "char-big-chill",
        "imageUrl": "/images/characters/big_chill.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Big_Chill",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Big Chill alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-big-chill-1",
        "characterId": "char-big-chill",
        "type": "power",
        "name": "Cryogenic Freeze Breath & Beams",
        "description": "Exhales freezing wind capable of coating opponents in solid ice instantly."
      },
      {
        "id": "ab-big-chill-2",
        "characterId": "char-big-chill",
        "type": "power",
        "name": "Intangible Cryo Phasing",
        "description": "Drops his body density to drift through solid obstacles, leaving frosted ice coatings behind."
      },
      {
        "id": "ab-big-chill-3",
        "characterId": "char-big-chill",
        "type": "power",
        "name": "Atmospheric Flight & Space Vacuum Survival",
        "description": "Flies silently through vacuum and withstands absolute zero temperatures."
      },
      {
        "id": "ab-big-chill-4",
        "characterId": "char-big-chill",
        "type": "weakness",
        "name": "Intangibility Countermeasures",
        "description": "Specific energy forcefields and opponents with anti-density manipulation can still disrupt his phasing."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Signature stealth and cryogenic transformation in Alien Force.",
        "firstAppearanceEpisode": "S01E04 - \"Kevin's Big Score\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Regularly deployed and evolved into Ultimate Big Chill.",
        "firstAppearanceEpisode": "S01E04 - \"Kevin's Big Score\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-big-chill",
        "relatedCharacterName": "Ultimate Big Chill",
        "relatedCharacterSlug": "ultimate-big-chill",
        "formType": "ultimate",
        "notes": "Evolves into red-flame patterned Ultimate Big Chill with ice that burns."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-big-chill-01",
        "entityType": "character",
        "entityId": "char-big-chill",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E04 - \"Kevin's Big Score\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Big Chill phased into Vulkanus's underground furnace hideout to retrieve the stolen Rust Bucket parts.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 68,
      "speed": 82,
      "durability": 75,
      "intelligence": 65,
      "energyOutput": 90,
      "versatility": 90
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-chromastone",
    "name": "Chromastone",
    "slug": "chromastone",
    "aliases": [
      "Crystalsapien Transformation",
      "The Living Crystal Conduit"
    ],
    "speciesId": "sp-33",
    "speciesName": "Crystalsapien",
    "homeworld": "Petropia",
    "summary": "A silicone-crystal Crystalsapien capable of absorbing nearly any electromagnetic or energy attack and channeling it into intensely bright, multicolored ultraviolet prismatic laser beams.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-chromastone-01",
      "characterId": "char-chromastone",
      "imageUrl": "/images/characters/chromastone.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Chromastone",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Chromastone official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-chromastone-02",
        "characterId": "char-chromastone",
        "imageUrl": "/images/characters/chromastone.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Chromastone",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Chromastone alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-chromastone-1",
        "characterId": "char-chromastone",
        "type": "power",
        "name": "Electromagnetic & Energy Absorption",
        "description": "Absorbs lasers, electricity, radioactive energy, and plasma into his crystalline core without harm."
      },
      {
        "id": "ab-chromastone-2",
        "characterId": "char-chromastone",
        "type": "power",
        "name": "Prismatic Ultraviolet Laser Beams",
        "description": "Fires rainbow-hued ultraviolet laser beams that melt steel and cut through starship hulls."
      },
      {
        "id": "ab-chromastone-3",
        "characterId": "char-chromastone",
        "type": "power",
        "name": "Superhuman Crystal Durability",
        "description": "His dense crystalline body withstands immense kinetic impact and cosmic vacuum."
      },
      {
        "id": "ab-chromastone-4",
        "characterId": "char-chromastone",
        "type": "weakness",
        "name": "Energy Absorption Upper Ceiling",
        "description": "Overwhelming energetic volume beyond his capacity can shatter his crystalline torso (as seen against Vilgax)."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Ben's primary energy counter-measure alien in Alien Force.",
        "firstAppearanceEpisode": "S01E05 - \"All That Glitters\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Featured in Ultimate Alien, deeply connected to the restoration of Petropia.",
        "firstAppearanceEpisode": "S01E05 - \"All That Glitters\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-chromastone-01",
        "entityType": "character",
        "entityId": "char-chromastone",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E05 - \"All That Glitters\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Chromastone absorbed energy from the rampaging girl's crystalline staff to save the city.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 80,
      "speed": 65,
      "durability": 92,
      "intelligence": 65,
      "energyOutput": 94,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-brainstorm",
    "name": "Brainstorm",
    "slug": "brainstorm",
    "aliases": [
      "Cerebrocrustacean Transformation",
      "Electric Crustacean"
    ],
    "speciesId": "sp-34",
    "speciesName": "Cerebrocrustacean",
    "homeworld": "Encephalonus IV",
    "summary": "A giant crab-like Cerebrocrustacean possessing a massive cerebral cortex. By opening his cranial shell plates, Brainstorm emits concentrated electrical storms, creates forcefields, and calculates projectile physics in fractions of a second.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-brainstorm-01",
      "characterId": "char-brainstorm",
      "imageUrl": "/images/characters/brainstorm.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Brainstorm",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Brainstorm official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-brainstorm-02",
        "characterId": "char-brainstorm",
        "imageUrl": "/images/characters/brainstorm.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Brainstorm",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Brainstorm alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-brainstorm-1",
        "characterId": "char-brainstorm",
        "type": "power",
        "name": "Hyper-Calculation & Trajectory Deduction",
        "description": "Computes velocity, wind speed, and ricochet angles instantly to execute mathematically flawless attacks."
      },
      {
        "id": "ab-brainstorm-2",
        "characterId": "char-brainstorm",
        "type": "power",
        "name": "Cranial Bio-Electric Storms",
        "description": "Opens his protective cranial shell to unleash high-voltage electrical storms and magnetic forcefields."
      },
      {
        "id": "ab-brainstorm-3",
        "characterId": "char-brainstorm",
        "type": "power",
        "name": "Electrical Levitation & Telekinesis",
        "description": "Manipulates objects and adversaries via polarized bio-electric fields."
      },
      {
        "id": "ab-brainstorm-4",
        "characterId": "char-brainstorm",
        "type": "weakness",
        "name": "Exposed Brain Vulnerability",
        "description": "Opening his head plates leaves his delicate cerebral tissue completely vulnerable to direct impacts."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Ben's sophisticated intellectual and electrical alien in Alien Force.",
        "firstAppearanceEpisode": "S01E07 - \"Pier Pressure\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Featured in strategic battles across Ultimate Alien.",
        "firstAppearanceEpisode": "S01E07 - \"Pier Pressure\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-brainstorm-01",
        "entityType": "character",
        "entityId": "char-brainstorm",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E07 - \"Pier Pressure\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Brainstorm calculated the precise angle to ricochet an electric blast off carnival rides to subdue Ship.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 55,
      "speed": 55,
      "durability": 68,
      "intelligence": 98,
      "energyOutput": 88,
      "versatility": 86
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-spidermonkey",
    "name": "Spidermonkey",
    "slug": "spidermonkey",
    "aliases": [
      "Arachnichimp Transformation",
      "Four-Armed Monkey"
    ],
    "speciesId": "sp-35",
    "speciesName": "Arachnichimp",
    "homeworld": "Aranhaschimmia",
    "summary": "A blue four-armed Arachnichimp combining acrobatic agility with arachnid attributes. Spidermonkey scales vertical walls, performs acrobatic parkour, and spins high-tensile steel-like webbing from his prehensile tail.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-spidermonkey-01",
      "characterId": "char-spidermonkey",
      "imageUrl": "/images/characters/spidermonkey.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Spidermonkey",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Spidermonkey official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-spidermonkey-02",
        "characterId": "char-spidermonkey",
        "imageUrl": "/images/characters/spidermonkey.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Spidermonkey",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Spidermonkey alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-spidermonkey-1",
        "characterId": "char-spidermonkey",
        "type": "power",
        "name": "High-Tensile Webbing from Tail",
        "description": "Shoots strong sticky webs from his tail to tie up adversaries, swing across gaps, and craft safety nets."
      },
      {
        "id": "ab-spidermonkey-2",
        "characterId": "char-spidermonkey",
        "type": "power",
        "name": "Wall Adhesion & Quad-Arm Acrobatics",
        "description": "Clings to any surface and maneuvers through tree canopies and cityscapes with four arms and a tail."
      },
      {
        "id": "ab-spidermonkey-3",
        "characterId": "char-spidermonkey",
        "type": "power",
        "name": "Enhanced Reflexes & Hearing",
        "description": "Dodges attacks with agile flips and reacts instantly to sudden dangers."
      },
      {
        "id": "ab-spidermonkey-4",
        "characterId": "char-spidermonkey",
        "type": "weakness",
        "name": "Overpowered by Raw Brute Force",
        "description": "Lacks heavy physical mass, making him vulnerable to giant brawlers who can tear through his webbing."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Ben's premiere acrobatic trickster alien in Alien Force.",
        "firstAppearanceEpisode": "S01E08 - \"What Are Little Girls Made Of?\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Frequently deployed and evolved into Ultimate Spidermonkey.",
        "firstAppearanceEpisode": "S01E08 - \"What Are Little Girls Made Of?\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-ultimate-spidermonkey",
        "relatedCharacterName": "Ultimate Spidermonkey",
        "relatedCharacterSlug": "ultimate-spidermonkey",
        "formType": "ultimate",
        "notes": "Evolves into a massive gorilla-spider hybrid with mouth-fired webbing."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-spidermonkey-01",
        "entityType": "character",
        "entityId": "char-spidermonkey",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E08 - \"What Are Little Girls Made Of?\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Spidermonkey while visiting Verdona Tennyson to demonstrate his new aliens.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 58,
      "speed": 86,
      "durability": 58,
      "intelligence": 62,
      "energyOutput": 40,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-goop",
    "name": "Goop",
    "slug": "goop",
    "aliases": [
      "Polymorph Transformation",
      "The Slime Shifter"
    ],
    "speciesId": "sp-36",
    "speciesName": "Polymorph",
    "homeworld": "Viscosia",
    "summary": "A 200-pound shapeshifting mass of emerald slime guided by an overhead Anti-Gravity Projector. Goop can alter his chemical viscosity from sticky glue to corrosive acid, reform instantly after being destroyed, and squeeze through keyholes.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-goop-01",
      "characterId": "char-goop",
      "imageUrl": "/images/characters/goop.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Goop",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Goop official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-goop-02",
        "characterId": "char-goop",
        "imageUrl": "/images/characters/goop.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Goop",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Goop alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-goop-1",
        "characterId": "char-goop",
        "type": "power",
        "name": "Indestructible Fluid Shapeshifting",
        "description": "Blunt weapons, lasers, and physical strikes pass right through him; reforms instantly from puddles."
      },
      {
        "id": "ab-goop-2",
        "characterId": "char-goop",
        "type": "power",
        "name": "Variable Acidity & Viscosity",
        "description": "Adjusts pH to dissolve steel armor as acid or become ultra-adhesive glue that immobilizes foes."
      },
      {
        "id": "ab-goop-3",
        "characterId": "char-goop",
        "type": "power",
        "name": "Anti-Gravity Flight & High Mobility",
        "description": "Guided by his overhead UFO projector, flying at high speeds across city corridors."
      },
      {
        "id": "ab-goop-4",
        "characterId": "char-goop",
        "type": "weakness",
        "name": "Anti-Gravity Projector Disconnection",
        "description": "If his anti-gravity projector is turned off or separated, his slime body collapses into an inert puddle."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "One of Ben's most versatile original 10 Alien Force aliens.",
        "firstAppearanceEpisode": "S01E09 - \"The Gauntlet\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Regularly deployed in Ultimate Alien, with the Ultimatrix emblem on his Anti-Gravity Projector.",
        "firstAppearanceEpisode": "S01E09 - \"The Gauntlet\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-goop-01",
        "entityType": "character",
        "entityId": "char-goop",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E09 - \"The Gauntlet\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Goop dissolved through Techadon robot armor and rescued Cash from the alien gauntlet.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 72,
      "durability": 95,
      "intelligence": 60,
      "energyOutput": 75,
      "versatility": 92
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-alien-x",
    "name": "Alien X",
    "slug": "alien-x",
    "aliases": [
      "Celestialsapien Transformation",
      "God of the Omnitrix"
    ],
    "speciesId": "sp-10",
    "speciesName": "Celestialsapien",
    "homeworld": "Forge of Creation",
    "summary": "A god-like Celestialsapien with the cosmos swirling within his black body silhouette. Possessing infinite reality-warping and time-bending power, Alien X remains physically motionless until his internal conflicting personalities (Bellicus and Serena) reach consensus.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-alien-x-01",
      "characterId": "char-alien-x",
      "imageUrl": "/images/characters/alienx.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Alien_X",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Alien X official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-alien-x-02",
        "characterId": "char-alien-x",
        "imageUrl": "/images/characters/alienx.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Alien_X",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Alien X alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-alien-x-1",
        "characterId": "char-alien-x",
        "type": "power",
        "name": "Omnipotent Reality & Time Manipulation",
        "description": "Can rewrite physical laws, manipulate time, reverse destruction, and alter timeline events at will."
      },
      {
        "id": "ab-alien-x-2",
        "characterId": "char-alien-x",
        "type": "power",
        "name": "Absolute Invulnerability",
        "description": "Completely immune to physical, energy, and cosmic harm from mortal adversaries."
      },
      {
        "id": "ab-alien-x-3",
        "characterId": "char-alien-x",
        "type": "weakness",
        "name": "Internal Decision Paralysis",
        "description": "Cannot take any physical action until Bellicus (Rage) and Serena (Compassion) agree on a motion with Ben."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Introduced as Ben's most dangerous trump card in Season 1.",
        "firstAppearanceEpisode": "S01E13 - \"X = Ben + 2\"",
        "isSignatureAlien": true
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Guarded in the Ultimatrix and visited in the Forge of Creation.",
        "firstAppearanceEpisode": "S01E13 - \"X = Ben + 2\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-alien-x-01",
        "entityType": "character",
        "entityId": "char-alien-x",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E13 - \"X = Ben + 2\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben became Alien X to repair a shattered dam and save a valley, trapped in internal debate.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 100,
      "speed": 100,
      "durability": 100,
      "intelligence": 100,
      "energyOutput": 100,
      "versatility": 100
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-lodestar",
    "name": "Lodestar",
    "slug": "lodestar",
    "aliases": [
      "Biosovortian Transformation",
      "Magnetic Lord"
    ],
    "speciesId": "sp-37",
    "speciesName": "Biosovortian",
    "homeworld": "Attracta",
    "summary": "A Biosovortian featuring a floating magnetic metal skull between broad pincer shoulders. Lodestar commands intense magnetic forcefields to attract or repel metallic alloys, crush heavy machinery, and magnetically reassemble his own shattered body.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-lodestar-01",
      "characterId": "char-lodestar",
      "imageUrl": "/images/characters/lodestar.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Lodestar",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Lodestar official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-lodestar-02",
        "characterId": "char-lodestar",
        "imageUrl": "/images/characters/lodestar.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Lodestar",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Lodestar alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-lodestar-1",
        "characterId": "char-lodestar",
        "type": "power",
        "name": "Ferromagnetic Forcefield Control",
        "description": "Manipulates all magnetic metals, crushing tanks, disarming laser cannons, and generating defensive shields."
      },
      {
        "id": "ab-lodestar-2",
        "characterId": "char-lodestar",
        "type": "power",
        "name": "Magnetic Self-Reconstruction",
        "description": "If blown apart, his floating head pulls all body pieces back into place with magnetic acceleration."
      },
      {
        "id": "ab-lodestar-3",
        "characterId": "char-lodestar",
        "type": "power",
        "name": "Magnetic Levitation & Flight",
        "description": "Levitates along planetary magnetic fields to fly through the air."
      },
      {
        "id": "ab-lodestar-4",
        "characterId": "char-lodestar",
        "type": "weakness",
        "name": "Ineffective on Non-Metallic Matter",
        "description": "Wood, stone, plastics, and non-ferrous aliens resist his magnetic telekinesis."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Unlocked in Alien Force Season 3.",
        "firstAppearanceEpisode": "S03E03 - \"Simple\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Regularly deployed across Ultimate Alien.",
        "firstAppearanceEpisode": "S03E03 - \"Simple\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-lodestar-01",
        "entityType": "character",
        "entityId": "char-lodestar",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E03 - \"Simple\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Lodestar unlocked during the war between the Red and Blue factions, disabling their tanks.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 70,
      "speed": 65,
      "durability": 78,
      "intelligence": 68,
      "energyOutput": 88,
      "versatility": 82
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-rath",
    "name": "Rath",
    "slug": "rath",
    "aliases": [
      "Appoplexian Transformation",
      "The Tiger of Khoros"
    ],
    "speciesId": "sp-38",
    "speciesName": "Appoplexian",
    "homeworld": "Appoplexia",
    "summary": "A bipedal tiger-like Appoplexian armed with retractable knuckle wrist blades and tremendous physical brawn. Rath is defined by his uncontrollable aggression, wrestling takedowns, and shouting catchphrases like \"LET ME TELL YA SOMETHING!\"",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-rath-01",
      "characterId": "char-rath",
      "imageUrl": "/images/characters/rath.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Rath",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Rath official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-rath-02",
        "characterId": "char-rath",
        "imageUrl": "/images/characters/rath.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Rath",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Rath alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-rath-1",
        "characterId": "char-rath",
        "type": "power",
        "name": "Superhuman Brawn & Wrestling Mastery",
        "description": "Execute suplexes, pile-drivers, and grapples that shatter giant mechas and knock out warlords."
      },
      {
        "id": "ab-rath-2",
        "characterId": "char-rath",
        "type": "power",
        "name": "Retractable Bone Knuckle Blades",
        "description": "Sprouts twin razor-sharp wrist blades capable of cutting through solid armor plate."
      },
      {
        "id": "ab-rath-3",
        "characterId": "char-rath",
        "type": "power",
        "name": "High Impact Tolerance",
        "description": "Shrugs off missile explosions, laser blasts, and falls from orbit with minor annoyance."
      },
      {
        "id": "ab-rath-4",
        "characterId": "char-rath",
        "type": "weakness",
        "name": "Uncontrollable Temper & Low Tact",
        "description": "Loses all patience and tactical restraint, often wrestling inanimate objects or antagonizing allies."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Debuted in Season 3 as a fan-favorite comedic and combat powerhouse.",
        "firstAppearanceEpisode": "S03E13 - \"Con of Rath\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "A recurring staple fighter in Ultimate Alien.",
        "firstAppearanceEpisode": "S03E13 - \"Con of Rath\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-rath-01",
        "entityType": "character",
        "entityId": "char-rath",
        "factKey": "canonical_introduction",
        "sourceTitle": "S03E13 - \"Con of Rath\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Rath unlocked when the Tiffin's presence disrupted the Omnitrix, leading to an aggressive rescue mission.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 92,
      "speed": 75,
      "durability": 88,
      "intelligence": 40,
      "energyOutput": 20,
      "versatility": 68
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-nanomech",
    "name": "Nanomech",
    "slug": "nanomech",
    "aliases": [
      "Nanochip Hybrid",
      "The Micro-Flyer"
    ],
    "speciesId": "sp-39",
    "speciesName": "Nanochip Hybrid",
    "homeworld": "Hive World / Earth",
    "summary": "A microscopic biomechanical hybrid created by scanning the alien Nanochip Queen in Ben 10: Alien Swarm. Nanomech can shrink down to sub-cellular size, maneuver on humming insectoid wings, and shoot bio-electric laser bolts.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-nanomech-01",
      "characterId": "char-nanomech",
      "imageUrl": "/images/characters/nanomech.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Nanomech",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Nanomech official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-nanomech-02",
        "characterId": "char-nanomech",
        "imageUrl": "/images/characters/nanomech.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Nanomech",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Nanomech alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-nanomech-1",
        "characterId": "char-nanomech",
        "type": "power",
        "name": "Microscopic Size Reduction",
        "description": "Shrinks from a few inches down to microscopic scale to bypass enemy armor and enter circuitry."
      },
      {
        "id": "ab-nanomech-2",
        "characterId": "char-nanomech",
        "type": "power",
        "name": "Agile Quad-Wing Flight",
        "description": "Flies with incredible speed and agility on four translucent humming wings."
      },
      {
        "id": "ab-nanomech-3",
        "characterId": "char-nanomech",
        "type": "power",
        "name": "Bio-Electric Energy Laser Darts",
        "description": "Emits concentrated bio-electric blasts from his single central ocular node."
      },
      {
        "id": "ab-nanomech-4",
        "characterId": "char-nanomech",
        "type": "weakness",
        "name": "Low Raw Physical Punch",
        "description": "Cannot deliver heavy kinetic damage directly without targeting internal weak points."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Introduced in the live-action movie Ben 10: Alien Swarm and Alien Force Season 3.",
        "firstAppearanceEpisode": "Ben 10: Alien Swarm (2009) / S03 finale",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Featured in Ultimate Alien episodes like \"Too Hot to Handle\" against P'andor.",
        "firstAppearanceEpisode": "Ben 10: Alien Swarm (2009) / S03 finale",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-nanomech-01",
        "entityType": "character",
        "entityId": "char-nanomech",
        "factKey": "canonical_introduction",
        "sourceTitle": "Ben 10: Alien Swarm (2009) / S03 finale",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Nanomech to infiltrate the Nanochip Queen's body and destroy the swarm hive-mind from within.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 20,
      "speed": 82,
      "durability": 40,
      "intelligence": 75,
      "energyOutput": 78,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-upchuck-murk",
    "name": "Upchuck (Murk)",
    "slug": "upchuck-murk",
    "aliases": [
      "Murk Upchuck",
      "Gourmand Subspecies"
    ],
    "speciesId": "sp-25",
    "speciesName": "Gourmand (Murk)",
    "homeworld": "Peptos XI",
    "summary": "The darker-skinned, spotted subspecies of the Gourmand race. Murk Upchuck shares the same pocket-dimension stomach and explosive plasma digestion as his Perk brother, but features thicker hide and a distinct mottled appearance.",
    "role": "alien",
    "status": "published",
    "playlist": "alien_force_10",
    "primaryImage": {
      "id": "img-upchuck-murk-01",
      "characterId": "char-upchuck-murk",
      "imageUrl": "/images/characters/upchuck_murk.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Upchuck_(Murk)",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Upchuck (Murk) official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-upchuck-murk-02",
        "characterId": "char-upchuck-murk",
        "imageUrl": "/images/characters/upchuck_murk.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Upchuck_(Murk)",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Upchuck (Murk) alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-upchuck-murk-1",
        "characterId": "char-upchuck-murk",
        "type": "power",
        "name": "Pocket Dimension Matter Ingestion",
        "description": "Consumes laser blasts, metals, and earth materials into a boundless stomach void."
      },
      {
        "id": "ab-upchuck-murk-2",
        "characterId": "char-upchuck-murk",
        "type": "power",
        "name": "Acidic Plasma Burst Expulsion",
        "description": "Fires high-velocity green plasma charges that detonate against armored targets."
      },
      {
        "id": "ab-upchuck-murk-3",
        "characterId": "char-upchuck-murk",
        "type": "power",
        "name": "Toughened Subspecies Hide",
        "description": "Possesses slightly thicker hide and blunt resistance compared to Perk Gourmands."
      },
      {
        "id": "ab-upchuck-murk-4",
        "characterId": "char-upchuck-murk",
        "type": "weakness",
        "name": "Perk vs Murk Cultural Feuding",
        "description": "Deep cultural friction with Perk Gourmands can cause distraction in mixed species scenarios."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Debuted in Ultimate Alien, showcasing both Perk and Murk forms simultaneously.",
        "firstAppearanceEpisode": "S01E17 - \"The Transmogrification of Eunice\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-upchuck-murk-01",
        "entityType": "character",
        "entityId": "char-upchuck-murk",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E17 - \"The Transmogrification of Eunice\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben unlocked the Murk form in Ultimate Alien, showcasing the racial distinction within the Gourmand species.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 56,
      "speed": 58,
      "durability": 74,
      "intelligence": 60,
      "energyOutput": 90,
      "versatility": 78
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-water-hazard",
    "name": "Water Hazard",
    "slug": "water-hazard",
    "aliases": [
      "Orishan Form",
      "Hydro Warrior"
    ],
    "speciesId": "sp-40",
    "speciesName": "Orishan",
    "homeworld": "Kiuana (Andromeda Galaxy)",
    "summary": "A red armored Orishan scanned from the Andromeda fugitive Bivalvan. Water Hazard can project high-pressure boiling or cold water jets from ports in his palms, absorb ambient atmospheric moisture, and withstand physical trauma with his chitinous shell.",
    "role": "alien",
    "status": "published",
    "playlist": "andromeda_5",
    "primaryImage": {
      "id": "img-water-hazard-01",
      "characterId": "char-water-hazard",
      "imageUrl": "/images/characters/water_hazard.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Water_Hazard",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Water Hazard official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-water-hazard-02",
        "characterId": "char-water-hazard",
        "imageUrl": "/images/characters/water_hazard.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Water_Hazard",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Water Hazard alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-water-hazard-1",
        "characterId": "char-water-hazard",
        "type": "power",
        "name": "High-Pressure Palm Water Cannons",
        "description": "Projects torrents of water capable of pushing back heavy vehicles and extinguishing high-yield blazes."
      },
      {
        "id": "ab-water-hazard-2",
        "characterId": "char-water-hazard",
        "type": "power",
        "name": "Moisture Absorption & Hydrokinesis",
        "description": "Absorbs ambient humidity from the air and manipulates standing bodies of water."
      },
      {
        "id": "ab-water-hazard-3",
        "characterId": "char-water-hazard",
        "type": "power",
        "name": "Armored Chitin Exoskeleton",
        "description": "Resists physical trauma, blunt weapon impacts, and intense underwater pressures."
      },
      {
        "id": "ab-water-hazard-4",
        "characterId": "char-water-hazard",
        "type": "weakness",
        "name": "Vulnerability to High Voltage",
        "description": "His water output acts as a perfect electrical conductor, making him highly vulnerable to shock attacks."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "One of the five Andromeda aliens scanned by the Ultimatrix and frequently utilized by Ben.",
        "firstAppearanceEpisode": "S01E06 - \"Too Hot to Handle\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-water-hazard-01",
        "entityType": "character",
        "entityId": "char-water-hazard",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E06 - \"Too Hot to Handle\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben used Water Hazard to douse P'andor's runaway radioactive reactor.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 74,
      "speed": 68,
      "durability": 85,
      "intelligence": 62,
      "energyOutput": 84,
      "versatility": 78
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-terraspin",
    "name": "Terraspin",
    "slug": "terraspin",
    "aliases": [
      "Geochelone Aerio Form",
      "The Wind Turtle"
    ],
    "speciesId": "sp-41",
    "speciesName": "Geochelone Aerio",
    "homeworld": "Aldabra (Andromeda Galaxy)",
    "summary": "A peaceful, turtle-like Geochelone Aerio from the Andromeda Galaxy (scanned from Galapagus). Terraspin retracts into his carapace and rotates his massive flippers like propeller blades, generating category-5 hurricanes and enjoying innate immunity to magic and mana.",
    "role": "alien",
    "status": "published",
    "playlist": "andromeda_5",
    "primaryImage": {
      "id": "img-terraspin-01",
      "characterId": "char-terraspin",
      "imageUrl": "/images/characters/terraspin.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Terraspin",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Terraspin official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-terraspin-02",
        "characterId": "char-terraspin",
        "imageUrl": "/images/characters/terraspin.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Terraspin",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Terraspin alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-terraspin-1",
        "characterId": "char-terraspin",
        "type": "power",
        "name": "Propeller Hurricane Winds",
        "description": "Spins his heavy flipper fins to blow category-5 gale-force winds that deflect missiles and blow back enemies."
      },
      {
        "id": "ab-terraspin-2",
        "characterId": "char-terraspin",
        "type": "power",
        "name": "Helicopter Levitation Flight",
        "description": "Flies smoothly through the air by generating continuous downdraft through shell ventilation ports."
      },
      {
        "id": "ab-terraspin-3",
        "characterId": "char-terraspin",
        "type": "power",
        "name": "Innate Mana & Magic Immunity",
        "description": "His Geochelone Aerio biology is naturally impervious to magic spells and Anodite mana manipulation."
      },
      {
        "id": "ab-terraspin-4",
        "characterId": "char-terraspin",
        "type": "weakness",
        "name": "Clumsy Terrestrial Footing",
        "description": "When standing on two legs, his ponderous frame is slow and easily toppled on slick surfaces."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "One of the five Andromeda aliens scanned by the Ultimatrix.",
        "firstAppearanceEpisode": "S01E07 - \"Escape from Aggregor\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-terraspin-01",
        "entityType": "character",
        "entityId": "char-terraspin",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E07 - \"Escape from Aggregor\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Terraspin to stop Aggregor's mechanical tracking drones.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 72,
      "speed": 70,
      "durability": 86,
      "intelligence": 65,
      "energyOutput": 80,
      "versatility": 76
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-nrg",
    "name": "NRG",
    "slug": "nrg",
    "aliases": [
      "Prypiatosian-B Form",
      "Radioactive Furnace"
    ],
    "speciesId": "sp-42",
    "speciesName": "Prypiatosian-B",
    "homeworld": "Prypiatos (Andromeda Galaxy)",
    "summary": "A radioactive energy being from the Andromeda Galaxy (scanned from P'andor) encased in a nearly indestructible lead furnace suit. NRG channels searing thermonuclear heat that melts rock, and can unleash his true radiant form when liberated from the suit.",
    "role": "alien",
    "status": "published",
    "playlist": "andromeda_5",
    "primaryImage": {
      "id": "img-nrg-01",
      "characterId": "char-nrg",
      "imageUrl": "/images/characters/nrg.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/NRG",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "NRG official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-nrg-02",
        "characterId": "char-nrg",
        "imageUrl": "/images/characters/nrg.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/NRG",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "NRG alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-nrg-1",
        "characterId": "char-nrg",
        "type": "power",
        "name": "Thermonuclear Heat Projection",
        "description": "Heats his furnace armor and hands to temperatures that turn asphalt, steel, and stone to molten lava."
      },
      {
        "id": "ab-nrg-2",
        "characterId": "char-nrg",
        "type": "power",
        "name": "Indestructible Furnace Armor",
        "description": "His heavy lead containment suit withstands planetary bombardment and laser artillery without denting."
      },
      {
        "id": "ab-nrg-3",
        "characterId": "char-nrg",
        "type": "power",
        "name": "True Radiant Energy Form (Uncaged)",
        "description": "Outside his suit, he flies as pure radioactive plasma, absorbing energy and shooting nuclear blasts."
      },
      {
        "id": "ab-nrg-4",
        "characterId": "char-nrg",
        "type": "weakness",
        "name": "Lethal Radiation Hazard to Allies",
        "description": "Operating without his heavy suit exposes human allies like Gwen and Kevin to harmful gamma radiation."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "One of the five Andromeda aliens, serving as Ben's primary nuclear force.",
        "firstAppearanceEpisode": "S01E06 - \"Too Hot to Handle\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-nrg-01",
        "entityType": "character",
        "entityId": "char-nrg",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E06 - \"Too Hot to Handle\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben scanned P'andor to add the Prypiatosian-B DNA to the Ultimatrix.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 88,
      "speed": 52,
      "durability": 95,
      "intelligence": 60,
      "energyOutput": 96,
      "versatility": 82
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ampfibian",
    "name": "AmpFibian",
    "slug": "ampfibian",
    "aliases": [
      "Amperi Form",
      "Electric Jellyfish"
    ],
    "speciesId": "sp-43",
    "speciesName": "Amperi",
    "homeworld": "Tesslos (Andromeda Galaxy)",
    "summary": "A translucent blue jellyfish-like Amperi from the Andromeda Galaxy (scanned from Ra'ad). AmpFibian floats weightlessly through air and water, shoots bio-electric arcs, reads mental nervous impulses, and travels along electrical circuits.",
    "role": "alien",
    "status": "published",
    "playlist": "andromeda_5",
    "primaryImage": {
      "id": "img-ampfibian-01",
      "characterId": "char-ampfibian",
      "imageUrl": "/images/characters/ampfibian.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/AmpFibian",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "AmpFibian official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ampfibian-02",
        "characterId": "char-ampfibian",
        "imageUrl": "/images/characters/ampfibian.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/AmpFibian",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "AmpFibian alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ampfibian-1",
        "characterId": "char-ampfibian",
        "type": "power",
        "name": "Bio-Electric Arcs & Shockwaves",
        "description": "Projects high-voltage electrical bursts from his four tentacles that short-circuit machinery and stun enemies."
      },
      {
        "id": "ab-ampfibian-2",
        "characterId": "char-ampfibian",
        "type": "power",
        "name": "Electro-Phasing & Circuit Travel",
        "description": "Turns into electrical current to travel instantly through power grids and electronic hardware."
      },
      {
        "id": "ab-ampfibian-3",
        "characterId": "char-ampfibian",
        "type": "power",
        "name": "Neuro-Electrical Mind Reading",
        "description": "Senses the bio-electric pulses of living nervous systems to anticipate thoughts and actions."
      },
      {
        "id": "ab-ampfibian-4",
        "characterId": "char-ampfibian",
        "type": "weakness",
        "name": "Physical Fragility to Solid Impacts",
        "description": "His soft, boneless jellyfish body has low tolerance for heavy blunt kinetic bludgeoning."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "One of the five Andromeda aliens scanned by the Ultimatrix.",
        "firstAppearanceEpisode": "S01E11 - \"Fused\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ampfibian-01",
        "entityType": "character",
        "entityId": "char-ampfibian",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E11 - \"Fused\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into AmpFibian to merge with electrical lines and escape Aggregor.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 45,
      "speed": 88,
      "durability": 55,
      "intelligence": 72,
      "energyOutput": 92,
      "versatility": 88
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-armodrillo",
    "name": "Armodrillo",
    "slug": "armodrillo",
    "aliases": [
      "Talpaedan Form",
      "Earthquake Digger"
    ],
    "speciesId": "sp-44",
    "speciesName": "Talpaedan",
    "homeworld": "Terraexcava (Andromeda Galaxy)",
    "summary": "A heavy yellow armored armadillo-like Talpaedan from the Andromeda Galaxy (scanned from Andreas). Armed with pneumatic jackhammer piston forearms, Armodrillo creates earthquakes, burrows through bedrock at high speed, and pulverizes enemy defenses.",
    "role": "alien",
    "status": "published",
    "playlist": "andromeda_5",
    "primaryImage": {
      "id": "img-armodrillo-01",
      "characterId": "char-armodrillo",
      "imageUrl": "/images/characters/armodrillo.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Armodrillo",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Armodrillo official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-armodrillo-02",
        "characterId": "char-armodrillo",
        "imageUrl": "/images/characters/armodrillo.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Armodrillo",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Armodrillo alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-armodrillo-1",
        "characterId": "char-armodrillo",
        "type": "power",
        "name": "Pneumatic Jackhammer Piston Arms",
        "description": "Pumps the pistons on his elbows to deliver devastating high-frequency kinetic strikes."
      },
      {
        "id": "ab-armodrillo-2",
        "characterId": "char-armodrillo",
        "type": "power",
        "name": "Earthquake & Seismic Shockwaves",
        "description": "Slams his pistons into the ground to open fissures, collapse structures, and shatter rock."
      },
      {
        "id": "ab-armodrillo-3",
        "characterId": "char-armodrillo",
        "type": "power",
        "name": "Rapid Subterranean Burrowing",
        "description": "Digs through solid concrete and granite effortlessly, emerging behind enemies."
      },
      {
        "id": "ab-armodrillo-4",
        "characterId": "char-armodrillo",
        "type": "weakness",
        "name": "Heavy Metallic Clunkiness",
        "description": "His dense armored chassis is very heavy, hindering aerial agility and swimming."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "One of the five Andromeda aliens, serving as Ben's primary earth-manipulating powerhouse.",
        "firstAppearanceEpisode": "S01E08 - \"Hero Time\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-armodrillo-01",
        "entityType": "character",
        "entityId": "char-armodrillo",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E08 - \"Hero Time\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Armodrillo used his jackhammer arms to tunnel beneath Captain Nemesis's vehicle and stop the robbery.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 92,
      "speed": 55,
      "durability": 90,
      "intelligence": 55,
      "energyOutput": 78,
      "versatility": 75
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-chamalien",
    "name": "Chamalien",
    "slug": "chamalien",
    "aliases": [
      "Merlinisapien Form",
      "Camouflage Infiltrator"
    ],
    "speciesId": "sp-45",
    "speciesName": "Merlinisapien",
    "homeworld": "Unknown (Deep Galaxy)",
    "summary": "A chameleon-like Merlinisapien scanned from Prisoner 775 in Ultimate Alien. Chamalien blends seamlessly into any background, walks along ceilings, and strikes silently with a retractable venomous barb hidden inside his tail.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-chamalien-01",
      "characterId": "char-chamalien",
      "imageUrl": "/images/characters/chamalien.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Chamalien",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Chamalien official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-chamalien-02",
        "characterId": "char-chamalien",
        "imageUrl": "/images/characters/chamalien.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Chamalien",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Chamalien alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-chamalien-1",
        "characterId": "char-chamalien",
        "type": "power",
        "name": "Complete Optical Camouflage",
        "description": "Alters skin chromatophores instantly to become 100% invisible against any wall, floor, or backdrop."
      },
      {
        "id": "ab-chamalien-2",
        "characterId": "char-chamalien",
        "type": "power",
        "name": "Retractable Barbed Tail Stinger",
        "description": "Extends a razor-sharp bone stinger from the tip of his prehensile tail to pierce armor."
      },
      {
        "id": "ab-chamalien-3",
        "characterId": "char-chamalien",
        "type": "power",
        "name": "Wall Adhesion & Flexible Acrobatics",
        "description": "Climbs vertical walls and clings to ceilings with suction pads on his fingers."
      },
      {
        "id": "ab-chamalien-4",
        "characterId": "char-chamalien",
        "type": "weakness",
        "name": "Shadow Outline Under Direct Bright Light",
        "description": "Strong directional spotlights or fluorescent lighting can reveal his physical shadow on the ground."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Scanned in Season 2 of Ultimate Alien, becoming Ben's primary stealth infiltration alien.",
        "firstAppearanceEpisode": "S02E11 - \"Prisoner Number 775 Is Missing\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-chamalien-01",
        "entityType": "character",
        "entityId": "char-chamalien",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E11 - \"Prisoner Number 775 Is Missing\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben scanned Prisoner 775 after Sub-Basement 35 was breached in Area 51.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 80,
      "durability": 65,
      "intelligence": 64,
      "energyOutput": 35,
      "versatility": 82
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-fasttrack",
    "name": "Fasttrack",
    "slug": "fasttrack",
    "aliases": [
      "Citrakayah Form",
      "Speed Runner"
    ],
    "speciesId": "sp-46",
    "speciesName": "Citrakayah",
    "homeworld": "Chalybeas",
    "summary": "A feline Citrakayah with sleek aerodynamic black-and-blue fur and spike-tipped arms. Fasttrack combines speeds exceeding 400 mph with superior upper-body muscle density, allowing him to carry heavy allies across battlefields while sprinting.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-fasttrack-01",
      "characterId": "char-fasttrack",
      "imageUrl": "/images/characters/fasttrack.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Fasttrack",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Fasttrack official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-fasttrack-02",
        "characterId": "char-fasttrack",
        "imageUrl": "/images/characters/fasttrack.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Fasttrack",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Fasttrack alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-fasttrack-1",
        "characterId": "char-fasttrack",
        "type": "power",
        "name": "Superhuman Running Velocity (400+ MPH)",
        "description": "Runs across land, up vertical facades, and over water barriers at immense velocity."
      },
      {
        "id": "ab-fasttrack-2",
        "characterId": "char-fasttrack",
        "type": "power",
        "name": "Enhanced Physical Upper-Body Brawn",
        "description": "Unlike XLR8, Fasttrack has the muscular strength to carry two full-grown allies while sprinting."
      },
      {
        "id": "ab-fasttrack-3",
        "characterId": "char-fasttrack",
        "type": "power",
        "name": "Kinetic Momentum Kicking",
        "description": "Channels sprint momentum into high-impact kicks that launch heavy opponents backwards."
      },
      {
        "id": "ab-fasttrack-4",
        "characterId": "char-fasttrack",
        "type": "weakness",
        "name": "Difficulty Decelerating on Slick Surfaces",
        "description": "Has trouble stopping his momentum abruptly on icy or wet terrain without sliding."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Introduced as Ben's primary speedster in Ultimate Alien.",
        "firstAppearanceEpisode": "S01E19 - \"Basic Training\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-fasttrack-01",
        "entityType": "character",
        "entityId": "char-fasttrack",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E19 - \"Basic Training\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben transformed into Fasttrack to disarm a grenade and save Plumber cadets at the Academy.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 72,
      "speed": 94,
      "durability": 68,
      "intelligence": 55,
      "energyOutput": 30,
      "versatility": 72
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-clockwork",
    "name": "Clockwork",
    "slug": "clockwork",
    "aliases": [
      "Chronosapien Form",
      "Master of Time"
    ],
    "speciesId": "sp-47",
    "speciesName": "Chronosapien",
    "homeworld": "Unknown (Temporal Dimension)",
    "summary": "A golden biomechanical Chronosapien filled with intricate internal chronological gears. By winding the key on his head, Clockwork can slow down time, reverse events, display holographic timelines of the past, and shoot green aging temporal rays.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-clockwork-01",
      "characterId": "char-clockwork",
      "imageUrl": "/images/characters/clockwork.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Clockwork",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Clockwork official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-clockwork-02",
        "characterId": "char-clockwork",
        "imageUrl": "/images/characters/clockwork.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Clockwork",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Clockwork alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-clockwork-1",
        "characterId": "char-clockwork",
        "type": "power",
        "name": "Chronokinesis / Time Deceleration",
        "description": "Slows down the flow of local time to a crawl, allowing him to dodge bullets and reposition allies."
      },
      {
        "id": "ab-clockwork-2",
        "characterId": "char-clockwork",
        "type": "power",
        "name": "Temporal Aging Beam",
        "description": "Fires green chrono-energy from his chest and head that ages inorganic and biological matter to dust."
      },
      {
        "id": "ab-clockwork-3",
        "characterId": "char-clockwork",
        "type": "power",
        "name": "Retrocognitive Projection",
        "description": "Beams holographic light to replay past events that transpired in his current location."
      },
      {
        "id": "ab-clockwork-4",
        "characterId": "char-clockwork",
        "type": "weakness",
        "name": "Sluggish Physical Movement",
        "description": "When not manipulating time, his mechanical frame moves very slowly and has poor running speed."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Unlocked in Season 2 of Ultimate Alien, becoming Ben's primary temporal hero.",
        "firstAppearanceEpisode": "S02E09 - \"Inspector 13\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-clockwork-01",
        "entityType": "character",
        "entityId": "char-clockwork",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E09 - \"Inspector 13\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben unlocked Clockwork when the Techadon master Inspector 13 recalibrated the Ultimatrix.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 35,
      "durability": 85,
      "intelligence": 80,
      "energyOutput": 96,
      "versatility": 90
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-eatle",
    "name": "Eatle",
    "slug": "eatle",
    "aliases": [
      "Oryctini Form",
      "Laser Beetle"
    ],
    "speciesId": "sp-48",
    "speciesName": "Oryctini",
    "homeworld": "Coleop Terra",
    "summary": "A metallic rhinoceros-beetle humanoid Oryctini with steel-cutting jaws. Eatle devours solid rock, metal scrap, and debris, rapidly converting the ingested matter into high-powered energy charges fired as laser beams from his massive horn.",
    "role": "alien",
    "status": "published",
    "playlist": "additional_os",
    "primaryImage": {
      "id": "img-eatle-01",
      "characterId": "char-eatle",
      "imageUrl": "/images/characters/eatle.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Eatle",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Eatle official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-eatle-02",
        "characterId": "char-eatle",
        "imageUrl": "/images/characters/eatle.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Eatle",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Eatle alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-eatle-1",
        "characterId": "char-eatle",
        "type": "power",
        "name": "Solid Matter Ingestion & Digestion",
        "description": "His jaws bite through reinforced titanium and concrete, devouring matter into energy ammunition."
      },
      {
        "id": "ab-eatle-2",
        "characterId": "char-eatle",
        "type": "power",
        "name": "Horn Energy Laser Cannon",
        "description": "Fires concentrated laser beams from his massive forehead horn that cut through starship hulls."
      },
      {
        "id": "ab-eatle-3",
        "characterId": "char-eatle",
        "type": "power",
        "name": "Armored Charging Ram",
        "description": "Lowers his horn to charge at high speed, smashing through blast doors and stone ramparts."
      },
      {
        "id": "ab-eatle-4",
        "characterId": "char-eatle",
        "type": "weakness",
        "name": "Blindspot Behind Giant Horn",
        "description": "His large horn creates an optical blindspot directly above and behind his head."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Introduced in Ultimate Alien Season 2 as a durable matter-eating blaster.",
        "firstAppearanceEpisode": "S02E14 - \"A Knight to Remember\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-eatle-01",
        "entityType": "character",
        "entityId": "char-eatle",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E14 - \"A Knight to Remember\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Eatle unlocked during the battle against the Forever Knights in the catacombs.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 85,
      "speed": 55,
      "durability": 88,
      "intelligence": 55,
      "energyOutput": 88,
      "versatility": 72
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-swampfire",
    "name": "Ultimate Swampfire",
    "slug": "ultimate-swampfire",
    "aliases": [
      "Evolved Methanosian",
      "Petrified Fire Titan"
    ],
    "speciesId": "sp-06",
    "speciesName": "Evolved Methanosian",
    "homeworld": "Methanos (Simulated War Evolution)",
    "summary": "The hyper-evolved form of Swampfire through the Ultimatrix evolutionary matrix. Encased in fireproof petrified wood, Ultimate Swampfire sacrifices plant regeneration for blue thermal plasma bombs capable of underwater detonation.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-swampfire-01",
      "characterId": "char-ultimate-swampfire",
      "imageUrl": "/images/characters/ultimate_swampfire.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Swampfire",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Swampfire official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-swampfire-02",
        "characterId": "char-ultimate-swampfire",
        "imageUrl": "/images/characters/ultimate_swampfire.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Swampfire",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Swampfire alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-swampfire-1",
        "characterId": "char-ultimate-swampfire",
        "type": "power",
        "name": "Blue Thermal Plasma Blasts",
        "description": "Fires intense blue fireballs that burn 3x hotter than standard methane fire and detonate underwater."
      },
      {
        "id": "ab-ultimate-swampfire-2",
        "characterId": "char-ultimate-swampfire",
        "type": "power",
        "name": "Fire-Spin Bomb Pods",
        "description": "Launches spinning blue incendiary pods from his arms that explode with devastating concussive thermal shock."
      },
      {
        "id": "ab-ultimate-swampfire-3",
        "characterId": "char-ultimate-swampfire",
        "type": "power",
        "name": "Petrified Wood Armor",
        "description": "Dense bark chassis resists immense physical trauma and laser fire without burning."
      },
      {
        "id": "ab-ultimate-swampfire-4",
        "characterId": "char-ultimate-swampfire",
        "type": "weakness",
        "name": "Loss of Elastic Regeneration",
        "description": "His hardened petrified wood body no longer regenerates severed limbs as quickly as base Swampfire."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Ben's signature flagship Ultimate form in Ultimate Alien.",
        "firstAppearanceEpisode": "S01E01 - \"Fame\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-swampfire",
        "relatedCharacterName": "Swampfire",
        "relatedCharacterSlug": "swampfire",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-swampfire-01",
        "entityType": "character",
        "entityId": "char-ultimate-swampfire",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"Fame\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ultimate Swampfire defeated the seven Vilgax bio-drones in the pilot episode of Ultimate Alien.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 88,
      "speed": 65,
      "durability": 92,
      "intelligence": 60,
      "energyOutput": 98,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-echo-echo",
    "name": "Ultimate Echo Echo",
    "slug": "ultimate-echo-echo",
    "aliases": [
      "Evolved Sonorosian",
      "Sonic Disk Master"
    ],
    "speciesId": "sp-09",
    "speciesName": "Evolved Sonorosian",
    "homeworld": "Sonorosia (Simulated War Evolution)",
    "summary": "The hyper-evolved form of Echo Echo. Transformed into a tall, metallic blue robotic organism, Ultimate Echo Echo sacrifices biological self-duplication for dozens of levitating sonic disks that generate devastating acoustic forcefields.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-echo-echo-01",
      "characterId": "char-ultimate-echo-echo",
      "imageUrl": "/images/characters/ultimate_echo_echo.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Echo%20Echo",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Echo Echo official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-echo-echo-02",
        "characterId": "char-ultimate-echo-echo",
        "imageUrl": "/images/characters/ultimate_echo_echo.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Echo%20Echo",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Echo Echo alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-echo-echo-1",
        "characterId": "char-ultimate-echo-echo",
        "type": "power",
        "name": "Levitating Sonic Disks",
        "description": "Deploys dozens of floating sound disks that fly independently and focus pinpoint acoustic beams."
      },
      {
        "id": "ab-ultimate-echo-echo-2",
        "characterId": "char-ultimate-echo-echo",
        "type": "power",
        "name": "Sonic Doom Perimeter Cage",
        "description": "Surrounds opponents with disks to concentrate sonic resonance, shattering bedrock and disabling titans."
      },
      {
        "id": "ab-ultimate-echo-echo-3",
        "characterId": "char-ultimate-echo-echo",
        "type": "power",
        "name": "Anti-Gravity Levitation Flight",
        "description": "Flies effortlessly through the air at high speeds via sonic propulsion."
      },
      {
        "id": "ab-ultimate-echo-echo-4",
        "characterId": "char-ultimate-echo-echo",
        "type": "weakness",
        "name": "Loss of Self-Duplication",
        "description": "Cannot clone his physical body; if his physical frame is pinned, he relies purely on disks for defense."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "One of the most powerful Ultimate forms deployed against Ultimate Kevin and Diagon.",
        "firstAppearanceEpisode": "S01E06 - \"Too Hot to Handle\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-echo-echo",
        "relatedCharacterName": "Echo Echo",
        "relatedCharacterSlug": "echo-echo",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-echo-echo-01",
        "entityType": "character",
        "entityId": "char-ultimate-echo-echo",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E06 - \"Too Hot to Handle\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ultimate Echo Echo deployed his sonic disks to contain P'andor inside an impenetrable acoustic sound cage.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 75,
      "speed": 85,
      "durability": 88,
      "intelligence": 70,
      "energyOutput": 98,
      "versatility": 92
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-humungousaur",
    "name": "Ultimate Humungousaur",
    "slug": "ultimate-humungousaur",
    "aliases": [
      "Evolved Vaxasaurian",
      "Gatling Saurian"
    ],
    "speciesId": "sp-07",
    "speciesName": "Evolved Vaxasaurian",
    "homeworld": "Terradino (Simulated War Evolution)",
    "summary": "The evolved Vaxasaurian after a million years of worst-case simulated war. Featuring armored green shell-plating, a mace-spiked bone tail, and hands that transform into biological gatling missile launchers firing kinetic rocket shells.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-humungousaur-01",
      "characterId": "char-ultimate-humungousaur",
      "imageUrl": "/images/characters/ultimate_humungousaur.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Humungousaur",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Humungousaur official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-humungousaur-02",
        "characterId": "char-ultimate-humungousaur",
        "imageUrl": "/images/characters/ultimate_humungousaur.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Humungousaur",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Humungousaur alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-humungousaur-1",
        "characterId": "char-ultimate-humungousaur",
        "type": "power",
        "name": "Bio-Gatling Rocket Knuckles",
        "description": "Transforms fingers into kinetic missile barrels that fire rapid-fire explosive bone rockets."
      },
      {
        "id": "ab-ultimate-humungousaur-2",
        "characterId": "char-ultimate-humungousaur",
        "type": "power",
        "name": "Mace-Spiked Bone Tail",
        "description": "Swings his heavy spiked tail club with enough force to shatter tanks and send titans flying."
      },
      {
        "id": "ab-ultimate-humungousaur-3",
        "characterId": "char-ultimate-humungousaur",
        "type": "power",
        "name": "Armored War Shell",
        "description": "Heavy green carapace provides immunity to standard laser artillery and missile barrages."
      },
      {
        "id": "ab-ultimate-humungousaur-4",
        "characterId": "char-ultimate-humungousaur",
        "type": "weakness",
        "name": "Loss of Size Growth Ability",
        "description": "Cannot grow to 60 feet like base Humungousaur, trading variable size for heavy weapons."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Ben's most frequently used heavy-artillery Ultimate transformation.",
        "firstAppearanceEpisode": "S01E02 - \"Fame\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-humungousaur",
        "relatedCharacterName": "Humungousaur",
        "relatedCharacterSlug": "humungousaur",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-humungousaur-01",
        "entityType": "character",
        "entityId": "char-ultimate-humungousaur",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Fame\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben evolved into Ultimate Humungousaur to battle Bivalvan and smash the water-weaponry.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 98,
      "speed": 50,
      "durability": 95,
      "intelligence": 55,
      "energyOutput": 88,
      "versatility": 80
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-spidermonkey",
    "name": "Ultimate Spidermonkey",
    "slug": "ultimate-spidermonkey",
    "aliases": [
      "Evolved Arachnichimp",
      "Gorilla-Spider Titan"
    ],
    "speciesId": "sp-35",
    "speciesName": "Evolved Arachnichimp",
    "homeworld": "Aranhaschimmia (Simulated War Evolution)",
    "summary": "The hyper-evolved form of Spidermonkey. Transformed from an agile monkey into a colossal gorilla-spider hybrid with eight arachnid legs, immense upper-body brawn, and the ability to shoot high-tensile steel webbing from his split mouth.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-spidermonkey-01",
      "characterId": "char-ultimate-spidermonkey",
      "imageUrl": "/images/characters/ultimate_spidermonkey.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Spidermonkey",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Spidermonkey official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-spidermonkey-02",
        "characterId": "char-ultimate-spidermonkey",
        "imageUrl": "/images/characters/ultimate_spidermonkey.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Spidermonkey",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Spidermonkey alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-spidermonkey-1",
        "characterId": "char-ultimate-spidermonkey",
        "type": "power",
        "name": "Gorilla-Tarantula Hybrid Brawn",
        "description": "Possesses immense upper-body strength capable of tossing trucks and overpowering giant aliens."
      },
      {
        "id": "ab-ultimate-spidermonkey-2",
        "characterId": "char-ultimate-spidermonkey",
        "type": "power",
        "name": "Mouth-Projected Steel Webbing",
        "description": "Splits his mandibles to fire massive webs with tensile strength greater than steel cables."
      },
      {
        "id": "ab-ultimate-spidermonkey-3",
        "characterId": "char-ultimate-spidermonkey",
        "type": "power",
        "name": "Eight-Legged Terrain Stability",
        "description": "His extra spider legs anchor him firmly to ground, preventing knockbacks from explosions."
      },
      {
        "id": "ab-ultimate-spidermonkey-4",
        "characterId": "char-ultimate-spidermonkey",
        "type": "weakness",
        "name": "Reduced Aerodynamic Speed",
        "description": "Much heavier and slower than base Spidermonkey, trading nimble parkour for brute muscle."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Frequently deployed against armored opponents in Ultimate Alien.",
        "firstAppearanceEpisode": "S01E02 - \"Fame\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-spidermonkey",
        "relatedCharacterName": "Spidermonkey",
        "relatedCharacterSlug": "spidermonkey",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-spidermonkey-01",
        "entityType": "character",
        "entityId": "char-ultimate-spidermonkey",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E02 - \"Fame\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ultimate Spidermonkey debuted to defeat the rogue robotic tank in the desert.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 90,
      "speed": 65,
      "durability": 88,
      "intelligence": 55,
      "energyOutput": 40,
      "versatility": 78
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-big-chill",
    "name": "Ultimate Big Chill",
    "slug": "ultimate-big-chill",
    "aliases": [
      "Evolved Necrofriggian",
      "Flame of Absolute Zero"
    ],
    "speciesId": "sp-08",
    "speciesName": "Evolved Necrofriggian",
    "homeworld": "Kilmamy (Simulated War Evolution)",
    "summary": "The evolved Necrofriggian sporting crimson flame-patterned wings and fiery horns. Ultimate Big Chill can project \"ice so cold it burns\"—producing sub-zero cryo-flames that freeze oxygen and targets faster than standard freeze breath.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-big-chill-01",
      "characterId": "char-ultimate-big-chill",
      "imageUrl": "/images/characters/ultimate_big_chill.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Big%20Chill",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Big Chill official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-big-chill-02",
        "characterId": "char-ultimate-big-chill",
        "imageUrl": "/images/characters/ultimate_big_chill.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Big%20Chill",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Big Chill alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-big-chill-1",
        "characterId": "char-ultimate-big-chill",
        "type": "power",
        "name": "\"Ice So Cold It Burns\" Cryo-Flames",
        "description": "Exhales scorching-looking red flames that instantly drop surrounding matter to absolute zero."
      },
      {
        "id": "ab-ultimate-big-chill-2",
        "characterId": "char-ultimate-big-chill",
        "type": "power",
        "name": "Hyper-Accelerated Intangibility",
        "description": "Phases through solid structures at supersonic flight speed, leaving burning frost in his wake."
      },
      {
        "id": "ab-ultimate-big-chill-3",
        "characterId": "char-ultimate-big-chill",
        "type": "power",
        "name": "Thermal Inversion Plasma",
        "description": "Manipulates cold energy with the concussive outward force of a raging firestorm."
      },
      {
        "id": "ab-ultimate-big-chill-4",
        "characterId": "char-ultimate-big-chill",
        "type": "weakness",
        "name": "Extreme Heat Absorption Shock",
        "description": "Sudden high-yield nuclear thermal blasts can disrupt his cryogenic aura."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Debuted in Season 1 against Vulkanus, featured across Ultimate Alien.",
        "firstAppearanceEpisode": "S01E03 - \"Hit 'Em Where They Live\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-big-chill",
        "relatedCharacterName": "Big Chill",
        "relatedCharacterSlug": "big-chill",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-big-chill-01",
        "entityType": "character",
        "entityId": "char-ultimate-big-chill",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E03 - \"Hit 'Em Where They Live\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben evolved into Ultimate Big Chill to freeze Vulkanus and his Pickaxe aliens.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 72,
      "speed": 85,
      "durability": 78,
      "intelligence": 65,
      "energyOutput": 94,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-cannonbolt",
    "name": "Ultimate Cannonbolt",
    "slug": "ultimate-cannonbolt",
    "aliases": [
      "Evolved Arburian Pelarota",
      "The Spiked Juggernaut"
    ],
    "speciesId": "sp-11",
    "speciesName": "Evolved Arburian Pelarota",
    "homeworld": "Arburia (Simulated War Evolution)",
    "summary": "The hyper-evolved Arburian Pelarota encased in a dense metallic-cyan shell studded with heavy spikes. In his rolling sphere form, Ultimate Cannonbolt digs into terrain with traction and ricochets with unstoppable kinetic crushing power.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-cannonbolt-01",
      "characterId": "char-ultimate-cannonbolt",
      "imageUrl": "/images/characters/ultimate_cannonbolt.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Cannonbolt",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Cannonbolt official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-cannonbolt-02",
        "characterId": "char-ultimate-cannonbolt",
        "imageUrl": "/images/characters/ultimate_cannonbolt.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Cannonbolt",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Cannonbolt alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-cannonbolt-1",
        "characterId": "char-ultimate-cannonbolt",
        "type": "power",
        "name": "Metallic Spiked Carapace",
        "description": "Armored plates reinforced with heavy spikes that shred enemy armor and dig into sheer ice."
      },
      {
        "id": "ab-ultimate-cannonbolt-2",
        "characterId": "char-ultimate-cannonbolt",
        "type": "power",
        "name": "Unstoppable Kinetic Rolling Momentum",
        "description": "Bounces and rolls with crushing kinetic impact, creating shockwaves that flatten enemy lines."
      },
      {
        "id": "ab-ultimate-cannonbolt-3",
        "characterId": "char-ultimate-cannonbolt",
        "type": "power",
        "name": "Extreme Blast & Acid Resistance",
        "description": "His evolved metallic plating is impervious to corrosive acids and energy cannon fire."
      },
      {
        "id": "ab-ultimate-cannonbolt-4",
        "characterId": "char-ultimate-cannonbolt",
        "type": "weakness",
        "name": "Heavy Turning Radius on Foot",
        "description": "When standing upright, his increased metallic weight makes foot mobility very sluggish."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Introduced in Season 1 of Ultimate Alien against Charmcaster.",
        "firstAppearanceEpisode": "S01E03 - \"Hit 'Em Where They Live\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-cannonbolt",
        "relatedCharacterName": "Cannonbolt",
        "relatedCharacterSlug": "cannonbolt",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-cannonbolt-01",
        "entityType": "character",
        "entityId": "char-ultimate-cannonbolt",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E03 - \"Hit 'Em Where They Live\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ultimate Cannonbolt smashed through Charmcaster's rock golems in the woods.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 88,
      "speed": 82,
      "durability": 98,
      "intelligence": 55,
      "energyOutput": 30,
      "versatility": 72
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-wildmutt",
    "name": "Ultimate Wildmutt",
    "slug": "ultimate-wildmutt",
    "aliases": [
      "Evolved Vulpimancer",
      "The Talking Beast"
    ],
    "speciesId": "sp-15",
    "speciesName": "Evolved Vulpimancer",
    "homeworld": "Vulpin (Simulated War Evolution)",
    "summary": "The evolved Vulpimancer featuring thick crimson fur, armor plates, a heavy spiked tail, and crucially: articulate human speech. Ultimate Wildmutt combines predator radar senses with lethal tail-whip strikes and tactical communication.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-wildmutt-01",
      "characterId": "char-ultimate-wildmutt",
      "imageUrl": "/images/characters/ultimate_wildmutt.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Wildmutt",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Wildmutt official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-wildmutt-02",
        "characterId": "char-ultimate-wildmutt",
        "imageUrl": "/images/characters/ultimate_wildmutt.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Wildmutt",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Wildmutt alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-wildmutt-1",
        "characterId": "char-ultimate-wildmutt",
        "type": "power",
        "name": "Articulate Human Speech & Tactical Mind",
        "description": "Unlike base Wildmutt, he can communicate with allies in clear English to coordinate combat maneuvers."
      },
      {
        "id": "ab-ultimate-wildmutt-2",
        "characterId": "char-ultimate-wildmutt",
        "type": "power",
        "name": "Mace-Spiked Tail & Back Quills",
        "description": "Whips his spiked tail to shatter stone and launches defensive bone quills from his back."
      },
      {
        "id": "ab-ultimate-wildmutt-3",
        "characterId": "char-ultimate-wildmutt",
        "type": "power",
        "name": "Hyper-Acute 360 Thermographic Sensing",
        "description": "Tracks invisible adversaries (like Chamalien / Prisoner 775) with flawless spatial pinpointing."
      },
      {
        "id": "ab-ultimate-wildmutt-4",
        "characterId": "char-ultimate-wildmutt",
        "type": "weakness",
        "name": "High-Pitch Sonic Weaponry",
        "description": "Piercing ultrasonic frequencies still disrupt his sensitive gill receptors."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Debuted in Season 2 of Ultimate Alien, famously surprising Ben by speaking.",
        "firstAppearanceEpisode": "S02E11 - \"Prisoner Number 775 Is Missing\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-wildmutt",
        "relatedCharacterName": "Wildmutt",
        "relatedCharacterSlug": "wildmutt",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-wildmutt-01",
        "entityType": "character",
        "entityId": "char-ultimate-wildmutt",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E11 - \"Prisoner Number 775 Is Missing\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ultimate Wildmutt spoke his first words to Gwen and Kevin before tracking down the invisible Prisoner 775.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 82,
      "speed": 80,
      "durability": 78,
      "intelligence": 65,
      "energyOutput": 20,
      "versatility": 74
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ultimate-way-big",
    "name": "Ultimate Way Big",
    "slug": "ultimate-way-big",
    "aliases": [
      "Evolved To'kustar",
      "Cosmic Colossus"
    ],
    "speciesId": "sp-28",
    "speciesName": "Evolved To'kustar",
    "homeworld": "Cosmic Storms (Simulated War Evolution)",
    "summary": "The evolved To'kustar standing over 250 feet tall, clad in blue-and-red cosmic armor with energy horn blades. Ultimate Way Big can fly through the atmosphere, shoot cosmic energy discs, and was summoned to battle the cosmic god Dagon.",
    "role": "alien",
    "status": "published",
    "playlist": "ultimate_forms",
    "primaryImage": {
      "id": "img-ultimate-way-big-01",
      "characterId": "char-ultimate-way-big",
      "imageUrl": "/images/characters/ultimate_way_big.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Way%20Big",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ultimate Way Big official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ultimate-way-big-02",
        "characterId": "char-ultimate-way-big",
        "imageUrl": "/images/characters/ultimate_way_big.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ultimate_Way%20Big",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ultimate Way Big alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ultimate-way-big-1",
        "characterId": "char-ultimate-way-big",
        "type": "power",
        "name": "250-Foot Titan Stature & Cosmic Brawn",
        "description": "Possesses immense physical mass capable of grappling cosmic deities and mountain-sized monsters."
      },
      {
        "id": "ab-ultimate-way-big-2",
        "characterId": "char-ultimate-way-big",
        "type": "power",
        "name": "Cosmic Energy Discs & Horn Lasers",
        "description": "Generates spinning discs of pure cosmic energy that slice through alien dimensional barriers."
      },
      {
        "id": "ab-ultimate-way-big-3",
        "characterId": "char-ultimate-way-big",
        "type": "power",
        "name": "Atmospheric & Space Vacuum Flight",
        "description": "Unlike base Way Big, he possesses full flight capabilities across skies and deep space."
      },
      {
        "id": "ab-ultimate-way-big-4",
        "characterId": "char-ultimate-way-big",
        "type": "weakness",
        "name": "Immense Energy Expenditure",
        "description": "Maintaining the evolved cosmic titan form drains the Ultimatrix energy reserves rapidly."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "The absolute final and largest Ultimate transformation in the series finale against Dagon.",
        "firstAppearanceEpisode": "S02E32 - \"The Ultimate Enemy: Part 2\"",
        "isSignatureAlien": true
      }
    ],
    "forms": [
      {
        "relatedCharacterId": "char-way-big",
        "relatedCharacterName": "Way Big",
        "relatedCharacterSlug": "way-big",
        "formType": "transformation",
        "notes": "Base form of this evolutionary transformation."
      }
    ],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ultimate-way-big-01",
        "entityType": "character",
        "entityId": "char-ultimate-way-big",
        "factKey": "canonical_introduction",
        "sourceTitle": "S02E32 - \"The Ultimate Enemy: Part 2\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben evolved into Ultimate Way Big to physically fight Dagon in the apocalyptic series finale.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 100,
      "speed": 75,
      "durability": 99,
      "intelligence": 65,
      "energyOutput": 100,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-vilgax",
    "name": "Vilgax",
    "slug": "vilgax",
    "aliases": [
      "Conqueror of 10 Worlds",
      "Warlord of Vilgaxia"
    ],
    "speciesId": "sp-12",
    "speciesName": "Chimera Sui Generis",
    "homeworld": "Vilgaxia",
    "summary": "The ruthless intergalactic warlord who seeks the Omnitrix to build an unstoppable army of drone warriors. Across all three canonical series, Vilgax endures severe cybernetic enhancements, claims the powers of 10 champion heroes, and merges with Dagon.",
    "role": "villain",
    "status": "published",
    "playlist": "villains",
    "primaryImage": {
      "id": "img-vilgax-01",
      "characterId": "char-vilgax",
      "imageUrl": "/images/characters/vilgax.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Vilgax",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Vilgax official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-vilgax-02",
        "characterId": "char-vilgax",
        "imageUrl": "/images/characters/vilgax.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Vilgax",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Vilgax alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-vilgax-1",
        "characterId": "char-vilgax",
        "type": "power",
        "name": "Cybernetic Superhuman Strength",
        "description": "Crushes mountainsides and overpowers Four Arms with cybernetic muscle implants."
      },
      {
        "id": "ab-vilgax-2",
        "characterId": "char-vilgax",
        "type": "power",
        "name": "Ruby Ray of Ulo & Shield of Ziegel",
        "description": "Wields cosmic weapons stolen from defeated planetary champions."
      },
      {
        "id": "ab-vilgax-3",
        "characterId": "char-vilgax",
        "type": "weakness",
        "name": "Pride & Hubris",
        "description": "Underestimates Ben Tennyson's unpredictable adaptability with the Omnitrix."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "The overarching arch-nemesis of the original series.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Returned in Season 3 as the Conqueror of 10 Worlds.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Allied with the Flame Keepers Circle and merged with Dagon.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-vilgax-01",
        "entityType": "character",
        "entityId": "char-vilgax",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Vilgax commanded the Chimeran war cruiser that intercepted the Omnitrix transport pod.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 96,
      "speed": 70,
      "durability": 95,
      "intelligence": 88,
      "energyOutput": 90,
      "versatility": 85
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-kevin",
    "name": "Kevin Levin",
    "slug": "kevin-levin",
    "aliases": [
      "Kevin 11",
      "Osmosian Hero"
    ],
    "speciesId": "sp-13",
    "speciesName": "Osmosian",
    "homeworld": "Earth",
    "summary": "An Osmosian who began as a troubled runaway absorbing Omnitrix energy in the 2005 series, causing genetic mutations. Reforming five years later, Kevin becomes Ben's steadfast best friend and Gwen's love interest, absorbing solid matter like Taydenite and steel.",
    "role": "hero",
    "status": "published",
    "playlist": "allies",
    "primaryImage": {
      "id": "img-kevin-levin-01",
      "characterId": "char-kevin",
      "imageUrl": "/images/characters/kevin_af.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Kevin_Levin",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Kevin Levin official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-kevin-levin-02",
        "characterId": "char-kevin",
        "imageUrl": "/images/characters/kevin_af.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Kevin_Levin",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Kevin Levin alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-kevin-levin-1",
        "characterId": "char-kevin",
        "type": "power",
        "name": "Matter & Solid Material Absorption",
        "description": "Coats his skin and bones in steel, stone, wood, or Taydenite for extreme armor and strength."
      },
      {
        "id": "ab-kevin-levin-2",
        "characterId": "char-kevin",
        "type": "power",
        "name": "Morphic Matter Weapons",
        "description": "Shapes his absorbed metallic limbs into hammers, blades, and maces."
      },
      {
        "id": "ab-kevin-levin-3",
        "characterId": "char-kevin",
        "type": "weakness",
        "name": "Energy Absorption Psychosis",
        "description": "Absorbing living energy or DNA causes chemical neurological imbalance, triggering violent madness."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Antagonist who absorbed the Omnitrix and mutated into Kevin 11.",
        "firstAppearanceEpisode": "S01E07 - \"Kevin 11\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Reformed ally and core team member with matter-absorption powers.",
        "firstAppearanceEpisode": "S01E07 - \"Kevin 11\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Sacrificed sanity to absorb the Ultimatrix and defeat Ultimate Aggregor.",
        "firstAppearanceEpisode": "S01E07 - \"Kevin 11\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-kevin-levin-01",
        "entityType": "character",
        "entityId": "char-kevin",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E07 - \"Kevin 11\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Kevin began as a mutant antagonist who absorbed the powers of all original 10 aliens.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 85,
      "speed": 70,
      "durability": 90,
      "intelligence": 75,
      "energyOutput": 70,
      "versatility": 88
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-gwen",
    "name": "Gwen Tennyson",
    "slug": "gwen-tennyson",
    "aliases": [
      "Lucky Girl",
      "Anodite Sorceress"
    ],
    "speciesId": "sp-14",
    "speciesName": "Anodite Hybrid",
    "homeworld": "Earth / Anodyne",
    "summary": "Ben's brilliant cousin whose magical aptitude was first discovered in the original series via the Charms of Bezel. In Alien Force and Ultimate Alien, she unlocks her true Anodite heritage, projecting radiant magenta mana shields, stepping disks, and energy constructs.",
    "role": "hero",
    "status": "published",
    "playlist": "allies",
    "primaryImage": {
      "id": "img-gwen-tennyson-01",
      "characterId": "char-gwen",
      "imageUrl": "/images/characters/gwen.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Gwen_Tennyson",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Gwen Tennyson official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-gwen-tennyson-02",
        "characterId": "char-gwen",
        "imageUrl": "/images/characters/gwen.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Gwen_Tennyson",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Gwen Tennyson alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-gwen-tennyson-1",
        "characterId": "char-gwen",
        "type": "power",
        "name": "Mana Energy Projection & Shields",
        "description": "Creates protective magenta forcefields, stepping disks, and binding ropes of pure life energy."
      },
      {
        "id": "ab-gwen-tennyson-2",
        "characterId": "char-gwen",
        "type": "power",
        "name": "True Anodite Energy Avatar Form",
        "description": "Transforms into pure sparkling magenta energy, unlocking near-limitless mana power."
      },
      {
        "id": "ab-gwen-tennyson-3",
        "characterId": "char-gwen",
        "type": "weakness",
        "name": "Mana Exhaustion & Emotional Strain",
        "description": "Over-extending mana constructs drains her physical stamina, leaving her vulnerable."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "Ben's clever 10-year-old cousin who acquired Charmcaster's spellbook.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "Unlocked her innate Anodite mana powers alongside Ben and Kevin.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "Mastered her Anodite powers to defend Earth against Aggregor and Dagon.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-gwen-tennyson-01",
        "entityType": "character",
        "entityId": "char-gwen",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Gwen accompanied Grandpa Max and Ben on the summer road trip, learning magic spells from Charmcaster's spellbook.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 65,
      "speed": 75,
      "durability": 85,
      "intelligence": 95,
      "energyOutput": 96,
      "versatility": 95
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-ben",
    "name": "Ben Tennyson",
    "slug": "ben-tennyson",
    "aliases": [
      "Wielder of the Omnitrix",
      "Hero of Heroes",
      "Benjamin Kirby Tennyson"
    ],
    "speciesId": "sp-13",
    "speciesName": "Human",
    "homeworld": "Earth",
    "summary": "The central hero of the universe. At age 10, he discovered the Omnitrix in a forest clearing. At 15, he recalibrated the device to fight the Highbreed invasion. At 16, he wielded the Ultimatrix and saved the universe from Aggregor and Dagon.",
    "role": "hero",
    "status": "published",
    "playlist": "allies",
    "primaryImage": {
      "id": "img-ben-tennyson-01",
      "characterId": "char-ben",
      "imageUrl": "/images/characters/ben_os.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Ben_Tennyson",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Ben Tennyson official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-ben-tennyson-02",
        "characterId": "char-ben",
        "imageUrl": "/images/characters/ben_os.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Ben_Tennyson",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Ben Tennyson alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-ben-tennyson-1",
        "characterId": "char-ben",
        "type": "power",
        "name": "Omnitrix / Ultimatrix Transformation",
        "description": "Accesses the genetic Codon Stream to transform into over dozens of alien species at will."
      },
      {
        "id": "ab-ben-tennyson-2",
        "characterId": "char-ben",
        "type": "power",
        "name": "Evolutionary Function (Ultimatrix)",
        "description": "Simulates worst-case evolutionary war to evolve aliens into hyper-powerful Ultimate forms."
      },
      {
        "id": "ab-ben-tennyson-3",
        "characterId": "char-ben",
        "type": "weakness",
        "name": "Omnitrix Timeout & Mistransformations",
        "description": "Device battery drain or genetic failsafes occasionally transform him into unintended aliens."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-01",
        "seriesSlug": "ben-10-2005",
        "seriesName": "Ben 10 (2005)",
        "versionName": "Original Series Form",
        "description": "10-year-old Ben on his unforgettable summer vacation road trip.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-02",
        "seriesSlug": "ben-10-alien-force",
        "seriesName": "Ben 10: Alien Force",
        "versionName": "Alien Force Form",
        "description": "15-year-old Ben leading the alien force against the Highbreed.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      },
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "16-year-old world-famous hero wielding the Ultimatrix.",
        "firstAppearanceEpisode": "S01E01 - \"And Then There Were 10\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-ben-tennyson-01",
        "entityType": "character",
        "entityId": "char-ben",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E01 - \"And Then There Were 10\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Ben found the Omnitrix in a crater while camping with Grandpa Max and Gwen.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 55,
      "speed": 60,
      "durability": 60,
      "intelligence": 80,
      "energyOutput": 95,
      "versatility": 100
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
  },
  {
    "id": "char-aggregor",
    "name": "Aggregor",
    "slug": "aggregor",
    "aliases": [
      "Ultimate Aggregor",
      "Osmosian Warlord"
    ],
    "speciesId": "sp-13",
    "speciesName": "Osmosian",
    "homeworld": "Osmos V",
    "summary": "A ruthless Osmosian warlord who kidnapped five alien fugitives from the Andromeda Galaxy. Using his machine, Aggregor absorbed all five aliens at 100% capacity, mutating into Ultimate Aggregor with invulnerable armor, water blasts, hurricanes, nuclear heat, and electrical phasing.",
    "role": "villain",
    "status": "published",
    "playlist": "villains",
    "primaryImage": {
      "id": "img-aggregor-01",
      "characterId": "char-aggregor",
      "imageUrl": "/images/characters/aggregor.png",
      "sourceUrl": "https://ben10.fandom.com/wiki/Aggregor",
      "creatorOrRightsHolder": "Man of Action / Cartoon Network Studios",
      "license": "Official Cartoon Animation Model Sheet",
      "licenseEvidenceUrl": "https://en.wikipedia.org/wiki/Ben_10",
      "attributionText": "Official Cartoon Network series production asset",
      "reviewStatus": "approved",
      "altText": "Aggregor official character model sheet",
      "position": 1,
      "isPrimary": true
    },
    "gallery": [
      {
        "id": "img-aggregor-02",
        "characterId": "char-aggregor",
        "imageUrl": "/images/characters/aggregor.png",
        "sourceUrl": "https://ben10.fandom.com/wiki/Aggregor",
        "creatorOrRightsHolder": "Cartoon Network Studios",
        "license": "Official Broadcast Archive Asset",
        "attributionText": "Broadcast archive still",
        "reviewStatus": "approved",
        "altText": "Aggregor alternative pose",
        "position": 2
      }
    ],
    "abilities": [
      {
        "id": "ab-aggregor-1",
        "characterId": "char-aggregor",
        "type": "power",
        "name": "Andromeda 5 Combined Powers",
        "description": "Possesses the combined powers of Water Hazard, Terraspin, NRG, AmpFibian, and Armodrillo simultaneously."
      },
      {
        "id": "ab-aggregor-2",
        "characterId": "char-aggregor",
        "type": "power",
        "name": "Complete 100% Genetic Absorption",
        "description": "Absorbs alien DNA permanently without the traditional neurological sanity degradation."
      },
      {
        "id": "ab-aggregor-3",
        "characterId": "char-aggregor",
        "type": "weakness",
        "name": "Vulnerable to Superior Osmosian Drain",
        "description": "Kevin Levin absorbed his powers back, draining him of his stolen Andromeda matrix."
      }
    ],
    "seriesAppearances": [
      {
        "seriesId": "series-03",
        "seriesSlug": "ben-10-ultimate-alien",
        "seriesName": "Ben 10: Ultimate Alien",
        "versionName": "Ultimate Alien Form",
        "description": "The primary main antagonist of the first season of Ultimate Alien.",
        "firstAppearanceEpisode": "S01E05 - \"Escape from Aggregor\"",
        "isSignatureAlien": false
      }
    ],
    "forms": [],
    "relationships": [],
    "factSources": [
      {
        "id": "fs-aggregor-01",
        "entityType": "character",
        "entityId": "char-aggregor",
        "factKey": "canonical_introduction",
        "sourceTitle": "S01E05 - \"Escape from Aggregor\"",
        "sourceUrl": "https://en.wikipedia.org/wiki/List_of_Ben_10_episodes",
        "publisher": "Cartoon Network",
        "sourceType": "tv_episode",
        "supportingExcerpt": "Aggregor successfully absorbed all five Andromeda aliens to become Ultimate Aggregor.",
        "confidence": 1,
        "verifiedDate": "2026-10-23"
      }
    ],
    "stats": {
      "strength": 95,
      "speed": 80,
      "durability": 94,
      "intelligence": 88,
      "energyOutput": 96,
      "versatility": 95
    },
    "createdAt": "2026-10-23T00:00:00Z",
    "updatedAt": "2026-10-23T00:00:00Z"
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
